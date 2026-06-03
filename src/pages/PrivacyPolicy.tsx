import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Database, Trash2 } from "lucide-react";

const PrivacyPolicy = () => {
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
              <span>Privacy Policy</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">Information We Collect</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  When you use our website, create an account, place an order, or contact our support team, 
                  we may collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body">
                  <li><strong className="text-foreground">Personal Identification:</strong> Name, email address, phone number, and delivery address.</li>
                  <li><strong className="text-foreground">Payment Information:</strong> Billing details processed securely via our payment partners (Paystack). We do not store your full card details.</li>
                  <li><strong className="text-foreground">Order History:</strong> Records of products purchased, dates, amounts, and delivery status.</li>
                  <li><strong className="text-foreground">Device & Usage Data:</strong> IP address, browser type, device information, and pages visited for analytics and security.</li>
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
                <Eye className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">How We Use Your Information</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  We use the information collected solely for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body">
                  <li>To process, fulfill, and deliver your orders.</li>
                  <li>To communicate with you regarding your orders, deliveries, and support requests.</li>
                  <li>To send promotional emails and newsletters (only if you have subscribed).</li>
                  <li>To improve our website, products, and customer experience through analytics.</li>
                  <li>To detect and prevent fraud, abuse, or security threats.</li>
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
                <Lock className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">Data Security</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed">
                  We implement industry-standard security measures to protect your personal data, including 
                  SSL encryption for all data transmission, secure server infrastructure, and restricted 
                  access to sensitive information. While we take every reasonable precaution, no internet-based 
                  system is completely infallible. By using our services, you acknowledge and accept this risk.
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
                <Shield className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">Third-Party Sharing</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed">
                  Atlantis Technology does not sell, rent, or trade your personal information to third parties 
                  for marketing purposes. We only share data with trusted service providers necessary to operate 
                  our business — such as payment processors (Paystack), delivery partners, and hosting providers. 
                  These partners are contractually bound to protect your data and use it only for the services 
                  they provide to us.
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
                <Trash2 className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">Your Rights</h2>
              </div>
              <div className="bg-card border border-border p-6 md:p-8">
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body">
                  <li>Access the personal data we hold about you.</li>
                  <li>Request correction of inaccurate or incomplete data.</li>
                  <li>Request deletion of your account and associated data (subject to legal retention requirements).</li>
                  <li>Opt out of marketing communications at any time by clicking "unsubscribe" in emails or contacting support.</li>
                </ul>
                <p className="text-muted-foreground font-body leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at <strong className="text-foreground">support@atlanistechnology.com</strong> 
                  or call <strong className="text-foreground">+234 706 432 9791</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
