import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import AnimatedContent from "../components/animated-content";
import {
    Construction,
    Shovel,
    Truck,
    RefreshCcw,
    Sparkles
} from "lucide-react";

const steps = [
    {
        title: "Ground Excavation",
        desc: "Precise trenching using heavy-duty excavators to design depth and width specifications.",
        icon: <Shovel className="size-5" />,
    },
    {
        title: "Pipe Placement",
        desc: "Precision lifting and lowering of large-diameter pipe segments into the prepared trench.",
        icon: <Construction className="size-5" />,
    },
    {
        title: "Alignment & Joining",
        desc: "Rigid alignment and high-pressure welding to ensure leak-proof joint integrity.",
        icon: <Sparkles className="size-5" />,
    },
    {
        title: "Backfilling",
        desc: "Multi-layered compaction of selected backfill material for structural stability.",
        icon: <Truck className="size-5" />,
    },
    {
        title: "Surface Restoration",
        desc: "Final road reinstatement or ground leveling to return the site to its original state.",
        icon: <RefreshCcw className="size-5" />,
    }
];

export default function PipelineSimulationSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        return smoothProgress.onChange((latest) => {
            const step = Math.min(Math.floor(latest * steps.length), steps.length - 1);
            if (latest > 0.01) {
                setActiveStep(step);
            } else {
                setActiveStep(0);
            }
        });
    }, [smoothProgress]);

    // Transforms
    const excavatorRotation = useTransform(smoothProgress, [0, 0.2], [0, -15]);
    const excavatorArmMove = useTransform(smoothProgress, [0.05, 0.15], [0, 20]);
    const trenchOpacity = useTransform(smoothProgress, [0.1, 0.2], [0, 1]);
    const pipeOpacity = useTransform(smoothProgress, [0.2, 0.3], [0, 1]);
    const pipeY = useTransform(smoothProgress, [0.25, 0.45], [-100, 0]);
    const weldingGlow = useTransform(smoothProgress, [0.45, 0.55, 0.6], [0, 1, 0]);
    const fillLevel = useTransform(smoothProgress, [0.6, 0.8], [0, 1]);
    const restorationProgress = useTransform(smoothProgress, [0.8, 1], [0, 1]);

    return (
        <section
            ref={containerRef}
            className="relative bg-[#080c14] text-white"
            style={{ height: "400vh" }}
        >
            <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
                <div className="container mx-auto px-6 pt-24 pb-12 z-20">
                    <AnimatedContent distance={20}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-orange-500/40" />
                            <span className="text-orange-500 font-mono text-xs font-bold tracking-[0.4em] uppercase">Phase Sequence Simulation</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-urbanist font-black tracking-tighter mb-4 leading-tight">
                            Pipeline Installation<br />
                            <span className="text-orange-500">Interactive Simulation</span>
                        </h2>
                        <p className="max-w-xl text-white/40 text-sm md:text-base leading-relaxed">
                            A high-fidelity visualization of our engineering workflow—from initial excavation to final surface reinstatement. Scroll to see technical execution in action.
                        </p>
                    </AnimatedContent>
                </div>

                <div className="flex-1 flex flex-col lg:flex-row relative">
                    <div className="lg:w-1/3 px-6 lg:pl-32 lg:pr-12 py-12 flex flex-col justify-center gap-4 z-20">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className={`relative p-6 rounded-2xl border transition-all duration-500 ${activeStep === i
                                    ? "bg-white/[0.05] border-orange-500/30 shadow-2xl shadow-orange-500/5 translate-x-2"
                                    : "bg-transparent border-white/[0.05] opacity-30 grayscale"
                                    }`}
                                animate={{
                                    scale: activeStep === i ? 1.05 : 1,
                                }}
                            >
                                <div className="absolute top-0 left-0 h-full w-1 bg-white/[0.05]">
                                    <motion.div
                                        className="h-full w-full bg-orange-500"
                                        initial={{ y: "100%" }}
                                        animate={{ y: activeStep === i ? "0%" : (activeStep > i ? "0%" : "100%") }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className={`p-2 rounded-lg ${activeStep === i ? "bg-orange-500/20 text-orange-500" : "bg-white/5 text-white/40"}`}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className={`font-bold ${activeStep === i ? "text-white" : "text-white/40"}`}>{step.title}</h3>
                                        <p className="text-xs text-white/30 mt-1">{step.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="lg:w-2/3 h-full relative flex items-center justify-center px-4 overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

                        <div className="relative w-full max-w-2xl aspect-video lg:scale-125">
                            <svg viewBox="0 0 800 500" className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <defs>
                                    <linearGradient id="pipeMetal" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#475569" />
                                        <stop offset="50%" stopColor="#94a3b8" />
                                        <stop offset="100%" stopColor="#334155" />
                                    </linearGradient>
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1" />
                                    </pattern>
                                </defs>

                                <g transform="translate(400, 350)">
                                    {/* Sub-surface */}
                                    <path d="M -350 0 L 0 -175 L 350 0 L 0 175 Z" fill="#111" stroke="#ffffff08" strokeWidth="1" />

                                    {/* Ground Surface */}
                                    <motion.path
                                        d="M -300 -150 L 300 -150 L 300 150 L -300 150 Z"
                                        transform="rotate(-45) scale(1, 0.5)"
                                        fill="url(#grid)"
                                    />

                                    {/* Trench */}
                                    <motion.g style={{ opacity: trenchOpacity }}>
                                        <path d="M -50 -50 L 50 -100 L 50 100 L -50 150 Z" fill="#080808" />
                                        <path d="M 50 -100 L 150 -50 L 150 150 L 50 100 Z" fill="#030303" />
                                    </motion.g>

                                    {/* Pipe */}
                                    <g transform="translate(100, 50)">
                                        <path d="M -20 -100 L 20 -120 L 20 80 L -20 100 Z" fill="url(#pipeMetal)" stroke="#475569" strokeWidth="0.5" />
                                    </g>

                                    <motion.g style={{ opacity: pipeOpacity, y: pipeY }} transform="translate(100, -100)">
                                        <path d="M -20 -100 L 20 -120 L 20 80 L -20 100 Z" fill="url(#pipeMetal)" stroke="#94a3b8" strokeWidth="0.5" />
                                        <motion.g style={{ opacity: weldingGlow }}>
                                            <circle cx="0" cy="-110" r="15" fill="rgba(249, 115, 22, 0.4)" filter="blur(8px)" />
                                            <circle cx="0" cy="-110" r="4" fill="white" />
                                        </motion.g>
                                    </motion.g>

                                    {/* Backfill */}
                                    <motion.g
                                        style={{ scaleY: fillLevel, transformOrigin: "bottom" }}
                                        transform="translate(100, 50)"
                                    >
                                        <path d="M -50 -150 L 50 -200 L 50 100 L -50 150 Z" fill="#2d1c18" opacity="0.8" />
                                        <path d="M 50 -200 L 150 -150 L 150 150 L 50 100 Z" fill="#1d1210" opacity="0.8" />
                                    </motion.g>

                                    {/* Excavator */}
                                    <motion.g transform="translate(-200, -50)" style={{ rotate: excavatorRotation }}>
                                        <rect x="0" y="-12" width="100" height="24" rx="2" fill="#eab308" />
                                        <motion.rect x="90" y="-8" width="80" height="16" rx="2" fill="#eab308" style={{ x: excavatorArmMove }} />
                                        <path transform="translate(160, 0)" d="M 0 0 L 30 20 L 10 40 L -20 20 Z" fill="#333" />
                                    </motion.g>

                                    {/* Road */}
                                    <motion.path
                                        d="M -250 -130 L 250 -130 L 250 130 L -250 130 Z"
                                        transform="rotate(-45) scale(1, 0.5)"
                                        fill="#1e293b"
                                        style={{ opacity: restorationProgress }}
                                    />
                                </g>

                                <g className="font-mono text-[10px]" fill="#64748b" opacity="0.5">
                                    <text x="50" y="450">ENGR SPEC: AWWA C200</text>
                                    <text x="50" y="465">DESIGN PRESS: 16 BAR</text>
                                </g>
                            </svg>
                        </div>

                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Scroll Sequence</span>
                            <div className="w-px h-12 bg-gradient-to-b from-orange-500/50 to-transparent" />
                        </div>
                    </div>
                </div>

                <div className="h-1 w-full bg-white/5 relative z-30">
                    <motion.div className="h-full bg-orange-500" style={{ scaleX: smoothProgress, transformOrigin: "left" }} />
                </div>
            </div>
        </section>
    );
}
