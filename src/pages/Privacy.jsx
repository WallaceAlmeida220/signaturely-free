import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="text-xs text-slate-500">Last updated: September 2026</p>

      <div className="prose prose-slate text-sm text-slate-700 space-y-4">
        <p>
          At Signaturely Free, we prioritize user privacy above all else. This web application operates entirely locally within your client browser.
        </p>

        <h2 className="text-base font-bold text-slate-900">Data Processing</h2>
        <p>
          When you enter your name, email, phone number, website, or upload images (photo and company logo), none of this data is transmitted to an external server or saved in a remote database. All HTML generation and image resizing happen locally inside browser memory.
        </p>

        <h2 className="text-base font-bold text-slate-900">Analytics & Cookies</h2>
        <p>
          We do not track individual users across third-party websites or use invasive tracking cookies.
        </p>
      </div>
    </div>
  );
}