import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ShieldCheck, Package, Truck } from "lucide-react";

const AboutUs = () => {
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
              <span>About Us</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              About Atlantis Technology
            </h1>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
              Your trusted partner for premium technology products in Nigeria. 
              Genuine products, competitive prices, and exceptional service — directly from us to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Who We Are
              </h2>
              <div className="h-0.5 w-12 gradient-brand mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Atlantis Technology is a leading technology retailer in Nigeria, specializing in the 
                direct sale of premium technology products. We are not a marketplace — every product 
                listed on our platform is directly owned, stocked, and fulfilled by Atlantis Technology.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                From smartphones and laptops to networking equipment, printers, and gaming consoles, 
                we source genuine products from trusted manufacturers and make them available to you 
                at competitive prices.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Our mission is simple: to be your one-stop shop for all technology needs, providing 
                authentic products with warranties, reliable delivery, and dedicated customer support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card p-6 border border-border">
                <Package className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-display font-bold text-foreground mb-1">Direct Ownership</h3>
                <p className="text-sm text-muted-foreground font-body">All products are owned and sold directly by us.</p>
              </div>
              <div className="bg-card p-6 border border-border">
                <ShieldCheck className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-display font-bold text-foreground mb-1">100% Genuine</h3>
                <p className="text-sm text-muted-foreground font-body">Authentic products with manufacturer warranties.</p>
              </div>
              <div className="bg-card p-6 border border-border">
                <Truck className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-display font-bold text-foreground mb-1">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground font-body">Reliable shipping nationwide across Nigeria.</p>
              </div>
              <div className="bg-card p-6 border border-border">
                <Phone className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-display font-bold text-foreground mb-1">24/7 Support</h3>
                <p className="text-sm text-muted-foreground font-body">Dedicated help center always available.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Model Clarification */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              Our Business Model
            </h2>
            <div className="h-0.5 w-12 gradient-brand mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border p-8 md:p-10"
          >
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              <strong className="text-foreground">Atlantis Technology operates as a direct retailer, not a marketplace.</strong> 
              This means we do not host third-party vendors or drop-shippers. Every item you see on our 
              website is physically stocked in our inventory, inspected by our team, and shipped directly 
              from our warehouse to your doorstep.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              This direct-to-consumer model allows us to maintain strict quality control, offer consistent 
              pricing, and provide reliable after-sales support. When you shop with Atlantis Technology, 
              you are dealing with one trusted entity — from browsing to delivery and beyond.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              We believe this approach builds stronger trust with our customers and ensures that every 
              product meets our high standards for authenticity and performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              Get in Touch
            </h2>
            <p className="text-muted-foreground font-body">We are here to help with any questions or concerns.</p>
            <div className="h-0.5 w-12 gradient-brand mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border p-6 text-center">
              <Phone className="h-6 w-6 text-accent mx-auto mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Phone</h3>
              <a href="tel:+2347064329791" className="text-muted-foreground font-body hover:text-accent transition-colors">
                +234 706 432 9791
              </a>
            </div>
            <div className="bg-card border border-border p-6 text-center">
              <Mail className="h-6 w-6 text-accent mx-auto mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Email</h3>
              <span className="text-muted-foreground font-body">support@atlanistechnology.com</span>
            </div>
            <div className="bg-card border border-border p-6 text-center">
              <MapPin className="h-6 w-6 text-accent mx-auto mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Location</h3>
              <span className="text-muted-foreground font-body">Nigeria</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
