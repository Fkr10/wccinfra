import { Linkedin, MapPin, Mail, Phone, ArrowUpRight, Building2 } from "lucide-react";
import AnimatedContent from "./animated-content";

const navLinks = [
    { label: "Services", href: "#features" },
    { label: "Standards", href: "#standards" },
    { label: "Team", href: "#team" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        label: "Instagram",
        handle: "@wccinfra",
        href: "https://www.instagram.com/wccinfra",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        handle: "WCC Infra Pvt. Ltd.",
        href: "https://in.linkedin.com/company/wccinfra",
        icon: <Linkedin size={20} />,
    },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-zinc-950 text-white">
            {/* Top CTA Banner */}
            <div className="border-b border-white/[0.06] px-4 md:px-16 lg:px-24 xl:px-32 py-16">
                <AnimatedContent className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <p className="text-orange-500 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4">Ready to Build?</p>
                        <h2 className="text-3xl md:text-5xl font-urbanist font-black tracking-tighter leading-tight text-white">
                            Start Your Next <br />
                            <span className="text-orange-500">Infrastructure Project</span>
                        </h2>
                    </div>
                    <a
                        href="mailto:info@wccinfra.com"
                        className="flex-shrink-0 group flex items-center gap-3 bg-orange-600 hover:bg-orange-500 active:scale-[0.95] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-1"
                    >
                        Get In Touch
                        <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
                    </a>
                </AnimatedContent>
            </div>

            {/* Main Footer Body */}
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                    {/* Col 1: Brand */}
                    <AnimatedContent distance={30} className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/assets/wcc-logo.svg" alt="WCC Infra Logo" className="h-10" />
                        </div>
                        <p className="text-white/50 text-base leading-relaxed max-w-sm mb-8">
                            Engineering the physical backbone of India — from high-pressure pipelines and highway networks to urban infrastructure and civil works.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-3">
                            <a href="https://maps.google.com/?q=23+Govind+Puram+Ghaziabad" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-white/50 hover:text-orange-400 transition-colors group">
                                <MapPin size={16} className="text-orange-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">23 Govind Puram, Ghaziabad, UP – 201013</span>
                            </a>
                            <a href="mailto:info@wccinfra.com" className="flex items-center gap-3 text-white/50 hover:text-orange-400 transition-colors group">
                                <Mail size={16} className="text-orange-600 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">info@wccinfra.com</span>
                            </a>
                            <a href="tel:+919876543210" className="flex items-center gap-3 text-white/50 hover:text-orange-400 transition-colors group">
                                <Phone size={16} className="text-orange-600 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">+91 98765 43210</span>
                            </a>
                        </div>
                    </AnimatedContent>

                    {/* Col 2: Navigation */}
                    <AnimatedContent delay={0.1} distance={30}>
                        <p className="text-white/30 font-mono text-[10px] uppercase tracking-[0.3em] mb-8">Navigation</p>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-2 text-white/60 hover:text-orange-400 font-medium transition-all group"
                                    >
                                        <span className="size-1 rounded-full bg-orange-600/0 group-hover:bg-orange-600 transition-all" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </AnimatedContent>

                    {/* Col 3: Social + Legal */}
                    <AnimatedContent delay={0.2} distance={30}>
                        <p className="text-white/30 font-mono text-[10px] uppercase tracking-[0.3em] mb-8">Follow Us</p>
                        <div className="space-y-5 mb-10">
                            {socialLinks.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-orange-600 group-hover:border-orange-500 group-hover:text-white transition-all duration-300">
                                        {s.icon}
                                    </div>
                                    <div>
                                        <p className="text-white/70 font-bold text-sm group-hover:text-white transition-colors">{s.label}</p>
                                        <p className="text-white/30 text-xs font-mono">{s.handle}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Legal Info */}
                        <div className="pt-6 border-t border-white/[0.06]">
                            <div className="flex items-center gap-2 mb-4">
                                <Building2 size={12} className="text-orange-600" />
                                <p className="text-white/30 font-mono text-[9px] uppercase tracking-widest">MCA Registration</p>
                            </div>
                            <div className="space-y-2 font-mono text-[10px]">
                                <div className="flex justify-between">
                                    <span className="text-white/20">CIN</span>
                                    <span className="text-white/50">U45201UP2021PTC149838</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/20">Inc.</span>
                                    <span className="text-white/50">30 Jul 2021</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/20">ROC</span>
                                    <span className="text-white/50">Kanpur</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/20">Status</span>
                                    <span className="text-green-400 font-bold">● Active</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/[0.06] px-4 md:px-16 lg:px-24 xl:px-32 py-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/25 text-xs font-mono">
                        © 2026 WCC Infra Private Limited. All Rights Reserved.
                    </p>
                    <p className="text-white/15 text-xs font-mono tracking-widest uppercase">
                        Precision · Quality · Safety
                    </p>
                </div>
            </div>
        </footer>
    );
}