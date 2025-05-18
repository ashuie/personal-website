import WindowTab from './components/WindowTab'
import Intro from './components/Intro'
import { motion } from 'framer-motion';

function App() {
  return (
    <div className = "bg-[#121212] text-gray-200 w-full h-full min-h-screen font-sans px-8 py-8 justify-center flex items-center">
        
        <div className="max-w-full px-4 mx-auto flex flex-col md:flex-row items-center md:items-center gap-12">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
            <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
            
            <Intro/>
            </motion.main>
            </div>
            <WindowTab/>

            
        </div>
     </div>);
}

export default App;
