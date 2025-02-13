'use client'

import React from "react";
import NavigationMenu from "@/components/blocks/navigation-menu";
import { Lato } from 'next/font/google'
import Image from "next/image";

const latoThin = Lato({
  subsets: ["latin"],
  weight: '100'
});

const latoNormal = Lato({
  subsets: ["latin"],
  weight: '300'
});

export default function Home() {
  return (
    <div>
      <NavigationMenu />
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between items-center w-full px-[8em]">
        <div className="flex-col">
          <h1 className={`${latoThin.className} text-6xl`}>Forum Cybersécurité 2025</h1>
          <div className="mt-6 space-x-2">
            <a href="#" className={`${latoNormal.className} px-6 py-3 bg-neutral-800 text-neutral-100 rounded-[0.5em] hover:shadow-lg transition-all duration-300`}>Découvrir</a>
            <a href="#" className={`${latoNormal.className} px-6 py-3 border border-neutral-800 text-neutral-800 rounded-[0.5em] hover:shadow-lg transition-all duration-300`}>S&apos;inscrire</a>
          </div>
        </div>
        <Image src='/images/security-illustration.svg' alt='Security Illustration' className="mr-10" width={350} height={350} />
      </div>
    </div >
  );
}
