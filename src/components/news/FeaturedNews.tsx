import { Clock, ExternalLink, Zap } from 'lucide-react';

const featuredArticle = {
  title: "OpenAI Unveils GPT-5: The Most Advanced AI Model Yet With Reasoning Capabilities",
  summary: "In a groundbreaking announcement, OpenAI has revealed GPT-5, featuring unprecedented reasoning abilities, multimodal understanding, and real-time learning. The new model demonstrates human-level performance across multiple benchmarks and introduces novel safety features.",
  category: "AI",
  source: "TechCrunch",
  timeAgo: "5 min ago",
  readTime: "8 min read",
  imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
};

const breakingNews = [
  {
    title: "Apple's Vision Pro 2 Leak Reveals Lighter Design and Enhanced Spatial Computing",
    source: "The Verge",
    timeAgo: "12 min ago",
    imageUrl: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=200&q=80",
  },
  {
    title: "Tesla's Optimus Robot Begins Factory Deployment This Quarter",
    source: "Wired",
    timeAgo: "25 min ago",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&q=80",
  },
  {
    title: "Microsoft Integrates Copilot Directly Into Windows Core Experience",
    source: "Ars Technica",
    timeAgo: "1 hour ago",
    imageUrl: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&q=80",
  },
  {
    title: "Anthropic Raises $4B in Largest AI Funding Round of 2024",
    source: "Bloomberg",
    timeAgo: "2 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&q=80",
  },
  {
    title: "NVIDIA Announces Next-Gen Blackwell Ultra GPUs for AI Training",
    source: "AnandTech",
    timeAgo: "3 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=200&q=80",
  },
];

export function FeaturedNews() {
  return (
    <section className="grid lg:grid-cols-3 gap-6">
      {/* Main Featured Article */}
      <article className="lg:col-span-2 group glass-card-hover overflow-hidden cursor-pointer">
        <div className="relative aspect-video lg:aspect-[16/9] overflow-hidden">
          <img
            src={featuredArticle.imageUrl}
            alt={featuredArticle.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="category-chip-active flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Breaking
              </span>
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                {featuredArticle.category}
              </span>
            </div>
            
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-200">
              {featuredArticle.title}
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
              {featuredArticle.summary}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{featuredArticle.source}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featuredArticle.timeAgo}
              </span>
              <span>{featuredArticle.readTime}</span>
              <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </article>

      {/* Breaking News Sidebar */}
      <div className="glass-card p-4">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
          <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
          <h3 className="font-display font-semibold text-sm text-foreground">Real-time Updates</h3>
          <span className="text-xs text-muted-foreground ml-auto">Live</span>
        </div>
        
        <div className="space-y-3">
          {breakingNews.map((news, index) => (
            <article
              key={index}
              className="group flex gap-3 p-2 -mx-2 rounded-lg hover:bg-muted/30 cursor-pointer transition-colors duration-200"
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h4>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground">
                  <span>{news.source}</span>
                  <span>•</span>
                  <span>{news.timeAgo}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <p className="text-[10px] text-muted-foreground mt-4 pt-3 border-t border-border/50 text-center">
          Real-time tech updates from multiple sources
        </p>
      </div>
    </section>
  );
}
