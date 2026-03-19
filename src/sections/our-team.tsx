import AnimatedContent from "../components/animated-content";
import { team } from "../data/team";
import { Mail, Shield } from "lucide-react";

export default function OurTeamSection() {
    return (
        <section id="team" className="py-32 bg-zinc-50 px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Architectural Background Detail */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <AnimatedContent distance={30}>
                        <div className="flex items-center gap-3 mb-6 justify-center">
                            <div className="h-px w-8 bg-zinc-300" />
                            <Shield className="size-4 text-orange-600" />
                            <span className="text-zinc-500 font-bold text-xs tracking-[0.4em] uppercase">WCC Leadership</span>
                            <div className="h-px w-8 bg-zinc-300" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-urbanist font-black text-zinc-900 tracking-tighter leading-tight mb-8">
                            The Minds Behind <br />
                            <span className="text-orange-600">WCC Infrastructure</span>
                        </h2>
                        <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed mx-auto">
                            Our executive board brings specialized expertise in high-pressure engineering and complex civil construction, steering the company toward technical excellence.
                        </p>
                    </AnimatedContent>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
                    {team.map((member, index) => (
                        <AnimatedContent
                            key={index}
                            delay={index * 0.1}
                            className="group relative"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-200 border border-zinc-200 shadow-sm">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale-0 md:grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                />

                                {/* Hover Overlay — visible on hover (desktop) or tap (mobile) */}
                                <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <div className="flex gap-4">
                                        {member.instagram && (
                                            <a
                                                href={`https://www.instagram.com/${member.instagram}/`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="size-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-orange-500 hover:border-transparent transition-all cursor-pointer"
                                                title={`@${member.instagram}`}
                                            >
                                                {/* Instagram SVG */}
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                    <circle cx="12" cy="12" r="4" />
                                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                                </svg>
                                            </a>
                                        )}
                                        {member.email && (
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="size-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-orange-600 hover:border-orange-500 transition-all cursor-pointer"
                                            >
                                                <Mail size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center sm:text-left transition-all duration-500 group-hover:translate-x-2">
                                <h3 className="text-2xl font-black text-zinc-900 tracking-tight leading-none mb-2 group-hover:text-orange-600 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                                    {member.role}
                                </p>

                                <div className="mt-4 flex items-center gap-2 justify-center sm:justify-start opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="h-px w-8 bg-orange-200" />
                                    <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-tighter">{member.status}</span>
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>

                {/* Bottom Decorative Line */}
                <div className="mt-32 h-[1px] w-full bg-zinc-200 flex items-center justify-center">
                    <div className="px-6 bg-zinc-50 text-[10px] font-mono text-zinc-300 tracking-[0.8em] uppercase">WCC INFRASTRUCTURE ADVISORY BOARD</div>
                </div>
            </div>
        </section>
    )
}