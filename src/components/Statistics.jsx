"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const Statistics = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: "5000+", label: "Bitiruvchilar", icon: "👩‍🎓" }, // Перевод на узбекский
    { value: "10+", label: "Kurslar", icon: "📚" },
    { value: "25+", label: "O‘qituvchilar", icon: "👨‍🏫" },
    { value: "3", label: "Filiallar", icon: "🏢" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="statistics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Bizning yutuqlarimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            O‘quv markazimiz o‘quvchilarni davlat va xalqaro universitetlarga kirishga tayyorlashda yuqori natijalarga erishdi.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-md p-6 text-center transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <motion.h3
                className="text-3xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 bg-primary rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row bg-[#013e5f]">
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Nega bizni tanlashadi?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#f8931d] rounded-full p-1 mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Zamonaviy o‘qitish usullari va har bir o‘quvchiga individual yondashuv</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#f8931d] rounded-full p-1 mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Tajribali o‘qituvchilar va oliy ta’lim bo‘yicha mutaxassislar</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#f8931d] rounded-full p-1 mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Qulay auditoriyalar va zamonaviy jihozlar</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#f8931d] rounded-full p-1 mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Davlat va xalqaro universitetlarga kirishda yuqori natijalar</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-[#f8931d] p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-4">95%</div>
                <p className="text-white/90 text-xl">
                  bitiruvchilarimiz davlat universitetlariga muvaffaqiyatli kirishadi
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics