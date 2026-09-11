import React from 'react';

const TEMPLATES = [
  { id: 'classic', name: 'Classic', desc: 'Standard professional layout' },
  { id: 'modern', name: 'Modern', desc: 'Left accent vertical bar' },
  { id: 'minimal', name: 'Minimal', desc: 'Single-line compact design' },
  { id: 'corporate', name: 'Corporate', desc: 'Boxed structure with borders' },
  { id: 'compact', name: 'Compact', desc: 'Small text layout' },
  { id: 'elegant', name: 'Elegant', desc: 'Serif header with clean divider' },
];

export default function TemplateSelector({ selectedTemplate, onChange }) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-slate-900">
        Choose Template
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {TEMPLATES.map((t) => {
          const isSelected = selectedTemplate === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onChange(t.id)}
              className={`p-3 text-left border rounded-lg transition-all ${
                isSelected
                  ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-600'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className={`text-sm font-medium ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                {t.name}
              </div>
              <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{t.desc}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}