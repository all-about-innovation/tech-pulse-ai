import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FeaturedNews } from '@/components/news/FeaturedNews';
import { FilterBar } from '@/components/news/FilterBar';
import { NewsGrid } from '@/components/news/NewsGrid';
import { TrendingSection } from '@/components/news/TrendingSection';
import { EditorialSection } from '@/components/news/EditorialSection';
import { Newsletter } from '@/components/news/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Featured Hero Section */}
          <section className="mb-8 animate-fade-in">
            <FeaturedNews />
          </section>

          {/* Filter Bar */}
          <FilterBar />

          {/* News Grid */}
          <NewsGrid />

          {/* Trending Section */}
          <TrendingSection />

          {/* Editorial / Deep Dives */}
          <EditorialSection />

          {/* Newsletter */}
          <Newsletter />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
