import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/data/allProducts";
import { newArrivals, topSellers } from "@/data/products";

const AllProductsPage = () => {
  const allProds = [...newArrivals, ...topSellers, ...allProducts];
  // Deduplicate by id
  const uniqueProducts = allProds.filter((p, i, arr) => arr.findIndex(x => x.id === p.id) === i);
  const [sortBy, setSortBy] = useState("default");

  const sorted = [...uniqueProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">All Products</h1>
            <p className="text-sm text-muted-foreground font-body mt-1">Showing {sorted.length} results</p>
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="bg-card border border-border px-3 py-2 text-sm font-body text-foreground outline-none"
          >
            <option value="default">Default sorting</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sorted.map((product, i) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard product={product} index={i} />
            </Link>
          ))}
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AllProductsPage;
