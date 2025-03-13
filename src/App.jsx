"use client"

import {useRef, useEffect} from "react"
import {motion, useScroll, useTransform} from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Statistics from "./components/Statistics"
import Achievements from "./components/Achievements"
import Courses from "./components/Courses"
import Teachers from "./components/Teachers"
import Timeline from "./components/Timeline"
import Branches from "./components/Branches"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import HistoryWithPhotos from "@/components/HistoryWithPhotos.jsx";
import "./App.css"

function App() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    useEffect(() => {
        document.body.style.margin = "0"
        document.body.style.padding = "0"
        document.body.style.minHeight = "100vh"
        document.body.style.display = "flex"
        document.body.style.flexDirection = "column"
        const root = document.getElementById("root")
        if (root) {
            root.style.flex = "1 0 auto"
        }
    }, [])

    return (
        <div ref={ref} className="app-container relative overflow-hidden">
            <motion.div
                className="parallax-bg"
                style={{
                    y: backgroundY,
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none"/>
            <Header/>
            <Hero/>
            <Statistics/>
            <Achievements/>
            <HistoryWithPhotos/>
            <Courses/>
            <Teachers/>
            <Timeline/>
            <Branches/>
            <Testimonials/>
            <FAQ/>
            <Contact/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}

export default App

