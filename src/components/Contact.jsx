import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hamidalisoomro05@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b0b0b] py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(127,29,29,0.2),rgba(10,10,10,0.18))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Let’s Connect</h3>
            <p className="mt-3 text-white/80">I’m open to roles in Software Engineering, Project Management, and Data Analysis. Reach out for opportunities or collaborations.</p>
            <div className="mt-6 space-y-3 text-white/85">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-red-300" /><a className="hover:underline" href="mailto:hamidalisoomro05@gmail.com">hamidalisoomro05@gmail.com</a></div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-red-300" /><a href="tel:03103705114" className="hover:underline">0310-3705114</a></div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-red-300" />Karachi, Pakistan</div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full p-2 ring-1 ring-red-400/40 hover:bg-red-500/10"><Linkedin className="h-5 w-5 text-red-300" /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full p-2 ring-1 ring-red-400/40 hover:bg-red-500/10"><Github className="h-5 w-5 text-red-300" /></a>
              <a href="mailto:hamidalisoomro05@gmail.com" className="rounded-full p-2 ring-1 ring-red-400/40 hover:bg-red-500/10"><Mail className="h-5 w-5 text-red-300" /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={onSubmit} className="rounded-2xl bg-[#141414]/70 p-6 ring-1 ring-red-400/20 backdrop-blur">
            <div className="mb-4">
              <label className="mb-2 block text-sm text-white">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border-0 bg-[#1a1a1a] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-400/60" placeholder="Your name" required />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm text-white">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border-0 bg-[#1a1a1a] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-400/60" placeholder="you@email.com" required />
            </div>
            <div className="mb-6">
              <label className="mb-2 block text-sm text-white">Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full rounded-lg border-0 bg-[#1a1a1a] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-400/60" placeholder="Write your message..." required />
            </div>
            <button type="submit" className="relative inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-red-200 transition-colors" style={{ textShadow: '0 0 8px rgba(239,68,68,0.7)' }}>
              <span className="absolute inset-0 rounded-full bg-red-500/20 blur-md" aria-hidden />
              <span className="absolute inset-0 rounded-full ring-2 ring-red-400/60 shadow-[0_0_30px_rgba(239,68,68,0.35)]" aria-hidden />
              <span className="relative">Send Message</span>
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-12 border-top border-t border-red-400/20 pt-6 text-center text-xs text-white/70">
          © 2025 Hamid Ali | Designed by AI
        </div>
      </div>
    </section>
  );
}
