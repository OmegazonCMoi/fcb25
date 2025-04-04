import React from "react";
import NavigationMenuDesktop from '@/components/blocks/navigation-menu';
import { ateliers } from "@/data/ateliers";
import LittleCard from "@/components/blocks/little-card";

const Ateliers = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/neat-long.png')" }}
            />

            <div className="relative z-50">
                <NavigationMenuDesktop />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto px-4 mt-[15em]">
                <h1 className="text-4xl font-bold mb-8 text-neutral-200 text-center md:text-left md:self-start">
                    Ateliers
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mb-10">
                    {ateliers.map((atelier) => (
                        <LittleCard
                            key={atelier.id}
                            icon={atelier.icon}
                            title={atelier.title}
                            description={atelier.description}
                            img={atelier.imgsrc}
                        />
                    ))}
                </div>
            </div>

            <a href={'https://www.linkedin.com/in/fab-men/'} className={'fixed bottom-4 right-4 text-white text-sm hover:underline z-50'}>Créé par Fabian Menoni</a>
        </div>
    );
};

export default Ateliers;
