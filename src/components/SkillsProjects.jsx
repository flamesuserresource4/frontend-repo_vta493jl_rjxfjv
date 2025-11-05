import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SkillBar = ({ label, level }) => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-white/80">
        <span>{label}</span>
        <span>{level}%</span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#1a1a1a] ring-1 ring-red-400/20">
        <div
          className="h-full bg-gradient-to-r from-red-400 to-rose-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default function SkillsProjects() {
  return (
    <section id="skills" className="relative w-full bg-[#0d0d0d] py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(127,29,29,0.2),rgba(13,13,13,0.15))]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        {/* Skills */}
        <div className="rounded-2xl bg-[#141414]/70 p-6 ring-1 ring-red-400/20 backdrop-blur">
          <h3 className="text-xl font-semibold text-white">Skills</h3>
          <div className="mt-6 grid gap-4">
            <SkillBar label="Project Management" level={90} />
            <SkillBar label="Data Analysis" level={85} />
            <SkillBar label="MS Excel, Word, PowerPoint" level={90} />
            <SkillBar label="Jira, Trello, Asana" level={80} />
            <SkillBar label="IT Support & Troubleshooting" level={88} />
            <SkillBar label="Python (Basic for data handling)" level={60} />
            <SkillBar label="Communication & Team Coordination" level={92} />
          </div>
        </div>

        {/* Projects */}
        <div id="portfolio" className="rounded-2xl bg-[#141414]/70 p-6 ring-1 ring-red-400/20 backdrop-blur">
          <h3 className="text-xl font-semibold text-white">Portfolio / Projects</h3>
          <div className="mt-6 grid gap-5">
            {[{
              title: 'Project Coordination Dashboard',
              desc: 'Built using Trello and Excel for workflow tracking.',
            }, {
              title: 'Data Insights Report',
              desc: 'Analyzed mock datasets to create visual summaries.',
            }, {
              title: 'IT Optimization Project',
              desc: 'Enhanced data systems and internal performance.',
            }].map((p, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl bg-[#181818] p-5 ring-1 ring-red-400/20 transition-transform duration-300 hover:-translate-y-0.5">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-500/10 to-rose-600/10" />
                <div className="relative flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-red-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">{p.title}</h4>
                    <p className="mt-1 text-sm text-white/80">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
