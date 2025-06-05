'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"
import { AnimatedSection } from "./animated-section"

type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  text: string
  avatar?: string
}


export function TestimonialsSection() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Product Manager",
      company: "Compass UOL",
      text: "testimonials.ana.text",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Tech Lead",
      company: "Previous Company",
      text: "testimonials.carlos.text",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Maria Oliveira",
      role: "UX Designer",
      company: "Design Studio",
      text: "testimonials.maria.text",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "João Costa",
      role: "Frontend Developer",
      company: "Tech Startup",
      text: "testimonials.joao.text",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      name: "Fernanda Lima",
      role: "Project Manager",
      company: "Digital Agency",
      text: "testimonials.fernanda.text",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <AnimatedSection  className="py-20 bg-secondary dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t("testimonials.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Carousel */}
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
                <Card className="bg-card border-0 shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col items-center text-center">
                      {/* Quote Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="mb-6"
                      >
                        <Quote className="w-12 h-12 text-amber-600 dark:text-yellow-400" />
                      </motion.div>

                      {/* Testimonial Text */}
                      <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8 italic"
                      >
                        "{t(testimonials[currentIndex].text)}"
                      </motion.blockquote>

                      {/* Avatar and Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 dark:from-yellow-400 dark:to-yellow-500 flex items-center justify-center mb-4 text-white font-bold text-xl">
                          {testimonials[currentIndex].name.charAt(0)}
                        </div>
                        <h4 className="font-semibold text-lg text-foreground">{testimonials[currentIndex].name}</h4>
                        <p className="text-amber-600 dark:text-yellow-400 font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-amber-600 dark:border-yellow-400 hover:bg-amber-600 hover:text-white dark:hover:bg-yellow-400 dark:hover:text-slate-900 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-amber-600 dark:border-yellow-400 hover:bg-amber-600 hover:text-white dark:hover:bg-yellow-400 dark:hover:text-slate-900 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center mt-8 space-x-2"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-amber-600 dark:bg-yellow-400 scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>

          {/* Auto-play indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-4"
          >
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {isAutoPlaying ? t("testimonials.pauseAutoplay") : t("testimonials.resumeAutoplay")}
            </button>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}