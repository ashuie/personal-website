import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Intro() {
    return (
        <div className="py-6">
        <div className="inline-block">
            <h1 className="text-3xl font-extrabold mb-2 tracking-tight text-pink-200">
                ashley feng
            </h1>
            <div className="my-2 h-0.5 bg-pink-300 animate-draw-line" />
        </div>
        <p className="text-lg text-gray-400 mb-4">Turing Scholar at UT Austin | CS + Math</p>

        <div className="flex gap-4 mt-2 justify-center md:justify-start">
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
    );
}



      