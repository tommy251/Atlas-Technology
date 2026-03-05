import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PromoSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Promo 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden gradient-hero p-8 md:p-12 flex flex-col justify-center min-h-[280px]"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent" />
            <p className="text-accent text-xs font-display tracking-[0.2em] uppercase mb-2">Tech Week</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-2">
              Smart Gadgets,<br />Smart Discounts
            </h3>
            <p className="text-primary-foreground/60 text-sm font-body mb-6">Get up to 20% discount on selected items</p>
            <div>
              <Button variant="hero" size="default">Shop Deals</Button>
            </div>
          </motion.div>

          {/* Promo 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-secondary p-8 md:p-12 flex flex-col justify-center min-h-[280px]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent/5" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-atlantis-magenta/5" />
            <p className="text-accent text-xs font-display tracking-[0.2em] uppercase mb-2">Authentic</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              Inks & Toners<br />for Your Printers
            </h3>
            <p className="text-muted-foreground text-sm font-body mb-6">100% genuine products with warranty</p>
            <div>
              <Button variant="outline" size="default">Shop Now</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
