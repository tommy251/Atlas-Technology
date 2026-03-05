import { motion } from "framer-motion";
import { Truck, Shield, CheckCircle, Headphones } from "lucide-react";

const badges = [
  { icon: Truck, title: "Free Delivery", description: "For all orders above ₦10,000" },
  { icon: Shield, title: "Safe Payment", description: "100% secure payment" },
  { icon: CheckCircle, title: "Shop with Confidence", description: "Genuine products only" },
  { icon: Headphones, title: "24/7 Help Center", description: "Dedicated 24/7 support" },
];

const TrustBadges = () => {
  return (
    <section className="py-8 md:py-12 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <badge.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm text-foreground">{badge.title}</h3>
                <p className="text-xs text-muted-foreground font-body">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
