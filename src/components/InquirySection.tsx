import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { getDb } from '../lib/firebase';

export default function InquirySection() {
  const db = getDb();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    budget: '$10 - $50',
    message: '',
    website: '' // honeypot
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return; // honeypot caught spam

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please complete your name, email and message.');
      return;
    }

    setLoading(true);
    setStatus('Sending inquiry securely…');

    try {
      await addDoc(collection(db, 'inquiries'), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || 'Portfolio Project Inquiry',
        service: formData.service.trim() || 'General Inquiry',
        budget: formData.budget.trim() || '$10+ USD',
        message: formData.message.trim(),
        status: 'New',
        date: new Date().toISOString()
      });

      setStatus('Inquiry sent successfully. Thank you — your message has been received.');
      setFormData({ name: '', email: '', subject: '', service: '', budget: '$10 - $50', message: '', website: '' });
    } catch (error: any) {
      console.error(error);
      setStatus(`Unable to submit inquiry: ${error.message || 'Please try again later'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquiry" className="inquiry-section py-[100px]">
      <div className="container">
        <div className="section-title text-center mb-[55px]">
          <h2 className="text-[40px] font-black mb-[10px]">Submit an <span>Inquiry</span></h2>
          <p className="text-[#818c9c]">Tell me what you need and I’ll receive your inquiry securely. Budget criteria: $10 or above ($10+).</p>
        </div>
        <div className="inquiry-card max-w-[980px] mx-auto p-[30px] border border-[rgba(255,255,255,.08)] bg-[#10151f] rounded-[28px]">
          {/* Budget Criteria Notice */}
          <div className="mb-5 p-3 rounded-xl bg-[#070a10] border border-[#00d9ff]/20 flex items-center justify-between text-xs sm:text-sm text-[#a3adba]">
            <span>💡 <strong>Budget Criteria:</strong> Projects start from <span className="text-[#00d9ff] font-bold">$10 or above</span>.</span>
            <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">Min $10 USD</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inquiry-grid grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              <div className="inquiry-field flex flex-col gap-2">
                <label htmlFor="inquiryName">Your Name</label>
                <input
                  id="inquiryName"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                  maxLength={100}
                  className="p-[14px_15px] rounded-[14px] border border-[rgba(255,255,255,.08)] bg-[#070a10] text-white outline-none focus:border-[#00d9ff]"
                  placeholder="John Doe"
                />
              </div>
              <div className="inquiry-field flex flex-col gap-2">
                <label htmlFor="inquiryEmail">Your Email</label>
                <input
                  id="inquiryEmail"
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                  maxLength={180}
                  className="p-[14px_15px] rounded-[14px] border border-[rgba(255,255,255,.08)] bg-[#070a10] text-white outline-none focus:border-[#00d9ff]"
                  placeholder="john@example.com"
                />
              </div>
              <div className="inquiry-field flex flex-col gap-2">
                <label htmlFor="inquirySubject">Subject</label>
                <input
                  id="inquirySubject"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  maxLength={180}
                  className="p-[14px_15px] rounded-[14px] border border-[rgba(255,255,255,.08)] bg-[#070a10] text-white outline-none focus:border-[#00d9ff]"
                  placeholder="Project inquiry"
                />
              </div>
              <div className="inquiry-field flex flex-col gap-2">
                <label htmlFor="inquiryService">Service</label>
                <select
                  id="inquiryService"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                  className="p-[14px_15px] rounded-[14px] border border-[rgba(255,255,255,.08)] bg-[#070a10] text-white outline-none focus:border-[#00d9ff]"
                >
                  <option value="">Select a service or project category</option>
                  <option>Web Development (Nova Web Studio)</option>
                  <option>Game &amp; AI App Development (Colour Block, Pak AI, Learn Play)</option>
                  <option>Pixel Forge Graphic Design (Logo, Visiting Card, Banner)</option>
                  <option>2D &amp; 3D Architecture (Smart Flooring, 3D House Design)</option>
                  <option>Custom Project / Consultancy</option>
                </select>
              </div>
              {/* Budget Field */}
              <div className="inquiry-field full col-span-1 md:col-span-2 flex flex-col gap-2">
                <label htmlFor="inquiryBudget" className="flex items-center justify-between">
                  <span>Project Budget Criteria ($10 or above)</span>
                  <span className="text-[#00d9ff] text-xs font-semibold">Min $10 USD</span>
                </label>
                <select
                  id="inquiryBudget"
                  value={formData.budget}
                  onChange={e => setFormData({...formData, budget: e.target.value})}
                  className="p-[14px_15px] rounded-[14px] border border-[rgba(255,255,255,.08)] bg-[#070a10] text-white outline-none focus:border-[#00d9ff]"
                >
                  <option value="$10 - $50">$10 – $50 (Basic Task / Quick Fix)</option>
                  <option value="$50 - $150">$50 – $150 (Standard Project)</option>
                  <option value="$150 - $300">$150 – $300 (Advanced Project / Full App)</option>
                  <option value="$300+">$300+ (Comprehensive / Commercial System)</option>
                </select>
              </div>
              <div className="inquiry-field full col-span-1 md:col-span-2 flex flex-col gap-2">
                <label htmlFor="inquiryMessage">Message</label>
                <textarea
                  id="inquiryMessage"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  required
                  maxLength={5000}
                  className="p-[14px_15px] rounded-[14px] border border-[rgba(255,255,255,.08)] bg-[#070a10] text-white outline-none focus:border-[#00d9ff] min-h-[160px] resize-vertical"
                  placeholder="Describe your project, requirements, budget or timeline..."
                ></textarea>
              </div>
              <input
                type="text"
                className="inquiry-honeypot hidden"
                value={formData.website}
                onChange={e => setFormData({...formData, website: e.target.value})}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="inquiry-actions mt-[18px]">
              <button type="submit" disabled={loading} className="btn btn-primary px-6 py-3.5 rounded-lg font-bold">
                {loading ? 'Sending...' : 'Send Inquiry'}
              </button>
            </div>
            {status && <div className="inquiry-status mt-3 text-sm text-[#929dab]">{status}</div>}
            <div className="inquiry-note text-xs text-[#7f8a9a] mt-2">
              Your inquiry is delivered to the portfolio backend for secure admin review.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
