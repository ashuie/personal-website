import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, delay },
})

const ASCII = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣶⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣺⠋⠀⠉⠛⢶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⢦⣜⢣⡖⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⢰⣿⣿⢣⣿⣿⢀⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⠿⠛⠉⠀⠉⠉⠛⠁⠀⠀⠙⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣼⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣧⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⣿⣏⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣄⡀⠀⠀⠀⠀⠀
⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢷⣤⡀⠀⠀
⠀⢠⣾⣿⣫⣼⣿⣿⣿⣿⣿⣿⠀⣤⡄⠀⠀⠀⢠⣶⣆⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⡄⠀
⢠⣿⣟⣷⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⡇⠀⠀⠀⠘⢿⠟⠀⠀⠀⠀⠀⠀⠀⠀⣴⢟⣷⣦
⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⢠⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⡿
⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⡏⣾⡿⠁⠀⠀⠀⠀⠀⣠⣄⠀⠀⠀⠀⠀⠀⣠⣼⠟⠁⠀
⠘⣿⣷⣯⣿⣿⣿⣿⠿⠟⣻⣽⣿⡿⢦⣤⣄⣀⣀⣠⣽⣯⣤⣤⣤⣴⣶⠿⠟⠁⠀⠀⠀
⠀⠈⠛⠿⣿⣷⣮⣴⣶⡿⠛⣡⡿⠿⠶⢾⣭⣭⣽⡿⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠉⠛⠉⠁⢀⣼⣿⣧⠄⠀⠀⠀⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣶⣦⠀⣾⡿⣿⡏⠀⠀⣷⠀⠀⠀⢀⡈⣿⣤⣶⣶⣦⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⠘⣧⣿⠀⣿⣷⣇⣰⡿⠀⢠⣾⣿⡿⣿⡋⠀⠁⢸⣷⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⠷⣿⣿⣆⡘⠻⠿⠟⠁⠀⠿⠁⠈⠀⢸⣿⠀⠀⣸⡿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠿⣶⣦⣤⣤⣀⠀⠀⠀⢀⣼⡷⠶⠿⠟⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠙⠿⢷⣶⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`

export default function Contact() {
  return (
    <div className="w-full px-4 sm:px-8 py-5 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

        {/* Left: contact content */}
        <div className="lg:col-span-3">
          <motion.h2 {...fade(0)} className="font-serif text-3xl text-gray-100 mb-2 leading-tight">
            let's{' '}
            <span className="italic text-pink-300">connect</span>
          </motion.h2>

          <motion.p {...fade(0.07)} className="text-sm text-gray-500 leading-relaxed mb-7 max-w-sm">
            I'm currently seeking opportunities across internships (Summer 2027), research opportunities, and more.
            Please reach out with any opportunities!
          </motion.p>

          <motion.a
            {...fade(0.13)}
            href="mailto:ashley.c.feng@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-pink-300/[0.06] border border-pink-300/20 text-pink-300/80 text-sm hover:bg-pink-300/[0.11] hover:border-pink-300/40 hover:text-pink-300 transition-all duration-300 group mb-7"
          >
            <HiOutlineMail size={15} />
            ashley.c.feng@gmail.com
            <span className="group-hover:translate-x-1 transition-transform duration-300 text-xs">→</span>
          </motion.a>

          <motion.div {...fade(0.19)} className="flex flex-col gap-2">
            <a
              href="https://github.com/ashuie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gray-800 text-gray-600 hover:border-pink-300/30 hover:text-pink-300 transition-all duration-300 group w-fit"
            >
              <FaGithub size={14} />
              <span className="text-xs">github.com/ashuie</span>
              <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ashleycfeng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gray-800 text-gray-600 hover:border-pink-300/30 hover:text-pink-300 transition-all duration-300 group w-fit"
            >
              <FaLinkedin size={14} />
              <span className="text-xs">linkedin.com/in/ashleycfeng</span>
              <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
            </a>
          </motion.div>
        </div>

        {/* Right: ASCII art */}
        <motion.div
          {...fade(0.1)}
          className="hidden lg:flex lg:col-span-2 items-center justify-center"
        >
          <pre className="text-[10px] leading-[1.3] tracking-tight text-pink-300/75 font-mono select-none">
            {ASCII}
          </pre>
        </motion.div>

      </div>
    </div>
  )
}
