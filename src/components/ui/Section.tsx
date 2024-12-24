import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ children, className = '', dark = false }: SectionProps) {
  return (
    <section className={`py-24 ${dark ? 'bg-gray-800/50' : ''} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}