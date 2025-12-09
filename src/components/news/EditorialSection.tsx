import { Clock, User } from 'lucide-react';

const editorialArticles = [
  {
    title: "The Future of Work: How AI Agents Will Transform Every Industry by 2030",
    summary: "From autonomous coding to AI-powered decision making, we explore the profound changes coming to the workplace and how businesses can prepare for the agentic AI revolution.",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      role: "AI Editor",
    },
    readTime: "12 min read",
    category: "Deep Dive",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    title: "Silicon Valley's New Battleground: The Race to Build Artificial General Intelligence",
    summary: "Inside the high-stakes competition between OpenAI, Google, and Anthropic as they push the boundaries of machine intelligence. Who will get there first, and at what cost?",
    author: {
      name: "Marcus Rivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      role: "Tech Correspondent",
    },
    readTime: "15 min read",
    category: "Analysis",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
  },
];

export function EditorialSection() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
        <div>
          <h2 className="font-display font-bold text-xl text-foreground">Deep Dives & Analysis</h2>
          <p className="text-sm text-muted-foreground">In-depth perspectives on tech's biggest stories</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {editorialArticles.map((article, index) => (
          <article
            key={index}
            className="group glass-card-hover overflow-hidden cursor-pointer"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-secondary/90 text-secondary-foreground">
                {article.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-display font-bold text-xl text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {article.summary}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">{article.author.name}</p>
                    <p className="text-xs text-muted-foreground">{article.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
