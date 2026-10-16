"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
};

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Product Manager",
      company: "Compass UOL",
      text: "testimonials.ana.text",
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Tech Lead",
      company: "Previous Company",
      text: "testimonials.carlos.text",
    },
    {
      id: 3,
      name: "Maria Oliveira",
      role: "UX Designer",
      company: "Design Studio",
      text: "testimonials.maria.text",
    },
    {
      id: 4,
      name: "João Costa",
      role: "Frontend Developer",
      company: "Tech Startup",
      text: "testimonials.joao.text",
    },
    {
      id: 5,
      name: "Fernanda Lima",
      role: "Project Manager",
      company: "Digital Agency",
      text: "testimonials.fernanda.text",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-space-xl md:py-space-2xl bg-surface-container">
      <div className="container px-gutter-mobile md:px-gutter">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-space-xl"
        >
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-bold mb-space-md">
            {t("testimonials.title")}
          </h2>
          <p className="text-body-md md:text-body-lg text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <Card className="border border-border/80 bg-card shadow-sm">
                  <CardContent className="p-6 md:p-10 lg:p-12">
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="mb-space-md"
                      >
                        <Quote className="w-12 h-12 text-primary" />
                      </motion.div>

                      <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-headline-sm font-normal leading-relaxed text-muted-foreground mb-space-lg md:mb-space-xl italic"
                      >
                        &ldquo;{t(testimonials[currentIndex].text)}&rdquo;
                      </motion.blockquote>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-space-md text-primary-foreground font-bold text-xl">
                          {testimonials[currentIndex].name.charAt(0)}
                        </div>
                        <h3 className="font-semibold text-lg text-foreground">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-primary font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].company}
                        </p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-border/80 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-border/80 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center mt-space-lg space-x-2"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? "true" : undefined}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-space-sm"
          >
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
            >
              {isAutoPlaying
                ? t("testimonials.pauseAutoplay")
                : t("testimonials.resumeAutoplay")}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
