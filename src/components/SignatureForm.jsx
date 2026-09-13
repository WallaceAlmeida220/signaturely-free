import React from 'react';

export default function SignatureForm({ formData, setFormData }) {
  // Atualiza campos de texto padrão
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Leitor exclusivo para a FOTO DE PERFIL
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

  // Leitor exclusivo para a LOGO DA EMPRESA
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
      
      {/* Input de Foto de Perfil */}
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

      {/* Input de Logo da Empresa */}
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

      {/* Demais campos de texto... */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName || ''}
          onChange={handleChange}
          className="w-full p-2 border border-slate-300 rounded-md"
        />
      </div>
    </div>
  );
}