import React from 'react';
import SignatureForm from '../components/SignatureForm';
import SignaturePreview from '../components/SignaturePreview';
import ExportButtons from '../components/ExportButtons';
import FAQ from '../components/FAQ';
import { Check } from 'lucide-react';

export default function Home({ formData, setFormData, onOpenInstructions }) {
  const scrollToBuilder = () => {
    const el = document.getElementById('builder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Create a professional email signature in seconds
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Design your email signature for Gmail, Outlook, Apple Mail and more. No signup required.
          </p>

          <div className="mt-8">
            <button
              onClick={scrollToBuilder}
              className="inline-flex items-center justify-center h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded-lg shadow-sm transition-colors"
            >
              Create my signature
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <span className="flex items-center"><Check className="h-4 w-4 text-emerald-600 mr-1.5" /> No signup</span>
            <span className="flex items-center"><Check className="h-4 w-4 text-emerald-600 mr-1.5" /> Free to use</span>
            <span className="flex items-center"><Check className="h-4 w-4 text-emerald-600 mr-1.5" /> Your data stays in your browser</span>
          </div>
        </div>
      </section>

      {/* Main Signature Builder */}
      <section id="builder" className="py-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* LEFT: Editing Panel */}
              <div className="lg:col-span-7 space-y-6">
                <SignatureForm formData={formData} setFormData={setFormData} />
              </div>

              {/* RIGHT: Live Preview */}
              <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-slate-200 lg:pl-8 flex flex-col justify-between">
                <div>
                  <SignaturePreview data={formData} />
                </div>
                <div>
                  <ExportButtons formData={formData} onOpenInstructions={onOpenInstructions} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Trust & Privacy Positioning Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Your information stays on your device</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Your name, email, phone number and uploaded images are processed locally in your browser for the signature generator. We don't need an account to create your signature.
          </p>
          <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
            No account required.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </div>
  );
}