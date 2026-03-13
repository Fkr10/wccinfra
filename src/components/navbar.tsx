"use client";
import { links } from "../data/links";
import type { ILink } from "../../types";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import AnimatedContent from "./animated-content";

// Inline SVG Logo component for crisp rendering at all sizes
function WccLogo({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 180 44" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={className} aria-label="WCC Infra" role="img">
            {/* Badge */}
            <rect x="0" y="2" width="40" height="40" rx="8" fill="#ea580c" />
            {/* Inner pipe accent stripe */}
            <rect x="2" y="2" width="5" height="40" rx="2" fill="white" opacity="0.18" />
            {/* Top highlight */}
            <rect x="7" y="3" width="31" height="4" rx="2" fill="white" opacity="0.1" />
            {/* WCC text */}
            <text x="20" y="28.5" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900"
                fontSize="13.5" fill="white" textAnchor="middle" letterSpacing="-0.5">WCC</text>

            {/* Wordmark */}
            <text x="50" y="22" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900"
                fontSize="18" fill="#09090b" letterSpacing="-1">WCC INFRA</text>
            {/* Sub-label */}
            <text x="51" y="34" fontFamily="Arial, sans-serif" fontWeight="600"
                fontSize="7.5" fill="#a1a1aa" letterSpacing="3">PRIVATE LIMITED</text>
            {/* Orange underline */}
            <rect x="50" y="38" width="50" height="2.5" rx="1.25" fill="#ea580c" />
        </svg>
    );
}

// Dark version for mobile menu
function WccLogoDark({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 180 44" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={className} aria-label="WCC Infra" role="img">
            <rect x="0" y="2" width="40" height="40" rx="8" fill="#ea580c" />
            <rect x="2" y="2" width="5" height="40" rx="2" fill="white" opacity="0.18" />
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

    return (
        <>
            <AnimatedContent reverse>
                <nav className="fixed w-full top-0 z-50 px-4 md:px-16 lg:px-24 xl:px-32 py-3 border-b transition-all duration-300 border-zinc-100 bg-white/90 backdrop-blur-md">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <a href="/" className="flex items-center" aria-label="WCC Infra Home">
                            <WccLogo className="h-10 w-auto" />
                        </a>

                        <div className="hidden md:flex items-center gap-1">
                            {links.map((link: ILink) => (
                                <a key={link.name} href={link.href}
                                    className="py-1.5 px-4 text-zinc-600 hover:text-orange-600 transition-colors font-medium text-sm rounded-full hover:bg-orange-50">
                                    {link.name}
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
                                className="hidden md:inline-flex items-center gap-2 py-2 px-5 bg-orange-500 hover:bg-orange-600 transition-all text-white rounded-full font-bold text-sm shadow-sm hover:shadow-md hover:shadow-orange-500/30 hover:-translate-y-0.5">
                                Work With Us
                            </a>
                        </div>
                    </div>
                </nav>
            </AnimatedContent>

            {/* Mobile Drawer */}
            <div className={`fixed top-0 right-0 z-[60] w-full bg-white shadow-2xl shadow-black/10 transition-all duration-300 ease-in-out ${isMenuOpen ? "h-auto overflow-auto" : "h-0 overflow-hidden"}`}>
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
                    <WccLogoDark className="h-9 w-auto" />
                    <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-lg text-zinc-400 hover:bg-zinc-100 transition-colors" aria-label="Close menu">
                        <XIcon className="size-5" />
                    </button>
                </div>
                <div className="flex flex-col gap-1 p-4">
                    {links.map((link: ILink) => (
                        <a key={link.name} href={link.href}
                            className="py-3 px-4 text-zinc-700 font-medium text-base rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact"
                        className="mt-3 py-3 px-6 text-center bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold transition-colors"
                        onClick={() => setIsMenuOpen(false)}>
                        Work With Us
                    </a>
                </div>
            </div>
        </>
    );
}