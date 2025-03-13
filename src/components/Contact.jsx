"use client"

import {motion} from "framer-motion"
import {Mail, Phone, MapPin} from "lucide-react"

const Contact = () => {
    const cardVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}},
    }

    const iconVariants = {
        hover: {scale: 1.2, rotate: 10, transition: {type: "spring", stiffness: 300}},
    }

    return (
        <section id="contact" aria-label="Biz bilan bog'laning"
                 className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
                        Biz bilan bog'laning
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Savollar qoldimi? Biz bilan aloqaga chiqing, biz har doim yordam berishga tayyormiz!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Карточка телефона */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        className="relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div
                            className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-secondary  rounded-full p-4 shadow-md">
                            <motion.div variants={iconVariants} whileHover="hover">
                                <Phone className="h-8 w-8 text-black"/>
                            </motion.div>
                        </div>
                        <h3 className="text-xl font-bold text-primary mt-8 mb-4 text-center">Telefon</h3>
                        <p className="text-gray-600 text-center mb-2 hover:text-[#FF0000]">
                            <a href="tel:+998945964433">
                                +998 94 596 44 33
                            </a>
                        </p>
                        <p className="text-gray-600 text-center mb-2 hover:text-[#FF0000]">
                            <a href="tel:+998948384433">+998 94 838 44 33</a>
                        </p>
                        <p className="text-gray-600 text-center hover:text-[#FF0000]">
                            <a href="tel:+998900804433">+998 90 080 44 33</a>
                        </p>
                    </motion.div>

                    {/* Карточка Telegram */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        delay={0.2}
                        className="relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div
                            className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-secondary rounded-full p-4 shadow-md">
                            <motion.div variants={iconVariants} whileHover="hover">
                                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="#fff"
                                     viewBox="0 0 240 240" id="telegram">
                                    <defs>
                                        <linearGradient id="a" x1="160.01" x2="100.01" y1="40.008" y2="180"
                                                        gradientUnits="userSpaceOnUse">
                                            <stop offset="0" color=""></stop>
                                            <stop offset="1" color=""></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="120" cy="120" r="120" fill="#0088cc"></circle>
                                    <path fill="#fff"
                                          d="M44.691 125.87c14.028-7.727 29.687-14.176 44.318-20.658 25.171-10.617 50.442-21.05 75.968-30.763 4.966-1.655 13.89-3.273 14.765 4.087-.48 10.418-2.45 20.775-3.802 31.132-3.431 22.776-7.398 45.474-11.265 68.175-1.333 7.561-10.805 11.476-16.866 6.637-14.566-9.84-29.244-19.582-43.624-29.65-4.71-4.786-.342-11.66 3.864-15.078 11.997-11.823 24.72-21.868 36.09-34.302 3.067-7.406-5.995-1.164-8.984.749-16.424 11.318-32.446 23.327-49.762 33.274-8.845 4.869-19.154.708-27.995-2.01-7.927-3.281-19.543-6.588-12.708-11.592z"></path>
                                </svg>
                            </motion.div>
                        </div>
                        <h3 className="text-xl font-bold text-primary mt-8 mb-4 text-center">Telegram</h3>
                        <p className="text-gray-600 text-center mb-2">@qorakoltayyorlov_kanali</p>
                        <a
                            href="https://t.me/qorakoltayyorlov_kanali"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 block text-center text-primary hover:text-primary/80 underline transition-colors"
                            aria-label="Telegram orqali bog'lanish"
                        >
                            Telegramda yozing
                        </a>
                    </motion.div>
                    {/* Карточка адреса */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        delay={0.6}
                        className="relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div
                            className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-secondary rounded-full p-4 shadow-md">
                            <motion.div variants={iconVariants} whileHover="hover">
                                <MapPin className="h-8 w-8 text-red"/>
                            </motion.div>
                        </div>
                        <h3 className="text-xl font-bold text-primary mt-8 mb-4 text-center">Manzil</h3>
                        <p className="text-gray-600 text-center mb-2">Alpomish 25/4, Buxoro shahri</p>
                        <a
                            href="https://www.google.com/maps/place/39%C2%B044'10.6%22N+64%C2%B026'07.4%22E/@39.736268,64.4328111,17z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 block text-center text-primary underline transition-colors"
                            aria-label="Xaritada ko'rish"
                        >
                            Xaritada ko'ring
                        </a>
                    </motion.div>
                </div>

                {/* Соцсети и часы работы */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h3 className="text-2xl font-bold text-primary mb-6">Bizni kuzating</h3>
                    <div className="flex justify-center gap-2 mb-8">
                        {[
                            {icon: "facebook", href: "", label: "Facebook sahifamiz"},
                            {icon: "instagram", href: "https://www.instagram.com/qorakol_tayyorlov?igsh=MXd5cnlxcXlvMXR4bw==", label: "Instagram sahifamiz"},
                            {icon: "telegram", href: "https://t.me/qorakol_tayyorlov", label: "Telegram sahifamiz"},
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target={social.icon === "telegram" ? "_blank" : undefined}
                                rel={social.icon === "telegram" ? "noopener noreferrer" : undefined}
                                className="bg-primary/10 hover:bg-primary/20 p-4 rounded-full transition-all"
                                aria-label={social.label}
                                whileHover={{scale: 1.1, rotate: 5}}
                                whileTap={{scale: 0.95}}
                            >
                                {social.icon === "facebook" && (
                                    <svg className="h-10 w-10 text-primary" fill="blue" viewBox="0 0 24 24">
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                )}
                                {social.icon === "instagram" && (
                                    <svg className="h-10 w-10 text-primary" fill="red" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                    </svg>
                                )}
                                {social.icon === "telegram" && (
                                    <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 240 240" id="telegram">
                                        <defs>
                                            <linearGradient id="a" x1="160.01" x2="100.01" y1="40.008" y2="180"
                                                            gradientUnits="userSpaceOnUse">
                                                <stop offset="0" color=""></stop>
                                                <stop offset="1" color=""></stop>
                                            </linearGradient>
                                        </defs>
                                        <circle cx="120" cy="120" r="120" fill="#0088cc"></circle>
                                        <path fill="#fff"
                                              d="M44.691 125.87c14.028-7.727 29.687-14.176 44.318-20.658 25.171-10.617 50.442-21.05 75.968-30.763 4.966-1.655 13.89-3.273 14.765 4.087-.48 10.418-2.45 20.775-3.802 31.132-3.431 22.776-7.398 45.474-11.265 68.175-1.333 7.561-10.805 11.476-16.866 6.637-14.566-9.84-29.244-19.582-43.624-29.65-4.71-4.786-.342-11.66 3.864-15.078 11.997-11.823 24.72-21.868 36.09-34.302 3.067-7.406-5.995-1.164-8.984.749-16.424 11.318-32.446 23.327-49.762 33.274-8.845 4.869-19.154.708-27.995-2.01-7.927-3.281-19.543-6.588-12.708-11.592z"></path>
                                    </svg>
                                )}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact