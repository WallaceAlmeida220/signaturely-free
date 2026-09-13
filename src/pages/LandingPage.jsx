import React from 'react';
import { Search, CheckCircle2, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-blue-600 selection:text-white">
      {/* Header / Nav */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-lg">S</div>
          <span className="font-bold text-xl text-white tracking-tight">SIGCRAFT</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-sm font-medium text-slate-300 hover:text-white">Log in</a>
          <a href="/dashboard" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-lg transition-colors">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center space-y-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-xs text-blue-400">
          Built for web designers, agencies & freelancers
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Find businesses.<br />
          Build relationships.<br />
          <span className="text-blue-500">Get clients.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Discover potential clients, personalize your outreach, and manage your campaigns from one simple workspace.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <a href="/dashboard" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-all shadow-lg shadow-blue-600/20 flex items-center">
            Start finding clients <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <a href="#how-it-works" className="px-6 py-3 border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 font-semibold text-sm rounded-lg transition-colors">
            See how it works
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white">Finding web design clients shouldn't mean searching for hours.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="text-rose-400 font-bold mb-2">01. Manual Search</div>
            <h3 className="font-semibold text-white text-lg">Finding the right businesses</h3>
            <p className="text-sm text-slate-400 mt-2">Spending endless hours browsing Google Maps or local directories for potential leads.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="text-rose-400 font-bold mb-2">02. Slow Audits</div>
            <h3 className="font-semibold text-white text-lg">Manually checking websites</h3>
            <p className="text-sm text-slate-400 mt-2">Checking whether a business has a outdated, broken, or non-responsive mobile website.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="text-rose-400 font-bold mb-2">03. Low Conversion</div>
            <h3 className="font-semibold text-white text-lg">Writing hundreds of cold emails</h3>
            <p className="text-sm text-slate-400 mt-2">Sending generic emails that get ignored because they aren't tailored to the specific business.</p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">How SigCraft works</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Find prospects', desc: 'Discover businesses that match your ideal client criteria.' },
            { step: '02', title: 'Analyze opportunities', desc: 'Identify businesses with websites that could be improved.' },
            { step: '03', title: 'Personalize outreach', desc: 'Create relevant messages instead of generic spam.' },
            { step: '04', title: 'Manage campaigns', desc: 'Track prospects, replies, and closed opportunities.' }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl border border-slate-800 bg-slate-900">
              <span className="text-xs font-mono font-bold text-blue-500 bg-blue-950/60 px-2 py-1 rounded">{item.step}</span>
              <h3 className="font-semibold text-white text-lg mt-4">{item.title}</h3>
              <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center border-t border-slate-900">
        <h2 className="text-3xl font-bold text-white">Your next client could be one search away.</h2>
        <div className="mt-8">
          <a href="/dashboard" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base rounded-lg transition-colors inline-block shadow-xl shadow-blue-600/20">
            Start finding clients
          </a>
        </div>
      </section>
    </div>
  );
}