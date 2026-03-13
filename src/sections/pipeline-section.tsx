import AnimatedContent from "../components/animated-content";
import { Layers, Gauge, Droplets, CheckCircle2, ChevronRight } from "lucide-react";

const installSteps = [
    {
        num: "01",
        icon: <Layers size={18} />,
        title: "Site Survey & Layout",
        desc: "Geotechnical investigation, route alignment, and precision GPS trench marking.",
        tag: "Pre-Construction"
    },
    {
        num: "02",
        icon: <Layers size={18} />,
        title: "Trenching & Excavation",
        desc: "Mechanical excavation to design depth with engineered shoring support systems.",
        tag: "Earthworks"
    },
    {
        num: "03",
        icon: <Droplets size={18} />,
        title: "Bedding & Pipe Laying",
        desc: "Granular bedding compacted to IS spec, followed by jointed pipe string lowering.",
        tag: "Installation"
    },
    {
        num: "04",
        icon: <Gauge size={18} />,
        title: "Pressure Testing",
        desc: "Hydraulic testing at 1.5× working pressure. Full joint inspection and certification.",
        tag: "QA / QC"
    },
    {
        num: "05",
        icon: <CheckCircle2 size={18} />,
        title: "Backfill & Reinstatement",
        desc: "Structured 200mm compacted lifts. Surface reinstatement per authority standards.",
        tag: "Commissioning"
    },
];

const specs = [
    { label: "Max Diameter", value: "1200mm", sub: "HDPE / DI / MS / RCC" },
    { label: "Max Depth", value: "6.0 m", sub: "Rock anchored" },
    { label: "Test Pressure", value: "1.5× WP", sub: "Hydrostatic" },
    { label: "Standards", value: "IS 3114", sub: "CPHEEO Manual" },
];

