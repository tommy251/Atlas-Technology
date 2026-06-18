import { useParams, Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, SlidersHorizontal, Grid3X3, LayoutList, X } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { categories, menuCategories } from "@/data/products";
import { supabase } from "@/integrations/supabase/client";
import type { Product } from "@/data/products";

const sortOptions = [
  { label: "Default sorting", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating", value: "rating" },
  { label: "Name: A-Z", value: "name-asc" },
];

const priceRanges = [
  { label: "Under ₦100,000", min: 0, max: 100000 },
  { label: "₦100,000 - ₦500,000", min: 100000, max: 500000 },
  { label: "₦500,000 - ₦1,000,000", min: 500000, max: 1000000 },
  { label: "₦1,000,000 - ₦5,000,000", min: 1000000, max: 5000000 },
  { label: "Over ₦5,000,000", min: 5000000, max: Infinity },
];

// Convert a string to a URL-friendly slug
const toSlug = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Raw DB row type — separate from Product so we don't modify the Product type
interface DbRow {
  id: string;
  name: string;
  description: string | null;
  price: number;
  original_price: number | null;
  image_url: string | null;
  category: string | null;
  subcategory: string | null;
  stock: number;
  badge: string | null;
  is_active: boolean;
}

const dbRowToProduct = (r: DbRow): Product => ({
  id: r.id,
  name: r.name,
  category: r.category || "Uncategorized",
  categorySlug: toSlug(r.subcategory || r.category || "uncategorized"),
  brand: "",
  price: Number(r.price),
  originalPrice: r.original_price ? Number(r.original_price) : undefined,
  image: r.image_url || "/placeholder.svg",
  badge: r.badge || undefined,
  rating: 5,
  inStock: r.stock > 0,
});

const CategoryPage = () => {
  const { categorySlug, subcategorySlug } = useParams();
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  // Store raw DB rows so we can filter on original category/subcategory fields
  const [rawRows, setRawRows] = useState<DbRow[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all active products once
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setRawRows(data as DbRow[]);
      }
      setLoading(false);
    };
    load();
  }, []);

  // Reset filters when route changes
  useEffect(() => {
    setSelectedBrands([]);
    setSelectedPriceRange(null);
  }, [categorySlug, subcategorySlug]);

  // Find category info from local data
  const categoryInfo = categories.find(c => c.slug === categorySlug);
  const menuCat = menuCategories.find(c => c.name === categoryInfo?.name);

  // Derive subcategory display name from slug
  const subcategoryName = subcategorySlug
    ? subcategorySlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : undefined;

  // Filter raw DB rows by URL slugs, then convert to Product
  const rawProducts = useMemo((): Product[] => {
    if (!categorySlug) return [];

    const filtered = rawRows.filter(r => {
      // DB: subcategory = "Computing", category = "Laptops"
      // URL: /category/computing/laptops
      const dbSubcatSlug = toSlug(r.subcategory || "");  // "computing"
      const dbCatSlug = toSlug(r.category || "");         // "laptops"

      if (subcategorySlug) {
        return dbSubcatSlug === categorySlug && dbCatSlug === subcategorySlug;
      } else {
        return dbSubcatSlug === categorySlug;
      }
    });

    return filtered.map(dbRowToProduct);
  }, [categorySlug, subcategorySlug, rawRows]);

  // Get available brands from filtered products
  const availableBrands = useMemo(() => {
    const brands = [...new Set(rawProducts.map(p => p.brand).filter(Boolean))];
    return brands.sort();
  }, [rawProducts]);

  // Apply filters and sort
  const filteredProducts = useMemo(() => {
    let products = [...rawProducts];

    if (selectedBrands.length > 0) {
      products = products.filter(p => selectedBrands.includes(p.brand));
    }

    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      products = products.filter(p => p.price >= range.min && p.price < range.max);
    }

    switch (sortBy) {
      case "price-asc": products.sort((a, b) => a.price - b.price); break;
      case "price-desc": products.sort((a, b) => b.price - a.price); break;
      case "rating": products.sort((a, b) => b.rating - a.rating); break;
      case "name-asc": products.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    return products;
  }, [rawProducts, selectedBrands, selectedPriceRange, sortBy]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedPriceRange(null);
  };

  const pageTitle = subcategoryName || categoryInfo?.name || "Products";

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="bg-secondary/50 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              {categoryInfo && (
                <>
                  <Link to={`/category/${categorySlug}`} className="hover:text-accent transition-colors">
                    {categoryInfo.name}
                  </Link>
                  {subcategoryName && (
                    <>
                      <ChevronRight className="h-3 w-3" />
                      <span className="text-foreground font-medium">{subcategoryName}</span>
                    </>
                  )}
                </>
              )}
              {!categoryInfo && (
                <span className="text-foreground font-medium">{pageTitle}</span>
              )}
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="container mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-2">{pageTitle}</h1>
            <p className="text-muted-foreground font-body text-sm">
              Showing {filteredProducts.length} of {rawProducts.length} results
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 pb-16">
          <div className="flex gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="space-y-4 sticky top-24">
                {/* Subcategories */}
                {menuCat && !subcategorySlug && (
                  <div className="bg-card p-5 shadow-product">
                    <h3 className="font-display font-semibold text-sm mb-3 text-foreground">Subcategories</h3>
                    <ul className="space-y-1">
                      {menuCat.subcategories.map(sub => {
                        const subSlug = toSlug(sub);
                        return (
                          <li key={sub}>
                            <Link
                              to={`/category/${categorySlug}/${subSlug}`}
                              className="text-sm font-body text-muted-foreground hover:text-accent transition-colors block py-1"
                            >
                              {sub}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* Brand Filter */}
                {availableBrands.length > 0 && (
                  <div className="bg-card p-5 shadow-product">
                    <h3 className="font-display font-semibold text-sm mb-3 text-foreground">Brand</h3>
                    <ul className="space-y-2">
                      {availableBrands.map(brand => (
                        <li key={brand}>
                          <label className="flex items-center gap-2 cursor-pointer text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                            <input
                              type="checkbox"
                              checked={selectedBrands.includes(brand)}
                              onChange={() => toggleBrand(brand)}
                              className="accent-accent"
                            />
                            {brand}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Price Filter */}
                <div className="bg-card p-5 shadow-product">
                  <h3 className="font-display font-semibold text-sm mb-3 text-foreground">Price Range</h3>
                  <ul className="space-y-2">
                    {priceRanges.map((range, i) => (
                      <li key={i}>
                        <label className="flex items-center gap-2 cursor-pointer text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                          <input
                            type="radio"
                            name="price"
                            checked={selectedPriceRange === i}
                            onChange={() => setSelectedPriceRange(selectedPriceRange === i ? null : i)}
                            className="accent-accent"
                          />
                          {range.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {(selectedBrands.length > 0 || selectedPriceRange !== null) && (
                  <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
                    Clear All Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-1" />
                    Filters
                  </Button>
                  <div className="hidden md:flex items-center gap-1 border border-border">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"} transition-colors`}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"} transition-colors`}
                    >
                      <LayoutList className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm font-body border border-border bg-card text-foreground px-3 py-2 outline-none cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Mobile Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden bg-card p-5 mb-6 shadow-product space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-sm">Filters</h3>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {menuCat && !subcategorySlug && (
                    <div>
                      <h4 className="text-xs font-display font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Subcategories</h4>
                      <div className="flex flex-wrap gap-2">
                        {menuCat.subcategories.map(sub => {
                          const subSlug = toSlug(sub);
                          return (
                            <Link
                              key={sub}
                              to={`/category/${categorySlug}/${subSlug}`}
                              className="text-xs border border-border px-3 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {sub}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {availableBrands.length > 0 && (
                    <div>
                      <h4 className="text-xs font-display font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Brand</h4>
                      <div className="flex flex-wrap gap-2">
                        {availableBrands.map(brand => (
                          <button
                            key={brand}
                            onClick={() => toggleBrand(brand)}
                            className={`text-xs border px-3 py-1.5 transition-colors ${
                              selectedBrands.includes(brand)
                                ? "bg-primary text-primary-foreground border-primary"
                                : "border-border hover:bg-secondary"
                            }`}
                          >
                            {brand}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {(selectedBrands.length > 0 || selectedPriceRange !== null) && (
                    <Button variant="outline" size="sm" onClick={clearFilters}>Clear All Filters</Button>
                  )}
                </motion.div>
              )}

              {/* Product Grid */}
              {loading ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground font-body">Loading products...</p>
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className={
                  viewMode === "grid"
                    ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
                    : "space-y-4"
                }>
                  {filteredProducts.map((product, i) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                      <ProductCard product={product} index={i} />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-muted-foreground font-body text-lg mb-2">No products found</p>
                  <p className="text-muted-foreground font-body text-sm mb-6">Try adjusting your filters or browse other categories</p>
                  <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
