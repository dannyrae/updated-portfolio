import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 md:py-24">
            <div className="section-shell">
                <div className="mb-10 max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">Featured Projects</p>
                    <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Selected work across healthcare, e-commerce, fintech, and product platforms.</h2>
                    <p className="mt-4 text-slate-400">
                        These projects reflect my work across backend systems, full-stack applications, desktop software, content platforms, and real-world business products.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.title} className="glass-card flex h-full flex-col overflow-hidden rounded-3xl">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="mb-5 inline-flex w-fit rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                                    {project.role}
                                </div>

                                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.stack.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 pt-2">
                                    {project.liveUrl ? (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
                                        >
                                            Visit project <ExternalLink size={16} />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}