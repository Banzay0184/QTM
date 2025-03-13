"use client"

import {useState, useEffect} from "react"
import {motion, AnimatePresence} from "framer-motion"
import yangiyil from "../assets/yangiyil.jpg"
import yangiyil2 from "../assets/yangiyil2.jpg"
import yangiyil4 from "../assets/yangiyil4.jpg"
import inglistilli from "../assets/ingistili.jpg"
import bolalacertificate from "../assets/bolalacertificat.jpg"
import bolalar from "../assets/bolalar.jpg"

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Массив изображений
    const images = [
        bolalar,
        bolalacertificate,
        yangiyil,
        yangiyil2,
        yangiyil4,
        inglistilli
    ]

    // Смена изображений каждые 4 секунды
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 4000) // 4 секунды
        return () => clearInterval(interval)
    }, [images.length])

    const textVariants = {
        hidden: {opacity: 0, y: 40},
        visible: {opacity: 1, y: 0, transition: {duration: 1, ease: "easeOut"}},
    }

    const buttonVariants = {
        hover: {scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", transition: {type: "spring", stiffness: 300}},
        tap: {scale: 0.95},
    }

    const imageVariants = {
        hidden: {opacity: 0, scale: 0.95},
        visible: {opacity: 1, scale: 1, transition: {duration: 1, ease: "easeInOut"}},
        exit: {opacity: 0, scale: 0.95, transition: {duration: 1, ease: "easeInOut"}},
    }

    return (
        <section id="hero"
                 className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-gradient-to-b from-primary/90 to-primary/70">
            <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-white">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Davlat universitetlariga <span className="text-[#f8931d]">tayyorlov</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-md"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 0.2}}
                    >
                        Biz o‘quvchilarni davlat oliy o‘quv yurtlariga muvaffaqiyatli kirishga tayyorlaymiz —
                        kelajagingiz uchun birinchi qadam.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.4, ease: "easeOut"}}
                    >
                        <motion.a
                            href="#courses"
                            className="bg-[#f8931d] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Kurslarimiz
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="bg-white text-[#f8931d] font-semibold py-3 px-8 rounded-lg shadow-md transition-all"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Bog‘lanish
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div
                    className="md:w-1/2 mt-12 md:mt-0 relative"
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1.2, delay: 0.6, ease: "easeOut"}}
                >
                    <div className="relative z-10">
                        <div className="absolute -inset-4 blur-3xl rounded-xl bg-white/10 backdrop-blur-sm"></div>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImageIndex}
                                src={images[currentImageIndex]}
                                alt="Davlat universitetlariga tayyorgarlik — o‘quvchilar bilim olmoqda"
                                className="relative rounded-xl shadow-xl  w-full max-w-md mx-auto"
                                variants={imageVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            />
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{y: [0, 15, 0]}}
                transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
            >
                <a href="#statistics" className="text-white/90 flex flex-col items-center"
                   aria-label="Statistikaga o‘tish">
                    <span className="mb-2 text-sm font-medium">Ko‘proq bilish</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            d="M12 5V19M12 19L5 12M12 19L19 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{pathLength: 0}}
                            animate={{pathLength: 1}}
                            transition={{duration: 1.5, delay: 1.6, ease: "easeInOut"}}
                        />
                    </svg>
                </a>
            </motion.div>
        </section>
    )
}

export default Hero