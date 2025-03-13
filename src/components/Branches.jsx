"use client"

import {useState, useEffect} from "react"
import {motion, AnimatePresence} from "framer-motion"
import {MapPin, Phone, Clock, ChevronDown, ChevronUp, X} from "lucide-react"
import Alpomish from "../assets/Alpomish.jpg"
import Mustakillik from "../assets/Mustakillik.jpg"
import Pridaskir from "../assets/Pridaskir.jpg"

const Branches = () => {
    const [activeLocation, setActiveLocation] = useState(0)
    const [showAllLocations, setShowAllLocations] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false) // Состояние для модального окна

    const locations = [
        {
            id: 1,
            name: "Markaziy filial",
            address: "Alpomish 25/4",
            landmark: "6-mikrorayon",
            phone: "+998 94 596 44 33",
            hours: "Dush-Sham: 8:00 - 22:00",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.657765408668!2d64.4328111!3d39.736268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ0JzEwLjYiTiA2NMKwMjYnMDcuNCJF!5e0!3m2!1sen!2s!4v1610000000000",
            mapLink: "https://www.google.com/maps/place/39%C2%B044'10.6%22N+64%C2%B026'07.4%22E/@39.736268,64.4328111,17z",
            image: Alpomish,
        },
        {
            id: 2,
            name: "Ikkinchi filial",
            address: "Mustakillik 85",
            landmark: "Trolleybus",
            phone: "+998 94 838 44 33",
            hours: "Dush-Sham: 8:00 - 22:00",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.583174678231!2d64.4402861!3d39.7379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ0JzE2LjQiTiA2NMKwMjYnMzQuMyJF!5e0!3m2!1sen!2s!4v1610000000000",
            mapLink: "https://www.google.com/maps/place/39%C2%B044'16.4%22N+64%C2%B026'34.3%22E/@39.7379,64.4402861,17z",
            image: Mustakillik,
        },
        {
            id: 3,
            name: "Uchinchi filial",
            address: "Pridaskir 12A",
            landmark: "11-poliklinika",
            phone: "+998 90 080 44 33",
            hours: "Dush-Sham: 8:00 - 22:00",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.012345678901!2d64.4323871!3d39.748573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ0JzU0LjkiTiA2NMKwMjYnMDUuOSJF!5e0!3m2!1sen!2s!4v1610000000000",
            mapLink: "https://www.google.com/maps/place/39%C2%B044'54.9%22N+64%C2%B026'05.9%22E/@39.748573,64.4323871,17z",
            image: Pridaskir,
        },
    ]

    const visibleLocations = showAllLocations ? locations : locations.slice(0, 3)

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setIsModalOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <section id="branches" aria-label="Bizning filiallarimiz" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Bizning filiallarimiz</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Biz shaharning turli hududlarida joylashganmiz, shuning uchun sizga bizga kelish qulay bo'ladi
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeLocation}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.5}}
                                className="w-full h-[400px]"
                            >
                                <iframe
                                    src={locations[activeLocation].mapEmbed}
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                    title={`Xarita ${locations[activeLocation].name}`}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeLocation}
                                initial={{opacity: 0, x: 50}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -50}}
                                transition={{duration: 0.5}}
                                className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-secondary"
                            >
                                <h3 className="text-2xl font-bold text-primary mb-4">{locations[activeLocation].name}</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start">
                                        <MapPin className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0"/>
                                        <div>
                                            <p>{locations[activeLocation].address}</p>
                                            <p className="text-gray-500 text-sm">{locations[activeLocation].landmark}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0"/>
                                        <p>{locations[activeLocation].phone}</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Clock className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0"/>
                                        <p>{locations[activeLocation].hours}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary">
                                        Ro'yxatdan o'tish
                                    </button>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="border border-primary text-primary hover:bg-primary/10 font-medium py-2 px-6 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                                        aria-label={`Xarita ${locations[activeLocation].name}ni ko'rish`}
                                    >
                                        Qanday borish mumkin
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleLocations.map((location, index) => (
                        <motion.div
                            key={location.id}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            whileHover={{scale: 1.05}}
                            className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all ${
                                activeLocation === index ? "ring-2 ring-primary" : "hover:shadow-lg"
                            }`}
                            onClick={() => setActiveLocation(index)}
                            role="button"
                            aria-label={`Filial: ${location.name}`}
                        >
                            <div className="relative h-48">
                                <img
                                    src={location.image}
                                    alt={location.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <h4 className="text-white font-bold text-xl p-4">{location.name}</h4>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-600 flex items-center mb-2">
                                    <MapPin className="h-4 w-4 text-secondary mr-2"/>
                                    {location.address} ({location.landmark})
                                </p>
                                <p className="text-gray-600 flex items-center">
                                    <Phone className="h-4 w-4 text-secondary mr-2"/>
                                    {location.phone}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {locations.length > 3 && (
                    <motion.div
                        className="text-center mt-8"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                    >
                        <button
                            onClick={() => setShowAllLocations(!showAllLocations)}
                            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary p-2 rounded"
                            aria-label={showAllLocations ? "Kamroq ko'rsatish" : "Barcha filiallarini ko'rsatish"}
                        >
                            {showAllLocations ? (
                                <>
                                    Kamroq ko'rsatish <ChevronUp className="ml-2 h-5 w-5"/>
                                </>
                            ) : (
                                <>
                                    Barcha filiallarini ko'rsatish <ChevronDown className="ml-2 h-5 w-5"/>
                                </>
                            )}
                        </button>
                    </motion.div>
                )}

                {/* Модальное окно */}
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.3}}
                            onClick={() => setIsModalOpen(false)}
                        >
                            <motion.div
                                className="bg-white rounded-xl p-6 w-full max-w-3xl relative"
                                initial={{scale: 0.9, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                exit={{scale: 0.9, opacity: 0}}
                                transition={{duration: 0.3}}
                                onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри
                            >
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
                                    aria-label="Modalni yopish"
                                >
                                    <X className="h-6 w-6"/>
                                </button>
                                <h3 className="text-xl font-bold text-primary mb-4">{locations[activeLocation].name}</h3>
                                <iframe
                                    src={locations[activeLocation].mapEmbed}
                                    className="w-full h-[500px] border-0 rounded-lg"
                                    loading="lazy"
                                    title={`Xarita ${locations[activeLocation].name}`}
                                />
                                <a
                                    href={locations[activeLocation].mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block text-primary hover:underline"
                                >
                                    Google Mapsda ochish
                                </a>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Branches