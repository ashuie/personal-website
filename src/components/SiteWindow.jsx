import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const tabs = [
  { key: 'about', label: 'about' },
  { key: 'projects', label: 'projects' },
  { key: 'contact', label: 'contact' },
]

export default function SiteWindow() {
  const [active, setActive] = useState('about')

  return (
    <div className="w-full flex-1 min-w-0 rounded-2xl overflow-hidden border border-gray-800/50 bg-[#0d0f14] shadow-2xl shadow-black/60 flex flex-col">

      {/* Chrome bar */}
      <div className="flex items-center gap-3 sm:gap-5 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-gray-800/50 bg-[#0a0c11]">

        {/* macOS traffic lights */}
        <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]/75" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]/75" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]/75" />
        </div>

        {/* Tabs */}
        <div className="flex items-center flex-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className="flex-1 sm:flex-none relative px-1 sm:px-4 py-1.5 rounded-md group"
            >
              {active === tab.key && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-md bg-pink-300/[0.08] border border-pink-300/[0.15]"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <span
                className={`relative text-[9px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.22em] uppercase transition-colors duration-200 ${
                  active === tab.key
                    ? 'text-pink-300'
                    : 'text-gray-600 group-hover:text-gray-400'
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Resume */}
        <a
          href="/2026_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex flex-shrink-0 items-center gap-1 text-[10px] tracking-[0.22em] uppercase text-gray-700 hover:text-pink-300 transition-colors duration-200"
        >
          resume <span className="text-[11px]">↗</span>
        </a>
      </div>

      {/* Content */}
      <div className="h-[52vh] sm:h-[60vh] lg:h-[70vh] overflow-y-auto flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={`w-full min-h-full flex flex-col ${active !== 'projects' ? 'justify-center' : ''}`}
          >
            {active === 'about' && <About />}
            {active === 'projects' && <Projects />}
            {active === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  )
}
