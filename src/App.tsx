import React from 'react';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      
      <footer className="py-8 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mostafa Yassin • Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;