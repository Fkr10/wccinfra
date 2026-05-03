"use client";
import { links } from "../data/links";
import type { ILink } from "../../types";
import { MenuIcon, XIcon, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import AnimatedContent from "./animated-content";

function WccLogo({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 180 44" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={className} aria-label="WCC Infra" role="img">
            <rect x="0" y="2" width="40" height="40" rx="8" fill="#ea580c" />
            <rect x="2" y="2" width="5" height="40" rx="2" fill="white" opacity="0.18" />
            <rect x="7" y="3" width="31" height="4" rx="2" fill="white" opacity="0.1" />
            <text x="20" y="28.5" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900"
                fontSize="13.5" fill="white" textAnchor="middle" letterSpacing="-0.5">WCC</text>
            <text x="50" y="22" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900"
                fontSize="18" fill="#09090b" letterSpacing="-1">WCC INFRA</text>
            <text x="51" y="34" fontFamily="Arial, sans-serif" fontWeight="600"
                fontSize="7.5" fill="#a1a1aa" letterSpacing="3">PRIVATE LIMITED</text>
            <rect x="50" y="38" width="50" height="2.5" rx="1.25" fill="#ea580c" />
        </svg>
    );
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <AnimatedContent reverse>
                <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
                    ? "py-2 border-b border-zinc-200/80 bg-white/95 backdrop-blur-xl shadow-sm shadow-zinc-100"
                    : "py-4 border-b border-transparent bg-white/80 backdrop-blur-md"
                    } px-4 md:px-16 lg:px-24 xl:px-32`}>
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <a href="/" className="flex items-center" aria-label="WCC Infra Home">
                            <WccLogo className="h-10 w-auto" />
                        </a>

                        <div className="hidden md:flex items-center gap-1">
                            {links.map((link: ILink) => (
                                <a key={link.name} href={link.href}
                                    className="py-2 px-4 text-zinc-500 hover:text-zinc-900 transition-all duration-200 font-semibold text-sm rounded-lg hover:bg-zinc-50 relative group">
                                    {link.name}
                                    <span className="absolute bottom-1 left-4 right-4 h-px bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                className="md:hidden p-2 rounded-lg text-zinc-600 hover:bg-zinc-100 transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
                            </button>
                            <a href="#contact"
                                className="hidden md:inline-flex items-center gap-2 py-2.5 px-6 bg-zinc-900 hover:bg-orange-600 transition-all duration-300 text-white rounded-lg font-bold text-sm shadow-sm hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 group">
                                <PhoneCall size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                                Work With Us
                            </a>
                        </div>
                    </div>
                </nav>
            </AnimatedContent>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-[60] transition-all duration-300 ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsMenuOpen(false)}
                />
                {/* Panel */}
                <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
                        <WccLogo className="h-9 w-auto" />
                        <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-lg text-zinc-400 hover:bg-zinc-100 transition-colors" aria-label="Close menu">
                            <XIcon className="size-5" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-1 p-4 pt-6">
                        {links.map((link: ILink) => (
                            <a key={link.name} href={link.href}
                                className="py-3.5 px-5 text-zinc-700 font-semibold text-base rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}>
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact"
                            className="mt-4 py-3.5 px-6 text-center bg-zinc-900 hover:bg-orange-600 text-white rounded-xl font-bold transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}>
                            Work With Us
                        </a>
                    </div>

                    <div className="absolute bottom-8 left-6 right-6">
                        <p className="text-zinc-300 text-xs font-mono tracking-widest uppercase text-center">WCC Infrastructure · Est. 2012</p>
                    </div>
                </div>
            </div>
        </>
    );
}