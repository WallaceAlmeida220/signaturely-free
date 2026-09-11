import React from 'react';

export default function GmailInstructions({ onOpenInstructions }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Gmail Signature Generator & Setup Guide</h1>
        <p className="mt-2 text-slate-600 text-sm">
          Learn how to generate and add a clean HTML email signature to your Gmail account.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Step-by-Step Gmail Installation</h2>
        <ol className="list-decimal list-inside space-y-3 text-sm text-slate-700 leading-relaxed">
          <li>Create your signature using the builder on our homepage.</li>
          <li>Click the <strong>Copy signature</strong> button.</li>
          <li>Open <a href="https://mail.google.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">Gmail</a>.</li>
          <li>In the top right, click <strong>Settings</strong> (gear icon) &rarr; <strong>See all settings</strong>.</li>
          <li>In the "General" tab, scroll down to the <strong>Signature</strong> section.</li>
          <li>Click <strong>+ Create new</strong>, name your signature, and paste into the editor box.</li>
          <li>Scroll down and click <strong>Save Changes</strong>.</li>
        </ol>

        <div className="pt-4">
          <button
            onClick={() => onOpenInstructions('gmail')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Open Modal Guide
          </button>
        </div>
      </div>
    </div>
  );
}