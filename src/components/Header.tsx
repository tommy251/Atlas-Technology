import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart, Menu, X, ChevronDown, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuCategories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import atlantisLogo from "@/assets/atlantis-logo.jpg";

const categorySlugMap: Record<string, string> = {
  "Phones & Tablets": "phones-tablets",
  "Computing": "computing",
  "Imaging & Printing": "imaging-printing",
  "Networking & Surveillance": "networking-surveillance",
  "Servers": "servers",
  "Gaming & Console": "gaming",
  "Storage": "storage",
  "Power": "power",
};

const subToSlug = (sub: string) => sub.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, setIsCartOpen } = useCart();
  const { totalItems: wishlistCount } = useWishlist();
  const { user, setIsAuthOpen, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-nav">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 gap-4">
        <Link to="/" className="flex-shrink-0">
          <img src={atlantisLogo} alt="Atlantis Technology" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl">
          <div className="flex w-full border border-border rounded-none overflow-hidden group focus-within:border-accent transition-colors">
            <select className="bg-secondary text-foreground text-sm px-3 py-2 border-r border-border outline-none font-body cursor-pointer">
              <option>All Categories</option>
              {menuCategories.map((cat) => (
                <option key={cat.name}>{cat.name}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 text-sm outline-none bg-card text-foreground font-body placeholder:text-muted-foreground"
            />
            <button className="gradient-brand px-5 py-2 text-primary-foreground hover:opacity-90 transition-opacity">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 md:gap-2">
          {user ? (
            <div className="flex items-center gap-1">
              <span className="hidden md:inline text-xs font-body text-muted-foreground mr-1 max-w-[100px] truncate">
                {user.email}
              </span>
              <Button variant="ghost" size="icon" onClick={() => signOut()} title="Sign out">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsAuthOpen(true)} title="Sign in">
              <User className="h-5 w-5" />
            </Button>
          )}
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link to="/wishlist">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">{wishlistCount}</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">{totalItems}</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden md:block border-t border-border bg-card">
        <div className="container mx-auto flex items-center px-4">
          <div
            className="relative"
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => { setIsCategoryOpen(false); setActiveCategory(null); }}
          >
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-display tracking-wide hover:bg-primary/90 transition-colors">
              <Menu className="h-4 w-4" />
              Categories
              <ChevronDown className="h-3 w-3" />
            </button>

            {isCategoryOpen && (
              <div className="absolute top-full left-0 w-64 bg-card shadow-elevated border border-border z-50 animate-fade-in">
                {menuCategories.map((cat) => {
                  const slug = categorySlugMap[cat.name] || cat.name.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <div key={cat.name} onMouseEnter={() => setActiveCategory(cat.name)} className="relative">
                      <Link
                        to={`/category/${slug}`}
                        className="flex items-center justify-between px-4 py-3 text-sm font-body text-foreground hover:bg-secondary hover:text-accent transition-colors"
                      >
                        {cat.name}
                        <ChevronDown className="h-3 w-3 -rotate-90" />
                      </Link>
                      {activeCategory === cat.name && (
                        <div className="absolute top-0 left-full w-56 bg-card shadow-elevated border border-border animate-fade-in">
                          {cat.subcategories.map((sub) => (
                            <Link
                              key={sub}
                              to={`/category/${slug}/${subToSlug(sub)}`}
                              className="block px-4 py-2.5 text-sm font-body text-foreground hover:bg-secondary hover:text-accent transition-colors"
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex items-center">
            {[
              { label: "Open Box", to: "/open-box" },
              { label: "Pre-owned", to: "/pre-owned" },
              { label: "Support", to: "/support" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="px-6 py-3 text-sm font-body text-foreground hover:text-accent transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3 text-xs text-muted-foreground font-body">
            <span>Popular:</span>
            {[
              { label: "Laptops", to: "/category/computing/laptops" },
              { label: "iPhone", to: "/category/phones-tablets/smartphones" },
              { label: "Printers", to: "/category/imaging-printing/printers" },
            ].map((term) => (
              <Link key={term.label} to={term.to} className="hover:text-accent transition-colors">{term.label}</Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <div className="p-4">
            <div className="flex w-full border border-border rounded-none overflow-hidden mb-4">
              <input type="text" placeholder="Search products..." className="flex-1 px-4 py-2.5 text-sm outline-none bg-card text-foreground font-body" />
              <button className="gradient-brand px-4 py-2.5 text-primary-foreground">
                <Search className="h-4 w-4" />
              </button>
            </div>
            {menuCategories.map((cat) => {
              const slug = categorySlugMap[cat.name] || cat.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link key={cat.name} to={`/category/${slug}`} onClick={() => setIsMenuOpen(false)} className="block py-2.5 text-sm font-body text-foreground border-b border-border">
                  {cat.name}
                </Link>
              );
            })}
            <div className="flex gap-4 mt-4 pt-4 border-t border-border">
              <Link to="/open-box" onClick={() => setIsMenuOpen(false)} className="text-sm font-body text-foreground hover:text-accent">Open Box</Link>
              <Link to="/pre-owned" onClick={() => setIsMenuOpen(false)} className="text-sm font-body text-foreground hover:text-accent">Pre-owned</Link>
              <Link to="/support" onClick={() => setIsMenuOpen(false)} className="text-sm font-body text-foreground hover:text-accent">Support</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
