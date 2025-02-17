import { Brain, GraduationCap, Lock, ShieldAlert, ShieldCheck } from "lucide-react";

export const objectifs = [
    {
        title: "Comprendre",
        description: "Mieux comprendre les différentes menaces et vulnérabilités informatiques afin d'anticiper les risques et renforcer la sécurité des systèmes.",
        icon: <ShieldAlert className="size-4 md:size-6" />,
    },
    {
        title: "Apprendre",
        description: "Apprendre à sécuriser efficacement leurs données personnelles afin de prévenir les risques de cyberattaques et protéger leur vie privée.",
        icon: <Lock className="size-4 md:size-6" />,
    },
    {
        title: "Expérimenter",
        description: "Expérimenter diverses stratégies de défense contre les cyberattaques et renforcer la sécurité des systèmes numériques.",
        icon: <ShieldCheck className="size-4 md:size-6" />,
    },
    {
        title: "Développer",
        description: "Développer un esprit critique face aux informations en ligne afin de mieux discerner les menaces et adopter des comportements sécurisés.",
        icon: <Brain className="size-4 md:size-6" />,
    },
    {
        title: "Découvrir",
        description: "Explorer les différentes carrières et formations en cybersécurité pour mieux comprendre les opportunités du secteur.",
        icon: <GraduationCap className="size-4 md:size-6" />,
    }
]