import React from 'react';

const FAQS = [
  {
    q: "Is this email signature generator free?",
    a: "Yes. Signaturely Free is completely free to use. There are no hidden fees or paywalls."
  },
  {
    q: "Do I need to create an account?",
    a: "No. You do not need to create an account or provide an email address to use the generator."
  },
  {
    q: "Does this work with Gmail?",
    a: "Yes. Simply click 'Copy signature' and paste it directly into your Gmail Signature settings box."
  },
  {
    q: "Does this work with Outlook?",
    a: "Yes. Designed for compatibility with major email clients including Outlook Desktop, Outlook Web, and Apple Mail."
  },
  {
    q: "Does my information get uploaded?",
    a: "No. All details, including your photo and company logo, are processed locally in your web browser."
  },
  {
    q: "Can I add my company logo?",
    a: "Yes. You can upload a company logo in PNG or JPG format directly from your device."
  },
  {
    q: "Can I add social media links?",
    a: "Yes. You can toggle and link profiles for LinkedIn, X (Twitter), Instagram, Facebook, and YouTube."
  },
  {
    q: "Can I use the signature for business?",
    a: "Yes. You can use your generated signature for personal, freelance, or commercial business emails without restrictions."
  }
];

export default function FAQ() {
  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{faq.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}