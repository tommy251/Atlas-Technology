import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import atlantisHero from "@/assets/atlantis-hero.jpg";

const slides = [
  {
    image: heroBanner1,
    title: "Find Your Perfect Match",
    subtitle: "Laptops That Keep Up with Your Lifestyle.",
    cta: "Shop Now",
    ctaSecondary: "View Deals",
    description: "Higher discounts available on bulk orders",
  },
  {
    image: atlantisHero,
    title: "In a World Where Technology Connects Us",
    subtitle: "Discover the latest in tech innovation.",
    cta: "Explore",
    ctaSecondary: "New Arrivals",
    description: "Premium technology for every need",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-atlantis-deep">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-atlantis-deep/80 via-atlantis-deep/40 to-transparent" />

          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-xl"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4 leading-tight">
                {slides[current].title}
              </h1>
              <p className="text-base md:text-xl text-primary-foreground/80 mb-2 font-body">
                {slides[current].subtitle}
              </p>
              <p className="text-sm text-accent mb-8 font-body">
                {slides[current].description}
              </p>
              <div className="flex gap-4">
                <Button variant="hero" size="lg">
                  {slides[current].cta}
                </Button>
                <Button variant="hero-outline" size="lg">
                  {slides[current].ctaSecondary}
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-card/20 backdrop-blur-sm text-primary-foreground hover:bg-card/40 transition-colors flex items-center justify-center rounded-full"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-card/20 backdrop-blur-sm text-primary-foreground hover:bg-card/40 transition-colors flex items-center justify-center rounded-full"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-accent" : "w-4 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
