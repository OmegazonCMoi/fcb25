'use client'

import React from "react";
import NavigationMenu from "@/components/blocks/navigation-menu";
import { Lato, Gochi_Hand } from 'next/font/google'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const latoThin = Lato({
  subsets: ["latin"],
  weight: '100'
});

const gochihand = Gochi_Hand({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <NavigationMenu />
      {/* <div className="absolute left-1/2 -translate-x-1/2 bottom-10">
        <button className="mouse">
          <div className="scroll"></div>
        </button>
      </div> */}
      <div className="absolute top-1/2 -translate-y-3/4 left-1/2 -translate-x-1/2 flex flex-col md:flex-row justify-between items-center max-w-7xl w-full text-center md:text-left gap-48">
        <div className="flex flex-col self-start">
          <h1 className={`${latoThin.className} text-4xl md:text-6xl`}>
            Forum Cybersécurité 2025
          </h1>
          <p className={`${latoThin.className} text-lg text-neutral-600 mt-4`}>
            Un événement pour découvrir différentes attaques et défenses en cybersécurité avec différents ateliers et sujets de discussion.
          </p>
          <div className="mt-6 space-x-2 flex items-center justify-center md:justify-start mx-auto md:mx-0">
            <a href="/ateliers">
              <Button>Découvrir</Button>
            </a>
            <Button variant='outline'>S&apos;inscrire</Button>
          </div>
          <div className="absolute lg:flex items-center justify-center mx-auto hidden">
            <img
              src="/images/arrow.png"
              alt="Arrow showing title"
              className="w-20 h-20 justify-center transform translate-x-[25em] translate-y-28 filter grayscale rotate-[320deg]"
            />
            <h1
              className={`${gochihand.className} text-brown text-base whitespace-nowrap transform rotate-6 translate-x-[24em] translate-y-36 text-neutral-600`}
            >
              Du 7 au 8 Avril !
            </h1>
          </div>
        </div>

        {/* Image affichée uniquement sur grand écran */}
        <Image
          src='/images/security-illustration.svg'
          alt='Security Illustration'
          className="hidden md:block"
          width={350}
          height={350}
        />
      </div>
      <div className="flex absolute bottom-36 mx-auto justify-center items-center max-w-7xl w-full p-4 md:p-10 md:border rounded-3xl left-1/2 -translate-x-1/2">
        <div className="flex w-1/3 flex-col items-center md:p-4 text-center">
          <span className="text-4xl font-bold text-neutral-800">11</span>
          <span className="text-base text-gray-500">Ateliers disponibles</span>
        </div>
        <Separator orientation="vertical" className="h-28" />
        <div className="flex w-1/3 flex-col items-center md:p-4 text-center">
          <span className="text-4xl font-bold text-neutral-800">400+</span>
          <span className="text-base text-gray-500">Participants inscrits</span>
        </div>
        <Separator orientation="vertical" className="h-28" />
        <div className="flex w-1/3 flex-col items-center md:p-4 text-center">
          <span className="text-4xl font-bold text-neutral-800">95%</span>
          <span className="text-base text-gray-500">Taux de satisfaction</span>
        </div>
      </div>
    </>
  );
}
