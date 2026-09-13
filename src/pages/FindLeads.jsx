import React from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';

export function FindLeads() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Find businesses that need your help</h1>
        <p className="text-slate-500 text-sm mt-1">Discover potential web design clients based on location, industry, and website quality.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Country</label>
            <select className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Industry</label>
            <select className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Dentists & Healthcare</option>
              <option>Legal Services</option>
              <option>Home Services & Contractors</option>
              <option>Restaurants & Cafes</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">City / Region</label>
            <input
              type="text"
              placeholder="e.g. Florida or Miami"
              className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Website Status</label>
            <select className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
              <option>No website / Needs improvement</option>
              <option>No website only</option>
              <option>Poor website quality</option>
              <option>All businesses</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Minimum Lead Score</label>
            <input
              type="number"
              placeholder="70"
              className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Max Prospects</label>
            <select className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
              <option>50 prospects</option>
              <option>100 prospects</option>
              <option>250 prospects</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm text-slate-500">Estimated query results: <strong className="text-slate-900">100+ prospects</strong></span>
          <button className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Find prospects
          </button>
        </div>
      </div>
    </div>
  );
}