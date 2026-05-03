import AnimatedContent from "../components/animated-content";
import { faqs } from "../data/faqs";
import { ChevronDown, HelpCircle, ArrowUpRight, Phone, Mail } from "lucide-react";

export default function FaqSection() {
    return (
        <section className="py-28 bg-white px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Top edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <AnimatedContent distance={30}>
                        <div className="inline-flex items-center gap-2.5 bg-zinc-50 border border-zinc-200 rounded-full px-5 py-2 mb-7">
                            <HelpCircle size={13} className="text-orange-600" />
                            <span className="text-zinc-500 font-mono text-[11px] font-bold tracking-[0.3em] uppercase">Project Inquiry & FAQ</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-urbanist font-black text-zinc-900 tracking-tighter leading-[1.0] mb-5">
                            Questions About<br />
                            <span className="text-orange-600">Our Services?</span>
                        </h2>
                        <p className="text-zinc-500 max-w-lg mx-auto text-base leading-relaxed">
                            Clarifying the process of infrastructure delivery, compliance standards, and consultancy engagement.
                        </p>
                    </AnimatedContent>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* FAQ Accordion — 2/3 */}
                    <div className="lg:col-span-2 space-y-3">
                        {faqs.map((faq, index) => (
                            <AnimatedContent key={index} delay={index * 0.06}>
                                <details className="group bg-zinc-50 border border-zinc-100 rounded-2xl overflow-hidden hover:border-zinc-200 transition-colors duration-300" open={index === 0}>
                                    <summary className="flex items-center justify-between p-6 select-none cursor-pointer list-none gap-4">
                                        <h3 className="font-semibold text-base text-zinc-800 group-open:text-orange-600 transition-colors duration-300 leading-snug">{faq.question}</h3>
                                        <div className="flex-shrink-0 size-7 rounded-lg border border-zinc-200 flex items-center justify-center group-open:bg-orange-50 group-open:border-orange-200 transition-all duration-300">
                                            <ChevronDown size={14} className="text-zinc-400 group-open:text-orange-600 group-open:rotate-180 transition-all duration-300" />
                                        </div>
                                    </summary>
                                    <div className="px-6 pb-6 border-t border-zinc-100">
                                        <p className="text-sm text-zinc-500 leading-relaxed pt-4">{faq.answer}</p>
                                    </div>
                                </details>
                            </AnimatedContent>
                        ))}
                    </div>

                    {/* Sticky CTA — 1/3 */}
                    <AnimatedContent delay={0.2} className="lg:sticky lg:top-28">
                        <div className="flex flex-col gap-5 p-8 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden relative">
                            {/* Background glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="size-1.5 rounded-full bg-orange-500 animate-pulse" />
                                    <span className="text-orange-500 font-mono text-[10px] uppercase tracking-widest">Available Now</span>
                                </div>

                                <h3 className="text-2xl font-black text-white leading-tight mb-3">
                                    Planning a Large-Scale{" "}
                                    <span className="text-orange-500">Infrastructure Project?</span>
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-7">
                                    Our technical team is ready to discuss feasibility, scope, and engineering standards.
                                </p>

                                <div className="flex flex-col gap-3">
                                    <a
                                        href="mailto:info@wccinfra.com"
                                        className="group flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/25"
                                    >
                                        <Mail size={15} />
                                        Contact Engineering Team
                                        <ArrowUpRight size={15} className="ml-auto group-hover:rotate-45 transition-transform duration-300" />
                                    </a>
                                    <a
                                        href="tel:+91"
                                        className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white font-semibold px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 text-sm"
                                    >
                                        <Phone size={14} />
                                        Schedule a Call
                                    </a>
                                </div>

                                {/* CIN */}
                                <div className="mt-7 pt-5 border-t border-white/[0.06] flex items-center gap-2">
                                    <div className="size-1 rounded-full bg-emerald-400" />
                                    <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-wider">CIN: U45201UP2021PTC149838</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
}