import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { AnalyticsPage } from './pages/Analytics';
import { analytics } from './analytics';
import { RouteTracker } from './components/analytics/RouteTracker';

export default function App() {
  const [formData, setFormData] = React.useState({
    fullName: 'John Smith',
    jobTitle: 'Marketing Manager',
    company: 'Acme Inc.',
    email: 'john@acme.com',
    phone: '+1 555 123 4567',
    website: 'acme.com',
    photoUrl: '',
    logoUrl: '',
    linkedin: '',
    instagram: '',
    twitter: '',
    facebook: ''
  });

  // Inicializa o motor de tracking de forma segura ao carregar o app
  useEffect(() => {
    analytics.init();
  }, []);

  return (
    <BrowserRouter>
      {/* Rastreia automaticamente cada troca de tela no Analytics sem duplicar */}
      <RouteTracker />

      <Routes>
        {/* Rota Principal / Gerador de Assinaturas */}
        <Route 
          path="/" 
          element={<Home formData={formData} setFormData={setFormData} />} 
        />

        {/* Painel de Analytics do SigCraft (Acessível por /analytics e /dashboard) */}
        <Route 
          path="/analytics" 
          element={<AnalyticsPage />} 
        />
        <Route 
          path="/dashboard" 
          element={<AnalyticsPage />} 
        />
      </Routes>
    </BrowserRouter>
  );
}