import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo & Free Badge */}
          <div className="flex items-center space-x-3 cursor-pointer" onclick={() => navigate('home')}>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Signaturely
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              FREE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => {
                if (currentPage !== 'home') navigate('home');
                const el = document.getElementById('builder');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => navigate('gmail')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'gmail' ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gmail
            </button>
            <button
              onClick={() => navigate('outlook')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'outlook' ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Outlook
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1">
          <button
            onClick={() => {
              if (currentPage !== 'home') navigate('home');
              setTimeout(() => {
                const el = document.getElementById('builder');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            How it works
          </button>
          <button
            onClick={() => navigate('gmail')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Gmail Guide
          </button>
          <button
            onClick={() => navigate('outlook')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Outlook Guide
          </button>
        </div>
      )}
    </header>
  );
}