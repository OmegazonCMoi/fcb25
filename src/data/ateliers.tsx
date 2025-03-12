import {
    Bitcoin,
    Bot,
    DoorOpen,
    Eye,
    Fish,
    Glasses,
    Lock,
    Server,
    Usb,
    Wifi
} from "lucide-react";

export const ateliers = [
    {
        id: 1,
        title: "Atelier MITM",
        description: "Tentez de remporter un séjour pour 2 personnes dans un hôtel en Suisse grâce à ce concours Instagram !",
        hotes: ["Zitoune", "Pignouf"],
        icon: <Wifi className="size-4" strokeWidth={1} />,
        imgsrc: "/images/ateliers/1.png"
    },
    {
        id: 2,
        title: "Atelier Rubber Ducky",
        description: "Un simple clic et vos photos privées se retrouvent sur le web. Toujours sûr de vouloir brancher cette clé USB ?",
        hotes: ["Zitoune", "Pignouf"],
        icon: <Usb className="size-4" strokeWidth={1} />,
        imgsrc: "/images/ateliers/2.png"
    },
    {
        id: 3,
        title: "Atelier Mot de Passe",
        description: "Votre mot de passe est-il vraiment à l’épreuve des hackers ? Venez le découvrir… avant qu’il ne soit trop  tard !",
        hotes: ["Zitoune", "Pignouf"],
        icon: <Lock className="size-4" strokeWidth={1} />,
        imgsrc: "/images/ateliers/3.png"
    },
    {
        id: 4,
        title: "Atelier Phishing",
        description: "Et si ce message super urgent ou cette promo de rêve était en fait… un piège ? Venez apprendre à ne plus se faire avoir !",
        hotes: ["Zitoune", "Pignouf"],
        icon: <Fish className="size-4" strokeWidth={1} />,
        imgsrc: "/images/ateliers/5.png"
    },
    {
        id: 5,
        title: "Atelier Backdoor",
        description: "Imaginez qu’on entre chez vous sans jamais passer par la porte… Sur votre ordinateur, c’est aussi possible.",
        hotes: ["Zitoune", "Pignouf"],
        icon: <DoorOpen className="size-4" strokeWidth={1} />,
        imgsrc: "/images/ateliers/6.png"
    },
    {
        id: 6,
        title: "Atelier DoS",
        description: "Que feriez-vous si, en quelques secondes, tout votre système se retrouvait complètement paralysé ?",
        hotes: ["Zitoune", "Pignouf"],
        icon: <Server className="size-4" strokeWidth={1} />,
        imgsrc: "/images/ateliers/1.png"
    },
    {
        id: 7,
        title: "Atelier Ransomware",
        description: "Un matin, vous allumez votre ordinateur et… tous vos fichiers sont bloqués. Payer ou tout perdre ? Apprenez à éviter ce choix impossible.",
        hotes: ["Zitoune", "Pignouf"],
        icon: <Bitcoin className="size-4" strokeWidth={1} />,
        imgsrc: "/images/ateliers/2.png"
    },
    {
        id: 8,
        title: "Atelier OSINT",
        description: "Vous seriez surpris de tout ce qu’on peut savoir sur vous… Découvrez comment les hackers prennent le contrôle de votre vie privée.",
        hotes: ["Zitoune", "Pignouf"],
        icon: <Eye className="size-4" strokeWidth={1} />,
        imgsrc: "/images/ateliers/3.png"
    },
    {
        id: 9,
        title: "Atelier Dark Web",
        description: "Le Dark Web : mythe ou réalité ? Plongez dans les profondeurs d'Internet et découvrez ce qui s'y cache réellement, entre mystères et dangers.",
        hotes: ["Zitoune", "Pignouf"],
        icon: <Glasses className="size-4" strokeWidth={1} />,
        imgsrc: "/images/ateliers/4.png"
    },
    {
        id: 10,
        title: "Atelier IA",
        description: "L’intelligence artificielle est une alliée… jusqu’au jour où elle devient une menace.",
        hotes: ["Zitoune", "Pignouf"],
        icon: <Bot className="size-4" strokeWidth={1} />,
        imgsrc: "/images/ateliers/4.png"
    }
];