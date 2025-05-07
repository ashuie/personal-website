import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <div className="bg-[#121212] text-gray-200 font-sans px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-12">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
            <h1 className="text-3xl font-extrabold mb-2 tracking-tight text-pink-200">ashley feng</h1>
            <p className="text-lg text-gray-400 mb-4">Turing Scholar at UT Austin, CS + Math</p>

            <div className="flex gap-4 mt-2">
                <a
                href="https://github.com/ashuie"
                className="group rounded-full p-3 bg-gray-800 hover:bg-pink-300 transition-colors duration-500"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub className="h-6 w-6 text-gray-200 group-hover:text-white transition" />
                </a>
                <a
                href="https://www.linkedin.com/in/ashleycfeng"
                className="group rounded-full p-3 bg-gray-800 hover:bg-pink-300 transition-colors duration-500"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaLinkedin className="h-6 w-6 text-gray-200 group-hover:text-white transition" />
                </a>
                <a
                href="mailto:ashley.c.feng@gmail.com"
                className="group rounded-full p-3 bg-gray-800 hover:bg-pink-300 transition-colors duration-500"
                aria-label="Email"
                >
                <HiOutlineMail className="h-6 w-6 text-gray-200 group-hover:text-white transition" />
                </a>
            </div>
            </div>

            {/* Right side: About + Focus + Contact */}
            <div className="w-full md:w-2/3 space-y-12">
            <section>
                <h2 className="text-2xl font-semibold mb-3">about</h2>
                <p className="text-gray-400 leading-relaxed">
                Hi! I'm Ashley, a current student in the Turing Scholars Program at UT studying
                computer science and mathematics. I'm interested in distributed systems, 
                networking, and cryptography.<br />
                Some of the student orgs I'm involved with include Turing Scholars Student Association,
                UTCS Directed Reading Program, Women in Computer Science, and volunteering with UTCS
                Roadshow. 
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">current focus</h2>
                <p className="text-gray-400 leading-relaxed">
                - Working on concurrency control protocols and retry policies for a distributed
                CXL memory database at the UT Data Systems lab <br/>
                - Completing coursework in Operating Systems, Computer Science Ethics, and Game Theory
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">get in touch</h2>
                <p className="text-gray-400 leading-relaxed">
                I'm currently seeking software engineering internship roles for summer 2026.
                Please reach out with any opportunities!
                </p>
            </section>
            </div>
        </div>
     </div>
     </motion.main>);
}



      