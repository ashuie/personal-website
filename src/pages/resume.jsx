import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center px-4 py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <p className="text-gray-400 mb-8 max-w-xl">
        You can view or download my resume using the button below.
      </p>
      <a
        href="../static/YourName_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition"
      >
        View Resume
      </a>
    </motion.main>
  );
}
