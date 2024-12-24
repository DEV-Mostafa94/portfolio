import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { Card } from './ui/Card';

interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  color: string;
}

export function Contact() {
  const contactMethods: ContactMethod[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mostafa.yassin94@outlook.com",
      href: "mailto:mostafa.yassin94@outlook.com",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+20 150 870 6870",
      href: "tel:+201508706870",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Cairo, Egypt",
      href: "#",
      color: "bg-green-500 hover:bg-green-600"
    }
  ];

  return (
    <Section>
      <SectionTitle 
        title="Get in Touch"
        subtitle="Let's discuss your next project or opportunity"
      />
      
      <div className="max-w-4xl mx-auto">
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="group text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${method.color} mb-4 transition-transform group-hover:scale-110`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.label}</h3>
                <p className="text-gray-300">{method.value}</p>
              </a>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}