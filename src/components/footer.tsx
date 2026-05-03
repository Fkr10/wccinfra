import { Linkedin, MapPin, Mail, ArrowUpRight, Building2, Phone } from "lucide-react";
import AnimatedContent from "./animated-content";

const navLinks = [
    { label: "Services", href: "#features" },
    { label: "Standards", href: "#standards" },
    { label: "Impact", href: "#impact" },
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        icon: <Linkedin size={18} />,
    },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-zinc-950 text-white relative overflow-hidden">
            {/* Top edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Ambient glow */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

            {/* ── CTA Banner ── */}
            <div className="relative z-10 border-b border-white/[0.06] px-4 md:px-16 lg:px-24 xl:px-32 py-20">
                <div className="max-w-7xl mx-auto">
                    <AnimatedContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-px w-8 bg-orange-500/40" />
                                <span className="text-orange-500 font-mono text-[11px] font-bold tracking-[0.4em] uppercase">Ready to Build?</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-urbanist font-black tracking-tighter leading-[0.95] text-white">
                                Start Your Next<br />
                                <span className="text-orange-500">Infrastructure Project</span>
                            </h2>
                        </div>
                        <div className="flex flex-col gap-3 flex-shrink-0">
                            <a
                                href="mailto:info@wccinfra.com"
                                className="group flex items-center gap-3 bg-orange-600 hover:bg-orange-500 active:scale-[0.97] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-600/30 hover:-translate-y-1"
                            >
                                <Mail size={16} />
                                Get In Touch
                                <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45 ml-1" />
                            </a>
                            <a
                                href="tel:+91"
                                className="flex items-center gap-3 justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/60 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm"
                            >
                                <Phone size={14} />
                                Schedule a Call
                            </a>
                        </div>
                    </AnimatedContent>
                </div>
            </div>

            {/* ── Main Footer Body ── */}
            <div className="relative z-10 px-4 md:px-16 lg:px-24 xl:px-32 py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Brand — 5 cols */}
                    <AnimatedContent distance={30} className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-xl bg-orange-600 flex items-center justify-center">
                                <span className="text-white font-black text-sm">WCC</span>
                            </div>
                            <div>
                                <p className="text-white font-black text-base leading-none">WCC INFRA</p>
                                <p className="text-white/30 font-mono text-[9px] uppercase tracking-widest mt-0.5">Private Limited</p>
                            </div>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">
                            Engineering the physical backbone of India — from high-pressure pipelines and highway networks to urban infrastructure and civil works.
                        </p>

                        <div className="space-y-3">
                            <a href="https://maps.google.com/?q=23+Govind+Puram+Ghaziabad" target="_blank" rel="noreferrer"
                                className="flex items-start gap-3 text-white/40 hover:text-orange-400 transition-colors group">
                                <MapPin size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">23 Govind Puram, Ghaziabad, UP – 201013</span>
                            </a>
                            <a href="mailto:info@wccinfra.com"
                                className="flex items-center gap-3 text-white/40 hover:text-orange-400 transition-colors">
                                <Mail size={14} className="text-orange-600" />
                                <span className="text-sm">info@wccinfra.com</span>
                            </a>
                        </div>
                    </AnimatedContent>

                    {/* Navigation — 3 cols */}
                    <AnimatedContent delay={0.1} distance={30} className="lg:col-span-3">
                        <p className="text-white/25 font-mono text-[10px] uppercase tracking-[0.35em] mb-7">Navigation</p>
                        <ul className="space-y-3.5">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-2.5 text-white/50 hover:text-orange-400 font-medium text-sm transition-all duration-200 group"
                                    >
                                        <span className="size-1 rounded-full bg-transparent group-hover:bg-orange-500 transition-all duration-200" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </AnimatedContent>

                    {/* Social + Legal — 4 cols */}
                    <AnimatedContent delay={0.2} distance={30} className="lg:col-span-4">
                        <p className="text-white/25 font-mono text-[10px] uppercase tracking-[0.35em] mb-7">Connect</p>
                        <div className="space-y-4 mb-10">
                            {socialLinks.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                                    className="flex items-center gap-4 group">
                                    <div className="size-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-orange-600 group-hover:border-orange-500 group-hover:text-white transition-all duration-300">
                                        {s.icon}
                                    </div>
                                    <div>
                                        <p className="text-white/60 font-bold text-sm group-hover:text-white transition-colors">{s.label}</p>
                                        <p className="text-white/25 text-xs font-mono">{s.handle}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Legal */}
                        <div className="p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                            <div className="flex items-center gap-2 mb-4">
                                <Building2 size={11} className="text-orange-600" />
                                <p className="text-white/30 font-mono text-[9px] uppercase tracking-widest">MCA Registration</p>
                            </div>
                            <div className="space-y-2 font-mono text-[10px]">
                                {[
                                    { k: "CIN", v: "U45201UP2021PTC149838" },
                                    { k: "Incorporated", v: "30 Jul 2021" },
                                    { k: "ROC", v: "Kanpur" },
                                    { k: "Status", v: "● Active", green: true },
                                ].map(({ k, v, green }) => (
                                    <div key={k} className="flex justify-between items-center">
                                        <span className="text-white/20">{k}</span>
                                        <span className={green ? "text-emerald-400 font-bold" : "text-white/50"}>{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="relative z-10 border-t border-white/[0.05] px-4 md:px-16 lg:px-24 xl:px-32 py-5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-white/20 text-[11px] font-mono">
                        © 2026 WCC Infra Private Limited. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        {["Precision", "Quality", "Safety"].map((v, i) => (
                            <span key={v} className="flex items-center gap-3">
                                <span className="text-white/15 text-[10px] font-mono tracking-widest uppercase">{v}</span>
                                {i < 2 && <span className="size-1 rounded-full bg-white/10" />}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}