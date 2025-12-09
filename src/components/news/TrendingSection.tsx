import { Flame, ChevronLeft, ChevronRight, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const trendingItems = [
  {
    title: "Claude 3.5 Sonnet",
    description: "Anthropic's most capable model yet",
    category: "AI Launch",
    badge: "hot",
    icon: "🧠",
  },
  {
    title: "Apple Intelligence",
    description: "iOS 18's new AI features rollout",
    category: "Big Tech",
    badge: "new",
    icon: "🍎",
  },
  {
    title: "Perplexity AI",
    description: "Search engine valued at $3B",
    category: "Funding",
    badge: "trending",
    icon: "🔍",
  },
  {
    title: "Mistral Large 2",
    description: "European AI challenger rises",
    category: "AI Model",
    badge: "hot",
    icon: "🇪🇺",
  },
  {
    title: "Rabbit R1",
    description: "AI hardware device launches",
    category: "Gadget",
    badge: "new",
    icon: "🐰",
  },
  {
    title: "Humane AI Pin",
    description: "Reviews reveal challenges ahead",
    category: "Opinion",
    badge: "trending",
    icon: "📌",
  },
  {
    title: "Groq LPU",
    description: "Fastest inference chips ship",
    category: "Hardware",
    badge: "hot",
    icon: "⚡",
  },
  {
    title: "Stability AI",
    description: "New CEO pivots strategy",
    category: "Business",
    badge: "new",
    icon: "🎨",
  },
];

export function TrendingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mb-16 py-8 -mx-4 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-y border-border/30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary">
              <Flame className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
                AI Trending Now
                <Sparkles className="w-4 h-4 text-secondary" />
              </h2>
              <p className="text-xs text-muted-foreground">What's buzzing in the tech world</p>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                "p-2 rounded-lg border border-border/50 transition-all duration-200",
                canScrollLeft
                  ? "text-foreground hover:bg-muted/50 hover:border-primary/50"
                  : "text-muted-foreground/30 cursor-not-allowed"
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                "p-2 rounded-lg border border-border/50 transition-all duration-200",
                canScrollRight
                  ? "text-foreground hover:bg-muted/50 hover:border-primary/50"
                  : "text-muted-foreground/30 cursor-not-allowed"
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
        >
          {trendingItems.map((item, index) => (
            <article
              key={index}
              className="flex-shrink-0 w-64 glass-card-hover p-4 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{item.icon}</span>
                <span className={cn(
                  item.badge === 'hot' && 'badge-hot',
                  item.badge === 'new' && 'badge-new',
                  item.badge === 'trending' && 'badge-trending'
                )}>
                  {item.badge === 'hot' && <><Flame className="w-2.5 h-2.5 inline mr-0.5" /> HOT</>}
                  {item.badge === 'new' && <><Zap className="w-2.5 h-2.5 inline mr-0.5" /> NEW</>}
                  {item.badge === 'trending' && <><TrendingUp className="w-2.5 h-2.5 inline mr-0.5" /> UP</>}
                </span>
              </div>
              
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {item.description}
              </p>
              <span className="text-xs text-primary font-medium">
                {item.category}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
