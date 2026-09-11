import React from 'react';

export default function Footer({ setCurrentPage }) {
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-lg font-bold text-white tracking-tight">Signaturely</span>
          <p className="mt-2 text-slate-400 leading-relaxed">
            Create professional email signatures without the hassle. Simple, private, and free.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Generator Guides</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => navigate('free-signature')} className="hover:text-white transition-colors">
                Email Signature Generator
              </button>
            </li>
            <li>
              <button onClick={() => navigate('gmail')} className="hover:text-white transition-colors">
                Gmail Signature Guide
              </button>
            </li>
            <li>
              <button onClick={() => navigate('outlook')} className="hover:text-white transition-colors">
                Outlook Signature Guide
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Legal & Privacy</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => navigate('privacy')} className="hover:text-white transition-colors">
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-800 text-center text-slate-500">
        &copy; 2026 Signaturely. All rights reserved.
      </div>
    </footer>
  );
}