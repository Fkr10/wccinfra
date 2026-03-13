import { clients } from "../data/clients";
import AnimatedContent from "../components/animated-content";
import { ShieldCheck, Activity, ArrowUpRight, ExternalLink } from "lucide-react";

export default function ClientsSection() {
    return (
        <section className="py-28 bg-white border-b border-gray-100 px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Subtle background dot grid */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <AnimatedContent distance={30}>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="size-2 rounded-full bg-orange-600 animate-pulse" />
                            <span className="text-orange-600 font-mono text-xs font-bold tracking-[0.4em] uppercase">Enterprise Ecosystem</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-urbanist font-black text-zinc-900 tracking-tighter leading-tight">
                            Trusted by <span className="text-orange-600 italic">Industry</span><br />Giants
                        </h2>
                    </AnimatedContent>


                </div>

                {/* Client Grid - 2 columns MD, 3 columns LG */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100">
                    {clients.map((client, index) => (
                        <AnimatedContent
                            key={index}
                            delay={index * 0.05}
                            distance={20}
                            className="group relative bg-white flex flex-col justify-between p-8 md:p-10 transition-all duration-500 hover:bg-zinc-50 hover:z-10 hover:shadow-xl hover:shadow-zinc-200/60 active:scale-[0.98]"
                        >
                            {/* Top row: shield badge + status + external link */}
                            <div className="flex items-start justify-between mb-10">
                                <div className="flex items-center gap-2.5">
                                    <div className="size-9 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-300 group-hover:text-orange-600 group-hover:border-orange-100 group-hover:bg-orange-50 transition-all duration-300">
                                        <ShieldCheck size={15} />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[9px] font-mono font-bold text-zinc-300 tracking-widest uppercase">Verified</span>
                                        <span className="text-[10px] font-mono font-bold text-zinc-400 tracking-tight">{client.executionYear}</span>
                                    </div>
                                </div>

                                {/* External link button */}
                                {client.website && (
                                    <a
                                        href={client.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-zinc-300 hover:text-orange-600 transition-colors group/link"
                                        title={`Visit ${client.name}`}
                                    >
                                        <ExternalLink size={12} className="group-hover/link:rotate-12 transition-transform" />
                                        <span className="hidden group-hover:inline">Visit Site</span>
                                    </a>
                                )}
                            </div>

                            {/* Logo — big and centred */}
                            <a
                                href={client.website || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center py-6 cursor-pointer"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-16 w-auto max-w-[200px] object-contain grayscale-0 md:grayscale opacity-90 md:opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                                />
                            </a>

                            {/* Bottom row: name, category, arrow CTA */}
                            <div className="mt-10 pt-6 border-t border-zinc-100 group-hover:border-zinc-200 transition-colors flex items-end justify-between gap-4">
                                <div className="space-y-1 min-w-0">
                                    <p className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.2em] truncate">{client.category}</p>
                                    <h3 className="text-lg font-black text-zinc-900 tracking-tight leading-snug group-hover:text-zinc-700 transition-colors">
                                        {client.name}
                                    </h3>
                                    {client.website && (
                                        <p className="text-[10px] text-zinc-300 font-mono truncate group-hover:text-zinc-400 transition-colors">
                                            {client.website.replace('https://', '')}
                                        </p>
                                    )}
                                </div>

                                {/* Visit CTA */}
                                <a
                                    href={client.website || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 size-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-300 transition-all duration-500 group-hover:border-orange-500 group-hover:text-orange-600 group-hover:bg-orange-50 group-hover:shadow-lg group-hover:shadow-orange-100"
                                    title={`Visit ${client.name}`}
                                >
                                    <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45 duration-300" />
                                </a>
                            </div>

                            {/* L-shaped corner accent — semi-visible on touch to hint at interactivity */}
                            <div className="absolute top-0 right-0 pointer-events-none overflow-hidden w-20 h-20">
                                <div className="absolute top-0 right-0 h-full w-[1.5px] bg-gradient-to-b from-orange-500 to-transparent opacity-10 md:opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
                                <div className="absolute top-0 right-0 w-full h-[1.5px] bg-gradient-to-l from-orange-500 to-transparent opacity-10 md:opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
                            </div>
                        </AnimatedContent>
                    ))}
                </div>

                {/* Live ticker bottom bar */}
                <AnimatedContent delay={0.4} className="mt-12 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-5 text-zinc-400">
                        <Activity size={13} className="text-orange-600" />
                        <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Live Partner Integration Status</span>
                    </div>
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-100">
                        {[
                            { k: "SYS_LOG", v: "HANDSHAKE_OK" },
                            { k: "API_UPTIME", v: "99.998%" },
                            { k: "SYNC_LATENCY", v: "12ms" },
                            { k: "MODE", v: "MISSION_CRITICAL" },
                        ].map((item) => (
                            <div key={item.k} className="bg-white px-6 py-4 flex flex-col gap-1">
                                <span className="text-[9px] font-mono font-bold text-zinc-300 uppercase tracking-[0.2em]">{item.k}</span>
                                <span className="text-sm font-black text-zinc-800 font-mono">{item.v}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}
