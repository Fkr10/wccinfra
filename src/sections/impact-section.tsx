import AnimatedContent from "../components/animated-content";
import { ArrowRight, Users, Zap, Award, ArrowUpRight } from "lucide-react";

const impactStories = [
    {
        icon: Zap,
        metric: "1600mm",
        title: "Max HDPE Pipe Diameter",
        description: "Industry-leading capability for large-diameter HDPE pipe laying and jointing — one of the highest specs offered by any contractor in North India.",
        color: "from-orange-500 to-amber-400",
        accent: "#ea580c",
    },
    {
        icon: Award,
        metric: "4.4 / 5",
        title: "Employee Satisfaction",
        description: "Consistently rated 4.2–4.6 stars for work-life balance and company culture, reflecting a people-first leadership approach.",
        color: "from-amber-500 to-yellow-400",
        accent: "#f59e0b",
    },
    {
        icon: Users,
        metric: "Zero",
        title: "Critical Safety Incidents",
        description: "Our commitment to worker safety and community welfare delivers a consistent zero-incident record across all active project sites.",
        color: "from-orange-600 to-orange-400",
        accent: "#f97316",
    },
];

const caseStudies = [
    {
        id: 1,
        title: "Mundra Adani Power Plant & Port",
        client: "Adani Power Limited — Mundra, Gujarat",
        scale: "30 km HDPE pipeline",
        impact: "Intake, reject & product water lines commissioned",
        year: "Completed",
        tag: "HDPE · Industrial",
    },
    {
        id: 2,
        title: "Ghaziabad Water Supply Network",
        client: "Municipal Corporation of Ghaziabad",
        scale: "Large-diameter HDPE distribution",
        impact: "Clean water supply to 2M+ residents",
        year: "Ongoing",
        tag: "Water Infrastructure",
    },
    {
        id: 3,
        title: "Civil & Sewage Infrastructure Works",
        client: "UP Jal Nigam · State Projects",
        scale: "Multi-city STP & UGD network",
        impact: "Urban sanitation for hundreds of thousands",
        year: "2022–Present",
        tag: "Sewage · Civil",
    },
];

export default function ImpactSection() {
    return (
        <section id="impact" className="py-32 bg-white px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
            <div className="absolute top-32 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl pointer-events-none opacity-60" />
            <div className="absolute bottom-32 right-0 w-[300px] h-[300px] bg-amber-50 rounded-full blur-3xl pointer-events-none opacity-60" />

            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <AnimatedContent distance={30}>
                        <div className="inline-flex items-center gap-3 bg-orange-50 border border-orange-200/60 rounded-full px-5 py-2 mb-8">
                            <div className="size-1.5 rounded-full bg-orange-600 animate-pulse" />
                            <span className="text-orange-600 font-mono text-[11px] font-bold tracking-[0.3em] uppercase">Real Impact</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-urbanist font-black text-zinc-900 tracking-tighter leading-[1.0] mb-6">
                            Infrastructure That{" "}
                            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                                Transforms Lives
                            </span>
                        </h2>
                        <p className="text-zinc-500 max-w-xl text-base leading-relaxed mx-auto">
                            Every project creates ripples of positive change — connecting communities, enabling growth, and building the backbone of modern India.
                        </p>
                    </AnimatedContent>
                </div>

                {/* Impact Metrics */}
                <div className="grid md:grid-cols-3 gap-5 mb-20">
                    {impactStories.map((story, index) => (
                        <AnimatedContent
                            key={index}
                            delay={index * 0.1}
                            distance={30}
                            className="group relative p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-2xl hover:shadow-zinc-100 hover:border-orange-100 transition-all duration-500 active:scale-[0.99] overflow-hidden"
                        >
                            {/* Icon */}
                            <div className="size-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                                style={{ background: `${story.accent}12`, border: `1px solid ${story.accent}22` }}>
                                <story.icon className="size-7" style={{ color: story.accent }} />
                            </div>

                            <div className={`text-4xl font-black font-urbanist bg-gradient-to-r ${story.color} bg-clip-text text-transparent mb-2 leading-none`}>
                                {story.metric}
                            </div>

                            <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                                {story.title}
                            </h3>

                            <p className="text-zinc-500 text-sm leading-relaxed">
                                {story.description}
                            </p>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </AnimatedContent>
                    ))}
                </div>

                {/* Case Studies */}
                <AnimatedContent distance={30} className="mb-8">
                    <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-orange-600/50" />
                        <span className="text-orange-600 font-mono text-[11px] font-bold tracking-[0.4em] uppercase">Featured Projects</span>
                    </div>
                </AnimatedContent>

                <div className="grid lg:grid-cols-3 gap-4">
                    {caseStudies.map((study, index) => (
                        <AnimatedContent
                            key={study.id}
                            delay={index * 0.12}
                            distance={30}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer"
                        >
                            <div className="relative p-7 bg-zinc-950 border border-white/[0.06] rounded-2xl h-full flex flex-col transition-all duration-500 group-hover:border-orange-500/20">
                                {/* Background gradient reveal */}
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

                                <div className="relative z-10 flex-1">
                                    <div className="flex items-start justify-between mb-5">
                                        <span className="text-[9px] font-mono font-bold text-orange-500/60 uppercase tracking-widest border border-orange-500/20 rounded-full px-3 py-1">
                                            {study.tag}
                                        </span>
                                        <span className="text-[10px] font-mono text-white/25">{study.year}</span>
                                    </div>

                                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                                        {study.title}
                                    </h3>
                                    <p className="text-sm text-white/40 mb-6">{study.client}</p>
                                </div>

                                <div className="relative z-10 space-y-2 pt-5 border-t border-white/[0.06] group-hover:border-orange-500/15 transition-colors">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-mono text-white/25 uppercase tracking-wider">Scale</span>
                                        <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors">{study.scale}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-mono text-white/25 uppercase tracking-wider">Impact</span>
                                        <span className="text-sm font-bold text-orange-400">{study.impact}</span>
                                    </div>
                                </div>

                                <div className="relative z-10 mt-5 flex items-center gap-2 text-orange-500 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                                    <span className="text-xs font-bold uppercase tracking-wider">View Details</span>
                                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>

                {/* CTA */}
                <AnimatedContent distance={30} className="text-center mt-20">
                    <p className="text-zinc-500 max-w-lg mx-auto text-base mb-8 leading-relaxed">
                        Every infrastructure project starts with a vision. We transform that vision into reality with precision and unwavering excellence.
                    </p>
                    <a href="#contact" className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 active:scale-[0.98] text-sm tracking-wide">
                        Explore Our Portfolio
                        <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                </AnimatedContent>
            </div>
        </section>
    );
}
