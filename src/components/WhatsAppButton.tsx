import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "2347064329791";
  const message = encodeURIComponent("Hello Atlantis Technology! I'm interested in your products.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
