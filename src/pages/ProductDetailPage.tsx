import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Star, Heart, ShoppingCart, Truck, Shield, RefreshCw, Minus, Plus, Check } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/data/products";
import { getProductById, allProducts } from "@/data/allProducts";
import ProductCard from "@/components/ProductCard";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = getProductById(productId || "");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/" className="text-accent hover:underline font-body">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="bg-secondary/50 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm font-body text-muted-foreground flex-wrap">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to={`/category/${product.categorySlug}`} className="hover:text-accent transition-colors">
                {product.categorySlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium line-clamp-1">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Product Image */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative">
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 gradient-brand text-primary-foreground text-xs font-display font-bold px-3 py-1.5">
                  {product.badge}
                </span>
              )}
              <div className="aspect-square bg-secondary overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
              <p className="text-xs font-display text-accent uppercase tracking-[0.2em] mb-2">{product.category}</p>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-body">({product.rating} rating)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through font-body">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="gradient-brand text-primary-foreground text-xs font-display font-bold px-2 py-1">
                      Save {discount}%
                    </span>
                  </>
                )}
              </div>

              {/* Stock */}
              <div className="flex items-center gap-2 mb-6">
                <Check className="h-4 w-4 text-accent" />
                <span className="text-sm font-body text-accent">In Stock</span>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-secondary transition-colors">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-3 font-display font-medium text-sm min-w-[48px] text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-secondary transition-colors">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button className="flex-1 gradient-brand text-primary-foreground font-display tracking-wider py-6">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Trust features */}
              <div className="grid grid-cols-3 gap-3 py-6 border-t border-border">
                {[
                  { icon: Truck, text: "Free Delivery" },
                  { icon: Shield, text: "Warranty" },
                  { icon: RefreshCw, text: "7-Day Return" },
                ].map(f => (
                  <div key={f.text} className="flex flex-col items-center gap-1.5 text-center">
                    <f.icon className="h-5 w-5 text-accent" />
                    <span className="text-xs font-body text-muted-foreground">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* Meta */}
              <div className="space-y-2 pt-4 border-t border-border text-sm font-body">
                <p><span className="text-muted-foreground">Brand:</span> <span className="text-foreground font-medium">{product.brand}</span></p>
                <p><span className="text-muted-foreground">Category:</span> <Link to={`/category/${product.categorySlug}`} className="text-accent hover:underline">{product.category}</Link></p>
                <p><span className="text-muted-foreground">SKU:</span> <span className="text-foreground">ATL-{product.id.toUpperCase()}</span></p>
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="mt-12 md:mt-16">
            <div className="flex border-b border-border gap-6">
              {["description", "specifications", "reviews"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-display capitalize transition-colors ${
                    activeTab === tab
                      ? "text-foreground border-b-2 border-accent font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="py-6">
              {activeTab === "description" && (
                <div className="prose max-w-none">
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    The {product.name} delivers exceptional performance and reliability for professionals and enthusiasts alike.
                    Built with premium materials and cutting-edge technology, this product represents the best in its category.
                    Whether you're using it for work, entertainment, or creative projects, you'll appreciate the attention to detail
                    and superior build quality that {product.brand} is known for.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground font-body">
                    <li>✓ Premium build quality with durable materials</li>
                    <li>✓ Industry-leading performance and reliability</li>
                    <li>✓ Comprehensive manufacturer warranty included</li>
                    <li>✓ 100% genuine {product.brand} product</li>
                  </ul>
                </div>
              )}
              {activeTab === "specifications" && (
                <div className="space-y-3">
                  {[
                    ["Brand", product.brand],
                    ["Category", product.category],
                    ["Condition", "Brand New"],
                    ["Warranty", "Manufacturer Warranty"],
                    ["SKU", `ATL-${product.id.toUpperCase()}`],
                  ].map(([label, value]) => (
                    <div key={label} className="flex border-b border-border py-2">
                      <span className="w-40 text-sm font-body text-muted-foreground">{label}</span>
                      <span className="text-sm font-body text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "reviews" && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground font-body text-sm mb-4">No reviews yet. Be the first to review this product!</p>
                  <Button variant="outline">Write a Review</Button>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-12 md:mt-16">
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-6">Related Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((p, i) => (
                  <Link key={p.id} to={`/product/${p.id}`}>
                    <ProductCard product={p} index={i} />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
