import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Gameboy Emulator',
    subtitle: 'C++, OpenGL, SDL',
    description: 'Emulator with Gameboy Original\'s 500+ instruction set & cycle-accurate graphics, emulates any licensed ROM like Pokemon Red and Super Mario Land',
    link: 'https://github.com/sharmaromir/GameboyEmulator'
  },
  {
    title: 'SkinSage',
    subtitle: 'Python, SQLite, Selenium, NumPy, MatPlotLib, Flask',
    description: 'Full-stack application using a content-based recommender system & webscraped data to model skincare products by ingredients and skin type and generate recommendations using cosine similarity',
    link: 'https://github.com/ashuie/skinsage'
  },
  {
    title: 'Tsoogle',
    subtitle: 'Java, Attoparser',
    description: 'Web server displaying page results for tokenized search queries from 10,000+ pages crawled, supported advanced syntax with recursive parse trees',
    link: 'https://github.com/ashuie/tsoogle'
  },
  {
    title: 'x86-64 Compiler & Interpreter',
    subtitle: 'C++, x86-64',
    description: 'Compiler & interpreter for a Python-like programming language with loops, functions, and variable scoping using abstract syntax trees, made compiler optimizations including constant folding and tail-call recursion',
    link: 'https://github.com/ashuie/'
  },
  {
    title: 'Pipelined Processor',
    subtitle: 'Verilog',
    description: 'Processor with memory and registers and implemented 16b instruction set with a 5-stage pipeline supporting flushing, stalling, and branch prediction',
    link: 'https://github.com/ashuie/'
  },
  {
    title: 'Boggle',
    subtitle: 'Java, Swing',
    description: '4x4 multiplayer word search game with GUI and recursive pathfinding algorithm to detect all possible words on a randomized board',
    link: 'https://github.com/ashuie/'
  },
];

export default function Projects() {
  return (
    <motion.main
      className="max-w-4xl mx-auto px-4 py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold mb-8 text-center">projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-lg p-6 hover:scale-105 hover:border-pink-300 transition transform backdrop-blur bg-gray-800 bg-opacity-70 shadow-lg"
          >

            <h3 className="text-xl font-semibold mb-1 text-center">{project.title}</h3>

            <p className="text-sm text-pink-300 text-center mb-3">{project.subtitle}</p>

            <p className="text-gray-400 text-sm">{project.description}</p>
          </a>
        ))}
      </div>
    </motion.main>
  );
}
