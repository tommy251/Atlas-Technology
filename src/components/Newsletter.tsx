import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 md:py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-lg mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-3">
            Stay in the Loop
          </h2>
          <p className="text-primary-foreground/60 font-body text-sm mb-8">
            Subscribe to our newsletter for exclusive deals, new arrivals, and tech insights.
          </p>
          <div className="flex gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm font-body outline-none focus:border-accent transition-colors"
            />
            <Button variant="hero" className="px-6">
              Subscribe
            </Button>
          </div>
          <p className="text-primary-foreground/30 text-xs font-body mt-4">
            * I agree to receive your email newsletter.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
