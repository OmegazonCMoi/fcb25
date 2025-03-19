import React from "react";
import NavigationMenuDesktop from '@/components/blocks/navigation-menu';
import { ateliers } from "@/data/ateliers";
import LittleCard from "@/components/blocks/little-card";

const Ateliers = () => {
    return (
        <>
            <NavigationMenuDesktop />
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 mt-[15em]">
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
        </>
    );
}

export default Ateliers;
