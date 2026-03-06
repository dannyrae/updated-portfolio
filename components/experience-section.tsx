const experiences = [
    {
        role: "Full-Stack Developer (MERN)",
        company: "Sphiderass Web Limited",
        period: "November 2023 – Present",
        points: [
            "Implemented RESTful APIs and integrated databases and external services.",
            "Collaborated with frontend teams on API integrations and application flows.",
            "Contributed to the infrastructure of a ticketing platform used by hundreds of users.",
        ],
    },
    {
        role: "Backend Serverless Engineer",
        company: "Esemie",
        period: "September 2024 – February 2025",
        points: [
            "Worked on backend infrastructure for the Esemie mobile application.",
            "Built and supported AWS Lambda-based services in a serverless architecture.",
            "Worked with DynamoDB and supported backend reliability with another engineer.",
        ],
    },
    {
        role: "Backend Developer",
        company: "Trusoft Limited",
        period: "April 2023 – July 2023",
        points: [
            "Designed, developed, and maintained software applications, databases, and APIs.",
            "Tested and debugged backend systems for reliability and performance.",
            "Optimized applications and databases for scalability and efficiency.",
        ],
    },
    {
        role: "Coding and Robotics Lead Instructor",
        company: "Creative Builders Club",
        period: "May 2021 – March 2023",
        points: [
            "Led coding teams and helped increase signups across 3 schools.",
            "Trained interns and co-led internal onboarding initiatives.",
            "Developed 30 coding and robotics projects for the curriculum.",
        ],
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 md:py-24">
            <div className="section-shell">
                <div className="mb-10 max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">Experience</p>
                    <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Professional experience across product engineering, serverless systems, and technical instruction.</h2>
                </div>

                <div className="space-y-6">
                    {experiences.map((item) => (
                        <article key={`${item.company}-${item.role}`} className="glass-card rounded-3xl p-6 md:p-8">
                            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                                    <p className="mt-1 text-sky-300">{item.company}</p>
                                </div>
                                <p className="text-sm text-slate-400">{item.period}</p>
                            </div>

                            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                                {item.points.map((point) => (
                                    <li key={point}>• {point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}