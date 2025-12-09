import { useState } from 'react';
import { Mail, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [aiOnly, setAiOnly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "You're subscribed!",
      description: "Check your inbox for a confirmation email.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="mb-16">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 p-8 md:p-12">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6">
            <Mail className="w-7 h-7 text-primary-foreground" />
          </div>

          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
            Stay Ahead in Tech & AI
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Get curated daily updates delivered to your inbox. No spam, just the most important tech news and AI developments.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-glass pl-10 h-12"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary h-12 px-8"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Subscribing...
                </span>
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={aiOnly}
                onCheckedChange={(checked) => setAiOnly(checked as boolean)}
                className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <span className="text-muted-foreground">Send only AI-related updates</span>
            </label>
            
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>Personalized with ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
