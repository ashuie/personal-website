import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#121212] text-gray-100 font-sans">
        <header className="flex justify-between items-center px-8 py-5 border-b border-gray-700 sticky top-0 bg-[#121212] z-50">
          <div className="flex items-center space-x-3">
            <span className="text-lg">{'{'} ashley feng {'}'}</span>
          </div>
          <nav className="flex space-x-8 text-sm md:text-base font-medium">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative pb-1 transition-colors duration-200 ${
                  isActive ? 'text-pink-300' : 'hover:text-pink-300 text-gray-300'
                } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-pink-300 after:origin-left after:transition-transform after:duration-300 ${
                  isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
                }`
              }
            >
              home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `relative pb-1 transition-colors duration-200 ${
                  isActive ? 'text-pink-300' : 'hover:text-pink-300 text-gray-300'
                } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-pink-300 after:origin-left after:transition-transform after:duration-300 ${
                  isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
                }`
              }
            >
              projects
            </NavLink>
            <a
              href="/2025_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative pb-1 transition-colors duration-200
                text-gray-300 hover:text-pink-300
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
                after:scale-x-0 after:bg-pink-300 after:origin-left
                after:transition-transform after:duration-300
                hover:after:scale-x-100
              `}
            >
              resume
            </a>
          </nav>
        </header>

        <main className="flex-grow flex items-center justify-center px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
