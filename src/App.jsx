import React, { useState } from 'react';
import Home from './pages/Home';

export default function App() {
  const [formData, setFormData] = useState({
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

  return (
    <Home formData={formData} setFormData={setFormData} />
  );
}