export default function PipelineSection() {
    return (
        <section className="bg-[#080c14] relative overflow-hidden py-32 px-4 md:px-16 lg:px-24 xl:px-32">

            {/* Blueprint grid */}
            <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(rgba(96,165,250,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.7) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-700/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ── SECTION HEADER ── */}
                <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
                    <AnimatedContent distance={30}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-orange-500/40" />
                            <span className="text-orange-500 font-mono text-xs font-bold tracking-[0.4em] uppercase">Core Service — PP-07</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-urbanist font-black text-white tracking-tighter leading-[0.9] mb-6">
                            Pipeline<br />
                            <span className="text-orange-500">Installation</span><br />
                            <span className="text-white/30">& Engineering</span>
                        </h2>
                    </AnimatedContent>

                    <AnimatedContent delay={0.15} distance={30} className="flex flex-col gap-8">
                        <p className="text-white/40 text-lg leading-relaxed">
                            End-to-end pipeline delivery—from geotechnical survey through commissioning—across water supply, sewage, gas distribution, and industrial sectors.
                        </p>
                        {/* Spec pills row */}
                        <div className="grid grid-cols-2 gap-3">
                            {specs.map((s) => (
                                <div key={s.label} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-4 hover:border-orange-500/30 transition-colors group">
                                    <p className="text-white/25 font-mono text-[9px] uppercase tracking-widest mb-1">{s.label}</p>
                                    <p className="text-orange-400 font-black text-lg font-mono leading-tight">{s.value}</p>
                                    <p className="text-white/20 font-mono text-[9px] mt-0.5">{s.sub}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedContent>
                </div>

                {/* ── CROSS-SECTION DIAGRAM ── */}
                <AnimatedContent distance={20} className="mb-20">
                    <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#060a11] shadow-2xl shadow-black/60">

                        {/* Diagram header bar */}
                        <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-1.5">
                                    <div className="size-3 rounded-full bg-red-500/60" />
                                    <div className="size-3 rounded-full bg-yellow-500/60" />
                                    <div className="size-3 rounded-full bg-green-500/60" />
                                </div>
                                <span className="text-white/30 font-mono text-[10px] tracking-widest uppercase">DWG-PP-07 · Underground Pipeline Cross-Section · Rev 4</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="size-1.5 rounded-full bg-green-400 animate-blink-dot" />
                                <span className="text-green-400/70 font-mono text-[9px] uppercase tracking-widest">Simulation Active</span>
                            </div>
                        </div>

                        {/* SVG Diagram */}
                        <svg viewBox="0 0 1000 440" className="w-full animate-pipe-glow" xmlns="http://www.w3.org/2000/svg">

                            {/* ── GROUND LAYERS ── */}
                            {/* Sky zone */}
                            <rect x="0" y="0" width="1000" height="90" fill="#0d1117" />

                            {/* Road surface */}
                            <rect x="0" y="72" width="1000" height="22" fill="#1e293b" />
                            <rect x="0" y="72" width="1000" height="4" fill="#334155" />
                            {/* Road lane markings */}
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                                <rect key={i} x={50 + i * 100} y="75" width="50" height="2.5" rx="1" fill="#fbbf24" opacity="0.25" />
                            ))}
                            <text x="14" y="87" fill="#475569" fontSize="9" fontFamily="monospace" fontWeight="bold">ROAD FORMATION</text>

                            {/* Sub-base */}
                            <rect x="0" y="94" width="1000" height="48" fill="#161b22" />
                            {/* Aggregate dots */}
                            {Array.from({ length: 60 }).map((_, i) => (
                                <circle key={i} cx={10 + (i % 20) * 50} cy={100 + Math.floor(i / 20) * 14} r="3" fill="#374151" opacity="0.6" />
                            ))}
                            <text x="14" y="124" fill="#374151" fontSize="9" fontFamily="monospace">SUB-BASE GRANULAR (300mm)</text>

                            {/* Backfill zone */}
                            <rect x="0" y="142" width="1000" height="80" fill="#0f1419" />
                            <text x="14" y="186" fill="#283040" fontSize="9" fontFamily="monospace">SELECTED BACKFILL — COMPACTED 200mm LIFTS</text>

                            {/* Pipe zone (bedding) */}
                            <rect x="0" y="222" width="1000" height="118" fill="#0a0e14" />
                            <text x="14" y="338" fill="#1e2535" fontSize="9" fontFamily="monospace">GRANULAR PIPE BEDDING — 200mm</text>

                            {/* Native soil */}
                            <rect x="0" y="340" width="1000" height="100" fill="#07090d" />
                            <text x="14" y="420" fill="#16202e" fontSize="9" fontFamily="monospace">NATIVE SOIL / ROCK FORMATION</text>

                            {/* Layer dividers */}
                            {[94, 142, 222, 340].map((y, i) => (
                                <line key={i} x1="0" y1={y} x2="1000" y2={y} stroke="#1e2d45" strokeWidth="0.6" strokeDasharray="8 5" />
                            ))}

                            {/* ── TRENCH ── */}
                            {/* Trench fill highlight */}
                            <rect x="335" y="94" width="330" height="248" fill="#0c1620" opacity="0.8" />

                            {/* Trench walls */}
                            <rect x="333" y="94" width="7" height="252" fill="#1e3a5f" opacity="0.7" />
                            <rect x="660" y="94" width="7" height="252" fill="#1e3a5f" opacity="0.7" />

                            {/* Shoring boards */}
                            {[0, 1, 2, 3, 4, 5].map(i => (
                                <g key={i}>
                                    <rect x="330" y={98 + i * 40} width="11" height="28" rx="1.5" fill="#7c3a0f" opacity="0.6" />
                                    <rect x="659" y={98 + i * 40} width="11" height="28" rx="1.5" fill="#7c3a0f" opacity="0.6" />
                                    {/* Waler strut */}
                                    <line x1="341" y1={112 + i * 40} x2="659" y2={112 + i * 40} stroke="#7c3a0f" strokeWidth="1.5" opacity="0.25" strokeDasharray="10 8" />
                                </g>
                            ))}

                            {/* ── PIPE ── */}
                            {/* Outer protective coat */}
                            <ellipse cx="500" cy="281" rx="128" ry="62" fill="#0a1220" stroke="#1e3a5f" strokeWidth="2.5" />
                            {/* Steel outer wall */}
                            <ellipse cx="500" cy="281" rx="128" ry="62" fill="none" stroke="#ea580c" strokeWidth="6" opacity="0.95" />
                            {/* Inner bitumen lining */}
                            <ellipse cx="500" cy="281" rx="112" ry="53" fill="#10181f" stroke="#c2410c" strokeWidth="2" opacity="0.6" />
                            {/* Cement mortar lining */}
                            <ellipse cx="500" cy="281" rx="100" ry="45" fill="#0e1822" stroke="#374151" strokeWidth="1.5" opacity="0.7" />
                            {/* Fluid interior */}
                            <ellipse cx="500" cy="281" rx="88" ry="37" fill="#0c2233" />
                            {/* Specular highlight */}
                            <ellipse cx="480" cy="265" rx="40" ry="10" fill="#38bdf8" opacity="0.06" />

                            {/* ── ANIMATED FLOW PARTICLES ── */}
                            {[
                                { cy: 275, r: 5.5, fill: "#38bdf8", delay: "0s", dur: "3.8s" },
                                { cy: 285, r: 3.5, fill: "#7dd3fc", delay: "0.6s", dur: "3.8s" },
                                { cy: 279, r: 4.5, fill: "#0ea5e9", delay: "1.2s", dur: "3.8s" },
                                { cy: 283, r: 3, fill: "#93c5fd", delay: "1.9s", dur: "3.8s" },
                                { cy: 276, r: 5, fill: "#38bdf8", delay: "2.6s", dur: "3.8s" },
                                { cy: 288, r: 2.5, fill: "#bae6fd", delay: "0.3s", dur: "2.5s" },
                                { cy: 273, r: 2, fill: "#7dd3fc", delay: "1.5s", dur: "2.5s" },
                            ].map((p, i) => (
                                <circle key={i} cx="0" cy={p.cy} r={p.r} fill={p.fill}
                                    style={{ animation: `flow-right ${p.dur} linear ${p.delay} infinite` }}
                                />
                            ))}

                            {/* Flow arrow indicators inside pipe */}
                            {[420, 480, 540].map(x => (
                                <text key={x} x={x} y="285" fill="#0ea5e9" fontSize="11" opacity="0.2" fontFamily="monospace">›</text>
                            ))}

                            {/* ── BEDDING GRANULES ── */}
                            {Array.from({ length: 40 }).map((_, i) => (
                                <circle key={i}
                                    cx={360 + (i % 14) * 23}
                                    cy={320 + Math.floor(i / 14) * 10}
                                    r="4"
                                    fill="#1a2030"
                                    stroke="#263040"
                                    strokeWidth="0.5"
                                />
                            ))}

                            {/* ── ANNOTATION LINES ── */}
                            {/* Pipe diameter */}
                            <line x1="375" y1="281" x2="375" y2="224" stroke="#f97316" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.7" />
                            <line x1="625" y1="281" x2="625" y2="224" stroke="#f97316" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.7" />
                            <line x1="375" y1="226" x2="625" y2="226" stroke="#f97316" strokeWidth="1" opacity="0.8" />
                            <polygon points="378,223 375,226 372,229 375,226" fill="#f97316" opacity="0.8" />
                            <polygon points="622,223 625,226 628,229 625,226" fill="#f97316" opacity="0.8" />
                            <text x="500" y="220" fill="#f97316" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Ø 600mm NB</text>

                            {/* Depth arrow */}
                            <line x1="680" y1="72" x2="680" y2="340" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.5" />
                            <line x1="676" y1="72" x2="684" y2="72" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
                            <line x1="676" y1="340" x2="684" y2="340" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
                            <text x="692" y="212" fill="#64748b" fontSize="9" fontFamily="monospace">1800mm</text>
                            <text x="692" y="224" fill="#64748b" fontSize="9" fontFamily="monospace">DEPTH</text>

                            {/* Trench width */}
                            <line x1="340" y1="398" x2="662" y2="398" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
                            <line x1="340" y1="392" x2="340" y2="404" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
                            <line x1="662" y1="392" x2="662" y2="404" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
                            <text x="501" y="415" fill="#60a5fa" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">TRENCH WIDTH — 900mm</text>

                            {/* Wall thickness callout */}
                            <line x1="500" y1="244" x2="700" y2="180" stroke="#f97316" strokeWidth="0.7" opacity="0.5" />
                            <circle cx="502" cy="244" r="3" fill="#f97316" opacity="0.7" />
                            <text x="703" y="174" fill="#fb923c" fontSize="9" fontFamily="monospace">WALL t=12mm</text>
                            <text x="703" y="185" fill="#f97316" fontSize="8" fontFamily="monospace">OD 624mm</text>

                            {/* ── PRESSURE GAUGE (left) ── */}
                            <g>
                                <circle cx="130" cy="281" r="55" fill="#0d1623" stroke="#1e3a5f" strokeWidth="2" />
                                <circle cx="130" cy="281" r="44" fill="#07111d" stroke="#1e3a5f" strokeWidth="1" />
                                {/* Gauge arc */}
                                <path d="M 95 310 A 40 40 0 1 1 165 310" stroke="#374151" strokeWidth="3" fill="none" strokeLinecap="round" />
                                <path d="M 95 310 A 40 40 0 0 1 155 253" stroke="#ea580c" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
                                {/* Tick marks */}
                                {[0, 1, 2, 3, 4, 5, 6].map(i => {
                                    const angle = -210 + i * 40;
                                    const rad = angle * Math.PI / 180;
                                    const x1 = 130 + 36 * Math.cos(rad);
                                    const y1 = 281 + 36 * Math.sin(rad);
                                    const x2 = 130 + 43 * Math.cos(rad);
                                    const y2 = 281 + 43 * Math.sin(rad);
                                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#334155" strokeWidth="1.5" />;
                                })}
                                {/* Needle */}
                                <line x1="130" y1="281" x2="152" y2="250" stroke="#f97316" strokeWidth="2" strokeLinecap="round"
                                    style={{ transformOrigin: "130px 281px", animation: "crane-swing 4s ease-in-out infinite" }} />
                                <circle cx="130" cy="281" r="4" fill="#ea580c" />
                                <text x="130" y="274" fill="#f97316" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">8.5</text>
                                <text x="130" y="285" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">BAR</text>
                                <text x="130" y="304" fill="#334155" fontSize="8" fontFamily="monospace" textAnchor="middle">PRESSURE</text>
                                {/* Pulse ring */}
                                <circle cx="130" cy="281" r="55" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.2" style={{ animation: "pulse-ring 2.5s ease-out infinite" }} />
                            </g>

                            {/* Connecting pipe stub left */}
                            <rect x="185" y="274" width="152" height="14" rx="3" fill="#ea580c" opacity="0.5" />
                            <rect x="185" y="274" width="152" height="14" rx="3" fill="url(#pipeGrad)" opacity="0.3" />

                            {/* ── FLOW METER (right) ── */}
                            <g>
                                <circle cx="870" cy="281" r="55" fill="#0d1623" stroke="#1e3a5f" strokeWidth="2" />
                                <circle cx="870" cy="281" r="44" fill="#07111d" stroke="#1e3a5f" strokeWidth="1" />
                                {/* Spinning rotor lines */}
                                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                                    const rad = (angle + 30) * Math.PI / 180;
                                    return <line key={i} x1={870} y1={281} x2={870 + 32 * Math.cos(rad)} y2={281 + 32 * Math.sin(rad)} stroke="#0ea5e9" strokeWidth="1.5" opacity="0.4" />;
                                })}
                                <circle cx="870" cy="281" r="20" fill="#07111d" stroke="#0ea5e9" strokeWidth="1" opacity="0.5" />
                                <text x="870" y="276" fill="#38bdf8" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">2.4</text>
                                <text x="870" y="287" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">m³/s</text>
                                <text x="870" y="304" fill="#334155" fontSize="8" fontFamily="monospace" textAnchor="middle">FLOW RATE</text>
                            </g>

                            {/* Connecting pipe stub right */}
                            <rect x="663" y="274" width="152" height="14" rx="3" fill="#0ea5e9" opacity="0.4" />

                            {/* Gradient def */}
                            <defs>
                                <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ea580c" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
                                </linearGradient>
                            </defs>

                            {/* ── LEGEND ── */}
                            <g>
                                <rect x="14" y="14" width="10" height="10" rx="2" fill="#1e293b" />
                                <text x="28" y="23" fill="#475569" fontSize="8" fontFamily="monospace">ROAD</text>
                                <rect x="74" y="14" width="10" height="10" rx="2" fill="#ea580c" />
                                <text x="88" y="23" fill="#475569" fontSize="8" fontFamily="monospace">PIPE WALL</text>
                                <rect x="164" y="14" width="10" height="10" rx="2" fill="#0c2233" />
                                <text x="178" y="23" fill="#475569" fontSize="8" fontFamily="monospace">FLUID</text>
                                <rect x="220" y="14" width="10" height="10" rx="2" fill="#7c3a0f" />
                                <text x="234" y="23" fill="#475569" fontSize="8" fontFamily="monospace">SHORING</text>
                            </g>
                        </svg>
                    </div>
                </AnimatedContent>

                {/* ── INSTALLATION STEPS ── */}
                <div className="mb-16">
                    <AnimatedContent distance={20} className="flex items-center gap-4 mb-10">
                        <div className="h-px flex-1 bg-white/[0.06]" />
                        <span className="text-white/20 font-mono text-[10px] uppercase tracking-[0.3em]">Installation Methodology</span>
                        <div className="h-px flex-1 bg-white/[0.06]" />
                    </AnimatedContent>

                    <div className="relative">
                        {/* Connector track */}
                        <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-orange-600/20 to-transparent" />

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {installSteps.map((step, i) => (
                                <AnimatedContent key={i} delay={i * 0.08} distance={20}
                                    className="group relative"
                                >
                                    <div className="relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 h-full hover:bg-white/[0.06] hover:border-orange-500/30 active:scale-[0.98] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5">
                                        {/* Step indicator */}
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="size-9 rounded-xl bg-orange-600/10 border border-orange-600/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-600/20 transition-all">
                                                {step.icon}
                                            </div>
                                            <span className="text-white/10 font-black font-urbanist text-4xl leading-none group-hover:text-orange-500/10 transition-colors">{step.num}</span>
                                        </div>

                                        {/* Tag badge */}
                                        <div className="inline-flex items-center gap-1 bg-orange-500/10 border border-orange-500/15 rounded-full px-2 py-0.5 mb-3">
                                            <span className="text-orange-400/70 font-mono text-[8px] uppercase tracking-widest">{step.tag}</span>
                                        </div>

                                        <h3 className="text-white font-bold text-sm leading-snug mb-2">{step.title}</h3>
                                        <p className="text-white/25 text-xs leading-relaxed">{step.desc}</p>

                                        {/* Connector chevron */}
                                        {i < installSteps.length - 1 && (
                                            <div className="lg:hidden flex justify-center mt-4">
                                                <ChevronRight size={14} className="text-orange-600/30 rotate-90" />
                                            </div>
                                        )}

                                        {/* Corner accent — visible at low visibility on mobile to hint at interactivity */}
                                        <div className="absolute top-0 left-0 w-8 h-8 rounded-tl-2xl overflow-hidden pointer-events-none">
                                            <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-orange-500/60 to-transparent opacity-10 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                            <div className="absolute top-0 left-0 h-full w-[1.5px] bg-gradient-to-b from-orange-500/60 to-transparent opacity-10 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        </div>
                                    </div>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── BOTTOM SPEC BANNER ── */}
                <AnimatedContent delay={0.4} className="rounded-2xl border border-white/[0.06] overflow-hidden">
                    <div className="bg-white/[0.02] px-8 py-4 border-b border-white/[0.05]">
                        <span className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">Technical Compliance Parameters</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/[0.05]">
                        {[
                            { label: "Max Pipe Dia.", value: "Ø 1200mm" },
                            { label: "Max Depth", value: "6.0 m" },
                            { label: "Test Pressure", value: "1.5× WP" },
                            { label: "Materials", value: "DI · HDPE · MS · RCC" },
                            { label: "Standards", value: "IS 3114 · CPHEEO" },
                        ].map((spec) => (
                            <div key={spec.label} className="flex flex-col gap-1.5 px-6 py-5 hover:bg-white/[0.02] transition-colors">
                                <span className="text-white/20 font-mono text-[9px] uppercase tracking-widest">{spec.label}</span>
                                <span className="text-orange-400 font-black font-mono text-base leading-tight">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedContent>

            </div>
        </section>
    );
}
