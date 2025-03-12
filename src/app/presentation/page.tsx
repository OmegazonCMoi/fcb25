'use client'

import NavigationMenu from "@/components/blocks/navigation-menu";
import React from "react";
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { objectifs } from "@/data/objectifs";

const Presentation = () => {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <NavigationMenu />
            <div className="flex items-center justify-center h-screen text-center max-w-6xl mx-auto w-full md:text-left px-4">
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Qu&apos;est-ce que c&apos;est ?
                    </h1>
                    <p className="max-w-2xl mt-4 text-neutral-400">
                        Le Forum Cybersécurité, organisé les 7 et 8 avril 2025 au sein de notre lycée, réunit élèves et enseignants autour des enjeux de la sécurité informatique. L’événement propose dix ateliers immersifs et un faux procès pour explorer la cybersécurité de façon interactive. Après le succès de la première édition, cette nouvelle version s&apos;annonce encore plus enrichie.                    </p>
                    <div className="space-x-2 mt-8">
                        <Button onClick={() => scrollToSection("objectifs")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z" clipRule="evenodd" />
                                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                            </svg>
                            Objectifs
                        </Button>
                        <Button variant={"secondary"} onClick={() => scrollToSection("organisation")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
                            </svg>
                            Organisation
                        </Button>
                    </div>
                </div>
                <div className="mt-8 md:mt-0 md:ml-8 md:flex justify-center md:justify-end w-full md:w-1/2 hidden">
                    <Image src='/images/presentation-illustration.svg' alt="Presentation Illustration" width={400} height={700} />
                </div>
            </div>

            <section className="py-32 bg-gray-50" id="objectifs">
                <div className="container px-4 md:px-0 mx-auto max-w-screen-xl">
                    <h2 className="text-3xl md:pl-5 lg:text-4xl font-bold">Nos Objectifs</h2>
                    <p className="mt-4 md:pl-5 text-neutral-600 max-w-2xl text-sm md:text-base">L&apos;objectif principal du Forum Cybersécurité est de sensibiliser les participants aux risques numériques et aux bonnes pratiques en matière de cybersécurité. À travers des mises en situation et des ateliers pratiques, les élèves pourront :</p>
                    <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-10">
                        {objectifs.map((objectif, idx) => (
                            <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
                                <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                                    {objectif.icon}
                                </span>
                                <div>
                                    <h3 className="font-medium md:mb-2 md:text-xl">
                                        {objectif.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground md:text-base">
                                        {objectif.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pt-32 pb-16" id="organisation">
                <div className="container px-4 md:px-0 mx-auto max-w-screen-xl text-center items-center flex flex-col">
                    <div>
                        <h2 className="md:pl-5 text-4xl font-bold">L&apos;organisation</h2>
                        <p className="mt-4 md:pl-5 text-neutral-500 max-w-2xl text-sm md:text-base mb-16">Cet événement repose sur une collaboration étroite entre plusieurs formations du lycée, réunissant des élèves et enseignants de différentes spécialités. Chacun apporte son expertise, qu&apos;il s&apos;agisse d&apos;informatique, de cybersécurité, de droit ou encore de communication, afin de proposer des ateliers immersifs et interactifs. </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-6 py-12 gap-12">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-neutral-900">Les BTS SIO</h2>
                            <p className="text-neutral-500">
                                Les étudiants du BTS SIO préparent des ateliers pour le forum sur la cybersécurité. Ils proposeront des démonstrations et des conseils pratiques pour sensibiliser aux enjeux de la sécurité numérique.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-end">
                            <Image src="/images/peeps/peep-sio.png" alt="Peep Standing" width={180} height={180} className="scale-x-[-1]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full max-w-6xl mx-auto px-6 py-12 gap-12">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-neutral-900 text-right">Les BTS SAM</h2>
                            <p className="text-neutral-500 text-right">
                                Les étudiants du BTS SAM ont assuré l’organisation du forum sur la cybersécurité. Ils ont pris en charge le planning, la mise en place de la communication et la création du site web.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex">
                            <Image src="/images/peeps/peep-sam.png" alt="Peep Standing" width={250} height={250} />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-6 py-12 gap-12">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-neutral-900">Les STMG</h2>
                            <p className="text-neutral-500">
                                Les élèves de STMG ont organisé un faux procès lors du forum sur la cybersécurité. À travers cette mise en scène, ils illustrent les conséquences juridiques des cyberattaques.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-end">
                            <Image src="/images/peeps/peep-stmg.png" alt="Peep Standing" width={250} height={250} className="scale-x-[-1]" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Presentation;
