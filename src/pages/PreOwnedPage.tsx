import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, RefreshCw } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import { preOwnedProducts } from "@/data/allProducts";

const PreOwnedPage = () => {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = useMemo(() => {
    const products = [...preOwnedProducts];
    switch (sortBy) {
      case "price-asc": products.sort((a, b) => a.price - b.price); break;
      case "price-desc": products.sort((a, b) => b.price - a.price); break;
      case "rating": products.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return products;
  }, [sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <div className="bg-secondary/50 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium">Pre-owned</span>
            </nav>
          </div>
        </div>

        <div className="gradient-hero py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 mb-4 bg-accent/10 px-4 py-2 rounded-full">
                <RefreshCw className="h-5 w-5 text-accent" />
                <span className="text-accent font-display text-sm tracking-wider">CERTIFIED</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-3">Pre-owned Products</h1>
              <p className="text-primary-foreground/60 font-body max-w-xl mx-auto">
                Quality pre-owned technology, professionally refurbished and graded. Each item is tested and certified with warranty coverage.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Grading Info */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { grade: "Grade A", desc: "Excellent condition, minimal signs of use" },
              { grade: "Grade B", desc: "Good condition, minor cosmetic marks" },
              { grade: "Grade C", desc: "Fair condition, visible wear but fully functional" },
            ].map(g => (
              <div key={g.grade} className="bg-card p-4 shadow-product text-center">
                <h3 className="font-display font-bold text-accent text-sm mb-1">{g.grade}</h3>
                <p className="text-xs text-muted-foreground font-body">{g.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground font-body">Showing {sortedProducts.length} results</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-body border border-border bg-card text-foreground px-3 py-2 outline-none"
            >
              <option value="default">Default sorting</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sortedProducts.map((product, i) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} index={i} />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PreOwnedPage;
