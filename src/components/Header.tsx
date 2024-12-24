import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Section } from './ui/Section';

export function Header() {
  return (
    <Section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <div className="relative z-10 text-center">
        <div className="relative inline-block mb-8">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Mostafa Yassin"
            className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-xl object-cover"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
        </div>

        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Mostafa Yassin
        </h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-2xl font-semibold text-blue-400">
            Front-End & WordPress Developer
          </p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            AWS Certified Cloud Practitioner specializing in creating exceptional digital experiences
            with modern web technologies and cloud solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <SocialLink href="https://github.com/mo-yassin94" icon={<Github className="w-6 h-6" />} />
          <SocialLink href="https://www.linkedin.com/in/mostafa-yassin-5018b421a/" icon={<Linkedin className="w-6 h-6" />} />
          <SocialLink href="mailto:mostafa.yassin94@outlook.com" icon={<Mail className="w-6 h-6" />} />
        </div>
      </div>
    </Section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800/50 rounded-full"
    >
      {icon}
    </a>
  );
}