import React, { useState } from 'react';
import TemplateSelector from './TemplateSelector';
import SocialLinks from './SocialLinks';
import { processImageFile } from '../utils/imageHelpers';
import { AlertCircle, Upload, X } from 'lucide-react';

const PRESET_COLORS = ['#2563eb', '#0f172a', '#059669', '#dc2626', '#7c3aed', '#ea580c'];
const FONTS = ['Arial', 'Helvetica', 'Georgia', 'Verdana', 'Tahoma'];

export default function SignatureForm({ formData, setFormData }) {
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    setErrorMsg('');

    try {
      const dataUrl = await processImageFile(file);
      handleChange(field, dataUrl);
    } catch (err) {
      setErrorMsg(err.message || 'Error processing image.');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-900">Your information</h2>
        <p className="text-xs text-slate-500">Enter your details to generate your live signature.</p>
      </div>

      {errorMsg && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md flex items-center space-x-2 text-xs text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Input Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Full name</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="John Smith"
            className="w-full h-11 px-3 border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Job title</label>
          <input
            type="text"
            value={formData.jobTitle}
            onChange={(e) => handleChange('jobTitle', e.target.value)}
            placeholder="Marketing Manager"
            className="w-full h-11 px-3 border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Company</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            placeholder="Acme Inc."
            className="w-full h-11 px-3 border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@acme.com"
            className="w-full h-11 px-3 border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 555 123 4567"
            className="w-full h-11 px-3 border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Website</label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => handleChange('website', e.target.value)}
            placeholder="https://acme.com"
            className="w-full h-11 px-3 border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      {/* Image Uploads */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200 pt-4">
        {/* Profile Photo */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Profile photo</label>
          {formData.photoUrl ? (
            <div className="flex items-center space-x-3">
              <img src={formData.photoUrl} alt="Preview" className="h-12 w-12 rounded-full object-cover border border-slate-200" />
              <button
                type="button"
                onClick={() => handleChange('photoUrl', '')}
                className="inline-flex items-center text-xs text-red-600 hover:text-red-800 font-medium"
              >
                <X className="h-3 w-3 mr-1" /> Remove photo
              </button>
            </div>
          ) : (
            <div>
              <label className="flex items-center justify-center h-11 border border-dashed border-slate-300 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
                <Upload className="h-4 w-4 text-slate-400 mr-2" />
                <span className="text-xs text-slate-600">Upload photo</span>
                <input type="file" accept="image/png, image/jpeg" onChange={(e) => handleImageUpload(e, 'photoUrl')} className="hidden" />
              </label>
              <p className="text-[10px] text-slate-400 mt-1">Recommended: square image</p>
            </div>
          )}
        </div>

        {/* Company Logo */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Company logo</label>
          {formData.logoUrl ? (
            <div className="flex items-center space-x-3">
              <img src={formData.logoUrl} alt="Logo Preview" className="h-10 object-contain border border-slate-200 p-1 rounded" />
              <button
                type="button"
                onClick={() => handleChange('logoUrl', '')}
                className="inline-flex items-center text-xs text-red-600 hover:text-red-800 font-medium"
              >
                <X className="h-3 w-3 mr-1" /> Remove logo
              </button>
            </div>
          ) : (
            <div>
              <label className="flex items-center justify-center h-11 border border-dashed border-slate-300 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
                <Upload className="h-4 w-4 text-slate-400 mr-2" />
                <span className="text-xs text-slate-600">Upload logo</span>
                <input type="file" accept="image/png, image/jpeg" onChange={(e) => handleImageUpload(e, 'logoUrl')} className="hidden" />
              </label>
              <p className="text-[10px] text-slate-400 mt-1">PNG or JPG recommended</p>
            </div>
          )}
        </div>
      </div>

      {/* Social Links */}
      <SocialLinks socials={formData.socials} onChange={(updated) => handleChange('socials', updated)} />

      {/* Design Customization */}
      <div className="border-t border-slate-200 pt-4 space-y-4">
        <h3 className="text-sm font-semibold text-slate-900">Design Settings</h3>
        
        <TemplateSelector
          selectedTemplate={formData.template}
          onChange={(t) => handleChange('template', t)}
        />

        {/* Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Primary Color</label>
            <div className="flex items-center space-x-2">
              {PRESET_COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => handleChange('primaryColor', c)}
                  style={{ backgroundColor: c }}
                  className={`h-6 w-6 rounded-full border border-black/10 focus:outline-none ${
                    formData.primaryColor === c ? 'ring-2 ring-offset-1 ring-blue-600' : ''
                  }`}
                  aria-label={`Select color ${c}`}
                />
              ))}
              <input
                type="color"
                value={formData.primaryColor}
                onChange={(e) => handleChange('primaryColor', e.target.value)}
                className="h-7 w-7 p-0 border border-slate-200 rounded cursor-pointer"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Font Family</label>
            <select
              value={formData.fontFamily}
              onChange={(e) => handleChange('fontFamily', e.target.value)}
              className="w-full h-9 px-2 border border-slate-200 rounded-md text-xs focus:border-blue-500 outline-none"
            >
              {FONTS.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}