"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Matematika",
      duration: "6 oy",
      level: "Boshlang'ich",
      description: "Murakkab masalalar va testlarga tayyorgarlik.",
      image: "https://sayt.tstu.uz/storage/app/public/images/2023-01-17/hYuLvkOEjFovernUodfBr03RF3OOocUTM0UXwssO.jpg",
    },
    {
      id: 2,
      title: "Ingliz tili",
      duration: "4 oy",
      level: "Boshlang'ich",
      description: "Grammatika, nutq va yozishni rivojlantirish.",
      image: "https://grandtalim.uz/backend/web/uploads/15777869133477.jpg",
    },
    {
      id: 3,
      title: "Rus tili",
      duration: "4 oy",
      level: "O'rta",
      description: "Erkin so‘zlashuv va yozish malakasini kuchaytirish.",
      image: "https://terdpi.uz//uploads/resource/13/l_f115ef859b65b44f8a357757162c4069.jpg",
    },
    {
      id: 4,
      title: "Mental arifmetika",
      duration: "3 oy",
      level: "Boshlang'ich",
      description: "Aqliy tezlik va hisob-kitob.",
      image: "https://izb-school.uz/wp-content/uploads/2020/07/mentalnaya-matematika.jpg",
    },
    {
      id: 5,
      title: "Biologiya",
      duration: "5 oy",
      level: "O'rta",
      description: "Inson organizmi, o‘simliklar va hayvonot olami haqida bilimlar.",
      image: "https://talimxabarlari.uz/wp-content/uploads/i-7-1.jpeg",
    },
    {
      id: 6,
      title: "Kimyo",
      duration: "5 oy",
      level: "O'rta",
      description: "Reaksiyalar, formulalar va laboratoriya tajribalari.",
      image: "https://idum.uz/wp-content/uploads/2018/01/ximiya_600.jpg",
    },
    {
      id: 7,
      title: "Fizika",
      duration: "6 oy",
      level: "Boshlang'ich",
      description: "Harakat qonunlari, energiya va tajribali o‘qish.",
      image: "https://kurslar.az/uploads/news/e4a4f0a7742184d764915968981abd75.jpg",
    },
    {
      id: 8,
      title: "Ona tili va adabiyot",
      duration: "4 oy",
      level: "O'rta",
      description: "Til qoidaları va adabiy asarlarni chuqur o‘rganish.",
      image: "https://us.123rf.com/450wm/sergeypykhonin/sergeypykhonin1809/sergeypykhonin180900041/sergeypykhonin180900041.jpg?ver=6",
    },
    {
      id: 9,
      title: "Tarix",
      duration: "5 oy",
      level: "Boshlang'ich",
      description: "O‘zbek xalqining boy o‘tmishi va jahon tarixini o‘rganish.",
      image: "https://www.tarix.uz/uploads/bb42f4f730d2269780f3769b944ae000.jpg",
    },
    {
      id: 10,
      title: "Huquq",
      duration: "4 oy",
      level: "Boshlang'ich",
      description: "Qonunchilik asoslari va huquqiy bilimlarni rivojlantirish.",
      image: "https://cdn.beta.qalampir.uz/uploads/lp/f_jyDrWP2ug4WPiG1ZcvUInCEL5M1Gic.jpg",
    },
  ]

  const CourseCard = ({ course }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.3 })

    return (
      <motion.div
        ref={ref}
        className="flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-40 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
          <div className="flex gap-2 mb-3">
            <span className="bg-[#f8931d] text-white text-xs px-2 py-1 rounded">{course.duration}</span>
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{course.level}</span>
          </div>
          <motion.button
            className="w-full bg-primary/90 text-white font-medium py-2 px-4 rounded-md hover:bg-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Batafsil
          </motion.button>
        </div>
      </motion.div>
    )
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const slidesToShow = 4 // Показываем 4 карточки
  const totalSlides = Math.ceil(courses.length / slidesToShow)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section id="courses" className="py-16 bg-[#013e5f]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f8931d] mb-2">Bizning kurslarimiz</h2>
          <p className="text-white max-w-2xl mx-auto text-base">
            Davlat institutlari va universitetlariga kirish uchun tayyorgarlik kurslari
          </p>
        </motion.div>

        <div className="relative flex items-center">
          {/* Курсор слева */}
          <button
            onClick={prevSlide}
            className="flex-shrink-0 bg-gray-200 text-gray-700 p-1 rounded-full hover:bg-gray-300 transition-colors disabled:opacity-50 mr-4"
            disabled={currentIndex === 0}
            aria-label="Oldingi slayd"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Область карусели */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${currentIndex * (288 * slidesToShow + 16)}px` }} // 288 = w-72, 16 = gap-4
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </motion.div>
          </div>

          {/* Курсор справа */}
          <button
            onClick={nextSlide}
            className="flex-shrink-0 bg-gray-200 text-gray-700 p-1 rounded-full hover:bg-gray-300 transition-colors disabled:opacity-50 ml-4"
            disabled={currentIndex === totalSlides - 1}
            aria-label="Keyingi slayd"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Точки навигации */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-[#f8931d]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slayd ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses