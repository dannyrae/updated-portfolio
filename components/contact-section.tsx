export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="section-shell">
        <div className="glass-card rounded-[2rem] p-8 md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">Contact</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white md:text-5xl">
            Let’s build something solid together.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            I’m open to software engineering opportunities, backend-focused roles, freelance work, and product teams building useful, production-ready software.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:emmanueldan0920@gmail.com"
              className="rounded-full bg-sky-400 px-5 py-3 font-semibold text-slate-950 transition hover:translate-y-[-1px]"
            >
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/dannyrae"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dannyrae"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}