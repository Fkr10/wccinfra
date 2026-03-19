import CountUp from "../components/count-number";
import AnimatedContent from "../components/animated-content";
import { TrendingUp } from "lucide-react";

const stats = [
    {
        value: 85,
        suffix: "+",
        label: "Projects Delivered",
        sub: "Across India",
        color: "from-orange-500 to-amber-400",
    },
    {
        value: 12,
        suffix: "+",
        label: "Years of Excellence",
        sub: "Est. 2012",
        color: "from-orange-600 to-orange-400",
    },
    {
        value: 28,
        suffix: "+",
        label: "Cities Covered",
        sub: "Pan-India Reach",
        color: "from-amber-500 to-yellow-400",
    },
    {
        value: 65,
        suffix: "+",
        label: "Skilled Engineers",
        sub: "On Ground",
        color: "from-orange-700 to-orange-500",
    },
];

export default function StatsSection() {
    return (
        <section className="relative bg-zinc-900 overflow-hidden py-0">
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            {/* Glow orbs */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32 relative z-10">
                {/* Section Badge */}
                <AnimatedContent className="flex justify-center pt-16 mb-12">
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-2">
                        <TrendingUp size={14} className="text-orange-500" />
                        <span className="text-white/60 font-mono text-xs font-bold tracking-[0.3em] uppercase">
                            Performance Metrics
                        </span>
                        <div className="size-1.5 rounded-full bg-orange-500 animate-pulse" />
                    </div>
                </AnimatedContent>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
                    {stats.map((stat, index) => (
                        <AnimatedContent
                            key={index}
                            delay={index * 0.1}
                            distance={30}
                            className="group flex flex-col items-center text-center px-8 py-12 relative hover:bg-white/[0.02] active:scale-[0.98] transition-all duration-500"
                        >
                            {/* Animated top accent line — semi-visible on mobile to hint at interactivity */}
                            <div
                                className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 md:w-0 group-hover:w-20 h-[2px] bg-gradient-to-r ${stat.color} transition-all duration-700 rounded-full`}
                            />

                            {/* Value */}
                            <div className={`text-6xl md:text-7xl font-black font-urbanist bg-gradient-to-br ${stat.color} bg-clip-text text-transparent leading-none mb-3`}>
                                <CountUp from={0} to={stat.value} />
                                {stat.suffix}
                            </div>

                            {/* Label */}
                            <p className="text-white font-bold text-base tracking-tight mt-2">
                                {stat.label}
                            </p>

                            {/* Sub label */}
                            <p className="text-white/30 font-mono text-[10px] tracking-[0.3em] uppercase mt-2">
                                {stat.sub}
                            </p>
                        </AnimatedContent>
                    ))}
                </div>

                {/* Bottom thin divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-0 pb-2" />
            </div>
        </section>
    );
}