import React from 'react';

export default function Homepage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans text-white">
      {/* Navigation - Integrating the AVIF Logo */}
      <nav className="bg-black border-b border-[#cfa94d]/30 p-4 flex justify-between items-center sticky top-0 z-50 shadow-2xl">
        <div className="flex items-center">
          <img 
            src="/logo.avif" 
            alt="Empress B Logistics Logo" 
            className="h-24 w-auto object-contain" 
          />
        </div>
        <button className="bg-gradient-to-r from-[#cfa94d] to-[#af8c36] text-black px-8 py-2 rounded-full font-black uppercase tracking-widest hover:scale-105 transition shadow-[0_0_20px_rgba(207,169,77,0.4)]">
          Client Portal
        </button>
      </nav>

      {/* Hero Section - The "Mike's Story" Connection with Royal Branding */}
      <header className="relative py-24 px-10 text-center overflow-hidden">
        {/* Subtle background glow to highlight the gold theme */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#cfa94d]/5 blur-[120px] rounded-full"></div>
        
        <div className="relative z-10">
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-b from-white to-[#cfa94d] bg-clip-text text-transparent">
            Stop Searching. Start Driving.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Because you waste hours on load boards instead of driving, you lose money. 
            So, we handle the negotiations while you stay on the road.
          </p>
          <button className="bg-[#cfa94d] text-black text-xl px-12 py-5 rounded-lg font-bold shadow-[0_10px_40px_rgba(207,169,77,0.3)] hover:bg-[#af8c36] transition-all transform hover:-translate-y-1">
            Get a Free Route Analysis
          </button>
        </div>
      </header>

      {/* The Three Products - Royal Gold Product Cards */}
      <section className="p-16 grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {/* Solo-Pro - The Professional Partner */}
        <div className="bg-[#111] p-8 rounded-2xl shadow-2xl border border-[#cfa94d]/20 relative group hover:border-[#cfa94d]/50 transition-all">
          <div className="h-1 w-20 bg-[#cfa94d] mb-6"></div>
          <h3 className="text-2xl font-bold mb-4 text-[#cfa94d]">Solo-Pro Package</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Because single drivers run the business alone, they get overwhelmed by negotiations. 
            So, we act as your back office.
          </p>
          <ul className="text-sm space-y-3 text-gray-500 mb-6">
            <li className="flex items-center gap-2 font-medium">• Full-service Dispatching</li>
            <li className="flex items-center gap-2 font-medium">• 24/7 Virtual Support</li>
          </ul>
        </div>

        {/* Fleet-Command - The Aggressive Scaler */}
        <div className="bg-[#111] p-8 rounded-2xl shadow-2xl border border-[#cfa94d]/20 relative group hover:border-[#cfa94d]/50 transition-all">
          <div className="h-1 w-20 bg-[#cfa94d] mb-6"></div>
          <h3 className="text-2xl font-bold mb-4 text-[#cfa94d]">Fleet-Command Suite</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Because fleet owners spend nights on paperwork, they lack time to grow. 
            So, we automate your back office.
          </p>
          <ul className="text-sm space-y-3 text-gray-500 mb-6">
            <li className="flex items-center gap-2 font-medium">• Invoicing & Compliance</li>
            <li className="flex items-center gap-2 font-medium">• Scalable Logistics</li>
          </ul>
        </div>

        {/* Lane-Alert - The Data Hunter */}
        <div className="bg-[#111] p-8 rounded-2xl shadow-2xl border border-[#cfa94d]/20 relative group hover:border-[#cfa94d]/50 transition-all">
          <div className="h-1 w-20 bg-[#cfa94d] mb-6"></div>
          <h3 className="text-2xl font-bold mb-4 text-[#cfa94d]">Lane-Alert SMS</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Because high-paying loads disappear in seconds, you need speed. 
            So, we text you the second they drop.
          </p>
          <ul className="text-sm space-y-3 text-gray-500 mb-6">
            <li className="flex items-center gap-2 font-medium">• Instant SMS Notifications</li>
            <li className="flex items-center gap-2 font-medium">• Lane-Specific Tracking</li>
          </ul>
        </div>

      </section>

      {/* Footer - Legal Protections & Citation Support */}
      <footer className="bg-black border-t border-[#cfa94d]/10 p-12 text-center text-sm text-gray-500">
        <div className="mb-6">
          <img src="/logo.avif" alt="Small Logo" className="h-12 mx-auto grayscale opacity-50" />
        </div>
        <p className="mb-2">© 2026 Empress B Logistics & Transportation, LLC. All Rights Reserved.</p>
        <p>Legal: Trademarks filed for Solo-Pro, Fleet-Command, and Lane-Alert.</p>
        <p className="mt-4 italic">Driving Excellence. Delivering Opportunity.</p>
      </footer>
    </div>
  );
}