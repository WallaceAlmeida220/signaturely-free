import React, { useMemo } from 'react';
import { generateSignatureHTML } from '../utils/htmlGenerator';

export default function SignaturePreview({ formData }) {
  const htmlOutput = useMemo(() => generateSignatureHTML(formData), [formData]);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">Live preview</h2>
        <span className="text-xs text-slate-500">Updates automatically</span>
      </div>

      {/* Simulated Email Envelope Container */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm min-h-[220px] flex items-center justify-start overflow-x-auto">
        <div
          id="signature-preview-content"
          dangerouslySetInnerHTML={{ __html: htmlOutput }}
        />
      </div>
    </div>
  );
}