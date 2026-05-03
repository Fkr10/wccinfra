import AnimatedContent from "../components/animated-content";
import { HardHat, ChevronDown } from "lucide-react";
import CustomIcon from "../components/custom-icon";

export default function HeroSection() {
    return (
        <section className="bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden min-h-screen flex flex-col">
            {/* Layered overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/75 z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 z-0" />

            {/* Animated grid overlay */}
            <div
                className="absolute inset-0 z-0 animate-grid-pulse pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Orange radial accent - bottom left */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-orange-600/15 rounded-full blur-[120px] pointer-events-none z-0" />

            {/* === CONSTRUCTION CRANE SVG (top right) === */}
            <div className="absolute top-0 right-12 z-10 hidden lg:block select-none pointer-events-none">
                <svg width="160" height="320" viewBox="0 0 160 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="74" y="80" width="12" height="240" fill="#ea580c" opacity="0.6" />
                    <g className="animate-crane-swing" style={{ transformOrigin: "80px 90px" }}>
                        <rect x="20" y="85" width="120" height="8" fill="#ea580c" opacity="0.75" />
                        <rect x="15" y="93" width="25" height="14" rx="2" fill="#fed7aa" opacity="0.5" />
                        <line x1="125" y1="93" x2="125" y2="140" stroke="#fdba74" strokeWidth="2" opacity="0.6" />
                        <g className="animate-crane-load" style={{ transformOrigin: "125px 140px" }}>
                            <rect x="113" y="140" width="24" height="18" rx="2" fill="#fb923c" opacity="0.55" />
                            <line x1="118" y1="140" x2="118" y2="135" stroke="#fdba74" strokeWidth="1.5" opacity="0.5" />
                            <line x1="130" y1="140" x2="130" y2="135" stroke="#fdba74" strokeWidth="1.5" opacity="0.5" />
                        </g>
                    </g>
                    <rect x="60" y="316" width="40" height="4" rx="2" fill="#ea580c" opacity="0.4" />
                </svg>
            </div>

            {/* === FLOATING BLUEPRINT ELEMENTS (left side) === */}
            <div className="absolute left-8 top-1/4 z-10 hidden lg:block pointer-events-none select-none">
                <div className="animate-float-up" style={{ animationDelay: "0s" }}>
                    <div className="bg-blue-950/60 border border-blue-400/20 backdrop-blur-md rounded-xl p-3 w-48 mb-4 shadow-2xl shadow-blue-900/20">
                        <p className="text-blue-400 font-mono text-[9px] uppercase tracking-widest mb-2 opacity-60">Blueprint REV.04</p>
                        <svg width="165" height="60" viewBox="0 0 165 60" className="opacity-50">
                            <circle cx="30" cy="30" r="22" stroke="#60a5fa" strokeWidth="1.5" fill="none" />
                            <circle cx="30" cy="30" r="14" stroke="#93c5fd" strokeWidth="1" fill="none" strokeDasharray="4 2" />
                            <circle cx="30" cy="30" r="4" fill="#3b82f6" opacity="0.8" />
                            <line x1="60" y1="10" x2="160" y2="10" stroke="#60a5fa" strokeWidth="0.8" opacity="0.4" />
                            <line x1="60" y1="30" x2="160" y2="30" stroke="#60a5fa" strokeWidth="0.8" opacity="0.4" />
                            <line x1="60" y1="50" x2="160" y2="50" stroke="#60a5fa" strokeWidth="0.8" opacity="0.4" />
                            <text x="65" y="23" fill="#93c5fd" fontSize="7" fontFamily="monospace">PIPE Ø 600mm</text>
                            <text x="65" y="43" fill="#93c5fd" fontSize="7" fontFamily="monospace">WALL t=12mm</text>
                        </svg>
                    </div>
                </div>
                <div className="animate-float-slow" style={{ animationDelay: "1.5s" }}>
                    <div className="bg-orange-950/50 border border-orange-500/20 backdrop-blur-md rounded-xl p-3 w-40 shadow-2xl shadow-orange-900/10">
                        <p className="text-orange-400 font-mono text-[9px] uppercase tracking-widest mb-2 opacity-60">Site Status</p>
                        <div className="space-y-1.5">
                            {[
                                { label: "Foundation", pct: "100%" },
                                { label: "Structure", pct: "72%" },
                                { label: "Pipeline", pct: "45%" },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div className="flex justify-between mb-0.5">
                                        <span className="text-white/40 text-[8px] font-mono">{item.label}</span>
                                        <span className="text-orange-400 text-[8px] font-mono">{item.pct}</span>
                                    </div>
                                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-orange-600 to-amber-400 rounded-full animate-build-progress"
                                            style={{ width: item.pct }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* === FLOATING METRIC CARD (bottom right) === */}
            <div className="absolute bottom-28 right-10 z-10 hidden lg:block pointer-events-none select-none">
                <div className="animate-float-slow" style={{ animationDelay: "0.8s" }}>
                    <div className="bg-zinc-900/90 border border-white/10 backdrop-blur-xl rounded-2xl p-4 w-56 shadow-2xl shadow-black/50">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="size-2 rounded-full bg-emerald-400 animate-blink-dot" />
                            <span className="text-white/40 font-mono text-[9px] uppercase tracking-widest">Live Site Update</span>
                        </div>
                        <div className="flex items-end gap-2 mb-3">
                            <span className="text-4xl font-black text-white font-urbanist leading-none">98<span className="text-orange-500">%</span></span>
                            <span className="text-white/40 text-xs font-mono mb-1">On-Time Rate</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-3">
                            <div className="h-full bg-gradient-to-r from-orange-600 to-amber-400 animate-build-progress rounded-full" style={{ width: "98%" }} />
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="h-px flex-1 bg-white/10" />
                            <p className="text-white/20 font-mono text-[8px]">WCC_FIELD_MONITOR_v4</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* === HARD HAT FLOATING ICON (top left) === */}
            <div className="absolute top-24 left-16 z-10 hidden xl:block pointer-events-none select-none">
                <div className="animate-float-up" style={{ animationDelay: "0.5s" }}>
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-pulse-ring" />
                        <div className="size-14 rounded-full bg-orange-600/15 border border-orange-500/25 backdrop-blur-sm flex items-center justify-center">
                            <HardHat size={24} className="text-orange-400" />
                        </div>
                    </div>
                </div>
            </div>

            {/* === ANIMATED WARNING STRIPE (bottom) === */}
            <div
                className="absolute bottom-0 left-0 w-full h-1 z-20 pointer-events-none"
                style={{
                    background: "repeating-linear-gradient(90deg, #ea580c 0px, #ea580c 24px, transparent 24px, transparent 48px)",
                    opacity: 0.5,
                }}
            />

            {/* === MAIN HERO CONTENT === */}
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center flex-1 py-32 relative z-10">
                <AnimatedContent reverse distance={30} className="flex items-center gap-2 bg-white/8 backdrop-blur-md p-1 pr-4 rounded-full border border-white/15 text-white mb-10">
                    <div className="flex items-center ml-1">
                        <div className="size-7 rounded-full border-2 border-orange-500 bg-orange-600 flex items-center justify-center font-black text-[10px]">WCC</div>
                    </div>
                    <span className="text-sm font-semibold">85+</span>
                    <div className="h-4 w-px mx-1 bg-white/20 rounded-full" />
                    <span className="text-sm text-white/70">Large-Scale Projects Completed</span>
                </AnimatedContent>

                <AnimatedContent distance={30} delay={0.1} className="relative">
                    <h1 className="text-center font-urbanist text-white text-5xl/[1.1] md:text-7xl/[1.05] xl:text-8xl/[1.0] font-black max-w-5xl tracking-tighter">
                        Shaping the Lifelines of{" "}
                        <span className="relative inline-block">
                            <span className="text-orange-500">Modern</span>
                        </span>{" "}
                        <br className="hidden md:block" />
                        <span className="text-orange-500">Infrastructure</span>
                    </h1>
                    <div className="absolute -top-6 -right-10 hidden md:block">
                        <CustomIcon icon={HardHat} dir="right" />
                    </div>
                </AnimatedContent>

                <AnimatedContent distance={30} delay={0.2}>
                    <p className="text-center text-lg md:text-xl text-zinc-300 max-w-2xl mt-8 font-medium leading-relaxed">
                        Precision engineering for pipelines, roads, and sewage systems. We build the indestructible foundations that power nations and connect communities.
                    </p>
                </AnimatedContent>

                <AnimatedContent className="flex flex-col md:flex-row items-center gap-3 mt-10 w-full md:w-auto" delay={0.3}>
                    <a href="#features" className="py-4 md:py-3.5 w-full md:w-auto px-10 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-1 text-white text-center font-bold rounded-xl text-sm tracking-wide">
                        View Our Expertise
                    </a>
                    <a href="#contact" className="py-4 md:py-3.5 w-full md:w-auto px-10 bg-white/8 hover:bg-white/15 active:scale-[0.98] backdrop-blur-sm text-white font-bold text-center border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 text-sm tracking-wide">
                        Request Consultation
                    </a>
                </AnimatedContent>

                {/* Trust badges */}
                <AnimatedContent delay={0.45} className="flex items-center gap-4 mt-12 flex-wrap justify-center">
                    {["ISO 9001", "CPWD Empanelled", "UP PWD Approved", "BIS Certified"].map(badge => (
                        <span key={badge} className="text-white/30 font-mono text-[10px] border border-white/10 rounded-full px-3 py-1.5 hover:text-white/60 hover:border-white/20 transition-colors cursor-default">
                            {badge}
                        </span>
                    ))}
                </AnimatedContent>

                {/* Scroll indicator */}
                <AnimatedContent delay={0.6} className="mt-16 flex flex-col items-center gap-2">
                    <span className="text-white/25 font-mono text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
                    <div className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center p-1.5 mt-1">
                        <div className="w-1 h-2.5 bg-orange-500 rounded-full animate-bounce" />
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}