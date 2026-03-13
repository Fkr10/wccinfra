export interface IJob {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
};

export const jobs: IJob[] = [
    {
        id: "WCC-STR-842",
        title: "Senior Structural Engineer",
        department: "Engineering",
        location: "Ghaziabad, UP",
        type: "Full-Time",
        experience: "8+ Years"
    },
    {
        id: "WCC-PM-219",
        title: "Project Manager (Pipeline Systems)",
        department: "Operations",
        location: "On-Site (North India)",
        type: "Full-Time",
        experience: "10+ Years"
    },
    {
        id: "WCC-SHE-905",
        title: "Safety Health & Environment (SHE) Officer",
        department: "Safety & Compliance",
        location: "Project Locations",
        type: "Full-Time",
        experience: "5+ Years"
    },
    {
        id: "WCC-QC-114",
        title: "Quality Control Lead",
        department: "Quality Assurance",
        location: "Ghaziabad / Sites",
        type: "Full-Time",
        experience: "7+ Years"
    }
];
