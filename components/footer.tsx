export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Emmanuel Asuquo. Software Engineer.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/dannyrae" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/dannyrae" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:emmanueldan0920@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}