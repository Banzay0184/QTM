"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: 30, scale: 0.8, transition: { duration: 0.4, ease: "easeIn" } },
    hover: { scale: 1.1, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.9 },
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-[#f8931d]/90 text-white p-4 rounded-full shadow-md hover:bg-[#f8931d] focus:outline-none focus:ring-2 focus:ring-[#f8931d]/50 z-50 group"
          onClick={scrollToTop}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          aria-label="Yuqoriga qaytish"
          title="Yuqoriga qaytish"
        >
          <ChevronUp size={28} className="group-hover:rotate-180 transition-transform duration-300" />
          <motion.div
            className="absolute inset-0 rounded-full bg-[#f8931d]/30"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop