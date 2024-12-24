import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { Card } from './ui/Card';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  url: string;
  icon: string;
  color: string;
}

export function Certifications() {
  const certifications: Certification[] = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Valid: 2024 - 2027",
      url: "https://www.credly.com/badges/eebc25e1-cf91-4509-9d01-3ceb9f6a6402/linked_in_profile",
      icon: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      color: "from-[#FF9900] to-[#232F3E]"
    },
    {
      title: "Professional Front-End Developer",
      issuer: "Udacity",
      date: "2022",
      url: "https://www.udacity.com/certificate/e/62d7c02a-8445-11ec-b6ac-3705c6eccc52",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Udacity_logo.png",
      color: "from-[#01b3e3] to-[#2e3d49]"
    }
  ];

  return (
    <Section dark>
      <SectionTitle 
        title="Certifications"
        subtitle="Professional certifications and achievements"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="h-full relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative flex items-start gap-6">
                <img 
                  src={cert.icon} 
                  alt={cert.title}
                  className="w-16 h-16 object-contain"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <p className="text-gray-300">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mt-2">{cert.date}</p>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </Section>
  );
}