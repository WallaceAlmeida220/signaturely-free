import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GmailInstructions from './pages/GmailInstructions';
import OutlookInstructions from './pages/OutlookInstructions';
import FreeSignature from './pages/FreeSignature';
import Privacy from './pages/Privacy';
import InstructionsModal from './components/InstructionsModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeModalClient, setActiveModalClient] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: 'John Smith',
    jobTitle: 'Marketing Manager',
    company: 'Acme Inc.',
    email: 'john@acme.com',
    phone: '+1 555 123 4567',
    website: 'https://acme.com',
    photoUrl: '',
    logoUrl: '',
    template: 'classic',
    primaryColor: '#2563eb',
    textColor: '#0f172a',
    linkColor: '#2563eb',
    fontFamily: 'Arial',
    socials: {
      linkedin: { enabled: true, url: 'https://linkedin.com/in/johnsmith' },
      twitter: { enabled: false, url: '' },
      instagram: { enabled: false, url: '' },
      facebook: { enabled: false, url: '' },
      youtube: { enabled: false, url: '' }
    }
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'gmail':
        return <GmailInstructions onOpenInstructions={(client) => setActiveModalClient(client)} />;
      case 'outlook':
        return <OutlookInstructions onOpenInstructions={(client) => setActiveModalClient(client)} />;
      case 'free-signature':
        return <FreeSignature />;
      case 'privacy':
        return <Privacy />;
      case 'home':
      default:
        return (
          <Home
            formData={formData}
            setFormData={setFormData}
            onOpenInstructions={(client) => setActiveModalClient(client)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50">
      <div>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main>{renderPage()}</main>
      </div>
      <Footer setCurrentPage={setCurrentPage} />

      <InstructionsModal
        client={activeModalClient}
        onClose={() => setActiveModalClient(null)}
      />
    </div>
  );
}