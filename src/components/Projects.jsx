import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    num: '01',
    title: 'Gameboy Emulator',
    tags: ['C++', 'OpenGL', 'SDL'],
    description:
      "Emulator with Gameboy Original's 500+ instruction set & cycle-accurate graphics, runs licensed ROMs like Pokémon Red and Super Mario Land.",
    link: 'https://github.com/sharmaromir/GameboyEmulator',
  },
  {
    num: '02',
    title: 'SkinSage',
    tags: ['Python', 'SQLite', 'Selenium', 'NumPy', 'Flask'],
    description:
      'Full-stack app using a content-based recommender system & web-scraped data to model skincare products by ingredients and generate recommendations via cosine similarity.',
    link: 'https://github.com/ashuie/skinsage',
  },
  {
    num: '03',
    title: 'Tsoogle',
    tags: ['Java', 'Attoparser'],
    description:
      'Web server displaying results for tokenized search queries from 10,000+ crawled pages, with advanced syntax support via recursive parse trees.',
    link: 'https://github.com/ashuie/tsoogle',
  },
  {
    num: '04',
    title: 'x86-64 Compiler',
    tags: ['C++', 'x86-64'],
    description:
      'Compiler & interpreter for a Python-like language with loops, functions, and variable scoping using ASTs; includes constant folding and tail-call recursion optimizations.',
    link: 'https://github.com/ashuie/',
  },
  {
    num: '05',
    title: 'Pipelined Processor',
    tags: ['Verilog'],
    description:
      'Processor with a 16b instruction set running a 5-stage pipeline with flushing, stalling, and branch prediction.',
    link: 'https://github.com/ashuie/',
  },
  {
    num: '06',
    title: 'Boggle',
    tags: ['Java', 'Swing'],
    description:
      '4×4 multiplayer word search game with GUI and a recursive pathfinding algorithm detecting all valid words on a randomized board.',
    link: 'https://github.com/ashuie/',
  },
]

function Card({ p, i }) {
  return (
    <motion.a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      // Pure opacity fade — no vertical shift so cards don't jump on tab switch
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, delay: i * 0.05 }}
      className="group border border-gray-900 rounded-xl p-5 hover:border-pink-300/25 transition-all duration-300 bg-[#0a0c11] hover:bg-[#0d1016] flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-[9px] tracking-widest uppercase text-gray-800 font-mono">
          {p.num}
        </span>
        <FaGithub
          size={12}
          className="text-gray-800 group-hover:text-pink-300/60 transition-colors duration-300"
        />
      </div>
      <h3 className="font-serif text-[17px] text-gray-300 mb-2 group-hover:text-pink-300 transition-colors duration-300 leading-snug">
        {p.title}
      </h3>
      <p className="text-[11px] text-gray-600 leading-relaxed mb-4 flex-1">
        {p.description}
      </p>
      <div className="flex flex-wrap gap-1 mt-auto">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-[9px] px-2 py-0.5 rounded text-pink-400/50 bg-pink-400/[0.04] border border-pink-400/[0.07]"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <div className="w-full px-4 sm:px-6 py-5 sm:py-7">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="font-serif text-3xl text-gray-100 mb-6"
      >
        things I've{' '}
        <span className="italic text-pink-300">built</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((p, i) => (
          <Card key={p.title} p={p} i={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.35 }}
        className="mt-8 flex justify-center"
      >
        <a
          href="https://github.com/ashuie"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-gray-700 hover:text-pink-300 transition-colors duration-300"
        >
          <FaGithub size={11} />
          more on github
        </a>
      </motion.div>
    </div>
  )
}
