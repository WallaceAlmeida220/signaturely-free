import React from 'react';

export default function FreeSignature() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Free Email Signature Generator</h1>
      <p className="text-sm text-slate-600 leading-relaxed">
        Signaturely Free is a dedicated client-side web application designed to help professionals, freelancers, and teams design clean email signatures quickly and safely.
      </p>
      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-3 text-xs text-slate-700">
        <h2 className="text-sm font-bold text-slate-900">Designed for major email clients:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Gmail</li>
          <li>Microsoft Outlook</li>
          <li>Apple Mail</li>
          <li>Yahoo Mail</li>
        </ul>
      </div>
    </div>
  );
}