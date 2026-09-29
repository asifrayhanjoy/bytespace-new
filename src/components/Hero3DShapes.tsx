import React from 'react';

// 1. Vibrant Lime-Yellow 3D Coiled Spring / Spiral (Top-Left)
export const LimeWavyShape: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter ${className}`}
  >
    <defs>
      {/* Rich 3D Tube Lighting Gradient */}
      <linearGradient id="limeTubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F9FFB3" />
        <stop offset="25%" stopColor="#E2FF00" />
        <stop offset="60%" stopColor="#CCFF00" />
        <stop offset="85%" stopColor="#9BD500" />
        <stop offset="100%" stopColor="#689E00" />
      </linearGradient>

      {/* Top Specular Highlight Gradient */}
      <linearGradient id="limeHighlightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="60%" stopColor="#E2FF00" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#A3DF00" stopOpacity="0" />
      </linearGradient>

      {/* Soft Drop Shadow for 3D depth */}
      <filter id="limeDropShadow" x="-20%" y="-20%" width="160%" height="160%">
        <feDropShadow dx="6" dy="12" stdDeviation="10" floodColor="#183000" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#limeDropShadow)">
      {/* 3D Tube Base Shadow Path */}
      <path
        d="M 20 40 C 130 20, 220 50, 180 95 C 130 140, 20 110, 30 170 C 140 140, 210 180, 170 225 C 120 270, 10 240, 20 300 C 120 270, 190 310, 150 355"
        stroke="#476800"
        strokeWidth="48"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.3"
        transform="translate(4, 10)"
      />

      {/* Main 3D Tube Body */}
      <path
        d="M 20 40 C 130 20, 220 50, 180 95 C 130 140, 20 110, 30 170 C 140 140, 210 180, 170 225 C 120 270, 10 240, 20 300 C 120 270, 190 310, 150 355"
        stroke="url(#limeTubeGrad)"
        strokeWidth="46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Glossy Top Specular Highlight Layer */}
      <path
        d="M 20 40 C 130 20, 220 50, 180 95 C 130 140, 20 110, 30 170 C 140 140, 210 180, 170 225 C 120 270, 10 240, 20 300 C 120 270, 190 310, 150 355"
        stroke="url(#limeHighlightGrad)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-6, -6)"
      />
    </g>
  </svg>
);

// 2. White 3D Coiled Spring / Spiral (Bottom-Right & Middle)
export const WhiteWavyShape: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter ${className}`}
  >
    <defs>
      <linearGradient id="whiteTubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="45%" stopColor="#F8FAFC" />
        <stop offset="78%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>

      <linearGradient id="whiteHighlightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>

      <filter id="whiteDropShadow" x="-20%" y="-20%" width="160%" height="160%">
        <feDropShadow dx="4" dy="10" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.3" />
      </filter>
    </defs>

    <g filter="url(#whiteDropShadow)">
      <path
        d="M 20 35 C 110 15, 180 40, 140 85 C 90 125, 10 95, 20 150 C 110 120, 170 155, 130 200 C 80 240, 10 210, 20 265 C 100 240, 160 275, 120 310"
        stroke="url(#whiteTubeGrad)"
        strokeWidth="38"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M 20 35 C 110 15, 180 40, 140 85 C 90 125, 10 95, 20 150 C 110 120, 170 155, 130 200 C 80 240, 10 210, 20 265 C 100 240, 160 275, 120 310"
        stroke="url(#whiteHighlightGrad)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-5, -5)"
      />
    </g>
  </svg>
);

// 4. White 3D Donut / Torus Ring (Bottom-Left)
export const WhiteTorusShape: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter drop-shadow-2xl ${className}`}
  >
    <defs>
      <radialGradient id="torusBody" cx="40%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#F8FAFC" />
        <stop offset="78%" stopColor="#E2E8F0" />
        <stop offset="95%" stopColor="#CBD5E1" />
        <stop offset="100%" stopColor="#94A3B8" />
      </radialGradient>
      <linearGradient id="torusInnerShadow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64748B" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    <ellipse cx="120" cy="120" rx="95" ry="65" fill="url(#torusBody)" transform="rotate(-25 120 120)" />
    <ellipse cx="120" cy="120" rx="46" ry="30" fill="#0022FF" transform="rotate(-25 120 120)" />
    <ellipse cx="120" cy="120" rx="46" ry="30" fill="url(#torusInnerShadow)" transform="rotate(-25 120 120)" />
  </svg>
);

// 5. Lime-Yellow 3D Cylinder (Top-Right)
export const LimeCylinderShape: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 180 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter drop-shadow-2xl ${className}`}
  >
    <defs>
      <linearGradient id="cylinderBody" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#EEFF77" />
        <stop offset="45%" stopColor="#CCFF00" />
        <stop offset="85%" stopColor="#8DBE00" />
        <stop offset="100%" stopColor="#648800" />
      </linearGradient>
      <linearGradient id="cylinderTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FAFFCC" />
        <stop offset="100%" stopColor="#D4FF1A" />
      </linearGradient>
    </defs>
    
    <g transform="rotate(18 90 150)">
      <path
        d="M 30 70 L 30 230 C 30 265, 150 265, 150 230 L 150 70 Z"
        fill="url(#cylinderBody)"
      />
      <ellipse cx="90" cy="70" rx="60" ry="35" fill="url(#cylinderTop)" stroke="#CCFF00" strokeWidth="2" />
    </g>
  </svg>
);

// 6. White 3D Pyramid / Cone (Middle-Right)
export const WhitePyramidShape: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter drop-shadow-2xl ${className}`}
  >
    <defs>
      <linearGradient id="pyrFaceLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F1F5F9" />
      </linearGradient>
      <linearGradient id="pyrFaceRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
      <linearGradient id="pyrBase" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#CBD5E1" />
        <stop offset="100%" stopColor="#64748B" />
      </linearGradient>
    </defs>
    
    <g transform="rotate(-8 100 120)">
      <polygon points="100,20 20,185 100,210" fill="url(#pyrFaceLeft)" />
      <polygon points="100,20 100,210 180,170" fill="url(#pyrFaceRight)" />
      <polyline points="20,185 100,210 180,170" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.6" />
    </g>
  </svg>
);
