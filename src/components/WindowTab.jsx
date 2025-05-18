import { useState, useEffect } from 'react';
import About from './About';
import Projects from './Projects';
import { FiExternalLink } from 'react-icons/fi';

export default function WindowTab() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { key: 'home', label: '~/README.md', internal: true },
    { key: 'projects', label: '~/projects.log', internal: true },
    {
      key: 'resume',
      label: '~/resume.pdf',
      internal: false,
      href: '/2025_resume.pdf', 
    },
  ];

  useEffect(() => {
    const el = document.getElementById('tab-content');
    if (el) el.scrollTop = 0;
  }, [activeTab]);


  return (
    <div className="w-full overflow-x-auto max-w-full md:w-3/4 rounded-lg overflow-hidden border border-gray-600 bg-[#1a1d23] shadow-xl  transition-all duration-300">
      <div className="grid md:grid-cols-[1fr_auto] bg-[#2e3440] text-xs md:text-sm font-mono text-gray-300 ">
      <div className="flex flex-wrap w-full">
        {tabs.map((tab) =>
          tab.internal ? (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 min-w-0 w-full md:w-auto md:flex-none truncate flex-shrink-0 px-4 md:px-8 py-4 md:py-2 border-r border-gray-600 transition-all duration-200
                ${activeTab === tab.key ? 'bg-[#1a1d23] text-pink-300' : 'hover:text-pink-300'}`}
            >
              {tab.label}
            </button>
          ) : (
            <div className="flex justify-center">
            <a
              key={tab.key}
              href={tab.href}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center justify-center px-4 md:px-8 py-2 border-r-0 border-gray-600 md:border-r hover:text-pink-300 transition-all duration-200"
            >
              <span className="flex items-center gap-1 ">
                <span className="truncate overflow-hidden">{tab.label}</span>
                <FiExternalLink className="text-xs md:text-base flex-shrink-0" />
              </span>
            </a>
            </div>
          ) 
        )}
        <div className="hidden md:flex md:ml-auto space-x-3 px-4 py-2 text-gray-400 text-sm md:text-lg">
          <button className="hover:text-pink-300 cursor-pointer">—</button>  
          <button className="hover:text-pink-300 cursor-pointer">□</button> 
          <button className="hover:text-pink-300 cursor-pointer">×</button>   
        </div>
      </div>
      </div>
        
      <div key={activeTab} className="h-[70vh] text-gray-200 overflow-hidden">
        <div className="h-full overflow-y-auto px-4 sm:px-6">
          <div className="flex flex-col min-h-full justify-start sm:justify-center">
            {activeTab === 'home' && <div><About/></div>}
            {activeTab === 'projects' && <div><Projects/></div>}
            {activeTab === 'resume'}
          </div>
        </div>
      </div>
      </div>
  );
}
