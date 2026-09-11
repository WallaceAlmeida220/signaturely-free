import React, { useState } from 'react';
import { generateSignatureHTML } from '../utils/htmlGenerator';
import { Copy, Code, Download, Check } from 'lucide-react';

export default function ExportButtons({ formData, onOpenInstructions }) {
  const [copiedSig, setCopiedSig] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);

  const htmlContent = generateSignatureHTML(formData);

  // Copy rendered HTML as rich text for Gmail/Outlook
  const handleCopySignature = async () => {
    try {
      const previewEl = document.getElementById('signature-preview-content');
      if (!previewEl) return;

      const range = document.createRange();
      range.selectNode(previewEl);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      const blobInput = new Blob([htmlContent], { type: 'text/html' });
      const clipboardItem = new ClipboardItem({
        'text/html': blobInput,
        'text/plain': new Blob([previewEl.innerText], { type: 'text/plain' })
      });

      await navigator.clipboard.write([clipboardItem]);
      setCopiedSig(true);
      setTimeout(() => setCopiedSig(false), 3000);
    } catch (err) {
      try {
        await navigator.clipboard.writeText(htmlContent);
        setCopiedSig(true);
        setTimeout(() => setCopiedSig(false), 3000);
      } catch (fallbackErr) {
        alert('Failed to copy. Please copy directly from HTML source.');
      }
    }
  };

  // Copy Raw HTML Code
  const handleCopyHTML = async () => {
    try {
      await navigator.clipboard.writeText(htmlContent);
      setCopiedHtml(true);
      setTimeout(() => setCopiedHtml(false), 3000);
    } catch (err) {
      alert('Failed to copy HTML code.');
    }
  };

  // Download signature.html
  const handleDownloadHTML = () => {
    const element = document.createElement('a');
    const file = new Blob([htmlContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'signature.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-4 pt-4 border-t border-slate-200">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          type="button"
          onClick={handleCopySignature}
          className="w-full inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg shadow-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          {copiedSig ? (
            <>
              <Check className="h-4 w-4 mr-2" /> Signature copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-2" /> Copy signature
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleCopyHTML}
          className="w-full inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-medium text-sm rounded-lg shadow-sm transition-colors focus:ring-2 focus:ring-slate-500 focus:ring-offset-1"
        >
          {copiedHtml ? (
            <>
              <Check className="h-4 w-4 mr-2" /> HTML copied!
            </>
          ) : (
            <>
              <Code className="h-4 w-4 mr-2" /> Copy HTML
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleDownloadHTML}
          className="w-full inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-sm rounded-lg shadow-sm transition-colors focus:ring-2 focus:ring-slate-400 focus:ring-offset-1"
        >
          <Download className="h-4 w-4 mr-2" /> Download HTML
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 pt-2">
        <span>How to install:</span>
        <button
          type="button"
          onClick={() => onOpenInstructions('gmail')}
          className="text-blue-600 hover:underline font-medium"
        >
          Gmail Guide
        </button>
        <span>&bull;</span>
        <button
          type="button"
          onClick={() => onOpenInstructions('outlook')}
          className="text-blue-600 hover:underline font-medium"
        >
          Outlook Guide
        </button>
      </div>
    </div>
  );
}