/**
 * AcchaDoc Icon Library
 * Duotone line icons using AcchaDoc brand colors
 */

import React from 'react';

// Base icon wrapper
const Icon = ({ children, size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

// ==========================================
// CORE ICONS
// ==========================================

export const IconCheck = ({ size, className }) => (
  <Icon size={size} className={className}>
    <polyline points="20 6 9 17 4 12" />
  </Icon>
);

export const IconCertificate = ({ size, className }) => (
  <Icon size={size} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 8h10M7 12h10M7 16h6" />
  </Icon>
);

export const IconDoctor = ({ size, className }) => (
  <Icon size={size} className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <path d="M12 12v2" />
    <path d="M10 14h4" />
  </Icon>
);

export const IconClock = ({ size, className }) => (
  <Icon size={size} className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </Icon>
);

export const IconWhatsApp = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </Icon>
);

export const IconPhone = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
);

export const IconShield = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </Icon>
);

export const IconDownload = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </Icon>
);

export const IconStar = ({ size, className }) => (
  <Icon size={size} className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </Icon>
);

export const IconCalendar = ({ size, className }) => (
  <Icon size={size} className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </Icon>
);

export const IconLock = ({ size, className }) => (
  <Icon size={size} className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Icon>
);

export const IconArrowRight = ({ size, className }) => (
  <Icon size={size} className={className}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Icon>
);

// ==========================================
// USAGE EXAMPLES WITH BRAND COLORS
// ==========================================

export const BrandIconExamples = () => {
  return (
    <div className="space-y-8">
      {/* Emerald (Success/Approval) */}
      <div>
        <h3 className="font-semibold mb-4">Success & Approval Icons (Emerald)</h3>
        <div className="flex gap-4">
          <IconCheck size={32} className="text-emerald-500" />
          <IconShield size={32} className="text-emerald-500" />
        </div>
      </div>

      {/* Cyan (Primary/Medical) */}
      <div>
        <h3 className="font-semibold mb-4">Medical & Info Icons (Cyan)</h3>
        <div className="flex gap-4">
          <IconDoctor size={32} className="text-cyan-600" />
          <IconCertificate size={32} className="text-cyan-600" />
          <IconPhone size={32} className="text-cyan-600" />
        </div>
      </div>

      {/* Amber (Warmth/Speed) */}
      <div>
        <h3 className="font-semibold mb-4">Speed & Action Icons (Amber)</h3>
        <div className="flex gap-4">
          <IconClock size={32} className="text-amber-500" />
          <IconArrowRight size={32} className="text-amber-500" />
        </div>
      </div>

      {/* Gray (Neutral) */}
      <div>
        <h3 className="font-semibold mb-4">Utility Icons (Gray)</h3>
        <div className="flex gap-4">
          <IconDownload size={32} className="text-gray-600" />
          <IconCalendar size={32} className="text-gray-600" />
          <IconLock size={32} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// ICON BUTTON COMPONENTS
// ==========================================

export const IconButton = ({ icon: Icon, label, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-cyan-600 hover:bg-cyan-700 text-white',
    success: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    outline: 'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50',
  };

  return (
    <button className={`
      flex items-center gap-2
      px-6 py-3 rounded-lg
      font-medium transition-all
      ${variants[variant]}
    `}>
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );
};

// ==========================================
// FEATURE CARD WITH ICON
// ==========================================

export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
        <Icon size={32} className="text-cyan-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
