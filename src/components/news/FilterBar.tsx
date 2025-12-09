import { useState } from 'react';
import { Sparkles, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'ai-ml', label: 'AI / ML' },
  { id: 'web3', label: 'Web3 / Blockchain' },
  { id: 'mobile', label: 'Mobile / Gadgets' },
  { id: 'dev-tools', label: 'Developer Tools' },
  { id: 'research', label: 'Research / Papers' },
];

export function FilterBar() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  return (
    <div className="glass-card p-4 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 lg:pb-0">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "whitespace-nowrap transition-all duration-200",
                activeCategory === category.id
                  ? "category-chip-active"
                  : "category-chip"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Filters & Sort */}
        <div className="flex items-center gap-3">
          {/* Sort Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground bg-muted/50 rounded-lg border border-border/50 transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Sort:</span>
              <span className="font-medium text-foreground capitalize">{sortBy}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {['latest', 'trending', 'most read'].map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm hover:bg-muted/50 first:rounded-t-lg last:rounded-b-lg transition-colors",
                    sortBy === option ? "text-primary font-medium" : "text-muted-foreground"
                  )}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* AI Badge */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">AI-powered classification</span>
          </div>
        </div>
      </div>
    </div>
  );
}
