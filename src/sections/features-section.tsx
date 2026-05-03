import { Fuel, Route, Droplets, Factory, HardHat, Drill, ArrowUpRight } from "lucide-react";
import AnimatedContent from "../components/animated-content";

const features = [
    {
        title: "HDPE Pipeline Systems",
        subtitle: "Arteries of Water & Energy",
        description: "Specialised HDPE pipe laying & jointing up to 1600mm dia, plus cross-country oil, gas, and water pipelines — delivered with zero-leakage precision across India.",
        icon: Fuel,
        stat: "1600mm",
        statLabel: "Max Pipe Dia",
        accent: "#ea580c",
        tag: "HDPE · OIL · GAS · WATER",
        bg: "from-orange-950/50 via-zinc-900 to-zinc-900",
        border: "border-white/[0.07] hover:border-orange-500/30",
    },
    {
        title: "Roads & Highways",
        subtitle: "Paving Progress",
        description: "Constructing the backbone of regional connectivity with durable national highways, urban expressways, and specialized pavement solutions.",
        icon: Route,
        stat: "1200+ km",
        statLabel: "Built",
        accent: "#94a3b8",
        tag: "NH · SH · URBAN",
        bg: "from-slate-800/40 via-zinc-900 to-zinc-900",
        border: "border-white/[0.07] hover:border-slate-400/30",
    },
    {
        title: "Sewage & Water",
        subtitle: "Sustainable Flow",
        description: "Advanced underground drainage and sewage treatment networks ensuring cleaner cities and sustainable water cycles across urban centres.",
        icon: Droplets,
        stat: "80+ Projects",
        statLabel: "Delivered",
        accent: "#38bdf8",
        tag: "UGD · STP · WTP",
        bg: "from-blue-950/50 via-zinc-900 to-zinc-900",
        border: "border-white/[0.07] hover:border-sky-500/30",
    },
    {
        title: "Industrial Foundations",
        subtitle: "Heavy Civil Works",
        description: "Specialized civil works and infrastructure for manufacturing zones, logistic parks, and heavy industrial complexes across North India.",
        icon: Factory,
        stat: "35+ Sites",
        statLabel: "Completed",
        accent: "#a1a1aa",
        tag: "INDUSTRIAL · CIVIL",
        bg: "from-zinc-800/40 via-zinc-900 to-zinc-900",
        border: "border-white/[0.07] hover:border-zinc-400/30",
    },
    {
        title: "Precision Surveying",
        subtitle: "Engineering Survey",
        description: "Advanced topographical surveying and soil testing establishing unshakable foundations for every project we undertake.",
        icon: Drill,
        stat: "500+ Surveys",
        statLabel: "Executed",
        accent: "#34d399",
        tag: "GEO · TOPO · SOIL",
        bg: "from-emerald-950/50 via-zinc-900 to-zinc-900",
        border: "border-white/[0.07] hover:border-emerald-500/30",
    },
    {
        title: "Turnkey EPC",
        subtitle: "End-to-End Delivery",
        description: "Complete Engineering, Procurement and Construction management — from survey and design through commissioning. Trusted by Adani Group, L&T, and UP Jal Nigam.",
        icon: HardHat,
        stat: "₹35Cr+",
        statLabel: "Value Executed",
        accent: "#fbbf24",
        tag: "E · P · C",
        bg: "from-amber-950/50 via-zinc-900 to-zinc-900",
        border: "border-white/[0.07] hover:border-amber-500/30",
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-32 bg-zinc-950 relative overflow-hidden px-4 md:px-16 lg:px-24 xl:px-32">
            {/* Blueprint grid */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-700/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-600/6 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ── HEADER ── */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
                    <AnimatedContent distance={30} className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-10 bg-orange-500/50" />
                            <span className="text-orange-500 font-mono text-[11px] font-bold tracking-[0.4em] uppercase">Technical Expertise</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-urbanist font-black text-white tracking-tighter leading-[0.9]">
                            What We<br />
                            <span className="text-orange-500">Build</span>{" "}
                            <span className="text-white/20">&</span>{" "}
                            <span className="text-white">Deliver</span>
                        </h2>
                    </AnimatedContent>

                    <AnimatedContent delay={0.15} distance={30} className="max-w-md">
                        <p className="text-white/40 text-base leading-relaxed mb-8">
                            Engineering precision and operational excellence in every infrastructure segment — from national corridors to industrial zones.
                        </p>
                        <a href="#contact"
                            className="group inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/30 hover:-translate-y-1 text-sm">
                            Consult on a Project
                            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
                        </a>
                    </AnimatedContent>
                </div>

                {/* ── FEATURE CARDS GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <AnimatedContent
                                key={i}
                                delay={i * 0.07}
                                distance={24}
                                className={`group relative rounded-2xl border ${f.border} bg-gradient-to-br ${f.bg} p-7 flex flex-col justify-between min-h-[300px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 active:scale-[0.99] overflow-hidden cursor-default`}
                            >
                                {/* Top row */}
                                <div className="flex items-start justify-between mb-8">
                                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/20 border border-white/8 rounded-full px-3 py-1">
                                        {f.tag}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <div className="size-1.5 rounded-full opacity-30 group-hover:opacity-100 transition-all duration-300 animate-blink-dot" style={{ background: f.accent }} />
                                    </div>
                                </div>

                                {/* Icon + stat */}
                                <div className="flex items-end justify-between mb-5">
                                    <div
                                        className="size-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                                        style={{ background: `${f.accent}18`, border: `1px solid ${f.accent}28` }}
                                    >
                                        <Icon size={22} style={{ color: f.accent }} />
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-black font-urbanist leading-none" style={{ color: f.accent }}>{f.stat}</p>
                                        <p className="text-white/20 font-mono text-[9px] uppercase tracking-widest mt-0.5">{f.statLabel}</p>
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="flex-1">
                                    <p className="text-white/25 font-mono text-[9px] uppercase tracking-widest mb-1">{f.subtitle}</p>
                                    <h3 className="text-white font-black text-lg tracking-tight leading-tight mb-2.5">{f.title}</h3>
                                    <p className="text-white/35 text-sm leading-relaxed">{f.description}</p>
                                </div>

                                {/* CTA */}
                                <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                                    <span className="text-xs font-bold tracking-tight" style={{ color: f.accent }}>Learn More</span>
                                    <ArrowUpRight size={12} style={{ color: f.accent }} />
                                </div>

                                {/* Background glow on hover */}
                                <div
                                    className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-all duration-1000 pointer-events-none"
                                    style={{ background: f.accent }}
                                />

                                {/* Corner L-accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                                    <div className="absolute top-0 right-0 h-full w-[1px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                                        style={{ background: `linear-gradient(to bottom, ${f.accent}, transparent)` }} />
                                    <div className="absolute top-0 right-0 w-full h-[1px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                                        style={{ background: `linear-gradient(to left, ${f.accent}, transparent)` }} />
                                </div>
                            </AnimatedContent>
                        );
                    })}
                </div>

                {/* ── BOTTOM STRIP ── */}
                <AnimatedContent delay={0.5} className="mt-16 flex flex-col md:flex-row items-center justify-between gap-5 pt-8 border-t border-white/[0.05]">
                    <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.3em]">
                        Certified · ISO Compliant · UP PWD Approved · CPWD Empanelled
                    </p>
                    <div className="flex items-center gap-3 flex-wrap justify-center">
                        {["IS 3114", "CPHEEO", "IRC:SP:13", "BIS"].map(badge => (
                            <span key={badge} className="text-white/20 font-mono text-[10px] border border-white/[0.07] rounded-full px-3 py-1 hover:border-orange-500/25 hover:text-orange-500/50 transition-all duration-300 cursor-default">
                                {badge}
                            </span>
                        ))}
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}