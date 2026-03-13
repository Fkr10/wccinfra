import { Fuel, Route, Droplets, Factory, HardHat, Drill, ArrowUpRight } from "lucide-react";
import AnimatedContent from "../components/animated-content";

const features = [
    {
        title: "Pipeline Systems",
        subtitle: "Arteries of Energy",
        description: "Expert installation of high-pressure cross-country oil, gas, and water pipelines with precision engineering and zero-leakage commitment.",
        icon: Fuel,
        stat: "600+ km",
        statLabel: "Laid",
        accent: "#ea580c",
        tag: "PP · OIL · GAS · WATER",
        bg: "from-orange-950/40 to-zinc-900",
        border: "hover:border-orange-500/40",
        glow: "hover:shadow-orange-500/10",
    },
    {
        title: "Roads & Highways",
        subtitle: "Paving Progress",
        description: "Constructing the backbone of regional connectivity with durable national highways, urban expressways, and specialized pavement solutions.",
        icon: Route,
        stat: "1200+ km",
        statLabel: "Built",
        accent: "#64748b",
        tag: "NH · SH · URBAN",
        bg: "from-slate-800/40 to-zinc-900",
        border: "hover:border-slate-400/40",
        glow: "hover:shadow-slate-500/10",
    },
    {
        title: "Sewage & Water",
        subtitle: "Sustainable Flow",
        description: "Advanced underground drainage and sewage treatment networks ensuring cleaner cities and sustainable water cycles across urban centres.",
        icon: Droplets,
        stat: "80+ Projects",
        statLabel: "Delivered",
        accent: "#0ea5e9",
        tag: "UGD · STP · WTP",
        bg: "from-blue-950/40 to-zinc-900",
        border: "hover:border-blue-500/40",
        glow: "hover:shadow-blue-500/10",
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
        bg: "from-zinc-800/40 to-zinc-900",
        border: "hover:border-zinc-400/40",
        glow: "hover:shadow-zinc-500/10",
    },
    {
        title: "Precision Surveying",
        subtitle: "Engineering Survey",
        description: "Advanced topographical surveying and soil testing establishing unshakable foundations for every project we undertake.",
        icon: Drill,
        stat: "500+ Surveys",
        statLabel: "Executed",
        accent: "#10b981",
        tag: "GEO · TOPO · SOIL",
        bg: "from-emerald-950/40 to-zinc-900",
        border: "hover:border-emerald-500/40",
        glow: "hover:shadow-emerald-500/10",
    },
    {
        title: "Turnkey EPC",
        subtitle: "End-to-End Delivery",
        description: "Complete Engineering, Procurement and Construction management — from conceptual design through commissioning to handover.",
        icon: HardHat,
        stat: "₹500Cr+",
        statLabel: "Value",
        accent: "#f59e0b",
        tag: "E · P · C",
        bg: "from-amber-950/40 to-zinc-900",
        border: "hover:border-amber-500/40",
        glow: "hover:shadow-amber-500/10",
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-28 bg-zinc-950 relative overflow-hidden px-4 md:px-16 lg:px-24 xl:px-32">
            {/* Blueprint grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

            {/* Ambient glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-700/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ── HEADER ── */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
                    <AnimatedContent distance={30} className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-orange-500/40" />
                            <span className="text-orange-500 font-mono text-xs font-bold tracking-[0.4em] uppercase">Technical Expertise</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-urbanist font-black text-white tracking-tighter leading-[0.9]">
                            What We<br />
                            <span className="text-orange-500">Build</span>{" "}
                            <span className="text-white/20">&</span>{" "}
                            <span className="text-white">Deliver</span>
                        </h2>
                    </AnimatedContent>

                    <AnimatedContent delay={0.15} distance={30} className="max-w-md">
                        <p className="text-white/40 text-lg leading-relaxed mb-8">
                            Engineering precision and operational excellence in every infrastructure segment — from national corridors to industrial zones.
                        </p>
                        <a href="#contact"
                            className="group inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-1">
                            Consult on a Project
                            <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
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
                                className={`group relative rounded-2xl border border-white/[0.07] bg-gradient-to-br ${f.bg} p-8 flex flex-col justify-between min-h-[320px] transition-all duration-500 ${f.border} ${f.glow} hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] overflow-hidden cursor-default`}
                            >
                                {/* Top row */}
                                <div className="flex items-start justify-between mb-8">
                                    {/* Tag badge */}
                                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20 border border-white/10 rounded-full px-3 py-1">
                                        {f.tag}
                                    </span>
                                    {/* Animated status dot */}
                                    <div className="size-2 rounded-full opacity-40 group-hover:opacity-100 transition-all" style={{ background: f.accent, boxShadow: `0 0 8px ${f.accent}` }} />
                                </div>

                                {/* Icon + stat */}
                                <div className="flex items-end justify-between mb-6">
                                    <div
                                        className="size-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                        style={{ background: `${f.accent}20`, border: `1px solid ${f.accent}30` }}
                                    >
                                        <Icon size={26} style={{ color: f.accent }} />
                                    </div>
                                    {/* Stat bubble */}
                                    <div className="text-right">
                                        <p className="text-2xl font-black font-urbanist leading-none" style={{ color: f.accent }}>{f.stat}</p>
                                        <p className="text-white/25 font-mono text-[9px] uppercase tracking-widest mt-0.5">{f.statLabel}</p>
                                    </div>
                                </div>

                                {/* Text */}
                                <div>
                                    <p className="text-white/30 font-mono text-[9px] uppercase tracking-widest mb-1">{f.subtitle}</p>
                                    <h3 className="text-white font-black text-xl tracking-tight leading-tight mb-3">{f.title}</h3>
                                    <p className="text-white/30 text-sm leading-relaxed">{f.description}</p>
                                </div>

                                {/* "Learn More" CTA — semi-visible on mobile, reveals on hover/tap */}
                                <div className="mt-6 flex items-center gap-2 opacity-60 md:opacity-0 -translate-x-0 md:-translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                    <div className="h-px flex-1 max-w-12" style={{ background: f.accent, opacity: 0.4 }} />
                                    <span className="text-xs font-bold" style={{ color: f.accent }}>Learn More</span>
                                    <ArrowUpRight size={13} style={{ color: f.accent }} />
                                </div>

                                {/* Background glow on hover */}
                                <div
                                    className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-1000 pointer-events-none"
                                    style={{ background: f.accent }}
                                />

                                {/* Corner L-accent — visible at low opacity on mobile to hint at interactivity */}
                                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                                    <div className="absolute top-0 right-0 h-full w-[1.5px] opacity-10 md:opacity-0 group-hover:opacity-70 transition-opacity duration-700"
                                        style={{ background: `linear-gradient(to bottom, ${f.accent}, transparent)` }} />
                                    <div className="absolute top-0 right-0 w-full h-[1.5px] opacity-10 md:opacity-0 group-hover:opacity-70 transition-opacity duration-700"
                                        style={{ background: `linear-gradient(to left, ${f.accent}, transparent)` }} />
                                </div>
                            </AnimatedContent>
                        );
                    })}
                </div>

                {/* ── BOTTOM STRIP ── */}
                <AnimatedContent delay={0.5} className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/[0.06]">
                    <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.3em]">
                        Certified · ISO Compliant · UP PWD Approved · CPWD Empanelled
                    </p>
                    <div className="flex items-center gap-6">
                        {["IS 3114", "CPHEEO", "IRC:SP:13", "BIS"].map(badge => (
                            <span key={badge} className="text-white/20 font-mono text-[10px] border border-white/[0.08] rounded-full px-3 py-1 hover:border-orange-500/30 hover:text-orange-500/50 transition-colors cursor-default">
                                {badge}
                            </span>
                        ))}
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}