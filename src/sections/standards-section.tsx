import { standards } from "../data/standards";
import AnimatedContent from "../components/animated-content";

export default function StandardsSection() {
    return (
        <section id="standards" className="py-24 bg-zinc-950 px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-orange-500/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <AnimatedContent distance={30}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-orange-500" />
                            <span className="text-orange-500 font-bold text-xs tracking-[0.4em] uppercase">Core Commitments</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-urbanist font-black text-white tracking-tighter leading-tight">
                            Upholding Global <span className="text-orange-500">Benchmarks</span> in Infrastructure
                        </h2>
                    </AnimatedContent>

                    <AnimatedContent delay={0.2} distance={30}>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            At WCC Infra, we believe that world-class infrastructure is built on the foundation of uncompromising safety and precision engineering. Our multi-layered quality control systems ensure every project stands the test of time.
                        </p>
                    </AnimatedContent>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {standards.map((standard, index) => (
                        <AnimatedContent
                            key={index}
                            delay={index * 0.1}
                            distance={20}
                            className="group p-8 rounded-3xl bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:border-orange-500/50 hover:-translate-y-2 active:scale-[0.98]"
                        >
                            <div className={`size-14 rounded-2xl ${standard.bgColor} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                <standard.icon className={`size-7 ${standard.color}`} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                                {standard.title}
                            </h3>

                            <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                                {standard.description}
                            </p>


                            {/* Decorative Line — hinted on mobile */}
                            <div className="mt-8 h-px w-full bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-orange-500 -translate-x-full md:-translate-x-full group-hover:translate-x-0 opacity-20 md:opacity-100 transition-transform duration-700" />
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
