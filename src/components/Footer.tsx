import { Link } from "react-router-dom";
import atlantisLogo from "@/assets/atlantis-logo.jpg";

const footerLinks = {
  Information: [
    { label: "About Us", href: "#" },
    { label: "Delivery Information", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms and Conditions", href: "#" },
    { label: "Returns Policy", href: "#" },
  ],
  "Customer Care": [
    { label: "Contact Us", href: "/support" },
    { label: "Return a Product", href: "/support" },
    { label: "Distribution", href: "#" },
    { label: "FAQs", href: "/support" },
  ],
  Extras: [
    { label: "Shop by Brand", href: "#" },
    { label: "Open Box", href: "/open-box" },
    { label: "Pre-owned", href: "/pre-owned" },
    { label: "Support", href: "/support" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src={atlantisLogo} alt="Atlantis Technology" className="h-10 w-auto mb-4 brightness-200" />
            <p className="text-primary-foreground/50 text-sm font-body leading-relaxed mb-6">
              Your one-stop shop for premium technology products. Genuine products, competitive prices, and exceptional service.
            </p>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "Twitter", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 border border-primary-foreground/20 flex items-center justify-center text-xs font-display text-primary-foreground/50 hover:border-accent hover:text-accent transition-colors"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm mb-4 tracking-wide">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-primary-foreground/50 text-sm font-body hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-primary-foreground/50 text-sm font-body hover:text-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-primary-foreground/30 text-xs font-body">
            © 2025 Atlantis Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-primary-foreground/30 text-xs font-body">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Bank Transfer</span>
            <span>USSD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
