import React, { useState, useEffect } from 'react';
import { Users, UserCheck, Activity, Target, AlertCircle } from 'lucide-react';
import { generateTrackingUrl } from '../analytics/campaign';

export function AnalyticsPage({ currentUser }) {
  const [timeRange, setTimeRange] = useState('30d');
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Exemplo de Gerador de URL Rastreada para Outbound (Requisito 16)
  const [campaignUrl, setCampaignUrl] = useState('');
  const [baseUrlInput, setBaseUrlInput] = useState('https://sigcraft.com');
  const [campaignInput, setCampaignInput] = useState('dentists-florida');

  useEffect(() => {
    // Busca métricas do backend de analytics
    async function fetchAnalytics() {
      setLoading(true);
      try {
        const response = await fetch(`/api/analytics/summary?range=${timeRange}`);
        if (response.ok) {
          const data = await response.json();
          setAnalyticsData(data);
        } else {
          setAnalyticsData(null); // Ativa o estado vazio se não houver backend ativo
        }
      } catch (err) {
        setAnalyticsData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, [timeRange]);

  const handleGenerateLink = () => {
    const url = generateTrackingUrl({
      baseUrl: baseUrlInput,
      source: 'email',
      medium: 'outreach',
      campaign: campaignInput,
    });
    setCampaignUrl(url);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Analytics</h1>
          <p className="text-sm text-slate-400 mt-1">
            Understand how people discover and use SigCraft.
          </p>
        </div>

        {/* Filtro de Período */}
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-lg px-3 py-2 outline-none focus:border-blue-500"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      {loading ? (
        <div className="p-12 text-center text-slate-500">Loading analytics...</div>
      ) : !analyticsData ? (
        /* ESTADO VAZIO REAL (Requisito 24) - Sem dados falsos */
        <div className="p-12 text-center bg-slate-900/40 rounded-2xl border border-dashed border-slate-800">
          <AlertCircle className="mx-auto h-10 w-10 text-slate-500 mb-3" />
          <h3 className="text-base font-semibold text-slate-200">No data available yet</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto mt-1">
            Once people start visiting your site and completing actions, your analytics will appear here.
          </p>
        </div>
      ) : (
        /* VISUALIZAÇÃO DE DADOS REAIS QUANDO HOUVER INTEGRACÃO COM O BACKEND */
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
              <span className="text-xs font-medium text-slate-400">Visitors</span>
              <div className="text-2xl font-bold text-white mt-1">{analyticsData.visitors || 0}</div>
            </div>
            <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
              <span className="text-xs font-medium text-slate-400">Unique Visitors</span>
              <div className="text-2xl font-bold text-white mt-1">{analyticsData.unique_visitors || 0}</div>
            </div>
            <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
              <span className="text-xs font-medium text-slate-400">Sign Ups</span>
              <div className="text-2xl font-bold text-white mt-1">{analyticsData.sign_ups || 0}</div>
            </div>
            <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
              <span className="text-xs font-medium text-slate-400">Conversion Rate</span>
              <div className="text-2xl font-bold text-emerald-400 mt-1">
                {analyticsData.unique_visitors > 0
                  ? ((analyticsData.sign_ups / analyticsData.unique_visitors) * 100).toFixed(1) + '%'
                  : '0.0%'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Outbound URL Generator Utility (Requisito 16) */}
      <div className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-4">
        <h2 className="text-sm font-semibold text-white uppercase tracking-wider">
          Campaign URL Builder (Outreach)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Base URL"
            value={baseUrlInput}
            onChange={(e) => setBaseUrlInput(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs text-white p-2.5 rounded-lg"
          />
          <input
            type="text"
            placeholder="Campaign Name"
            value={campaignInput}
            onChange={(e) => setCampaignInput(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs text-white p-2.5 rounded-lg"
          />
          <button
            onClick={handleGenerateLink}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs rounded-lg px-4 py-2.5 transition-colors"
          >
            Generate Tracking Link
          </button>
        </div>
        {campaignUrl && (
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono text-blue-400 break-all select-all">
            {campaignUrl}
          </div>
        )}
      </div>
    </div>
  );
}