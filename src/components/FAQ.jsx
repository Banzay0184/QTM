"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "Siz qanday o‘qitish formatlarini taklif qilasiz?",
      answer: "Biz o‘quv markazlarimizda yuzma-yuz ta’lim va masofaviy o‘qish uchun onlayn kurslarni taklif qilamiz.",
    },
    {
      question: "Kursga qanday qilib yozilish mumkin?",
      answer:
        "Kursga yozilish uchun kursni tanlash, veb-saytimizda ariza formasini to‘ldirish yoki biz bilan telefon orqali bog‘lanish kerak. Menejerlarimiz siz bilan tafsilotlarni aniqlashtirish uchun aloqaga chiqadi va ro‘yxatdan o‘tishda yordam beradi.",
    },
    {
      question: "O‘qishni tugatgandan so‘ng sertifikat berasizmi?",
      answer: "Ha, kursni muvaffaqiyatli yakunlagan barcha talabalar o‘qishni tamomlaganlik sertifikatini oladi.",
    },
    {
      question: "Bitiruvchilarni ishga joylashtirish dasturingiz bormi?",
      answer:
        "Ha, biz yetakchi kompaniyalar bilan hamkorlik qilamiz va bitiruvchilarimizga ish topishda hamda suhbatlardan o‘tishda yordam beramiz.",
    },
  ]

  // Варианты анимации для ответа
  const answerVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: { opacity: 1, height: "auto", marginTop: "0.5rem" },
    exit: { opacity: 0, height: 0, marginTop: 0 },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Tez-tez so‘raladigan savollar
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full p-5 bg-white text-left text-gray-800 font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <motion.svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    className="bg-gray-50 p-5 text-gray-700"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