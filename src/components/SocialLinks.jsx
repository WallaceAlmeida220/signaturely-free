import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SocialLinks({ socials, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleUrlChange = (platform, url) => {
    onChange({
      ...socials,
      [platform]: { ...socials[platform], url }
    });
  };

  const handleToggle = (platform) => {
    onChange({
      ...socials,
      [platform]: { ...socials[platform], enabled: !socials[platform].enabled }
    });
  };

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-slate-50 flex items-center justify-between text-left focus:outline-none hover:bg-slate-100 transition-colors"
      >
        <span className="text-sm font-semibold text-slate-900">Social links</span>
        {isOpen ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
      </button>

      {isOpen && (
        <div className="p-4 space-y-3 border-t border-slate-200">
          {Object.entries(socials).map(([platform, data]) => (
            <div key={platform} className="flex items-center space-x-3">
              <input
                type="checkbox"
                id={`toggle-${platform}`}
                checked={data.enabled}
                onChange={() => handleToggle(platform)}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor={`toggle-${platform}`} className="w-20 text-xs font-medium text-slate-700 capitalize">
                {platform}
              </label>
              <input
                type="url"
                disabled={!data.enabled}
                value={data.url}
                onChange={(e) => handleUrlChange(platform, e.target.value)}
                placeholder={`https://${platform}.com/username`}
                className="flex-1 min-h-[38px] px-3 py-1.5 text-xs border border-slate-200 rounded-md disabled:bg-slate-50 disabled:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}