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
                Roadshow. 
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">current focus</h2>
                <p className="text-gray-400 leading-relaxed">
                - UT Data Systems Lab: Range-filtered ANN search algorithms using graph-based indexing & subgraph composition<br/>
                - Undergraduate Course Assistant: Turing CS109 <br/>
                - Coursework: Honors Operating Systems, Game Theory, Computer Science Ethics
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">get in touch</h2>
                <p className="text-gray-400 leading-relaxed">
                I'm seeking software engineering internship roles for summer 2026.
                Please reach out with any opportunities!
                </p>
            </section>
            </div>
            </motion.main>
    );
}