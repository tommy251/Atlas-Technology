import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, PackageCheck, XCircle, RefreshCw, Phone, MessageCircle, HelpCircle } from "lucide-react";

const ReturnsPolicy = () => {
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
              <span>Returns & Exchange Policy</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Returns & Exchange Policy
            </h1>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
              No refunds. We offer product exchanges for valid complaints lodged within 24 hours of delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border p-8 md:p-10 mb-12"
          >
            <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-accent" />
              Policy at a Glance
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-secondary/50">
                <XCircle className="h-8 w-8 text-destructive mx-auto mb-2" />
                <h3 className="font-display font-bold text-foreground text-sm mb-1">No Refunds</h3>
                <p className="text-xs text-muted-foreground font-body">We do not issue monetary refunds for any purchase.</p>
              </div>
              <div className="text-center p-4 bg-secondary/50">
                <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                <h3 className="font-display font-bold text-foreground text-sm mb-1">24-Hour Window</h3>
                <p className="text-xs text-muted-foreground font-body">Complaints must be lodged within 24 hours of delivery.</p>
              </div>
              <div className="text-center p-4 bg-secondary/50">
                <RefreshCw className="h-8 w-8 text-accent mx-auto mb-2" />
                <h3 className="font-display font-bold text-foreground text-sm mb-1">Exchange Only</h3>
                <p className="text-xs text-muted-foreground font-body">Valid complaints result in product replacement.</p>
              </div>
            </div>
          </motion.div>

          {/* Detailed Policy */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="h-5 w-5 text-destructive" />
                <h2 className="text-xl font-display font-bold text-foreground">No Refund Policy</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed">
                  Atlantis Technology maintains a strict <strong className="text-foreground">no-refund policy</strong>. 
                  Once a product has been purchased and delivered, we do not process monetary refunds, reversals, 
                  or cashback under any circumstances. This policy applies to all product categories, including 
                  but not limited to smartphones, laptops, printers, accessories, and networking equipment.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mt-4">
                  We encourage all customers to carefully review product specifications, compatibility, and descriptions 
                  before completing a purchase. If you are uncertain about a product, please contact our support team 
                  prior to placing your order.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">The 24-Hour Complaint Window</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  We stand behind the quality of our products. If you receive an item that is:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body mb-4">
                  <li>Defective or malfunctioning out of the box</li>
                  <li>Damaged during transit</li>
                  <li>Incorrect or different from what was ordered</li>
                  <li>Missing advertised accessories or components</li>
                </ul>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  You must lodge a formal complaint within <strong className="text-foreground">24 hours</strong> of receiving the delivery. 
                  The 24-hour period begins from the timestamp recorded at delivery.
                </p>
                <div className="bg-secondary/50 border border-border p-4">
                  <p className="text-sm text-muted-foreground font-body">
                    <strong className="text-foreground">Important:</strong> Complaints received after the 24-hour window has elapsed 
                    will not be eligible for exchange. We strongly advise customers to unbox and inspect their orders 
                    immediately upon receipt.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">Product Exchange Process</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  For complaints validated within the 24-hour window, Atlantis Technology will:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-muted-foreground font-body mb-4">
                  <li>
                    <strong className="text-foreground">Review your complaint:</strong> Our support team will assess the issue, 
                    which may include requesting photos, videos, or a brief description of the defect.
                  </li>
                  <li>
                    <strong className="text-foreground">Approve the exchange:</strong> Once validated, we will authorize a replacement 
                    with the same product model or an equivalent item of equal value.
                  </li>
                  <li>
                    <strong className="text-foreground">Arrange return pickup:</strong> We will collect the defective/incorrect item 
                    from your delivery address at no extra cost.
                  </li>
                  <li>
                    <strong className="text-foreground">Deliver replacement:</strong> The replacement product will be dispatched 
                    within 1–2 business days after receiving the returned item.
                  </li>
                </ol>
                <div className="bg-secondary/50 border border-border p-4">
                  <p className="text-sm text-muted-foreground font-body">
                    <strong className="text-foreground">Conditions for Exchange:</strong> The product must be returned in its original 
                    packaging with all accessories, manuals, warranty cards, and freebies intact. Products with 
                    physical damage caused by the customer, liquid damage, or unauthorized tampering are not eligible 
                    for exchange.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <PackageCheck className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">Items Not Eligible for Exchange</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  The following are not eligible for exchange under any circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body">
                  <li>Products with customer-induced physical damage, cracks, or scratches.</li>
                  <li>Products damaged by liquid, fire, or electrical surge.</li>
                  <li>Products that have been opened, used, or activated where hygiene or consumables are involved (e.g., opened ink cartridges, used headphones).</li>
                  <li>Products with removed or tampered serial numbers or warranty seals.</li>
                  <li>Software, digital codes, or downloadable products once redeemed or activated.</li>
                  <li>Complaints lodged after the 24-hour window.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">How to Lodge a Complaint</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  To initiate a complaint or exchange request, contact us immediately within 24 hours of delivery:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <a 
                    href="tel:+2347064329791" 
                    className="bg-secondary/50 border border-border p-4 text-center hover:border-accent transition-colors"
                  >
                    <Phone className="h-6 w-6 text-accent mx-auto mb-2" />
                    <h4 className="font-display font-bold text-foreground text-sm mb-1">Call Us</h4>
                    <p className="text-xs text-muted-foreground font-body">+234 706 432 9791</p>
                  </a>
                  <a 
                    href="https://wa.me/2347064329791?text=Hello%20Atlantis%20Technology!%20I%20have%20an%20issue%20with%20my%20order." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary/50 border border-border p-4 text-center hover:border-accent transition-colors"
                  >
                    <MessageCircle className="h-6 w-6 text-accent mx-auto mb-2" />
                    <h4 className="font-display font-bold text-foreground text-sm mb-1">WhatsApp</h4>
                    <p className="text-xs text-muted-foreground font-body">+234 706 432 9791</p>
                  </a>
                  <Link 
                    to="/support" 
                    className="bg-secondary/50 border border-border p-4 text-center hover:border-accent transition-colors"
                  >
                    <HelpCircle className="h-6 w-6 text-accent mx-auto mb-2" />
                    <h4 className="font-display font-bold text-foreground text-sm mb-1">Support Page</h4>
                    <p className="text-xs text-muted-foreground font-body">Open a ticket</p>
                  </Link>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed mt-6">
                  Please have your <strong className="text-foreground">order number</strong> and <strong className="text-foreground">delivery date</strong> ready when contacting us. 
                  This will help us locate your order and process your request faster.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnsPolicy;
