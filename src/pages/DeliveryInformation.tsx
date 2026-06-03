import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, Clock, Package, MapPin, AlertCircle } from "lucide-react";

const DeliveryInformation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-atlantis-deep/80 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-accent text-sm font-body mb-4">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Delivery Information</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Delivery Information
            </h1>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
              Fast, reliable, and secure delivery of your technology products across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              How We Deliver
            </h2>
            <div className="h-0.5 w-12 gradient-brand mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-card border border-border p-6"
            >
              <Truck className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-display font-bold text-foreground mb-2">Standard Delivery</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Delivered within 3–5 business days for major cities and 5–7 business days for other locations in Nigeria.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-6"
            >
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-display font-bold text-foreground mb-2">Express Delivery</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Available for select locations. Get your order within 1–2 business days for an additional fee.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-6"
            >
              <Package className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-display font-bold text-foreground mb-2">In-Store Pickup</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Prefer to collect in person? Select pickup at checkout and collect your order from our location once ready.
              </p>
            </motion.div>
          </div>

          {/* Shipping Rates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border p-8 md:p-10 mb-12"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              Shipping Rates & Coverage
            </h3>
            <div className="space-y-4 font-body text-muted-foreground">
              <p>
                <strong className="text-foreground">Free Delivery:</strong> All orders above ₦10,000 qualify for free standard delivery within Nigeria. 
                This applies automatically at checkout — no code needed.
              </p>
              <p>
                <strong className="text-foreground">Standard Rate:</strong> Orders below ₦10,000 attract a flat shipping fee based on your location. 
                Exact rates are calculated and displayed at checkout before payment.
              </p>
              <p>
                <strong className="text-foreground">Coverage:</strong> We deliver nationwide across all 36 states and the Federal Capital Territory (FCT). 
                Remote areas may experience slightly longer delivery windows.
              </p>
            </div>
          </motion.div>

          {/* Processing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border p-8 md:p-10 mb-12"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              Order Processing
            </h3>
            <div className="space-y-4 font-body text-muted-foreground">
              <p>
                All orders are processed within 24 hours of confirmation (excluding weekends and public holidays). 
                Once your order is dispatched, you will receive an SMS and email notification with tracking details 
                where applicable.
              </p>
              <p>
                Please ensure your delivery address and phone number are accurate at checkout. Atlantis Technology 
                is not liable for failed deliveries due to incorrect contact information provided by the customer.
              </p>
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary/30 border border-border p-6 flex gap-4"
          >
            <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-foreground mb-1">Important Notes</h4>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Large or bulky items (such as servers, large printers, or multiple-item orders) may require 
                special handling and could take an additional 1–2 business days. A member of our team will 
                contact you if this applies to your order. All deliveries require a signature upon receipt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryInformation;
