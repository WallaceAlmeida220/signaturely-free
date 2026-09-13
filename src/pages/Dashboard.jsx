import React from 'react';
import { StatCard } from '../components/ui/StatCard';
import { Badge } from '../components/ui/Badge';
import { Users, Megaphone, Send, MessageSquare, Search, Plus, Upload, ArrowRight } from 'lucide-react';

export function Dashboard() {
  const mockProspects = [
    { name: 'Acme Dental', website: 'acmedental.com', industry: 'Healthcare', location: 'United States', status: 'Needs improvement', score: 82, leadStatus: 'New' },
    { name: 'Apex Law Firm', website: 'apexlaw.io', industry: 'Legal', location: 'United Kingdom', status: 'Poor website', score: 91, leadStatus: 'Contacted' },
    { name: 'Summit Bakery', website: 'summitbakery.com', industry: 'Food & Beverage', location: 'Canada', status: 'No website', score: 95, leadStatus: 'New' },
  ];

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Good afternoon, Wallace</h1>
        <p className="text-slate-500 text-sm mt-1">Find your next web design client with targeted outreach.</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Prospects" value="247" description="+12 added this week" icon={Users} />
        <StatCard title="Active Campaigns" value="3" description="2 pending approval" icon={Megaphone} />
        <StatCard title="Emails Sent" value="128" description="64% open rate" icon={Send} />
        <StatCard title="Replies" value="14" description="10.9% reply rate" icon={MessageSquare} />
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Quick actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Find new prospects</h3>
            <p className="text-sm text-slate-500 mt-1">Discover businesses that need a website refresh.</p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Plus className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Create campaign</h3>
            <p className="text-sm text-slate-500 mt-1">Turn your prospects into a personalized outreach campaign.</p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Upload className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Import prospects</h3>
            <p className="text-sm text-slate-500 mt-1">Upload a CSV file and organize your existing leads.</p>
          </div>
        </div>
      </div>

      {/* Recent Prospects Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Recent prospects</h2>
          <a href="/prospects" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center">
            View all <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase">
              <tr>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Website</th>
                <th className="px-6 py-3">Industry</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Website Status</th>
                <th className="px-6 py-3">Score</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockProspects.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                  <td className="px-6 py-4 text-blue-600">{item.website}</td>
                  <td className="px-6 py-4">{item.industry}</td>
                  <td className="px-6 py-4">{item.location}</td>
                  <td className="px-6 py-4">
                    <Badge variant={item.status === 'No website' ? 'danger' : 'warning'}>{item.status}</Badge>
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-900">{item.score}</td>
                  <td className="px-6 py-4">
                    <Badge variant="brand">{item.leadStatus}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}