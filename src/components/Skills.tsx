import React from 'react';
import { Code2, Layout, Cloud, Database, Palette, Wrench } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { Card } from './ui/Card';

interface Skill {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export function Skills() {
  const skills: Skill[] = [
    {
      icon: <Code2 className="w-12 h-12 text-blue-400" />,
      title: "Frontend Development",
      skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]
    },
    {
      icon: <Layout className="w-12 h-12 text-purple-400" />,
      title: "WordPress Development",
      skills: ["Theme Customization", "Plugin Integration", "PHP", "MySQL", "WooCommerce"]
    },
    {
      icon: <Cloud className="w-12 h-12 text-green-400" />,
      title: "Cloud & DevOps",
      skills: ["AWS Cloud Practitioner", "Version Control (Git)", "CI/CD", "Cloud Deployment"]
    },
    {
      icon: <Database className="w-12 h-12 text-yellow-400" />,
      title: "Backend & Database",
      skills: ["Node.js", "Express", "RESTful APIs", "MySQL", "MongoDB"]
    },
    {
      icon: <Palette className="w-12 h-12 text-pink-400" />,
      title: "UI/UX Design",
      skills: ["Responsive Design", "Mobile-First Approach", "Cross-Browser Compatibility"]
    },
    {
      icon: <Wrench className="w-12 h-12 text-indigo-400" />,
      title: "Tools & Others",
      skills: ["VS Code", "npm/yarn", "Webpack", "Vite", "Chrome DevTools"]
    }
  ];

  return (
    <Section dark>
      <SectionTitle 
        title="Technical Skills"
        subtitle="Comprehensive toolkit for modern web development"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <Card key={index}>
            <div className="mb-6">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
            <ul className="space-y-2">
              {skill.skills.map((item, idx) => (
                <li key={idx} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}