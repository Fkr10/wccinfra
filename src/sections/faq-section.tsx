import AnimatedContent from "../components/animated-content";
import SectionTitle from "../components/section-title";
import { faqs } from "../data/faqs";
import { ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";

export default function FaqSection() {
    return (
        <section className="border-y border-gray-200">
            <div className="px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="p-4 pt-20 md:p-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                    <SectionTitle
                        icon={HelpCircle}
                        title="Project Inquiry & FAQ"
                        subtitle="Clarifying the process of infrastructure delivery, compliance standards, and consultancy engagement."
                    />
                </div>
            </div>
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200 border-x border-gray-200 max-w-7xl mx-auto">
                    <div className="p-4 pt-20 md:p-20 space-y-6">
                        {faqs.map((faq, index) => (
                            <AnimatedContent key={index}>
                                <details key={index} className="group bg-gray-50 border border-gray-200 rounded-xl" open={index === 0}>
                                    <summary className="flex items-center justify-between p-6 select-none cursor-pointer">
                                        <h3 className="font-semibold text-base text-zinc-800">{faq.question}</h3>
                                        <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <p className="text-sm/6 text-zinc-600 max-w-2xl p-6 pt-0 border-t border-gray-100 mt-2">
                                        {faq.answer}
                                    </p>
                                </details>
                            </AnimatedContent>
                        ))}
                    </div>
                    <div className="p-4 pt-20 md:p-20">
                        <div className="sticky top-30 flex flex-col items-start gap-5 p-8 bg-zinc-900 border border-orange-500/30 w-full rounded-2xl">
                            <h3 className="text-2xl font-bold text-white text-balance leading-tight">
                                Planning a large-scale <br /> <span className="text-orange-500">Infrastructure Project</span>?
                            </h3>
                            <p className="text-zinc-400 font-medium">
                                Our technical team is ready to discuss feasibility and engineering standards.
                            </p>

                            <a
                                href="#contact"
                                className="bg-orange-500 text-white w-max shrink-0 hover:bg-orange-600 active:scale-[0.95] px-8 py-3 rounded-full flex items-center gap-2 font-bold transition-all shadow-lg"
                            >
                                Contact Engineering Team
                                <ArrowUpRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}