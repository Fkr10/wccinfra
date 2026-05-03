import AnimatedContent from "../components/animated-content";
import { team } from "../data/team";
import { Mail, Shield } from "lucide-react";

export default function OurTeamSection() {
    return (
        <section id="team" className="py-32 bg-white px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Top edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

            {/* Subtle grid */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.025] pointer-events-none select-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-50 rounded-full blur-3xl pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <AnimatedContent distance={30}>
                        <div className="flex items-center gap-3 mb-6 justify-center">
                            <div className="h-px w-8 bg-zinc-200" />
                            <Shield className="size-4 text-orange-600" />
                            <span className="text-zinc-400 font-mono text-[11px] font-bold tracking-[0.4em] uppercase">WCC Leadership</span>
                            <div className="h-px w-8 bg-zinc-200" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-urbanist font-black text-zinc-900 tracking-tighter leading-[1.0] mb-6">
                            The Minds Behind<br />
                            <span className="text-orange-600">WCC Infrastructure</span>
                        </h2>
                        <p className="text-zinc-500 max-w-xl text-base leading-relaxed mx-auto">
                            Our executive board brings specialized expertise in high-pressure engineering and complex civil construction, steering the company toward technical excellence.
                        </p>
                    </AnimatedContent>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <AnimatedContent
                            key={index}
                            delay={index * 0.1}
                            className="group"
                        >
                            {/* Photo container */}
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-100 mb-5">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale-0 md:grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <div className="flex gap-3">
                                        {member.instagram && (
                                            <a
                                                href={`https://www.instagram.com/${member.instagram}/`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="size-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-orange-500 hover:border-transparent transition-all duration-300"
                                                title={`@${member.instagram}`}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                    <circle cx="12" cy="12" r="4" />
                                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                                </svg>
                                            </a>
                                        )}
                                        {member.email && (
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="size-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-orange-600 hover:border-orange-500 transition-all duration-300"
                                            >
                                                <Mail size={15} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Status badge */}
                                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
                                    <div className="size-1.5 rounded-full bg-emerald-400" />
                                    <span className="text-white/70 font-mono text-[8px] uppercase tracking-wider">{member.status}</span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="transition-all duration-500">
                                <h3 className="text-xl font-black text-zinc-900 tracking-tight leading-tight mb-1 group-hover:text-orange-600 transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.15em]">
                                    {member.role}
                                </p>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>

                {/* Bottom bar */}
                <AnimatedContent delay={0.4} className="mt-24">
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px flex-1 bg-zinc-100 max-w-48" />
                        <span className="text-[10px] font-mono text-zinc-300 tracking-[0.6em] uppercase">WCC INFRASTRUCTURE ADVISORY BOARD</span>
                        <div className="h-px flex-1 bg-zinc-100 max-w-48" />
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}