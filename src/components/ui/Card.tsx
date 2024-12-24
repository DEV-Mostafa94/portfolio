import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-gray-700/50 p-8 rounded-xl backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}