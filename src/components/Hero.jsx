import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDownCircle, Download } from 'lucide-react';

const NeonButton = ({ href, children, onClick, download }) => (
  <a
    href={href}
    onClick={onClick}
    download={download}
    className="relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-cyan-200 hover:text-white transition-colors duration-300"
    style={{ textShadow: '0 0 8px rgba(34,211,238,0.7)' }}
  >
    <span className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md" aria-hidden />
    <span className="absolute inset-0 rounded-full ring-2 ring-cyan-400/60 shadow-[0_0_30px_rgba(34,211,238,0.35)]" aria-hidden />
    <span className="relative flex items-center gap-2">{children}</span>
  </a>
);

export default function Hero() {
  const handleScroll = (e) => {
    e.preventDefault();
    const el = document.querySelector('#portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#07090f] text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient vignetting that won't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),rgba(2,6,23,0.9))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-16 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-300"
          style={{ textShadow: '0 0 18px rgba(34,211,238,0.75), 0 0 36px rgba(34,211,238,0.35)' }}
        >
          Hamid Ali
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-cyan-100/80">
          Software Engineer | Project Manager | Data Analyst
        </p>
        <p className="mt-4 max-w-2xl text-cyan-100/70">
          Blending technology, management, and data to build smarter solutions.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <NeonButton href="#portfolio" onClick={handleScroll}>
            <ArrowDownCircle className="h-5 w-5" />
            View My Work
          </NeonButton>
          <NeonButton href="/hamid_ali_resume.pdf" download>
            <Download className="h-5 w-5" />
            Download Resume
          </NeonButton>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 mx-auto -mt-6 max-w-5xl px-6 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{
            label: '1+ Year IT Experience',
          }, {
            label: '2+ Projects Managed',
          }, {
            label: 'Based in Karachi',
          }, {
            label: 'TechNova Solutions – Assistant IT Officer',
          }].map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl bg-[#0b1220]/70 px-4 py-5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 rounded-xl ring-1 ring-cyan-400/30" />
              <div className="absolute -inset-16 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              <p className="relative text-center text-sm font-medium text-cyan-100/90">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
