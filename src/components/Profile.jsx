import React from 'react';
import { GraduationCap, Briefcase, CalendarDays, MapPin } from 'lucide-react';

export default function Profile() {
  return (
    <section id="about" className="relative w-full bg-[#05070d] py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(8,47,73,0.28),rgba(2,6,23,0.2))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Avatar + Intro */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="relative h-40 w-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-400/10 blur-xl" />
              <div className="relative grid h-full w-full place-items-center rounded-full bg-[#0b1220] ring-2 ring-cyan-400/50 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
                <span className="text-5xl font-extrabold text-cyan-300" style={{ textShadow: '0 0 14px rgba(34,211,238,0.6)' }}>HA</span>
              </div>
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-cyan-300" style={{ textShadow: '0 0 12px rgba(34,211,238,0.55)' }}>
              About Me
            </h2>
            <p className="mt-3 max-w-xl text-cyan-100/80">
              I’m Hamid Ali, a passionate Software Engineer from Sindh Madressatul Islam University (SMIU), Karachi. I combine my technical foundation with project management and analytical thinking to deliver impactful results in IT and business projects.
            </p>
            <div className="mt-4 flex items-center gap-2 text-cyan-200/80">
              <MapPin className="h-4 w-4" /> Karachi, Pakistan
            </div>
          </div>

          {/* Education */}
          <div className="rounded-2xl bg-[#0b1220]/70 p-6 ring-1 ring-cyan-400/20 backdrop-blur">
            <div className="mb-4 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-cyan-300" />
              <h3 className="text-lg font-semibold text-cyan-200">Education</h3>
            </div>
            <div className="space-y-3 text-cyan-100/85">
              <p className="font-medium">BS Software Engineering (16 Years of Education)</p>
              <p className="text-sm">Sindh Madressatul Islam University (SMIU), Karachi – Graduated: 2025</p>
            </div>
          </div>

          {/* Experience */}
          <div className="rounded-2xl bg-[#0b1220]/70 p-6 ring-1 ring-cyan-400/20 backdrop-blur">
            <div className="mb-4 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-cyan-300" />
              <h3 className="text-lg font-semibold text-cyan-200">Experience</h3>
            </div>
            <div className="space-y-2 text-cyan-100/85">
              <p className="font-medium">Assistant IT Officer – TechNova Solutions</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-cyan-200/70">
                <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" /> Aug 2024 – Jul 2025</span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Supported IT operations and ensured network stability.</li>
                <li>Managed project timelines and communication between teams.</li>
                <li>Performed data analysis in Excel to track progress and performance.</li>
                <li>Created reports and dashboards for management decisions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
