"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavigationMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full px-12 py-8 [#101010] flex justify-between items-center z-50">
            {/* LOGO */}
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        className="cursor-pointer"
                        width={64}
                        height={64}
                    />
                </Link>
            </div>

            {/* MENU DESKTOP */}
            <ul
                className="hidden mx-10 space-x-20 tracking-widest lg:flex text-neutral-200"
                style={{ fontFamily: "AdamBold" }}
            >
                <Link href="/" className="link">Accueil</Link>
                <Link href="/presentation" className="link">Presentation</Link>
                <Link href="/ateliers" className="link">Ateliers</Link>
                <Link href="/contact" className="link">Contact</Link>
            </ul>

            {/* BURGER MENU (MOBILE) */}
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-300">
                    <Menu size={32} />
                </button>
            </div>

            {/* MENU MOBILE */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="fixed top-0 right-0 z-50 flex flex-col items-center w-64 h-full py-10 space-y-6 uppercase border-l border-neutral-800 bg-neutral-900"
                        style={{ fontFamily: "AdamBold" }}
                    >
                        <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-300 absolute right-6 top-6">
                             <X size={32} />
                        </button>
                        <div className="pt-4 flex-col flex space-y-6">
                        <Link href="/" className="text-lg font-bold text-neutral-200" onClick={() => setIsOpen(false)}>Accueil</Link>
                        <Link href="/presentation" className="text-lg font-bold text-neutral-200" onClick={() => setIsOpen(false)}>Presentation</Link>
                        <Link href="/ateliers" className="text-lg font-bold text-neutral-200" onClick={() => setIsOpen(false)}>Ateliers</Link>
                        <Link href="/salles" className="text-lg font-bold text-neutral-200" onClick={() => setIsOpen(false)}>Salles</Link>
                        <Link href="/contact" className="text-lg font-bold text-neutral-200" onClick={() => setIsOpen(false)}>Contact</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavigationMenu;