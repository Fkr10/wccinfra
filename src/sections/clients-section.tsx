import { clients } from "../data/clients";
import AnimatedContent from "../components/animated-content";
import { ShieldCheck, ArrowUpRight, ExternalLink } from "lucide-react";

export default function ClientsSection() {
    return (
        <section className="py-28 bg-white border-b border-zinc-100 px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Subtle dot grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <AnimatedContent distance={30}>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-10 bg-orange-600/40" />
                            <span className="text-orange-600 font-mono text-[11px] font-bold tracking-[0.4em] uppercase">Enterprise Ecosystem</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-urbanist font-black text-zinc-900 tracking-tighter leading-[1.0]">
                            Trusted by{" "}
                            <span className="italic text-orange-600">Industry</span>
                            <br />Giants
                        </h2>
                    </AnimatedContent>

                    <AnimatedContent delay={0.15} distance={30} className="max-w-sm">
                        <p className="text-zinc-500 text-base leading-relaxed">
                            Partnering with India's leading public sector and enterprise organizations to deliver critical infrastructure at scale.
                        </p>
                    </AnimatedContent>
                </div>

                {/* Client Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-100">
                    {clients.map((client, index) => (
                        <AnimatedContent
                            key={index}
                            delay={index * 0.05}
                            distance={20}
                            className="group relative bg-white flex flex-col justify-between p-8 md:p-10 transition-all duration-500 hover:bg-zinc-50/80 hover:z-10 hover:shadow-xl hover:shadow-zinc-200/60 active:scale-[0.99]"
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between mb-8">
                                <div className="flex items-center gap-2.5">
                                    <div className="size-9 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-300 group-hover:text-orange-600 group-hover:border-orange-100 group-hover:bg-orange-50 transition-all duration-300">
                                        <ShieldCheck size={15} />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[9px] font-mono font-bold text-zinc-300 tracking-widest uppercase">Verified</span>
                                        <span className="text-[10px] font-mono font-bold text-zinc-400 tracking-tight">{client.executionYear}</span>
                                    </div>
                                </div>

                                {client.website && (
                                    <a
                                        href={client.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-[10px] font-mono font-bold text-zinc-300 hover:text-orange-600 transition-colors"
                                        title={`Visit ${client.name}`}
                                    >
                                        <ExternalLink size={11} />
                                    </a>
                                )}
                            </div>

                            {/* Logo */}
                            <a
                                href={client.website || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center py-6 cursor-pointer"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-14 w-auto max-w-[180px] object-contain grayscale-0 md:grayscale opacity-90 md:opacity-35 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                                />
                            </a>

                            {/* Bottom row */}
                            <div className="mt-8 pt-5 border-t border-zinc-100 group-hover:border-zinc-200 transition-colors flex items-end justify-between gap-4">
                                <div className="space-y-0.5 min-w-0">
                                    <p className="text-[9px] font-bold text-orange-600 uppercase tracking-[0.2em] truncate">{client.category}</p>
                                    <h3 className="text-base font-black text-zinc-900 tracking-tight leading-snug group-hover:text-zinc-700 transition-colors">
                                        {client.name}
                                    </h3>
                                    {client.website && (
                                        <p className="text-[10px] text-zinc-300 font-mono truncate group-hover:text-zinc-400 transition-colors">
                                            {client.website.replace('https://', '')}
                                        </p>
                                    )}
                                </div>

                                <a
                                    href={client.website || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 size-9 rounded-xl border border-zinc-100 flex items-center justify-center text-zinc-300 transition-all duration-500 group-hover:border-orange-500 group-hover:text-orange-600 group-hover:bg-orange-50 group-hover:shadow-lg group-hover:shadow-orange-100"
                                    title={`Visit ${client.name}`}
                                >
                                    <ArrowUpRight size={15} className="transition-transform group-hover:rotate-45 duration-300" />
                                </a>
                            </div>

                            {/* Corner L-accent */}
                            <div className="absolute top-0 right-0 pointer-events-none overflow-hidden w-16 h-16">
                                <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-orange-500 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-orange-500 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                            </div>
                        </AnimatedContent>
                    ))}
                </div>

                {/* Bottom status bar */}
                <AnimatedContent delay={0.4} className="mt-10">
                    <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-xl">
                        <div className="flex items-center gap-2">
                            <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">All Partner Integrations Active</span>
                        </div>
                        <div className="flex items-center gap-6">
                            {[
                                { k: "UPTIME", v: "99.998%" },
                                { k: "PROJECTS", v: "85+" },
                                { k: "MODE", v: "MISSION_CRITICAL" },
                            ].map((item) => (
                                <div key={item.k} className="flex items-center gap-2">
                                    <span className="text-[9px] font-mono font-bold text-zinc-300 uppercase">{item.k}</span>
                                    <span className="text-[10px] font-black text-zinc-700 font-mono">{item.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}
