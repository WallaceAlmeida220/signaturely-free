import React from 'react';

export default function SignatureForm({ formData, setFormData }) {
  // Atualiza qualquer campo de texto dinamicamente
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-slate-800">Informações Pessoais</h2>
      
      {/* Uploads de Imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Foto de Perfil
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {formData.photoUrl && (
            <p className="text-xs text-emerald-600 mt-1">✓ Foto de perfil carregada</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Logo da Empresa
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {formData.logoUrl && (
            <p className="text-xs text-emerald-600 mt-1">✓ Logo carregada</p>
          )}
        </div>
      </div>

      {/* Nome Completo */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
        <input
          type="text"
          name="fullName"
          placeholder="Ex: John Smith"
          value={formData.fullName || ''}
          onChange={handleChange}
          className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Cargo e Empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Cargo / Função</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Ex: Marketing Manager"
            value={formData.jobTitle || ''}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
          <input
            type="text"
            name="company"
            placeholder="Ex: Acme Inc."
            value={formData.company || ''}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      {/* Email e Telefone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
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
          <label className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
          <input
            type="text"
            name="phone"
            placeholder="+55 (19) 99999-9999"
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
  );
}