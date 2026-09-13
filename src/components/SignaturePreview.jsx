import React from 'react';
import { generateSignatureHTML } from '../utils/htmlGenerator';

export const SignaturePreview = ({ data, formData }) => {
  // Unifica a leitura das props
  const inputData = data || formData || {};

  // Gera a string HTML completa usando as regras responsivas atualizadas
  const rawHtml = generateSignatureHTML(inputData);

  return (
    <div className="w-full overflow-x-auto">
      <div 
        id="signature-preview" 
        className="bg-white p-4 rounded-lg shadow-inner border border-slate-200 inline-block min-w-full"
        dangerouslySetInnerHTML={{ __html: rawHtml }}
      />
    </div>
  );
};

export default SignaturePreview;