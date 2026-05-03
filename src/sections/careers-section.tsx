import { jobs } from "../data/careers";
import AnimatedContent from "../components/animated-content";
import { Briefcase, MapPin, Clock, ArrowUpRight, Users, ChevronRight } from "lucide-react";

export default function CareersSection() {
    return (
        <section id="careers" className="py-28 bg-zinc-50 px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Top edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            {/* Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl pointer-events-none opacity-70" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <AnimatedContent distance={30} className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-10 bg-orange-600/40" />
                            <span className="text-orange-600 font-mono text-[11px] font-bold tracking-[0.4em] uppercase">Built by People</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-urbanist font-black text-zinc-900 tracking-tighter leading-[1.0]">
                            Build Your Career in{" "}
                            <span className="italic text-orange-600">Infrastructure</span>
                        </h2>
                    </AnimatedContent>

                    <AnimatedContent delay={0.15} distance={30} className="pb-1 flex flex-col items-start gap-5 max-w-sm">
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Based in Govindpuram, Ghaziabad — join a team of infrastructure professionals delivering large-scale HDPE and civil projects across India.
                        </p>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-2">
                                <Users size={14} className="text-orange-600" />
                                <span className="font-bold text-zinc-700 text-sm">Ghaziabad, UP</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-orange-600" />
                                <span className="font-bold text-zinc-700 text-sm">4.4★ Culture Rating</span>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>

                {/* Jobs */}
                <div className="grid gap-2.5">
                    {jobs.map((job, index) => (
                        <AnimatedContent
                            key={job.id}
                            delay={index * 0.07}
                            distance={20}
                            className="group relative bg-white border border-zinc-100 rounded-2xl px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-5 transition-all duration-400 hover:border-orange-200/80 hover:shadow-lg hover:shadow-orange-500/6 hover:-translate-y-0.5"
                        >
                            {/* Left accent bar */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-10 rounded-r-full bg-gradient-to-b from-orange-500 to-amber-400 transition-all duration-500" />

                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                {/* Icon */}
                                <div className="size-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-300 group-hover:text-orange-600 group-hover:border-orange-100 group-hover:bg-orange-50 transition-all duration-300 flex-shrink-0">
                                    <Briefcase size={20} />
                                </div>
                                {/* Info */}
                                <div>
                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                        <span className="text-[9px] font-mono font-bold text-zinc-300 tracking-widest uppercase">{job.department}</span>
                                        <span className="size-1 rounded-full bg-zinc-200" />
                                        <span className="text-[9px] font-mono font-bold text-orange-500/70 tracking-widest">{job.id}</span>
                                        <span className="inline-flex items-center bg-orange-50 text-orange-600 border border-orange-100 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">{job.type}</span>
                                    </div>
                                    <h3 className="text-base md:text-lg font-black text-zinc-900 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                                        {job.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Right: meta + CTA */}
                            <div className="flex flex-wrap items-center gap-4 md:gap-5 flex-shrink-0">
                                <div className="flex items-center gap-1.5 text-zinc-400">
                                    <MapPin size={13} className="text-zinc-300" />
                                    <span className="text-sm">{job.location}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-zinc-400">
                                    <Clock size={13} className="text-zinc-300" />
                                    <span className="text-sm">{job.experience}</span>
                                </div>

                                <a
                                    href={`mailto:careers@wccinfra.com?subject=Application for ${encodeURIComponent(job.title)} [${job.id}]&body=Dear WCC Infra Recruitment Team,%0A%0AI am writing to apply for the position of ${encodeURIComponent(job.title)} (Ref: ${job.id}).%0A%0APlease find my CV attached.%0A%0ARegards`}
                                    className="group/btn flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-600/20 hover:-translate-y-0.5"
                                >
                                    Apply Now
                                    <ArrowUpRight size={14} className="transition-transform group-hover/btn:rotate-45 duration-300" />
                                </a>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>

                {/* General Application Banner */}
                <AnimatedContent delay={0.35} className="mt-10">
                    <div className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-zinc-950 rounded-2xl border border-zinc-800">
                        {/* Background accent */}
                        <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-orange-600/10 to-transparent pointer-events-none" />

                        <div className="relative z-10">
                            <p className="text-white font-black text-lg mb-1">Don't see your role?</p>
                            <p className="text-zinc-500 text-sm">We're always looking for talented infrastructure professionals.</p>
                        </div>
                        <a
                            href="mailto:careers@wccinfra.com?subject=General Application – WCC Infra&body=Dear WCC Infra Team,%0A%0AI would like to express my interest in joining your team.%0A%0APlease find my CV attached.%0A%0ARegards"
                            className="relative z-10 group flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/25 flex-shrink-0 text-sm"
                        >
                            Send Your CV
                            <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-300" />
                        </a>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}
