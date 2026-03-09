import { Link } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const WishlistPage = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">My Wishlist</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-xl font-display font-bold text-foreground mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground font-body mb-6">Browse our products and add your favorites!</p>
            <Button asChild>
              <Link to="/">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {items.map((product) => (
              <div key={product.id} className="group relative bg-card shadow-product overflow-hidden">
                <button
                  onClick={() => { removeFromWishlist(product.id); toast.info("Removed from wishlist"); }}
                  className="absolute top-3 right-3 z-10 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                </Link>
                <div className="p-4">
                  <p className="text-[10px] font-body text-accent uppercase tracking-widest mb-1">{product.category}</p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-display text-sm font-medium text-foreground line-clamp-2 mb-2 hover:text-accent transition-colors">{product.name}</h3>
                  </Link>
                  <p className="font-display font-bold text-foreground mb-3">{formatPrice(product.price)}</p>
                  <Button
                    size="sm"
                    className="w-full gradient-brand text-primary-foreground font-display text-xs tracking-wider"
                    onClick={() => { addToCart(product); toast.success("Added to cart"); }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default WishlistPage;
