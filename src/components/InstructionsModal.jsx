import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function InstructionsModal({ client, onClose }) {
  if (!client) return null;

  const isGmail = client === 'gmail';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-xl relative border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="text-lg font-bold text-slate-900 mb-4">
          How to add your signature to {isGmail ? 'Gmail' : 'Outlook'}
        </h3>

        {isGmail ? (
          <ol className="space-y-3 text-xs text-slate-600 list-decimal list-inside leading-relaxed">
            <li>Click <strong>Copy signature</strong> in the builder.</li>
            <li>Open <strong>Gmail</strong> in your web browser.</li>
            <li>Click the <strong>Settings gear icon</strong> at the top right and select <strong>"See all settings"</strong>.</li>
            <li>Scroll down to the <strong>"Signature"</strong> section.</li>
            <li>Click <strong>"+ Create new"</strong>, type a name for the signature, and click Create.</li>
            <li>Paste your copied signature into the text box (<code>Ctrl+V</code> or <code>Cmd+V</code>).</li>
            <li>Scroll to the bottom of the page and click <strong>"Save Changes"</strong>.</li>
          </ol>
        ) : (
          <ol className="space-y-3 text-xs text-slate-600 list-decimal list-inside leading-relaxed">
            <li>Click <strong>Copy signature</strong> in the builder.</li>
            <li>Open <strong>Outlook</strong> (Web or Desktop).</li>
            <li>Go to <strong>Settings / Options</strong> and search for <strong>"Email signature"</strong>.</li>
            <li>Select <strong>"New signature"</strong>.</li>
            <li>Paste your copied signature into the edit box (<code>Ctrl+V</code> or <code>Cmd+V</code>).</li>
            <li>Select default signatures for new messages and replies.</li>
            <li>Click <strong>Save</strong>.</li>
          </ol>
        )}

        <div className="mt-6 flex justify-between items-center pt-4 border-t border-slate-100">
          {isGmail && (
            <a
              href="https://mail.google.com/mail/u/0/#settings/general"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-800"
            >
              Open Gmail <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}