import { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  title: string;
  products: Product[];
  tabs?: string[];
}

const ProductGrid = ({ title, products, tabs }: ProductGridProps) => {
  const [activeTab, setActiveTab] = useState(tabs?.[0] || "");

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              {title}
            </h2>
            <div className="h-0.5 w-12 gradient-brand mt-3" />
          </motion.div>

          {tabs && (
            <div className="flex gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-body transition-colors relative pb-1 ${
                    activeTab === tab
                      ? "text-foreground font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
