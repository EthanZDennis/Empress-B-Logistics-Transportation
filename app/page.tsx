import React from 'react';

export default function Homepage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* Navigation - Highlighting Brand Identity */}
      <nav className="bg-[#001f3f] text-white p-6 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold tracking-tight">Empress B Logistics</h1>
        <button className="bg-[#FFDC00] text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition">
          Client Portal
        </button>
      </nav>

      {/* Hero Section - The "Mike's Story" Connection */}
      <header className="py-20 px-10 text-center bg-white border-b">
        <h2 className="text-5xl font-extrabold mb-6">Stop Searching. Start Driving.</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
          Because you waste hours on load boards instead of driving, you lose money. 
          So, we handle the negotiations while you stay on the road[cite: 189, 192].
        </p>
        <button className="bg-[#FFDC00] text-black text-xl px-10 py-4 rounded-lg font-bold shadow-xl hover:scale-105 transition">
          Get a Free Route Analysis
        </button>
      </header>

      {/* The Three Products - Detailed Value Propositions */}
      <section className="p-16 grid md:grid-cols-3 gap-10">
        
        {/* Solo-Pro - The Professional Partner */}
        <div className="bg-white p-8 rounded-2xl shadow-md border-t-8 border-[#001f3f]">
          <h3 className="text-2xl font-bold mb-4">Solo-Pro Package</h3>
          <p className="mb-6">Because single drivers run the business alone, they get overwhelmed by negotiations. So, we act as your back office[cite: 197, 199].</p>
          <ul className="text-sm space-y-2 mb-6">
            <li>• Full-service Dispatching</li>
            <li>• 24/7 Virtual Support</li>
          </ul>
        </div>

        {/* Fleet-Command - The Aggressive Scaler */}
        <div className="bg-white p-8 rounded-2xl shadow-md border-t-8 border-[#FF851B]">
          <h3 className="text-2xl font-bold mb-4">Fleet-Command Suite</h3>
          <p className="mb-6">Because fleet owners spend nights on paperwork, they lack time to grow. So, we automate your back office[cite: 206, 208].</p>
          <ul className="text-sm space-y-2 mb-6">
            <li>• Invoicing & Compliance</li>
            <li>• Scalable Logistics</li>
          </ul>
        </div>

        {/* Lane-Alert - The Data Hunter */}
        <div className="bg-white p-8 rounded-2xl shadow-md border-t-8 border-black">
          <h3 className="text-2xl font-bold mb-4">Lane-Alert SMS</h3>
          <p className="mb-6">Because high-paying loads disappear in seconds, you need speed. So, we text you the second they drop[cite: 215, 217].</p>
          <ul className="text-sm space-y-2 mb-6">
            <li>• Instant SMS Notifications</li>
            <li>• Lane-Specific Tracking</li>
          </ul>
        </div>

      </section>

      {/* Footer - Legal Protections */}
      <footer className="bg-slate-900 text-slate-400 p-10 text-center text-sm">
        <p>© 2026 Empress B Logistics & Transportation, LLC. All Rights Reserved[cite: 224].</p>
        <p className="mt-2">Legal: Trademarks filed for Solo-Pro, Fleet-Command, and Lane-Alert[cite: 224].</p>
      </footer>
    </div>
  );
}