import { Phone, MessageCircle } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 text-xs font-body">
        <div className="flex items-center gap-2">
          <Phone className="h-3 w-3" />
          <a href="tel:+2347064329791" className="hover:text-accent transition-colors">
            Call to Order: +2347064329791
          </a>
        </div>
        <div className="hidden md:block">
          <span className="animate-pulse">🔥 Weekly sale up to 20% OFF</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/2347064329791?text=Hello%20Atlantis%20Technology!" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">
            <MessageCircle className="h-3 w-3" />
            WhatsApp
          </a>
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors hidden sm:inline">Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
