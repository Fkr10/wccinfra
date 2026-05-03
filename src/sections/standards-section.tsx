import { standards } from "../data/standards";
import AnimatedContent from "../components/animated-content";

export default function StandardsSection() {
    return (
        <section id="standards" className="py-28 bg-zinc-950 px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Top edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Radial glow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/4 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/4 rounded-full blur-[120px] pointer-events-none" />

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <AnimatedContent distance={30}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-10 bg-orange-500/50" />
                            <span className="text-orange-500 font-mono text-[11px] font-bold tracking-[0.4em] uppercase">Core Commitments</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-urbanist font-black text-white tracking-tighter leading-[1.0]">
                            Upholding Global{" "}
                            <span className="text-orange-500">Benchmarks</span>
                            <br />in Infrastructure
                        </h2>
                    </AnimatedContent>

                    <AnimatedContent delay={0.2} distance={30}>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            At WCC Infra, world-class infrastructure is built on uncompromising safety and precision engineering. Our multi-layered quality control systems ensure every project stands the test of time.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-3">
                            {["ISO 9001:2015", "IS 3114", "CPHEEO", "IRC:SP:13"].map(cert => (
                                <div key={cert} className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-lg px-3 py-2.5">
                                    <div className="size-1.5 rounded-full bg-orange-500/60" />
                                    <span className="text-white/50 font-mono text-[10px] tracking-wider">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedContent>
                </div>

                {/* Standards Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {standards.map((standard, index) => (
                        <AnimatedContent
                            key={index}
                            delay={index * 0.08}
                            distance={20}
                            className="group p-7 rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:border-orange-500/30 hover:-translate-y-1.5 active:scale-[0.99] overflow-hidden relative"
                        >
                            {/* Icon */}
                            <div className={`size-12 rounded-xl ${standard.bgColor} flex items-center justify-center mb-7 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                <standard.icon className={`size-6 ${standard.color}`} />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                                {standard.title}
                            </h3>

                            <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                                {standard.description}
                            </p>

                            {/* Bottom slide bar */}
                            <div className="mt-7 h-px w-full bg-zinc-800 relative overflow-hidden rounded-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                            </div>

                            {/* Corner glow */}
                            <div className="absolute -right-8 -top-8 size-24 bg-orange-500/0 group-hover:bg-orange-500/5 rounded-full blur-2xl transition-all duration-700" />
                        </AnimatedContent>
                    ))}
                </div>
            </div>

            {/* Bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
