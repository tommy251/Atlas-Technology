import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

const CategoryShowcase = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-3">
            Shop by Category
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Discover our curated collection of premium technology products
          </p>
          <div className="h-0.5 w-12 gradient-brand mt-4 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.slug}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden aspect-[4/5] bg-atlantis-deep"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-atlantis-deep via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-display font-bold text-primary-foreground text-sm md:text-lg mb-1">
                  {cat.name}
                </h3>
                <p className="text-primary-foreground/60 text-xs font-body mb-3">
                  {cat.productCount} products
                </p>
                <div className="flex items-center gap-1 text-accent text-xs font-display tracking-wider group-hover:gap-3 transition-all duration-300">
                  Shop Now
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
