"use client"

import {motion} from "framer-motion"
import {Award, Users, BookOpen, Medal, GraduationCap, Globe, ChevronLeft, ChevronRight} from "lucide-react"
import {useState, useEffect} from "react"
import certificate1 from "../assets/certificate1.jpg"
import certificate2 from "../assets/certificate2.jpg"
import certificate3 from "../assets/certificate3.jpg"

const Achievements = () => {
    const achievements = [
        {
            icon: <Award className="w-12 h-12 text-secondary"/>,
            title: "100+",
            description: "O'quvchilar tomonidan olingan sertifikatlar",
        },
        {
            icon: <Users className="w-12 h-12 text-secondary"/>,
            title: "95%",
            description: "O'qishga qabul qilingan o'quvchilar",
        },
        {
            icon: <BookOpen className="w-12 h-12 text-secondary"/>,
            title: "10+",
            description: "Ta'lim dasturlari",
        },
    ]

    const certificates = [
        {src: certificate1, alt: "Olimpiada sertifikati"},
        {src: certificate2, alt: "Davlat universiteti sertifikati"},
        {src: certificate3, alt: "Xalqaro sertifikat"},
    ]

    const preparationItems = [
        {
            icon: <Medal className="w-10 h-10 text-secondary"/>,
            title: "Olimpiadalarga tayyorgarlik",
            description: "O'quvchilarimizni respublika va xalqaro olimpiadalarda muvaffaqiyatli ishtirok etishga tayyorlaymiz.",
        },
        {
            icon: <GraduationCap className="w-10 h-10 text-secondary"/>,
            title: "Davlat universitetlariga kirish",
            description: "Talabalarni davlat oliy o'quv yurtlariga kirish imtihonlariga tayyorlaymiz.",
        },
        {
            icon: <Globe className="w-10 h-10 text-secondary"/>,
            title: "Xalqaro dasturlar",
            description: "Xalqaro ta'lim dasturlari va sertifikatlarga tayyorgarlik ko'ramiz.",
        },
    ]

    useEffect(() => {
        const interval = setInterval(nextCertificate, 5000); // 5 секунд
        return () => clearInterval(interval);
    }, []);

    const [currentCertificate, setCurrentCertificate] = useState(0)

    const nextCertificate = () => {
        setCurrentCertificate((prev) => (prev + 1) % certificates.length)
    }

    const prevCertificate = () => {
        setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") prevCertificate()
            if (e.key === "ArrowRight") nextCertificate()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    // Функция для получения видимых сертификатов (3 одновременно)
    const getVisibleCertificates = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentCertificate + i) % certificates.length;
            visible.push(certificates[index]);
        }
        return visible;
    }

    return (
        <section id="achievements" aria-label="O'quvchilarimizning yutuqlari" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">O'quvchilarimizning yutuqlari</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Biz o'quvchilarimizning muvaffaqiyatlari va yutuqlaridan faxrlanamiz!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            role="article"
                            aria-label={`${achievement.title} - ${achievement.description}`}
                            className="bg-white rounded-lg shadow-lg p-8 text-center"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                        >
                            <div className="flex justify-center mb-4">{achievement.icon}</div>
                            <h3 className="text-2xl font-bold text-primary mb-2">{achievement.title}</h3>
                            <p className="text-gray-600">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Секция сертификатов с каруселью */}
                <motion.div
                    className="mt-16 bg-white rounded-lg shadow-lg p-8"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h3 className="text-2xl font-bold text-primary mb-4 text-center">Bizning o'quvchilarimizning
                        yutuqlari</h3>
                    <p className="text-gray-600 mb-8 text-center">
                        Ta'limni tugatgandan so'ng barcha o'quvchilarimiz o'z bilimlarini tasdiqlovchi sertifikatlarga
                        ega bo‘lishadi
                    </p>
                    <div className="relative" role="region" aria-label="Sertifikatlar karuseli">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
                            {getVisibleCertificates().map((certificate, index) => (
                                <motion.div
                                    key={`${currentCertificate}-${index}`} // Уникальный ключ для каждого изображения
                                    initial={{opacity: 0, x: 20}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -20}}
                                    transition={{duration: 0.3}}
                                >
                                    <img
                                        src={certificate.src}
                                        alt={certificate.alt}
                                        className="rounded-lg shadow-md w-full h-auto max-h-[500px] object-contain"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4">
                            <motion.button
                                onClick={prevCertificate}
                                className="text-primary hover:text-secondary p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                aria-label="Oldingi sertifikatlar"
                            >
                                <ChevronLeft className="w-6 h-6"/>
                            </motion.button>
                            <motion.button
                                onClick={nextCertificate}
                                className="text-primary hover:text-secondary p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                aria-label="Keyingi sertifikatlar"
                            >
                                <ChevronRight className="w-6 h-6"/>
                            </motion.button>
                        </div>
                        <div className="flex justify-center mt-4 space-x-2">
                            {certificates.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${currentCertificate === index ? "bg-gray-600" : "bg-gray-300"}`}
                                    onClick={() => setCurrentCertificate(index)}
                                    aria-label={`Sertifikat guruhi ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Секция подготовки */}
                <motion.div
                    className="mt-16 p-8"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {preparationItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="text-center shadow-lg p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 max-w-xs mx-auto"
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: index * 0.2}}
                                whileHover={{scale: 1.05}}
                            >
                                <motion.div
                                    className="flex justify-center mb-4"
                                    whileHover={{rotate: 360, transition: {duration: 0.5}}}
                                >
                                    {item.icon}
                                </motion.div>
                                <h4 className="text-xl font-semibold text-primary mb-2">{item.title}</h4>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Achievements