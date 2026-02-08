import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.main
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        >
        <div className="w-full px-6 py-8 space-y-6 justify-center">
            <section>
                <h2 className="text-2xl font-semibold mb-3">about</h2>
                <p className="text-gray-400 leading-relaxed">
                Hi! I'm Ashley, a Turing Scholar student at UT Austin studying
                computer science and math. I'm interested in databases, distributed systems, and 
                theory.<br/>
                Some student orgs I'm involved with include Turing Scholars Student Association,
                Directed Reading Program, Women in Computer Science, and volunteering with CS
                Roadshow and CS Ambassadors.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">current</h2>
                <p className="text-gray-400 leading-relaxed">
                My coursework currently includes algorithms honors, machine learning honors, energy efficient computing,
                real analysis, and stochastic processes. <br/>

                I am incoming Summer 2026 as a Software Engineer Intern at DoorDash, and incoming Fall 2026 as a 
                Software Development Engineer Intern at Amazon Web Services - Annapurna Labs.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">get in touch</h2>
                <p className="text-gray-400 leading-relaxed">
                Please reach out with any opportunities!
                </p>
            </section>
            </div>
            </motion.main>
    );
}