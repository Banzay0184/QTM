"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Malika Yusupova",
    role: "Bitiruvchi, Matematika kursi",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    text: "Matematika kursi menga davlat universitetiga kirish uchun zarur bo‘lgan bilimlarni berdi. Testlardan muvaffaqiyatli o‘tdim!",
  },
  {
    id: 2,
    name: "Rustam Ahmedov",
    role: "Bitiruvchi, Ingliz tili kursi",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    text: "Ingliz tili kursi tufayli xalqaro imtihonlarga tayyorlandim va universitetga kirishda yuqori ball oldim. Rahmat!",
  },
  {
    id: 3,
    name: "Dilnoza Karimova",
    role: "Bitiruvchi, Fizika kursi",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 4,
    text: "Fizika bo‘yicha chuqur tushuncha oldim, bu menga davlat universiteti testlaridan o‘tishga yordam berdi.",
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const testimonialVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, scale: 0.95, transition: { duration: 0.6, ease: "easeIn" } },
  }

  return (
    <section id="testimonials" className="py-20 bg-[#013e5f]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">O‘quvchilarimizning fikrlari</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={testimonialVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#f8931d]"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonials[current].rating ? "text-[#f8931d] fill-[#f8931d]" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-base leading-relaxed italic">"{testimonials[current].text}"</p>
                  <div>
                    <h4 className="font-semibold text-primary text-lg">{testimonials[current].name}</h4>
                    <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 gap-4">
            <motion.button
              onClick={handlePrev}
              className="bg-gray-100 hover:bg-gray-200 text-primary p-2 rounded-full transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Oldingi fikr"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrent(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    current === index ? "bg-[#f8931d] scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Fikr ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              onClick={handleNext}
              className="bg-gray-100 hover:bg-gray-200 text-primary p-2 rounded-full transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Keyingi fikr"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials