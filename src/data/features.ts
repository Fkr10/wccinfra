import { Fuel, Route, Droplets, Factory, HardHat, Drill } from "lucide-react";
import type { IFeature } from "../../types";

export const features: IFeature[] = [
    {
        title: "Arteries of Energy: Pipeline Systems",
        description:
            "Expert installation of high-pressure cross-country oil, gas, and water pipelines with precision engineering and zero-leakage commitment.",
        icon: Fuel,
        cardBg: "bg-orange-50",
        iconBg: "bg-orange-600"
    },
    {
        title: "Paving Progress: Roads & Highways",
        description:
            "Constructing the backbone of regional connectivity with durable national highways, urban expressways, and specialized pavement solutions.",
        icon: Route,
        cardBg: "bg-slate-100",
        iconBg: "bg-slate-700"
    },
    {
        title: "Sustainable Flow: Sewage & Water",
        description:
            "Implementing advanced underground drainage and sewage treatment networks to ensure cleaner cities and sustainable water cycles.",
        icon: Droplets,
        cardBg: "bg-blue-50",
        iconBg: "bg-blue-600"
    },
    {
        title: "Industrial Foundations",
        description:
            "Specialized civil works and infrastructure for manufacturing zones, logistic parks, and heavy industrial complexes.",
        icon: Factory,
        cardBg: "bg-zinc-100",
        iconBg: "bg-zinc-700"
    },
    {
        title: "Precision Engineering Survey",
        description:
            "Utilizing advanced topographical surveying and soil testing to ensure the literal foundation of every project is unshakable.",
        icon: Drill,
        cardBg: "bg-emerald-50",
        iconBg: "bg-emerald-600"
    },
    {
        title: "Turnkey EPC Solutions",
        description:
            "End-to-end Project Management from conceptual engineering to procurement and seamless final construction phase.",
        icon: HardHat,
        cardBg: "bg-amber-50",
        iconBg: "bg-amber-600",
    },
]