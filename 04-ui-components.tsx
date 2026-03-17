/**
 * AcchaDoc UI Component Library
 * Ready-to-use React + Tailwind components
 */

import React from 'react';

// ==========================================
// BUTTONS
// ==========================================

export const ButtonPrimary = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-emerald-500 hover:bg-emerald-600
        text-white font-medium
        px-8 py-4 rounded-lg
        shadow-sm hover:shadow-md
        transition-all duration-200
        hover:-translate-y-0.5
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export const ButtonSecondary = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-cyan-600 hover:bg-cyan-700
        text-white font-medium
        px-8 py-4 rounded-lg
        shadow-sm hover:shadow-md
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export const ButtonOutline = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        border-2 border-cyan-600 text-cyan-600
        hover:bg-cyan-50
        font-medium px-8 py-4 rounded-lg
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// ==========================================
// BADGES & PILLS
// ==========================================

export const Badge = ({ children, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    accent: 'bg-amber-100 text-amber-700 border-amber-200',
  };

  return (
    <span className={`
      inline-flex items-center
      px-3 py-1 rounded-full
      text-sm font-medium
      border
      ${variants[variant]}
    `}>
      {children}
    </span>
  );
};

export const TrustBadge = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border-2 border-cyan-600 rounded-lg">
      <span className="text-cyan-600 text-xl">{icon}</span>
      <span className="text-gray-900 font-medium text-sm">{text}</span>
    </div>
  );
};

// ==========================================
// CARDS
// ==========================================

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-white rounded-xl p-6
      border border-gray-200
      shadow-sm hover:shadow-md
      transition-shadow duration-200
      ${className}
    `}>
      {children}
    </div>
  );
};

export const PriceCard = ({ title, price, features, ctaText, highlighted = false }) => {
  return (
    <div className={`
      bg-white rounded-xl p-8
      border-2
      ${highlighted ? 'border-emerald-500 shadow-lg' : 'border-gray-200'}
      transition-all duration-200
      hover:shadow-xl
    `}>
      {highlighted && (
        <Badge variant="success" className="mb-4">Most Popular</Badge>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-bold text-gray-900">₹{price}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-emerald-500 mt-1">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <ButtonPrimary className="w-full">
        {ctaText}
      </ButtonPrimary>
    </div>
  );
};

export const ProcessCard = ({ stepNumber, title, description, icon }) => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center text-center">
        {/* Step Number Badge */}
        <div className="w-12 h-12 rounded-full bg-cyan-600 text-white font-bold text-xl flex items-center justify-center mb-4">
          {stepNumber}
        </div>

        {/* Icon */}
        <div className="text-4xl mb-4">{icon}</div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// ==========================================
// INPUT FIELDS
// ==========================================

export const Input = ({ label, type = 'text', placeholder, value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          px-4 py-3 rounded-lg
          border-2
          ${error ? 'border-red-500' : 'border-gray-300'}
          focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-200
          transition-colors
          text-gray-900
        `}
      />
      {error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </div>
  );
};

// ==========================================
// ALERTS & NOTIFICATIONS
// ==========================================

export const Alert = ({ type = 'info', children }) => {
  const types = {
    success: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-500',
      text: 'text-emerald-900',
      icon: '✓'
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-500',
      text: 'text-red-900',
      icon: '✕'
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-500',
      text: 'text-amber-900',
      icon: '⚠'
    },
    info: {
      bg: 'bg-cyan-50',
      border: 'border-cyan-500',
      text: 'text-cyan-900',
      icon: 'ℹ'
    }
  };

  const style = types[type];

  return (
    <div className={`
      ${style.bg} ${style.text}
      border-l-4 ${style.border}
      p-4 rounded-r-lg
      flex items-start gap-3
    `}>
      <span className="text-xl">{style.icon}</span>
      <div className="flex-1">{children}</div>
    </div>
  );
};

// ==========================================
// HERO SECTION COMPONENT EXAMPLE
// ==========================================

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Badge variant="success" className="mb-6">
          ✓ NMC Registered Doctors
        </Badge>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Medical Certificate in 2 Hours.{' '}
          <span className="text-emerald-500">Accha?</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Sick leave, fitness certificate, or Form 1A. Delivered to WhatsApp by
          NMC-registered doctors. ₹199 onwards.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonPrimary>
            Get My Certificate
          </ButtonPrimary>
          <ButtonOutline>
            See How It Works
          </ButtonOutline>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <TrustBadge icon="✓" text="NMC Registered" />
          <TrustBadge icon="🔒" text="100% Confidential" />
          <TrustBadge icon="⚡" text="2-Hour Delivery" />
        </div>
      </div>
    </section>
  );
};

// ==========================================
// USAGE EXAMPLES
// ==========================================

/*
// Primary CTA
<ButtonPrimary onClick={() => console.log('clicked')}>
  Get Certificate Now
</ButtonPrimary>

// Price Card
<PriceCard
  title="Sick Leave Certificate"
  price="199"
  features={[
    "Valid for 1-3 days leave",
    "Doctor consultation via call",
    "Delivered to WhatsApp in 2 hours",
    "NMC-registered doctor signature"
  ]}
  ctaText="Get Sick Leave Certificate"
  highlighted={true}
/>

// Process Step
<ProcessCard
  stepNumber={1}
  icon="📱"
  title="Fill Quick Form"
  description="Tell us what certificate you need. Takes 2 minutes."
/>

// Success Alert
<Alert type="success">
  <strong>Certificate Ready!</strong> Your certificate has been sent to WhatsApp.
</Alert>
*/
