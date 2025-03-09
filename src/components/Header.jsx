"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Logo from "../assets/logo_QTM.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null) // Ref для управления фокусом в мобильном меню
  const menuButtonRef = useRef(null) // Ref для кнопки меню

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Управление фокусом при открытии/закрытии мобильного меню
  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      mobileMenuRef.current.focus() // Фокус на мобильное меню при открытии
    } else if (!mobileMenuOpen && menuButtonRef.current) {
      menuButtonRef.current.focus() // Возврат фокуса на кнопку при закрытии
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: "Bosh sahifa", href: "#hero" },
    { name: "Biz haqimizda", href: "#statistics" },
    { name: "Kurslar", href: "#courses" },
    { name: "O'qituvchilar", href: "#teachers" },
    { name: "Filiallar", href: "#branches" },
    { name: "Fikrlar", href: "#testimonials" },
    { name: "Aloqa", href: "#contact" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-14 h-14 mr-2" />
            <span className="text-primary font-bold">QORAKO'L TAYYORLOV</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-primary hover:text-secondary font-medium transition-colors"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary p-2"
            aria-label={mobileMenuOpen ? "Menyuni yopish" : "Menyuni ochish"} // Перевод на узбекский
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          ref={mobileMenuRef}
          tabIndex={-1} // Делаем контейнер фокусируемым
          className="md:hidden bg-white outline-none" // outline-none убирает стандартный контур фокуса
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary hover:text-secondary font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header