import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className, size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Foundational Pillar (Left Semi-circular segment) */}
      <path
        d="M40 90C18.5 88 5 70 5 45.5C5 21 18.5 3 40 1V90Z"
        fill="currentColor"
        className="text-[#000049]"
      />
      {/* Balanced Expansion (Top Right Quadrant) */}
      <path
        d="M51 1V43C51 46.866 54.134 50 58 50H91C91 22.938 73.062 5 51 1Z"
        fill="currentColor"
        className="text-[#000049]"
      />
      {/* Focal Dot (Bottom Right Electric Lime Circle) */}
      <circle
        cx="73"
        cy="75"
        r="18"
        fill="#C6FF00"
      />
    </svg>
  );
}
