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
    <div className="w-full md:w-3/4 rounded-lg overflow-hidden border border-gray-600 bg-[#1a1d23] shadow-xl  transition-all duration-300">
      <div className="flex bg-[#2e3440] text-sm font-mono text-gray-300">
      {tabs.map((tab) =>
        tab.internal ? (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 border-r border-gray-600 transition-all duration-200
              ${activeTab === tab.key ? 'bg-[#1a1d23] text-pink-300' : 'hover:text-pink-300'}`}
          >
            {tab.label}
          </button>
        ) : (
          <a
            key={tab.key}
            href={tab.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 border-r border-gray-600 hover:text-pink-300 transition-all duration-200"
          >
          <span className="inline-flex gap-2">{tab.label} <FiExternalLink className="relative top-[2px]"/></span>
          
          </a>
        )
      )}
        <div className="ml-auto flex items-center space-x-3 px-4 py-2 text-gray-400 text-xl">
          <button className="hover:text-pink-300 cursor-pointer">—</button>       {/* Minimize */}
          <button className="hover:text-pink-300 cursor-pointer">□</button>       {/* Maximize */}
          <button className="hover:text-pink-300 cursor-pointer">×</button>        {/* Close */}
        </div>
      </div>

      {/* Tab content */}
      <div key={activeTab} className="p-6 h-[70vh] text-gray-200 font-sans overflow-y-auto ">
        {activeTab === 'home' && <div><About/></div>}
        {activeTab === 'projects' && <div><Projects/></div>}
        {activeTab === 'resume'}
      </div>
    </div>
  );
}
