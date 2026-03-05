import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Product, formatPrice } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative bg-card shadow-product hover:shadow-product-hover transition-all duration-500 overflow-hidden"
    >
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 gradient-brand text-primary-foreground text-[10px] font-display font-bold px-2.5 py-1">
          {product.badge}
        </span>
      )}

      {/* Wishlist */}
      <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:text-accent-foreground">
        <Heart className="h-4 w-4" />
      </button>

      {/* Image */}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      {/* Quick Add */}
      <div className="absolute bottom-[calc(100%-100%+0px)] left-0 right-0 opacity-0 group-hover:opacity-100 group-hover:bottom-[40%] transition-all duration-300 px-3 z-10">
        <button className="w-full bg-primary text-primary-foreground py-2.5 text-xs font-display tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
          <ShoppingCart className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] font-body text-accent uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="font-display text-sm font-medium text-foreground line-clamp-2 mb-2 leading-snug group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}`}
            />
          ))}
          <span className="text-[10px] text-muted-foreground ml-1">({product.rating})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-foreground">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through font-body">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
