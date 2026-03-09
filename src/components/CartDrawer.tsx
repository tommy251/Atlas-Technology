import { X, Minus, Plus, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";

const CartDrawer = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen, totalItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsCartOpen(false)} />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-card z-50 shadow-elevated flex flex-col animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-display font-bold text-lg text-foreground">Shopping Cart ({totalItems})</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-secondary rounded-full transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <h3 className="font-display font-bold text-foreground mb-2">Your cart is currently empty.</h3>
              <p className="text-sm text-muted-foreground font-body mb-6">You may check out all the available products and buy some in the shop.</p>
              <Button onClick={() => setIsCartOpen(false)} asChild>
                <Link to="/category/phones-tablets">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3 pb-4 border-b border-border">
                  <Link to={`/product/${item.product.id}`} onClick={() => setIsCartOpen(false)}>
                    <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover bg-secondary" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.id}`} onClick={() => setIsCartOpen(false)}>
                      <h4 className="text-sm font-display font-medium text-foreground line-clamp-2 hover:text-accent transition-colors">{item.product.name}</h4>
                    </Link>
                    <p className="text-sm font-display font-bold text-foreground mt-1">{formatPrice(item.product.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-display w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                        <Plus className="h-3 w-3" />
                      </button>
                      <button onClick={() => removeFromCart(item.product.id)} className="ml-auto text-xs text-muted-foreground hover:text-destructive transition-colors font-body">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-foreground">Subtotal:</span>
              <span className="font-display font-bold text-lg text-foreground">{formatPrice(totalPrice)}</span>
            </div>
            <Button className="w-full gradient-brand text-primary-foreground font-display tracking-wider py-6">
              Proceed to Checkout
            </Button>
            <Button variant="outline" className="w-full" onClick={() => setIsCartOpen(false)}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
