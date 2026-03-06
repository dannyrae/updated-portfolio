const skillGroups = [
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "REST APIs", "Serverless", "Authentication"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "Supabase"],
  },
  {
    title: "Tools & Platforms",
    items: ["AWS", "Google Cloud Run", "Electron", "Git", "Jest", "Socket.io"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="section-shell">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">Skills</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Tools and technologies I use to ship reliable software.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <article key={group.title} className="glass-card rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}