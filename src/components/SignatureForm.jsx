import React from 'react';

export default function SignatureForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTemplateChange = (template) => {
    setFormData((prev) => ({ ...prev, template }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, photoUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, logoUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const templates = [
    { id: 'classic', name: 'Classic' },
    { id: 'modern', name: 'Modern' },
    { id: 'minimal', name: 'Minimal' },
    { id: 'compact', name: 'Compact' }
  ];

  return (
    <div className="space-y-6 bg-slate-900/60 p-6 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
      {/* Template Selector */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Choose Template</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {templates.map((tmpl) => (
            <button
              key={tmpl.id}
              type="button"
              onClick={() => handleTemplateChange(tmpl.id)}
              className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                (formData.template || 'classic') === tmpl.id
                  ? 'border-blue-500 bg-blue-600/10 text-blue-400 shadow-sm'
                  : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {tmpl.name}
            </button>
          ))}
        </div>
      </div>

      <hr className="border-slate-800/80" />

      {/* Personal Details */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Personal Details</h2>
        
        {/* Image Uploads */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Profile Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="w-full text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-slate-200 hover:file:bg-slate-700 cursor-pointer"
            />
            {formData.photoUrl && (
              <p className="text-[11px] text-emerald-400 mt-1.5 flex items-center gap-1">✓ Photo uploaded</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Company Logo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="w-full text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-slate-200 hover:file:bg-slate-700 cursor-pointer"
            />
            {formData.logoUrl && (
              <p className="text-[11px] text-emerald-400 mt-1.5 flex items-center gap-1">✓ Logo uploaded</p>
            )}
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="e.g. John Smith"
            value={formData.fullName || ''}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Job Title & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="e.g. Marketing Manager"
              value={formData.jobTitle || ''}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Company</label>
            <input
              type="text"
              name="company"
              placeholder="e.g. Acme Inc."
              value={formData.company || ''}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@acme.com"
              value={formData.email || ''}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="+1 555 123 4567"
              value={formData.phone || ''}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </div>

        {/* Website */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">Website</label>
          <input
            type="text"
            name="website"
            placeholder="acme.com"
            value={formData.website || ''}
            onChange={handleChange}
            className="w-full"
          />
        </div>
      </div>

      <hr className="border-slate-800/80" />

      {/* Social Media Links */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Social Media Links</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">LinkedIn URL</label>
            <input
              type="text"
              name="linkedin"
              placeholder="https://linkedin.com/in/username"
              value={formData.linkedin || ''}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Instagram URL</label>
            <input
              type="text"
              name="instagram"
              placeholder="https://instagram.com/username"
              value={formData.instagram || ''}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Twitter / X URL</label>
            <input
              type="text"
              name="twitter"
              placeholder="https://x.com/username"
              value={formData.twitter || ''}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Facebook URL</label>
            <input
              type="text"
              name="facebook"
              placeholder="https://facebook.com/username"
              value={formData.facebook || ''}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}