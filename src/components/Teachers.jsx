"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

import KimyoTeacher from "../assets/kimyoTeacher.jpg"
import InglizTeacher from "../assets/inglizTeacher.jpg"
import RusTeacher from "../assets/rusTeacher.jpg"

const teachers = [
  {
    id: 1,
    name: "Bexruz Abdurasulov",
    position: "Kimyo o‘qituvchisi",
    bio: "Kimyo fanidan 10 yildan ortiq tajribaga ega mutaxassis. O‘quvchilarni davlat universitetlariga kirish testlariga tayyorlaydi.",
    image: KimyoTeacher,
  },
  {
    id: 2,
    name: "Anora Ravshanova",
    position: "Ingliz tili o‘qituvchisi",
    bio: "Ingliz tili bo‘yicha 8 yillik tajribaga ega tilshunos. Xalqaro va mahalliy imtihonlarga tayyorgarlik bo‘yicha mutaxassis.",
    image: InglizTeacher,
  },
  {
    id: 3,
    name: "Rushan Nazimovna",
    position: "Rus tili o‘qituvchisi",
    bio: "Rus tili bo‘yicha 12 yildan ortiq tajribaga ega o‘qituvchi. Universitet kirish imtihonlarida yuqori natijalarga erishishga yordam beradi.",
    image: RusTeacher,
  },
]

const Teachers = () => {
  const [currentTeacher, setCurrentTeacher] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentTeacher((prev) => (prev + 1) % teachers.length)
    }, 5000) // Автосмена каждые 5 секунд

    return () => clearInterval(interval)
  }, [autoplay, teachers.length])

  const nextTeacher = () => {
    setAutoplay(false)
    setCurrentTeacher((prev) => (prev + 1) % teachers.length)
  }

  const prevTeacher = () => {
    setAutoplay(false)
    setCurrentTeacher((prev) => (prev - 1 + teachers.length) % teachers.length)
  }

  const teacherVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, scale: 0.95, transition: { duration: 0.6, ease: "easeIn" } },
  }

  return (
    <section id="teachers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Bizning o‘qituvchilarimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Davlat universitetlariga kirishga tayyorgarlik ko‘rishda sizga yordam beradigan tajribali ustozlarimiz bilan tanishing
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTeacher}
              variants={teacherVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/3 relative">
                <motion.div
                  className="relative rounded-xl overflow-hidden shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={teachers[currentTeacher].image}
                    alt={teachers[currentTeacher].name}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>

              <div className="md:w-1/2">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-primary mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {teachers[currentTeacher].name}
                </motion.h3>
                <motion.p
                  className="text-[#f8931d] font-medium mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {teachers[currentTeacher].position}
                </motion.p>
                <motion.p
                  className="text-gray-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {teachers[currentTeacher].bio}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={prevTeacher}
              className="bg-gray-100 hover:bg-gray-200 text-primary p-2 rounded-full shadow-md transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Oldingi o‘qituvchi"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <motion.button
              onClick={nextTeacher}
              className="bg-gray-100 hover:bg-gray-200 text-primary p-2 rounded-full shadow-md transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Keyingi o‘qituvchi"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teachers