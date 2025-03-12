'use client'

import React from "react";
import NavigationMenu from "@/components/blocks/navigation-menu";
import { Lato, Gochi_Hand } from 'next/font/google'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const latoThin = Lato({
  subsets: ["latin"],
  weight: '100'
});

const latoNormal = Lato({
  subsets: ["latin"],
  weight: '300'
});

const gochihand = Gochi_Hand({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

const Counter = ({ from = 0, to, sign }: { from?: number; to: number; sign?: string }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const duration = 1500; // Durée totale en ms
    const stepTime = 15; // Intervalle de mise à jour
    const steps = duration / stepTime;
    const increment = (to - from) / steps;

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.round(start));
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [from, to]);

  return <motion.span className="text-4xl font-bold text-neutral-800">{count}{sign}</motion.span>;
};

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <div className="absolute top-1/2 -translate-y-3/4 left-1/2 -translate-x-1/2 flex flex-col md:flex-row justify-between items-center max-w-7xl w-full text-center md:text-left gap-48">
        <div className="flex flex-col self-start">
          <div className="flex md:hidden items-center justify-center mx-auto z-50">
            <img
              src="/images/arrow.png"
              alt="Arrow showing title"
              className="w-20 h-20 justify-center filter grayscale"
            />
            <h1
              className={`${gochihand.className} text-brown text-base whitespace-nowrap transform -translate-y-3 rotate-6 text-neutral-600`}
            >
              Du 7 au 8 Avril !
            </h1>
          </div>
          <h1 className={`${latoThin.className} justify-center mx-auto md:mx-0 text-3xl md:text-6xl`}>
            Forum Cybersécurité 2025
          </h1>
          <p className={`${latoNormal.className} justify-center mx-auto md:mx-0 text-lg text-neutral-600 mt-4 w-96 md:w-full`}>
            Un événement pour découvrir différentes attaques et défenses en cybersécurité avec différents ateliers et sujets de discussion.
          </p>
          <div className="mt-6 space-x-2 flex items-center justify-center md:justify-start mx-auto md:mx-0">
            <a href="/presentation">
              <Button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
                Découvrir
              </Button>
            </a>
            <Button variant='secondary'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
                <path fillRule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z" clipRule="evenodd" />
              </svg>
              Ateliers
            </Button>
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

        <Image
          src='/images/security-illustration.svg'
          alt='Security Illustration'
          className="hidden md:block"
          width={350}
          height={350}
        />
      </div>
      <div
        className="absolute bottom-24 md:bottom-36 w-full px-4"
      >
        <div className="flex justify-center items-center mx-auto max-w-7xl w-full p-4 md:p-10 md:border rounded-3xl">
          <div className="flex w-1/3 flex-col items-center md:p-4 text-center">
            <Counter to={10} />
            <span className="text-base text-gray-500">Ateliers disponibles</span>
          </div>
          <Separator orientation="vertical" className="h-12 md:h-28" />
          <div className="flex w-1/3 flex-col items-center md:p-4 text-center">
            <Counter to={400} sign="+" />
            <span className="text-base text-gray-500">
              Participants <br className="visible md:hidden" /> en 2024
            </span>
          </div>
          <Separator orientation="vertical" className="h-12 md:h-28" />
          <div className="flex w-1/3 flex-col items-center md:p-4 text-center">
            <Counter to={95} sign="%" />
            <span className="text-base text-gray-500">Taux de satisfaction</span>
          </div>
        </div>
      </div>
    </>
  );
}