import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Wrench, Shield, Truck, Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Wrench, title: "Device Repairs", desc: "Professional repair services for laptops, phones, printers, and more. We fix it right the first time." },
  { icon: Shield, title: "Extended Warranty", desc: "Protect your investment with our extended warranty plans covering accidental damage and defects." },
  { icon: Truck, title: "Installation & Setup", desc: "We deliver and set up your equipment. From servers to workstations, we handle the heavy lifting." },
  { icon: Phone, title: "IT Consultation", desc: "Need advice on the right tech for your business? Our experts provide tailored recommendations." },
];

const faqs = [
  { q: "What is your return policy?", a: "We accept returns within 7 days of delivery for products in original condition with all packaging." },
  { q: "Do you offer bulk/corporate discounts?", a: "Yes! Contact our sales team for special pricing on bulk orders and corporate accounts." },
  { q: "How long does delivery take?", a: "Lagos: 1-2 business days. Other states: 2-5 business days. Express delivery available." },
  { q: "Do your products come with warranty?", a: "All new products come with manufacturer warranty. Pre-owned items include a 90-day warranty." },
  { q: "Can I track my order?", a: "Yes, you'll receive a tracking link via email and SMS once your order is dispatched." },
  { q: "Do you accept installment payments?", a: "We partner with select payment providers to offer installment plans on qualifying purchases." },
];

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <div className="bg-secondary/50 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium">Support</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <div className="gradient-hero py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-3">
                How Can We Help?
              </h1>
              <p className="text-primary-foreground/60 font-body max-w-xl mx-auto mb-8">
                Our dedicated support team is here to assist you with any questions, repairs, or technical needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg">
                  <MessageCircle className="h-4 w-4 mr-2" /> Chat With Us
                </Button>
                <Button variant="hero-outline" size="lg">
                  <Phone className="h-4 w-4 mr-2" /> Call Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card p-6 shadow-product text-center group hover:shadow-product-hover transition-shadow"
                >
                  <div className="w-14 h-14 mx-auto mb-4 gradient-brand flex items-center justify-center text-primary-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Phone, title: "Phone", info: "08140000114", sub: "Mon-Sat, 8am-6pm" },
                { icon: MessageCircle, title: "WhatsApp", info: "08140000114", sub: "Quick responses" },
                { icon: Mail, title: "Email", info: "support@atlantistech.com", sub: "24hr response time" },
                { icon: MapPin, title: "Visit Us", info: "Lagos, Nigeria", sub: "Mon-Sat, 9am-6pm" },
              ].map(c => (
                <div key={c.title} className="bg-card p-6 shadow-product text-center">
                  <c.icon className="h-6 w-6 text-accent mx-auto mb-3" />
                  <h3 className="font-display font-bold text-foreground mb-1">{c.title}</h3>
                  <p className="text-sm text-foreground font-body">{c.info}</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card shadow-product group"
                >
                  <summary className="px-6 py-4 cursor-pointer font-display font-medium text-foreground text-sm flex items-center justify-between list-none">
                    {faq.q}
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="text-sm text-muted-foreground font-body">{faq.a}</p>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SupportPage;
