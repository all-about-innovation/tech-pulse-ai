import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'AI & ML', href: '/category/ai-ml' },
  { label: 'Startups', href: '/category/startups' },
  { label: 'Gadgets', href: '/category/gadgets' },
  { label: 'Software', href: '/category/software' },
  { label: 'Big Tech', href: '/category/big-tech' },
  { label: 'Opinion', href: '/category/opinion' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Cpu className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            <span className="text-foreground">Techy</span>
            <span className="gradient-text">DoseHub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "nav-link px-3 py-2 text-sm font-medium",
                location.pathname === link.href && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className={cn(
            "hidden md:flex items-center transition-all duration-300",
            isSearchOpen ? "w-64" : "w-auto"
          )}>
            {isSearchOpen ? (
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search tech news..."
                  className="input-glass pl-10 pr-10 w-full"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="btn-ghost">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="btn-primary text-sm">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search tech news..."
                className="input-glass pl-10 w-full"
              />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Auth */}
            <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
              <Link to="/login" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full btn-secondary">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full btn-primary">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
