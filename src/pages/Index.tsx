import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import TrustBadges from "@/components/TrustBadges";
import ProductGrid from "@/components/ProductGrid";
import PromoSection from "@/components/PromoSection";
import CategoryShowcase from "@/components/CategoryShowcase";
import BrandMarquee from "@/components/BrandMarquee";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { newArrivals, topSellers } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <HeroCarousel />
        <TrustBadges />
        <ProductGrid
          title="New Arrivals"
          products={newArrivals}
          tabs={["Trending", "View All"]}
        />
        <PromoSection />
        <CategoryShowcase />
        <ProductGrid
          title="Top Sellers"
          products={topSellers}
          tabs={["On Sale"]}
        />
        <BrandMarquee />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
