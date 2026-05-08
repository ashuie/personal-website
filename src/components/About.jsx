import { motion } from 'framer-motion'

const courses = [
  'Algorithms Honors',
  'Machine Learning Honors',
  'Energy Efficient Computing',
  'Real Analysis',
  'Stochastic Processes',
]

const ASCII = `
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣴⡟⠁⠀⠙⢷⣄⠀⠀⠀⠀⠀⣀⣤⠶⢤⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⠏⠀⠀⠀⠀⠈⠛⠛⠻⠶⡴⠟⠉⠀⠀⠀⠹⣧⠀⠀⠀
⠀⠀⠀⢀⣤⠖⠃⠀⠀⠀⠀⠀⠀⣠⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡀⠀⠀
⠀⢀⣼⠟⠙⠳⠶⣦⣤⣤⣤⠶⠞⠋⠛⢷⣄⣀⠀⠀⠀⠀⠀⠀⣹⠁⠀⠀
⢠⡿⠁⠀⠀⠀⠀⠀⠀⠓⠀⠀⠀⠀⠀⠀⣈⡙⠻⠶⠶⣤⣤⡴⠿⣷⡄⠀
⣿⠁⠀⠀⠀⠀⠀⢀⣤⣤⡄⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡄
⣿⠀⠠⣢⢉⡁⠢⢿⣿⣾⡟⠀⠀⠀⠀⢰⣿⣍⣷⠀⠀⠀⠀⠀⠀⠀⢹⣧
⣿⡀⠠⡋⠛⠽⣧⠀⠉⠉⠀⣀⢠⡄⢀⠈⠛⠿⡫⣠⣩⣑⣄⠀⠀⠀⢸⡿
⠸⣷⡀⠈⠉⠉⠀⠀⠀⠀⠀⠈⣿⣿⠏⠀⠀⠀⠃⡉⠉⣙⠝⣀⠀⢀⣿⠇
⠀⣘⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠨⡥⠀⠀⠀⠀⠀⠀⠀⢀⡾⠛⣷⣼⠏⠀
⠘⢿⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⣴⡿⠃⠀⠀
⠀⠀⠀⠁⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡆⠀⠀⠀⠀
⠀⠀⠀⠀⢻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣥⡶⢶⣄⠀
⠀⠀⠀⠀⠀⢻⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣇⣀⣠⡾⠋⠀
⠀⠀⠀⠀⠀⢾⣇⣀⣴⢦⣤⣀⣀⣀⣀⡀⠀⣠⣤⠾⠛⠁⠉⠉⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠉⠉⠉⠉⢿⣄⣼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function About() {
  return (
    <div className="w-full px-4 sm:px-8 py-5 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

        {/* Text content */}
        <div className="lg:col-span-3">
          <motion.h2 {...up(0)} className="font-serif text-3xl text-gray-100 mb-5 leading-tight">
            nice to{' '}
            <span className="italic text-pink-300">meet you!</span>
          </motion.h2>

          <motion.p {...up(0.08)} className="text-sm text-gray-400 leading-relaxed mb-3">
            Hi! I'm Ashley, a Turing Scholar student at UT Austin studying computer science and math.
            I'm interested in databases, distributed systems, and theory.
          </motion.p>
          <motion.p {...up(0.12)} className="text-sm text-gray-400 leading-relaxed mb-7">
            I'm involved in Turing Scholars Student Association, Directed Reading Program,
            Women in Computer Science, and volunteering with CS Roadshow and CS Ambassadors.
          </motion.p>

          <motion.div {...up(0.16)}>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-700 mb-3">
              currently studying
            </p>
            <div className="flex flex-wrap gap-1.5">
              {courses.map((c) => (
                <span
                  key={c}
                  className="text-xs px-2.5 py-1 rounded-full border border-gray-800 text-gray-500 hover:border-pink-300/40 hover:text-pink-300 transition-all duration-300 cursor-default"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...up(0.2)} className="mt-6">
            <a
              href="/2026_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-pink-300/70 hover:text-pink-300 transition-colors duration-300 group"
            >
              view resume
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>

        {/* ASCII art */}
        <motion.div {...up(0.1)} className="hidden lg:block lg:col-span-2">
          <div className="rounded-xl flex flex-col items-center justify-center py-2">
            <pre className="text-[10px] leading-[1.6] text-pink-300/75 font-mono select-none">
              {ASCII}
            </pre>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
