import React from 'react';

export default function OutlookInstructions({ onOpenInstructions }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Outlook Signature Generator & Setup Guide</h1>
        <p className="mt-2 text-slate-600 text-sm">
          Learn how to format and set up your email signature in Microsoft Outlook.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Step-by-Step Outlook Installation</h2>
        <ol className="list-decimal list-inside space-y-3 text-sm text-slate-700 leading-relaxed">
          <li>Generate your signature using our tool and click <strong>Copy signature</strong>.</li>
          <li>Open Outlook on web or desktop app.</li>
          <li>Go to <strong>Settings</strong> &rarr; <strong>View all Outlook settings</strong> &rarr; <strong>Compose and reply</strong>.</li>
          <li>Under Email signature, type a name and paste your copied signature.</li>
          <li>Choose default signatures for New messages and Replies/forwards.</li>
          <li>Click <strong>Save</strong>.</li>
        </ol>

        <div className="pt-4">
          <button
            onClick={() => onOpenInstructions('outlook')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Open Modal Guide
          </button>
        </div>
      </div>
    </div>
  );
}