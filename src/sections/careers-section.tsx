import { jobs } from "../data/careers";
import AnimatedContent from "../components/animated-content";
import { Briefcase, MapPin, Clock, ArrowUpRight, Users } from "lucide-react";

export default function CareersSection() {
    return (
        <section id="careers" className="py-28 bg-zinc-50 px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <AnimatedContent distance={30} className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="size-2 rounded-full bg-orange-600 animate-pulse" />
                            <span className="text-orange-600 font-mono text-xs font-bold tracking-[0.4em] uppercase">Built by People</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-urbanist font-black text-zinc-900 tracking-tighter leading-tight">
                            Build Your Career in <br />
                            <span className="text-orange-600 italic">Infrastructure</span>
                        </h2>
                    </AnimatedContent>

                    <AnimatedContent delay={0.15} distance={30} className="pb-2 flex flex-col items-start gap-6">
                        <p className="text-zinc-500 max-w-sm text-base leading-relaxed">
                            Join a team of elite engineers and project specialists redefining national infrastructure standards across India.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Users size={16} className="text-orange-600" />
                                <span className="font-bold text-zinc-700 text-sm">120+ Engineers</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <MapPin size={16} className="text-orange-600" />
                                <span className="font-bold text-zinc-700 text-sm">Pan-India Sites</span>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>

                {/* Jobs */}
                <div className="grid gap-3">
                    {jobs.map((job, index) => (
                        <AnimatedContent
                            key={job.id}
                            delay={index * 0.08}
                            distance={20}
                            className="group relative bg-white border border-zinc-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-500 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/8 hover:-translate-y-0.5"
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                                {/* Icon */}
                                <div className="size-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-300 group-hover:text-orange-600 group-hover:border-orange-100 group-hover:bg-orange-50 transition-all duration-300 flex-shrink-0">
                                    <Briefcase size={22} />
                                </div>
                                {/* Info */}
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                        <span className="text-[9px] font-mono font-bold text-zinc-300 tracking-widest uppercase">{job.department}</span>
                                        <span className="size-1 rounded-full bg-zinc-200" />
                                        <span className="text-[9px] font-mono font-bold text-orange-500 tracking-widest">{job.id}</span>
                                        <span className="inline-flex items-center bg-orange-50 text-orange-600 border border-orange-100 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">{job.type}</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-black text-zinc-900 tracking-tight group-hover:text-orange-600 transition-colors">
                                        {job.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Right side: meta + CTA */}
                            <div className="flex flex-wrap items-center gap-4 md:gap-6 flex-shrink-0">
                                <div className="flex items-center gap-2 text-zinc-400">
                                    <MapPin size={14} className="text-zinc-300" />
                                    <span className="text-sm font-medium">{job.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-400">
                                    <Clock size={14} className="text-zinc-300" />
                                    <span className="text-sm font-medium">{job.experience}</span>
                                </div>

                                {/* ✅ Apply Now — proper mailto link */}
                                <a
                                    href={`mailto:careers@wccinfra.com?subject=Application for ${encodeURIComponent(job.title)} [${job.id}]&body=Dear WCC Infra Recruitment Team,%0A%0AI am writing to apply for the position of ${encodeURIComponent(job.title)} (Ref: ${job.id}).%0A%0APlease find my CV attached.%0A%0ARegards`}
                                    className="group/btn flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-tight transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-600/25 hover:-translate-y-0.5"
                                >
                                    Apply Now
                                    <ArrowUpRight size={15} className="transition-transform group-hover/btn:rotate-45 duration-300" />
                                </a>
                            </div>

                            {/* Hover accent bar */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-12 rounded-r-full bg-orange-500 transition-all duration-500" />
                        </AnimatedContent>
                    ))}
                </div>

                {/* General application */}
                <AnimatedContent delay={0.4} className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
                    <div>
                        <p className="text-white font-black text-lg">Don't see your role?</p>
                        <p className="text-zinc-400 text-sm mt-1">We're always looking for talented infrastructure professionals.</p>
                    </div>
                    <a
                        href="mailto:careers@wccinfra.com?subject=General Application – WCC Infra&body=Dear WCC Infra Team,%0A%0AI would like to express my interest in joining your team.%0A%0APlease find my CV attached.%0A%0ARegards"
                        className="group flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/30 flex-shrink-0"
                    >
                        Send Your CV
                        <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                    </a>
                </AnimatedContent>
            </div>
        </section>
    );
}
