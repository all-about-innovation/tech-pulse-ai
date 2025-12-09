import { NewsCard } from './NewsCard';

const newsArticles = [
  {
    title: "Google DeepMind's AlphaFold 3 Revolutionizes Drug Discovery",
    summary: "The latest iteration of AlphaFold can now predict protein-ligand interactions with unprecedented accuracy, potentially accelerating drug development by years.",
    category: "AI",
    source: "Nature Tech",
    timeAgo: "1 hour ago",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    badge: "hot" as const,
  },
  {
    title: "Stripe Launches AI-Powered Fraud Detection for Global Payments",
    summary: "New machine learning models detect fraudulent transactions in real-time, reducing false positives by 40% while catching more actual fraud.",
    category: "Startup",
    source: "TechCrunch",
    timeAgo: "2 hours ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    badge: "new" as const,
  },
  {
    title: "Samsung Galaxy Ring: Smart Wearable Enters New Territory",
    summary: "Samsung's first smart ring tracks health metrics 24/7 with week-long battery life and seamless Galaxy ecosystem integration.",
    category: "Gadget",
    source: "The Verge",
    timeAgo: "3 hours ago",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80",
  },
  {
    title: "GitHub Copilot Workspace: AI-First Development Environment",
    summary: "Microsoft unveils a complete AI-powered IDE that can understand entire codebases and implement features from natural language descriptions.",
    category: "Software",
    source: "GitHub Blog",
    timeAgo: "4 hours ago",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    badge: "trending" as const,
  },
  {
    title: "Meta's Llama 3 Sets New Open-Source AI Benchmark",
    summary: "The 70B parameter model outperforms GPT-3.5 on most benchmarks while remaining fully open-source and commercially usable.",
    category: "AI",
    source: "VentureBeat",
    timeAgo: "5 hours ago",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&q=80",
  },
  {
    title: "SpaceX Starlink V3 Promises 10Gbps Satellite Internet",
    summary: "Next-generation satellites will deliver fiber-like speeds globally, potentially disrupting the traditional ISP market entirely.",
    category: "Big Tech",
    source: "Ars Technica",
    timeAgo: "6 hours ago",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=600&q=80",
  },
  {
    title: "Figma's New AI Features Transform Design Workflow",
    summary: "Generate complete UI designs from text prompts, auto-organize layers, and create responsive variants with a single click.",
    category: "Software",
    source: "Designer News",
    timeAgo: "7 hours ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    title: "Y Combinator W24: Record $500M for AI Startups",
    summary: "The latest batch sees unprecedented investment in AI-native companies, with 60% focused on enterprise applications.",
    category: "Startup",
    source: "Forbes",
    timeAgo: "8 hours ago",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
  },
];

export function NewsGrid() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-bold text-xl text-foreground">Latest Tech News</h2>
        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
          View all →
        </button>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newsArticles.map((article, index) => (
          <NewsCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
