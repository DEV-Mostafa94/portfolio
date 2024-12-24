import React from 'react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { Card } from './ui/Card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export function Experience() {
  const jobs: Job[] = [
    {
      title: "Technical Support Specialist",
      company: "Telecom Egypt",
      period: "March 2024 - Present",
      location: "New Capital, Egypt",
      responsibilities: [
        "Lead customer support initiatives for technical issue resolution",
        "Collaborate with supervisors on complex technical challenges",
        "Implement systematic approach to problem diagnosis",
        "Maintain detailed documentation of customer interactions"
      ]
    },
    {
      title: "WordPress Developer",
      company: "Awraquna Company",
      period: "November 2023 - March 2024",
      location: "Dmam, Saudi Arabia",
      responsibilities: [
        "Developed custom WordPress solutions for enterprise clients",
        "Implemented advanced plugin integrations and customizations",
        "Optimized site performance and user experience",
        "Created responsive, mobile-first designs"
      ]
    },
    {
      title: "Front-End Developer",
      company: "El Rowad Construction Company",
      period: "June 2023 - November 2023",
      location: "New Capital, Egypt",
      responsibilities: [
        "Built dynamic web applications using modern JavaScript frameworks",
        "Implemented responsive designs and interactive features",
        "Optimized applications for maximum speed and scalability",
        "Integrated SEO best practices for improved visibility"
      ]
    }
  ];

  return (
    <Section>
      <SectionTitle 
        title="Professional Experience"
        subtitle="A track record of delivering impactful solutions across different roles"
      />
      
      <div className="max-w-4xl mx-auto space-y-8">
        {jobs.map((job, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full" />
            
            <div className="relative">
              <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-300">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {job.company}
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  {job.period}
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  {job.location}
                </div>
              </div>
              
              <ul className="space-y-3">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}