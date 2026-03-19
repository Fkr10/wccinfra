import AnimatedContent from "../components/animated-content";
import { ArrowRight, Users, Zap, Award } from "lucide-react";

const impactStories = [
    {
        icon: Zap,
        metric: "45%",
        title: "Faster Installation",
        description: "Our trenchless technology reduces project timelines by 45%, minimizing disruption to urban communities and businesses.",
        color: "from-orange-500 to-amber-400",
        bgColor: "bg-orange-500/10",
    },
    {
        icon: Award,
        metric: "ISO 9001",
        title: "Quality Certified",
        description: "Internationally recognized certifications ensure every project meets the highest global standards for safety and durability.",
        color: "from-amber-500 to-yellow-400",
        bgColor: "bg-amber-500/10",
    },
    {
        icon: Users,
        metric: "Zero",
        title: "Safety Incidents",
        description: "Our commitment to worker safety and community welfare results in consistent safety records across all projects.",
        color: "from-orange-600 to-orange-400",
        bgColor: "bg-orange-600/10",
    },
];

const caseStudies = [
    {
        id: 1,
        title: "Ghaziabad Water Pipeline Network",
        client: "Municipal Corporation of Ghaziabad",
        scale: "250+ km pipeline",
        impact: "Upgraded water supply to 2M+ residents",
        year: "2023-2024",
        gradient: "from-orange-500 via-orange-400 to-amber-300",
    },
    {
        id: 2,
        title: "NH-44 Highway Expansion",
        client: "Ministry of Road Transport",
        scale: "85 km rehabilitation",
        impact: "Reduced travel time by 30%",
        year: "2022-2023",
        gradient: "from-amber-500 via-yellow-400 to-orange-400",
    },
    {
        id: 3,
        title: "Sewage Treatment Infrastructure",
        client: "State Pollution Board",
        scale: "15 STP plants",
        impact: "Treated 450MLD wastewater daily",
        year: "2024-Present",
        gradient: "from-orange-600 via-orange-500 to-amber-400",
    },
];

export default function ImpactSection() {
    return (
        <section id="impact" className="py-32 bg-gradient-to-b from-zinc-50 to-white px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <AnimatedContent distance={30}>
                        <div className="flex justify-center mb-6">
                            <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-full px-6 py-2">
                                <span className="text-orange-600 font-mono text-xs font-bold tracking-[0.3em] uppercase">Real Impact</span>
                                <div className="size-1.5 rounded-full bg-orange-600 animate-pulse" />
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-urbanist font-black text-zinc-900 tracking-tighter leading-tight mb-8">
                            Infrastructure That <br />
                            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Transforms Lives</span>
                        </h2>
                        <p className="text-zinc-600 max-w-2xl text-lg leading-relaxed mx-auto">
                            Every project we undertake creates ripples of positive change—connecting communities, enabling growth, and building the backbone of modern India.
                        </p>
                    </AnimatedContent>
                </div>

                {/* Impact Metrics Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    {impactStories.map((story, index) => (
                        <AnimatedContent
                            key={index}
                            delay={index * 0.1}
                            distance={30}
                            className="group p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500 active:scale-[0.98]"
                        >
                            <div className={`size-16 rounded-2xl ${story.bgColor} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                                <story.icon className="size-8 text-orange-600" />
                            </div>

                            <div className={`text-3xl font-black font-urbanist bg-gradient-to-r ${story.color} bg-clip-text text-transparent mb-3`}>
                                {story.metric}
                            </div>

                            <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-orange-600 transition-colors">
                                {story.title}
                            </h3>

                            <p className="text-zinc-600 leading-relaxed group-hover:text-zinc-700 transition-colors">
                                {story.description}
                            </p>
                        </AnimatedContent>
                    ))}
                </div>

                {/* Case Studies Showcase */}
                <AnimatedContent distance={30} className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-px w-8 bg-orange-600" />
                        <span className="text-orange-600 font-bold text-xs tracking-[0.4em] uppercase">Featured Projects</span>
                    </div>
                </AnimatedContent>

                <div className="grid lg:grid-cols-3 gap-6 mb-12">
                    {caseStudies.map((study, index) => (
                        <AnimatedContent
                            key={study.id}
                            delay={index * 0.15}
                            distance={30}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer active:scale-[0.98] transition-transform duration-300"
                        >
                            {/* Background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            {/* Card content */}
                            <div className="relative p-8 bg-white border border-zinc-200 rounded-2xl group-hover:border-transparent transition-all duration-500 h-full flex flex-col">
                                <div className="flex-1 mb-6">
                                    <p className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-4 group-hover:text-white/70">
                                        {study.year}
                                    </p>
                                    <h3 className="text-2xl font-black text-zinc-900 mb-3 group-hover:text-white transition-colors leading-tight">
                                        {study.title}
                                    </h3>
                                    <p className="text-sm text-zinc-600 mb-4 group-hover:text-white/80 transition-colors">
                                        {study.client}
                                    </p>
                                </div>

                                <div className="space-y-2 pt-6 border-t border-zinc-200 group-hover:border-white/20 transition-colors">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-zinc-500 group-hover:text-white/60 uppercase tracking-wider">Scale</span>
                                        <span className="text-sm font-bold text-zinc-900 group-hover:text-white transition-colors">{study.scale}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-zinc-500 group-hover:text-white/60 uppercase tracking-wider">Impact</span>
                                        <span className="text-sm font-bold text-orange-600 group-hover:text-orange-300 transition-colors">{study.impact}</span>
                                    </div>
                                </div>

                                {/* Arrow indicator */}
                                <div className="mt-6 flex items-center gap-2 text-orange-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                    <span className="text-xs font-bold uppercase tracking-wider">Learn More</span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>

                {/* CTA Section */}
                <AnimatedContent distance={30} className="text-center mt-24">
                    <div className="inline-flex flex-col items-center gap-6">
                        <p className="text-zinc-600 max-w-xl text-lg">
                            Every infrastructure project starts with a vision. We transform that vision into reality with precision, innovation, and an unwavering commitment to excellence.
                        </p>
                        <button className="group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden transition-all active:scale-[0.98]">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 group-hover:from-orange-700 group-hover:to-amber-600 transition-all duration-300" />
                            <span className="relative flex items-center gap-2">
                                Explore Our Portfolio
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                </AnimatedContent>

                {/* Bottom Decorative Line */}
                <div className="mt-32 h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
            </div>
        </section>
    );
}
