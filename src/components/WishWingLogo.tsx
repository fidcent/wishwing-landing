
import React from 'react';

interface WishWingLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const WishWingLogo = ({ className = '', showText = true, size = 'md' }: WishWingLogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} bg-wishwing-gradient rounded-2xl flex items-center justify-center relative overflow-hidden group`}>
        {/* Main W shape */}
        <svg 
          viewBox="0 0 32 32" 
          className="w-2/3 h-2/3 text-white fill-current transform group-hover:scale-110 transition-transform duration-300"
        >
          <path d="M6 8 L10 20 L14 12 L18 20 L22 8 L20 8 L17 16 L14 10 L11 16 L8 8 Z" />
          {/* Wing elements */}
          <circle cx="26" cy="10" r="2" className="animate-float" style={{ animationDelay: '0s' }} />
          <circle cx="24" cy="14" r="1.5" className="animate-float" style={{ animationDelay: '0.5s' }} />
          <circle cx="28" cy="16" r="1" className="animate-float" style={{ animationDelay: '1s' }} />
        </svg>
      </div>
      {showText && (
        <span className={`font-bold bg-gradient-to-r from-wishwing-green to-wishwing-blue bg-clip-text text-transparent ${textSizeClasses[size]}`}>
          WishWing
        </span>
      )}
    </div>
  );
};

export default WishWingLogo;
