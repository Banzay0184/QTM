"use client"

import {AnimatePresence, motion} from "framer-motion"
import {ChevronLeft, ChevronRight} from "lucide-react"
import {useState, useEffect} from "react"
import VazirImag from "../assets/Vazir.jpg"
import VazirImag2 from "../assets/vazir2.jpg"
import VazirImag3 from "../assets/vazir3.jpg"
import yangiyil from "../assets/yangiyil.jpg"
import yangiyil2 from "../assets/yangiyil2.jpg"
import yangiyil4 from "../assets/yangiyil4.jpg"
import certicate5 from "../assets/certicate5.jpg"
import certicate6 from "../assets/certificate6.jpg"
import certicate7 from "../assets/certificate7.jpg"



const historyEvents = [
    {
        title: "Vazirlar Mahkamasi",
        description: "Vazirlar Mahkamasi huzuridagi kelishuv shartnomasi",
        images: [
            VazirImag,
            VazirImag2,
            VazirImag3,
        ],
    },
    {
        title: "Kurslarning kengayishi",
        description: "Matematika va ingliz tili bo‘yicha kurslar ishga tushirildi",
        images: [
            yangiyil,
            yangiyil2,
            yangiyil4
        ],
    },
    {
        title: "Birinchi muvaffaqiyatlar",
        description: "O‘quvchilarimiz yuqori natijalarni ko‘rsatdi",
        images: [
            certicate5,
            certicate6,
            certicate7
        ],
    }
]

const HistoryWithPhotos = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoplay, setAutoplay] = useState(true)

    // Автосмена событий
    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % historyEvents.length);
        }, 5000); // Смена каждые 5 секунд

        return () => clearInterval(interval);
    }, [autoplay, historyEvents.length])

    const nextEvent = () => {
        setAutoplay(false);
        setCurrentIndex((prev) => (prev + 1) % historyEvents.length);
    }

    const prevEvent = () => {
        setAutoplay(false);
        setCurrentIndex((prev) => (prev - 1 + historyEvents.length) % historyEvents.length);
    }

    const eventVariants = {
        hidden: {opacity: 0, x: 50, scale: 0.95},
        visible: {opacity: 1, x: 0, scale: 1, transition: {duration: 0.6, ease: "easeOut"}},
        exit: {opacity: 0, x: -50, scale: 0.95, transition: {duration: 0.6, ease: "easeIn"}},
    }

    const imageVariants = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {opacity: 1, scale: 1, transition: {duration: 0.5}},
    }

    return (
        <section className="py-20 bg-gray-50" aria-label="Markazimizning tarixi">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-[#013e5f] mb-12 text-center"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    Markazimiz tarixi
                </motion.h2>
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            className="flex flex-col items-center gap-8"
                            key={currentIndex}
                            variants={eventVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {/* Фото (несколько) */}
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {historyEvents[currentIndex].images.map((image, imgIndex) => (
                                    <motion.img
                                        key={imgIndex}
                                        src={image}
                                        alt={`${historyEvents[currentIndex].title} - Foto ${imgIndex + 1}`}
                                        className="w-full rounded-lg shadow-md object-cover h-[200px]"
                                        variants={imageVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{delay: imgIndex * 0.1}}
                                    />
                                ))}
                            </div>
                            {/* Текст */}
                            <div className="w-full">
                                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                    <h3 className="text-xl font-semibold text-[#013e5f] mb-2">
                                        {historyEvents[currentIndex].title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{historyEvents[currentIndex].description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Кнопки навигации */}
                    <div className="flex justify-center mt-6 gap-4">
                        <motion.button
                            onClick={prevEvent}
                            className="bg-gray-100 hover:bg-gray-200 text-[#013e5f] p-2 rounded-full shadow-md transition-all"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            aria-label="Oldingi voqea"
                        >
                            <ChevronLeft className="w-5 h-5"/>
                        </motion.button>
                        <motion.button
                            onClick={nextEvent}
                            className="bg-gray-100 hover:bg-gray-200 text-[#013e5f] p-2 rounded-full shadow-md transition-all"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            aria-label="Keyingi voqea"
                        >
                            <ChevronRight className="w-5 h-5"/>
                        </motion.button>
                    </div>

                    {/* Индикаторы */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {historyEvents.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    currentIndex === index ? "bg-[#013e5f] scale-125" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Voqea ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistoryWithPhotos