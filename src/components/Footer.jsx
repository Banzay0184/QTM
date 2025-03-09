"use client"

import { motion } from "framer-motion"
import "leaflet/dist/leaflet.css"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 tracking-tight">QORAKO'L TAYYORLOV</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Zamonaviy o‘quv markazi, innovatsion o‘qitish usullari va tajribali o‘qituvchilar bilan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Kurslar</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Matematika
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Ingliz tili
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Rus tili
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Biologiya
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Ma'lumot</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  O‘qituvchilar
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Filiallar
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Fikrlar
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Aloqa</h3>
            <ul className="space-y-3">
              <li className="text-white/80">Alpomish 25/4, Buxoro shahri</li>
              <li className="text-white/80">+998 94 596 44 33</li>
              <li className="text-white/80">+998 94 838 44 33</li>
              <li className="text-white/80">+998 90 008 44 33</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} QORAKO'L TAYYORLOV. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Maxfiylik siyosati
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Foydalanish shartlari
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer