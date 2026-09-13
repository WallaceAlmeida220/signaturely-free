import React from 'react';

export default function SignatureForm({ formData, setFormData }) {
  // Atualiza qualquer campo de texto dinamicamente
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Selecionar o template (Classic, Modern, Minimal, Compact, etc.)
  const handleTemplateChange = (template) => {
    setFormData((prev) => ({ ...prev, template }));
  };

  // Upload exclusivo para Foto de Perfil
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

  // Upload exclusivo para Logo da Empresa
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
    <div className="space-y-6">
      {/* Template Selector */}
      <div>
        <h2 className="text-lg font-bold text-slate-800 mb-3">Choose Template</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {templates.map((tmpl) => (
            <button
              key={tmpl.id}
              type="button"
              onClick={() => handleTemplateChange(tmpl.id)}
              className={`py-2 px-3 text-sm font-medium rounded-lg border transition-all ${
                (formData.template || 'classic') === tmpl.id
                  ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              {tmpl.name}
            </button>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      {/* Personal Details */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800">Personal Details</h2>
        
        {/* Image Uploads */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Profile Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {formData.photoUrl && (
              <p className="text-xs text-emerald-600 mt-1">✓ Photo uploaded</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Company Logo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {formData.logoUrl && (
              <p className="text-xs text-emerald-600 mt-1">✓ Logo uploaded</p>
            )}
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="e.g. John Smith"
            value={formData.fullName || ''}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Job Title & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="e.g. Marketing Manager"
              value={formData.jobTitle || ''}
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
            <input
              type="text"
              name="company"
              placeholder="e.g. Acme Inc."
              value={formData.company || ''}
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@acme.com"
              value={formData.email || ''}
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="+1 555 123 4567"
              value={formData.phone || ''}
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Website</label>
          <input
            type="text"
            name="website"
            placeholder="acme.com"
            value={formData.website || ''}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      <hr className="border-slate-200" />

      {/* Social Media Links */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800">Social Media Links</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">LinkedIn URL</label>
            <input
              type="text"
              name="linkedin"
              placeholder="https://linkedin.com/in/username"
              value={formData.linkedin || ''}
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Instagram URL</label>
            <input
              type="text"
              name="instagram"
              placeholder="https://instagram.com/username"
              value={formData.instagram || ''}
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Twitter / X URL</label>
            <input
              type="text"
              name="twitter"
              placeholder="https://x.com/username"
              value={formData.twitter || ''}
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Facebook URL</label>
            <input
              type="text"
              name="facebook"
              placeholder="https://facebook.com/username"
              value={formData.facebook || ''}
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}