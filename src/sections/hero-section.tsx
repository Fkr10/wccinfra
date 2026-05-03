import AnimatedContent from "../components/animated-content";
import { HardHat } from "lucide-react";
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
                    <span className="text-sm font-semibold">Est. 2021</span>
                    <div className="h-4 w-px mx-1 bg-white/20 rounded-full" />
                    <span className="text-sm text-white/70">HDPE Pipeline Specialists · Ghaziabad, UP</span>
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
                        Specialists in HDPE pipe laying & jointing up to 1600mm dia — delivering critical water, gas, and civil infrastructure across India including the Mundra Adani Power Plant & Port.
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
                    {["HDPE up to Ø1600mm", "Civil & EPC Works", "UP PWD Approved", "Adani Group Partner"].map(badge => (
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