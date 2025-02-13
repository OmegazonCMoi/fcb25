'use client'

import React from "react";
import NavigationMenu from "@/components/blocks/navigation-menu";
import { Lato } from 'next/font/google'
import Image from "next/image";
import { Button } from "@/components/ui/button";

const latoThin = Lato({
  subsets: ["latin"],
  weight: '100'
});

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-[8em] text-center md:text-left">
        <div className="flex flex-col">
          <h1 className={`${latoThin.className} text-4xl md:text-6xl`}>
            Forum Cybersécurité 2025
          </h1>
          <div className="mt-6 space-x-2 flex items-center justify-center md:justify-start mx-auto md:mx-0">
            <a href="/ateliers">
              <Button>Découvrir</Button>
            </a>
            <Button variant='outline'>S&apos;inscrire</Button>
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
    </ >
  );
}
