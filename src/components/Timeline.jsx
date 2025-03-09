"use client"

import { motion } from "framer-motion"

const Timeline = () => {
  const events = [
    { year: 2015, title: "Markazning tashkil etilishi", description: "Buxoro shahrida birinchi filial ochildi" },
    { year: 2017, title: "Kurslarning kengayishi", description: "Matematika va ingliz tili bo‘yicha kurslar ishga tushirildi" },
    {
      year: 2019,
      title: "Birinchi muvaffaqiyatlar",
      description: "O‘quvchilarimiz davlat universitetlariga kirishda yuqori natijalarni ko‘rsatdi",
    },
    { year: 2021, title: "Yangi filiallar", description: "Boshqa shaharlarda o‘quv markazlari tarmog‘i kengaytirildi" },
    { year: 2023, title: "Onlayn platforma", description: "Masofaviy tayyorgarlik uchun platforma ishga tushirildi" },
  ]

  const eventVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: index * 0.2 },
    }),
  }

  return (
    <section className="py-20 bg-gray-50" aria-label="Markazimizning tarixi">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#013e5f] mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Markazimiz tarixi
        </motion.h2>
        <div className="relative">
          {/* Линия таймлайна */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full rounded-full" aria-hidden="true"></div>
          <div className="md:hidden absolute left-6 w-1 bg-gray-300 h-full rounded-full" aria-hidden="true"></div>

          <ul className="list-none p-0">
            {events.map((event, index) => (
              <motion.li
                className={`mb-12 flex flex-col md:flex-row items-start md:items-center w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                key={index}
                custom={index}
                variants={eventVariants}
                initial={{ ...eventVariants.hidden, x: index % 2 === 0 ? 50 : -50 }}
                whileInView="visible"
                viewport={{ once: true }}
                role="listitem"
                aria-label={`${event.year} - ${event.title}`}
              >
                {/* Контент события */}
                <div className="w-full md:w-5/12 px-4 md:px-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-[#013e5f] mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
                {/* Маркер с годом */}
                <div className="flex-shrink-0 w-12 h-12 md:w-2/12 flex justify-center items-center md:items-center z-10 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-[#013e5f] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{event.year}</span>
                  </div>
                </div>
                {/* Пустое пространство для десктопа */}
                <div className="hidden md:block md:w-5/12" aria-hidden="true"></div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Timeline