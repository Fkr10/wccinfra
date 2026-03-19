import type { LucideIcon } from "lucide-react";

export interface ILink {
    name: string;
    href: string;
};

export interface ICustomIcon {
    icon: LucideIcon;
    dir?: 'left' | 'right';
};

export interface ISectionTitle {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    dir?: 'left' | 'center';
};

export interface IFeature {
    icon: LucideIcon;
    title: string;
    description: string;
    cardBg?: string;
    iconBg?: string;
};

export interface IFaq {
    question: string;
    answer: string;
};

export interface ITeamMember {
    name: string;
    image: string;
    role: string;
    status: string;
    instagram?: string;
    email?: string;
};

export interface IClient {
    name: string;
    logo: string;
    category: string;
    executionYear: string;
    website?: string;
}
