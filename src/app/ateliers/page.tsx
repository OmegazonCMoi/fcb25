import React from "react";
import NavigationMenu from '@/components/blocks/navigation-menu';
import { ateliers } from "@/data/ateliers";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const Ateliers = () => {
    return (
        <>
            <NavigationMenu />
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 mt-[15em]">
                <h1 className="text-4xl font-bold mb-8 text-neutral-900 text-center md:text-left md:self-start">
                    Ateliers
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mb-10">
                    {ateliers.map((atelier) => (
                        <Card key={atelier.id} className="mx-auto">
                            <CardHeader className="pb-1">
                                {atelier.icon}
                            </CardHeader>
                            <CardContent className="text-left">
                                <h2 className="mb-1 text-lg font-semibold">{atelier.title}</h2>
                                <p className="leading-snug text-muted-foreground">
                                    {atelier.description}
                                </p>
                            </CardContent>
                            <CardFooter className="justify-end pb-0 pr-0">
                                <Image
                                    className="h-40 w-full rounded-tl-md rounded-br-xl object-cover object-center"
                                    src={atelier.imgsrc}
                                    alt="placeholder"
                                    width={1000}
                                    height={1000}
                                />
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Ateliers;
