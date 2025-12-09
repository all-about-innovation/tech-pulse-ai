import { Clock, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsCardProps {
  title: string;
  summary: string;
  category: string;
  source: string;
  timeAgo: string;
  imageUrl: string;
  readTime?: string;
  badge?: 'hot' | 'new' | 'trending';
  size?: 'default' | 'large' | 'small';
}

type CardSize = 'default' | 'large' | 'small';

const categoryColors: Record<string, string> = {
  'AI': 'bg-primary/10 text-primary border-primary/20',
  'ML': 'bg-primary/10 text-primary border-primary/20',
  'Startup': 'bg-secondary/10 text-secondary border-secondary/20',
  'Gadget': 'bg-accent/10 text-accent border-accent/20',
  'Software': 'bg-neon-purple/10 text-neon-purple border-neon-purple/20',
  'Big Tech': 'bg-destructive/10 text-destructive border-destructive/20',
  'Opinion': 'bg-muted text-muted-foreground border-border',
};

export function NewsCard({
  title,
  summary,
  category,
  source,
  timeAgo,
  imageUrl,
  readTime = '3 min read',
  badge,
  size = 'default',
}: NewsCardProps) {
  const categoryStyle = categoryColors[category] || categoryColors['AI'];

  return (
    <article
      className={cn(
        "group glass-card-hover overflow-hidden cursor-pointer",
        size === 'large' && "md:col-span-2 md:row-span-2",
        size === 'small' && "flex gap-3"
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative overflow-hidden",
          size === 'small' ? "w-24 h-24 flex-shrink-0 rounded-lg" : "aspect-video"
        )}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badge */}
        {badge && (size === 'default' || size === 'large') && (
          <div className="absolute top-3 right-3">
            <span className={cn(
              badge === 'hot' && 'badge-hot',
              badge === 'new' && 'badge-new',
              badge === 'trending' && 'badge-trending'
            )}>
              {badge === 'hot' && '🔥 HOT'}
              {badge === 'new' && '✨ NEW'}
              {badge === 'trending' && '📈 TRENDING'}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={cn(
        "flex flex-col",
        size === 'small' ? "flex-1 py-1" : "p-4"
      )}>
        {/* Category Tag */}
        {(size === 'default' || size === 'large') && (
          <div className="flex items-center gap-2 mb-2">
            <span className={cn("px-2.5 py-0.5 text-xs font-medium rounded-full border", categoryStyle)}>
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3
          className={cn(
            "font-display font-semibold leading-tight text-foreground group-hover:text-primary transition-colors duration-200",
            size === 'large' ? "text-xl md:text-2xl mb-3" : size === 'small' ? "text-sm mb-1 line-clamp-2" : "text-base mb-2 line-clamp-2"
          )}
        >
          {title}
        </h3>

        {/* Summary */}
        {(size === 'default' || size === 'large') && (
          <p className={cn(
            "text-muted-foreground text-sm leading-relaxed mb-3",
            size === 'large' ? "line-clamp-3" : "line-clamp-2"
          )}>
            {summary}
          </p>
        )}

        {/* Meta */}
        <div className={cn(
          "flex items-center gap-3 text-xs text-muted-foreground",
          size === 'default' || size === 'large' ? "mt-auto pt-2 border-t border-border/30" : ""
        )}>
          <span className="font-medium">{source}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {timeAgo}
          </span>
          {(size === 'default' || size === 'large') && (
            <>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">{readTime}</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </>
          )}
        </div>
      </div>
    </article>
  );
}
