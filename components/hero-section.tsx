import { ArrowRight, Download } from "lucide-react";

const techStack = [
    "Node.js",
    "NestJS",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Supabase",
];

export default function HeroSection() {
    return (
        <section id="home" className="relative overflow-hidden py-10 md:py-16">
            <div className="section-shell grid items-start gap-10 ">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-sky-300">
                        Software Engineer
                    </p>

                    <h1 className="text-3xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl">
                        Emmanuel Asuquo
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                        I design and build scalable backend systems, production APIs, and full-stack platforms used in healthcare, e-commerce, fintech, and real-world products.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:translate-y-[-1px]"
                        >
                            View Work <ArrowRight size={18} />
                        </a>

                        <a
                            href="/Emmanuel-Asuquo-Software-Engineer.pdf"
                            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
                        >
                            Download Resume <Download size={18} />
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {techStack.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}