import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Gavel, ShoppingBag, Ban, RotateCcw, AlertTriangle, FileText } from "lucide-react";

const TermsAndConditions = () => {
  const lastUpdated = "June 2025";

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
              <span>Terms and Conditions</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Terms and Conditions
            </h1>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
              Please read these terms carefully before using our website or placing an order.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-sm text-muted-foreground font-body"
          >
            Last Updated: {lastUpdated}
          </motion.div>

          <div className="space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">1. Introduction</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Welcome to <strong className="text-foreground">Atlantis Technology</strong>. These Terms and Conditions 
                  govern your use of our website at <strong className="text-foreground">atlas-technology.onrender.com</strong> 
                  and any related services. By accessing our website, creating an account, or placing an order, 
                  you agree to be bound by these terms in full. If you do not agree with any part of these terms, 
                  please do not use our services.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Atlantis Technology is a direct retailer of premium technology products based in Nigeria. 
                  All products listed on this platform are directly owned, stocked, and sold by Atlantis Technology. 
                  <strong className="text-foreground"> We do not operate as a marketplace for third-party vendors.</strong>
                </p>
              </div>
            </motion.div>

            {/* Business Model */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">2. Business Model & Product Ownership</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Atlantis Technology operates as a direct-to-consumer retailer. This means:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body mb-4">
                  <li>All products displayed on this website are owned outright by Atlantis Technology.</li>
                  <li>We do not host, list, or sell products on behalf of third-party vendors, drop-shippers, or external merchants.</li>
                  <li>Inventory is physically held and managed by our team.</li>
                  <li>All orders are fulfilled, packaged, and shipped directly from our warehouse.</li>
                  <li>Warranty and after-sales support are provided directly by Atlantis Technology or the authorized manufacturer.</li>
                </ul>
                <p className="text-muted-foreground font-body leading-relaxed">
                  By placing an order, you acknowledge that you are purchasing directly from Atlantis Technology 
                  and not from any third-party seller.
                </p>
              </div>
            </motion.div>

            {/* Order Cancellation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Ban className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">3. Order Cancellation Policy</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  We understand that plans can change. Our cancellation policy is as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body mb-4">
                  <li><strong className="text-foreground">Within 24 Hours:</strong> You may cancel your order within 24 hours of placing it, provided it has not yet been dispatched. To cancel, contact us immediately at +234 706 432 9791 or via WhatsApp.</li>
                  <li><strong className="text-foreground">After 24 Hours:</strong> Orders cannot be cancelled after 24 hours from the time of purchase. Once an order enters the processing or dispatch stage, it is considered final and cannot be reversed.</li>
                </ul>
                <p className="text-muted-foreground font-body leading-relaxed">
                  If your order has already been shipped, cancellation is no longer possible. In such cases, 
                  please refer to our Returns & Exchange Policy for available options.
                </p>
              </div>
            </motion.div>

            {/* Refund & Exchange */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <RotateCcw className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">4. Refund & Exchange Policy</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Please read this section carefully, as it contains important information about refunds and exchanges:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body mb-4">
                  <li><strong className="text-foreground">No Refunds:</strong> Atlantis Technology operates a strict no-refund policy. Once a purchase is completed and the product has been delivered, monetary refunds will not be issued under any circumstances.</li>
                  <li><strong className="text-foreground">24-Hour Complaint Window:</strong> If you receive a product that is defective, damaged, incorrect, or not as described, you must lodge a complaint within 24 hours of delivery. Complaints can be made via phone (+234 706 432 9791), WhatsApp, email, or our Support page.</li>
                  <li><strong className="text-foreground">Product Exchange:</strong> For valid complaints lodged within the 24-hour window, Atlantis Technology will exchange the defective or incorrect product for a replacement of the same model or equivalent value. The product must be returned in its original packaging with all accessories, manuals, and warranty cards intact.</li>
                  <li><strong className="text-foreground">After 24 Hours:</strong> Complaints received after 24 hours of delivery will not be eligible for exchange. We strongly encourage customers to inspect their orders immediately upon receipt.</li>
                </ul>
                <p className="text-muted-foreground font-body leading-relaxed">
                  This policy ensures fairness while protecting against misuse. We appreciate your understanding 
                  and cooperation.
                </p>
              </div>
            </motion.div>

            {/* Product Warranty */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Gavel className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">5. Product Warranty</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  All products sold by Atlantis Technology come with the manufacturer's warranty where applicable. 
                  Warranty terms vary by brand and product category. Specific warranty information is provided 
                  on individual product pages and included in the product packaging.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Manufacturer warranties cover defects in materials and workmanship under normal use. 
                  Physical damage, liquid damage, unauthorized repairs, or misuse void the warranty. 
                  For warranty claims, please contact us and we will facilitate the process with the manufacturer.
                </p>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">6. Limitation of Liability</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed">
                  Atlantis Technology shall not be liable for any indirect, incidental, or consequential 
                  damages arising from the use of our products or website. Our total liability for any 
                  claim shall not exceed the amount paid for the specific product in question. We make 
                  every effort to ensure product descriptions, images, and specifications are accurate, 
                  but minor variations may occur. Colors may appear differently depending on your device screen.
                </p>
              </div>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">7. Governing Law</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed">
                  These Terms and Conditions are governed by and construed in accordance with the laws of 
                  the Federal Republic of Nigeria. Any disputes arising from these terms or your use of our 
                  services shall be subject to the exclusive jurisdiction of the courts of Nigeria.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/30 border border-border p-6 md:p-8"
            >
              <h3 className="font-display font-bold text-foreground mb-2">Questions About These Terms?</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                If you have any questions, concerns, or disputes regarding these Terms and Conditions, 
                please contact us:
              </p>
              <div className="space-y-1 text-muted-foreground font-body">
                <p><strong className="text-foreground">Phone:</strong> +234 706 432 9791</p>
                <p><strong className="text-foreground">WhatsApp:</strong> +234 706 432 9791</p>
                <p><strong className="text-foreground">Email:</strong> support@atlanistechnology.com</p>
                <p><strong className="text-foreground">Support Page:</strong> <Link to="/support" className="text-accent hover:underline">/support</Link></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
