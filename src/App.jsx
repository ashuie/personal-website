import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import SiteWindow from './components/SiteWindow'


export default function App() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const over = () => setHovering(true)
    const out = () => setHovering(false)
    const els = document.querySelectorAll('a, button')
    els.forEach((el) => {
      el.addEventListener('mouseenter', over)
      el.addEventListener('mouseleave', out)
    })
    return () => els.forEach((el) => {
      el.removeEventListener('mouseenter', over)
      el.removeEventListener('mouseleave', out)
    })
  })

  return (
    <div className="bg-[#0a0b0f] text-gray-200 font-sans min-h-screen flex items-start lg:items-center justify-center px-4 sm:px-6 py-8 lg:py-10 relative overflow-x-hidden">

      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(249,168,212,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-pink-300/50 pointer-events-none z-[9998] hidden md:block mix-blend-screen"
        animate={{
          x: cursor.x - 6,
          y: cursor.y - 6,
          scale: hovering ? 2.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 900, damping: 38, mass: 0.25 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center gap-10"
      >
        {/* Left sidebar */}
        <aside className="w-full lg:w-52 flex-shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-block mb-4">
            <h1 className="font-serif text-[2.5rem] italic text-pink-300 leading-[1.05]">
              ashley feng
            </h1>
            <div className="mt-2 h-px bg-pink-300/50 animate-draw-line" />
          </div>

          <p className="text-xs text-gray-500 mb-5 leading-relaxed">
            Turing Scholar • UT Austin
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6 justify-center lg:justify-start">
            {['computer science', 'mathematics'].map((t) => (
              <span
                key={t}
                className="text-[9px] tracking-[0.1em] uppercase text-gray-700 border border-gray-800 px-2 py-0.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-2.5 justify-center lg:justify-start">
            <a
              href="https://github.com/ashuie"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full border border-gray-800 text-gray-600 hover:border-pink-300/50 hover:text-pink-300 transition-all duration-300"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashleycfeng"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full border border-gray-800 text-gray-600 hover:border-pink-300/50 hover:text-pink-300 transition-all duration-300"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href="mailto:ashley.c.feng@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-full border border-gray-800 text-gray-600 hover:border-pink-300/50 hover:text-pink-300 transition-all duration-300"
            >
              <HiOutlineMail size={16} />
            </a>
          </div>
        </aside>

        {/* Right: window */}
        <SiteWindow />
      </motion.div>
    </div>
  )
}
