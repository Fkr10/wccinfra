import CountUp from "../components/count-number";
import AnimatedContent from "../components/animated-content";

const stats = [
    {
        value: 85,
        suffix: "+",
        label: "Projects Delivered",
        sub: "Across India",
        color: "from-orange-500 to-amber-400",
        border: "group-hover:border-orange-500/30",
    },
    {
        value: 12,
        suffix: "+",
        label: "Years of Excellence",
        sub: "Est. 2012",
        color: "from-orange-600 to-orange-400",
        border: "group-hover:border-orange-600/30",
    },
    {
        value: 28,
        suffix: "+",
        label: "Cities Covered",
        sub: "Pan-India Reach",
        color: "from-amber-500 to-yellow-400",
        border: "group-hover:border-amber-500/30",
    },
    {
        value: 65,
        suffix: "+",
        label: "Skilled Engineers",
        sub: "On Ground",
        color: "from-orange-700 to-orange-500",
        border: "group-hover:border-orange-700/30",
    },
];

export default function StatsSection() {
    return (
        <section className="relative bg-zinc-950 overflow-hidden">
            {/* Top edge fade */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            {/* Glow orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-48 bg-orange-600/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-48 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32 relative z-10 py-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
                    {stats.map((stat, index) => (
                        <AnimatedContent
                            key={index}
                            delay={index * 0.08}
                            distance={24}
                            className={`group flex flex-col items-center text-center px-6 py-10 md:py-14 relative hover:bg-white/[0.025] transition-all duration-500 border ${stat.border} border-transparent`}
                        >
                            {/* Animated top accent */}
                            <div
                                className={`absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-[2px] bg-gradient-to-r ${stat.color} transition-all duration-700 rounded-full`}
                            />

                            {/* Value */}
                            <div className={`text-5xl md:text-6xl font-black font-urbanist bg-gradient-to-br ${stat.color} bg-clip-text text-transparent leading-none mb-2`}>
                                <CountUp from={0} to={stat.value} />
                                {stat.suffix}
                            </div>

                            {/* Divider */}
                            <div className="w-8 h-px bg-white/10 my-3" />

                            {/* Label */}
                            <p className="text-white/80 font-bold text-sm tracking-tight">
                                {stat.label}
                            </p>

                            {/* Sub label */}
                            <p className="text-white/25 font-mono text-[10px] tracking-[0.25em] uppercase mt-1.5">
                                {stat.sub}
                            </p>
                        </AnimatedContent>
                    ))}
                </div>
            </div>

            {/* Bottom edge fade */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}