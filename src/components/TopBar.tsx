import { Phone, MessageCircle } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 text-xs font-body">
        <div className="flex items-center gap-2">
          <Phone className="h-3 w-3" />
          <span>Call to Order: 08140000114</span>
        </div>
        <div className="hidden md:block">
          <span className="animate-pulse">🔥 Weekly sale up to 20% OFF</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">
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
