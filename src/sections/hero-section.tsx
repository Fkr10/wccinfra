import AnimatedContent from "../components/animated-content";
import { HardHat } from "lucide-react";
import CustomIcon from "../components/custom-icon";

export default function HeroSection() {
    return (
        <section className="bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Layered overlays */}
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/50 z-0" />

            {/* Animated grid overlay */}
            <div
                className="absolute inset-0 z-0 animate-grid-pulse pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* === CONSTRUCTION CRANE SVG (top right) === */}
            <div className="absolute top-0 right-12 z-10 hidden lg:block select-none pointer-events-none">
                <svg width="160" height="320" viewBox="0 0 160 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Crane mast */}
                    <rect x="74" y="80" width="12" height="240" fill="#ea580c" opacity="0.7" />
                    {/* Horizontal jib */}
                    <g className="animate-crane-swing" style={{ transformOrigin: "80px 90px" }}>
                        <rect x="20" y="85" width="120" height="8" fill="#ea580c" opacity="0.8" />
                        {/* Counter weight */}
                        <rect x="15" y="93" width="25" height="14" rx="2" fill="#fed7aa" opacity="0.6" />
                        {/* Hook cable */}
                        <line x1="125" y1="93" x2="125" y2="140" stroke="#fdba74" strokeWidth="2" opacity="0.7" />
                        {/* Hook load box */}
                        <g className="animate-crane-load" style={{ transformOrigin: "125px 140px" }}>
                            <rect x="113" y="140" width="24" height="18" rx="2" fill="#fb923c" opacity="0.6" />
                            <line x1="118" y1="140" x2="118" y2="135" stroke="#fdba74" strokeWidth="1.5" opacity="0.6" />
                            <line x1="130" y1="140" x2="130" y2="135" stroke="#fdba74" strokeWidth="1.5" opacity="0.6" />
                        </g>
                    </g>
                    {/* Base platform */}
                    <rect x="60" y="316" width="40" height="4" rx="2" fill="#ea580c" opacity="0.5" />
                </svg>
            </div>

            {/* === FLOATING BLUEPRINT ELEMENTS (left side) === */}
            <div className="absolute left-8 top-1/4 z-10 hidden lg:block pointer-events-none select-none">
                {/* Blueprint card 1 */}
                <div className="animate-float-up" style={{ animationDelay: "0s" }}>
                    <div className="bg-blue-950/70 border border-blue-400/30 backdrop-blur-sm rounded-lg p-3 w-48 mb-4 shadow-lg shadow-blue-900/30">
                        <p className="text-blue-300 font-mono text-[9px] uppercase tracking-widest mb-2 opacity-70">Blueprint REV.04</p>
                        <svg width="165" height="60" viewBox="0 0 165 60" className="opacity-60">
                            {/* Pipeline cross-section */}
                            <circle cx="30" cy="30" r="22" stroke="#60a5fa" strokeWidth="1.5" fill="none" />
                            <circle cx="30" cy="30" r="14" stroke="#93c5fd" strokeWidth="1" fill="none" strokeDasharray="4 2" />
                            <circle cx="30" cy="30" r="4" fill="#3b82f6" opacity="0.8" />
                            {/* Dimension lines */}
                            <line x1="60" y1="10" x2="160" y2="10" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
                            <line x1="60" y1="30" x2="160" y2="30" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
                            <line x1="60" y1="50" x2="160" y2="50" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
                            <text x="65" y="23" fill="#93c5fd" fontSize="7" fontFamily="monospace">PIPE Ø 600mm</text>
                            <text x="65" y="43" fill="#93c5fd" fontSize="7" fontFamily="monospace">WALL t=12mm</text>
                        </svg>
                    </div>
                </div>
                {/* Blueprint card 2 */}
                <div className="animate-float-slow" style={{ animationDelay: "1.5s" }}>
                    <div className="bg-orange-950/60 border border-orange-500/30 backdrop-blur-sm rounded-lg p-3 w-40 shadow-lg shadow-orange-900/20">
                        <p className="text-orange-400 font-mono text-[9px] uppercase tracking-widest mb-2 opacity-70">Site Status</p>
                        <div className="space-y-1.5">
                            {[
                                { label: "Foundation", pct: "100%" },
                                { label: "Structure", pct: "72%" },
                                { label: "Pipeline", pct: "45%" },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div className="flex justify-between mb-0.5">
                                        <span className="text-white/50 text-[8px] font-mono">{item.label}</span>
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
            <div className="absolute bottom-24 right-10 z-10 hidden lg:block pointer-events-none select-none">
                <div className="animate-float-slow" style={{ animationDelay: "0.8s" }}>
                    <div className="bg-zinc-900/80 border border-white/10 backdrop-blur-md rounded-2xl p-4 w-52 shadow-2xl">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="size-2 rounded-full bg-green-400 animate-blink-dot" />
                            <span className="text-white/40 font-mono text-[9px] uppercase tracking-widest">Live Site Update</span>
                        </div>
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-3xl font-black text-white font-urbanist">98<span className="text-orange-500">%</span></span>
                            <span className="text-white/40 text-xs font-mono mb-1">On-Time Rate</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-orange-600 to-amber-400 animate-build-progress rounded-full" style={{ width: "98%" }} />
                        </div>
                        <p className="text-white/20 font-mono text-[8px] mt-3">SRC: WCC_FIELD_MONITOR_v4</p>
                    </div>
                </div>
            </div>

            {/* === HARD HAT FLOATING ICON (top left) === */}
            <div className="absolute top-20 left-16 z-10 hidden xl:block pointer-events-none select-none">
                <div className="animate-float-up" style={{ animationDelay: "0.5s" }}>
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-pulse-ring" />
                        <div className="size-14 rounded-full bg-orange-600/20 border border-orange-500/30 backdrop-blur-sm flex items-center justify-center">
                            <HardHat size={24} className="text-orange-400" />
                        </div>
                    </div>
                </div>
            </div>

            {/* === ANIMATED WARNING STRIPE (bottom) === */}
            <div
                className="absolute bottom-0 left-0 w-full h-1.5 z-20 pointer-events-none"
                style={{
                    background: "repeating-linear-gradient(90deg, #ea580c 0px, #ea580c 24px, #000 24px, #000 48px)",
                    opacity: 0.6,
                }}
            />

            {/* === MAIN HERO CONTENT === */}
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen relative z-10">
                <AnimatedContent reverse distance={30} className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-1 pr-4 rounded-full border border-white/20 text-white">
                    <div className="flex items-center ml-1">
                        <div className="size-7 rounded-full border-2 border-orange-500 bg-orange-600 flex items-center justify-center font-bold text-[10px]">WCC</div>
                    </div>
                    <span>85+</span>
                    <div className="h-5 w-px mx-1 bg-white/30 rounded-full" />
                    <span>Large-Scale Projects Completed</span>
                </AnimatedContent>

                <AnimatedContent distance={30} delay={0.1} className="relative mt-8">
                    <h1 className="text-center font-urbanist text-white text-5xl/15 md:text-7xl/18 font-bold max-w-4xl tracking-tight">
                        Shaping the Lifelines of <br />
                        <span className="text-orange-500">Modern Infrastructure</span>
                    </h1>
                    <div className="absolute -top-6 -right-10 hidden md:block">
                        <CustomIcon icon={HardHat} dir="right" />
                    </div>
                </AnimatedContent>

                <AnimatedContent distance={30} delay={0.2}>
                    <p className="text-center text-lg md:text-xl text-zinc-200 shadow-sm max-w-2xl mt-6 font-medium">
                        Precision engineering for pipelines, roads, and sewage systems. We build the indestructible foundations that power nations and connect communities.
                    </p>
                </AnimatedContent>

                <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-10 w-full md:w-auto" delay={0.3}>
                    <a href="#features" className="py-3.5 md:py-3 w-full md:w-auto px-10 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] transition-all hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 text-white text-center font-bold rounded-full">
                        View Our Expertise
                    </a>
                    <a href="#contact" className="py-3.5 md:py-3 w-full md:w-auto px-10 bg-white/10 hover:bg-white/20 active:scale-[0.98] backdrop-blur-sm text-white font-bold text-center border border-white/30 rounded-full transition-all">
                        Request Consultation
                    </a>
                </AnimatedContent>

                {/* Scroll indicator */}
                <AnimatedContent delay={0.6} className="absolute bottom-10 flex flex-col items-center gap-2">
                    <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest">Scroll to Explore</span>
                    <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
                        <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}