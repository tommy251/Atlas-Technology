import { motion } from "framer-motion";
import { brands } from "@/data/products";

const BrandMarquee = () => {
  return (
    <section className="py-10 md:py-14 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-sm font-display tracking-[0.2em] uppercase text-muted-foreground">
          Trusted Brands
        </h2>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <motion.span
              key={`${brand}-${i}`}
              className="mx-8 md:mx-14 text-lg md:text-2xl font-display font-bold text-muted-foreground/30 hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
