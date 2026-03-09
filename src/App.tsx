import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { AuthProvider } from "@/context/AuthContext";
import CartDrawer from "@/components/CartDrawer";
import AuthModal from "@/components/AuthModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import OpenBoxPage from "./pages/OpenBoxPage";
import PreOwnedPage from "./pages/PreOwnedPage";
import SupportPage from "./pages/SupportPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import WishlistPage from "./pages/WishlistPage";
import AllProductsPage from "./pages/AllProductsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <CartDrawer />
              <AuthModal />
              <WhatsAppButton />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/category/:categorySlug" element={<CategoryPage />} />
                <Route path="/category/:categorySlug/:subcategorySlug" element={<CategoryPage />} />
                <Route path="/open-box" element={<OpenBoxPage />} />
                <Route path="/pre-owned" element={<PreOwnedPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/product/:productId" element={<ProductDetailPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/shop" element={<AllProductsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
