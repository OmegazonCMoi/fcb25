"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavigationMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full px-6 py-4 bg-white flex justify-between items-center z-50">
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
                className="hidden lg:flex tracking-widest space-x-20 mx-10 text-neutral-900"
                style={{ fontFamily: "AdamBold" }}
            >
                <Link href="/" className="link">Accueil</Link>
                <Link href="/ateliers" className="link">Ateliers</Link>
                <Link href="/salles" className="link">Salles</Link>
                <Link href="/contact" className="link">Contact</Link>
            </ul>

            {/* BURGER MENU (MOBILE) */}
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-900">
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
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
                        className="fixed top-0 right-0 h-full w-64 bg-white border z-50 flex flex-col items-center py-10 space-y-6 uppercase"
                        style={{ fontFamily: "AdamBold" }}
                    >
                        <Link href="/" className="text-lg text-neutral-900 font-bold" onClick={() => setIsOpen(false)}>Accueil</Link>
                        <Link href="/ateliers" className="text-lg text-neutral-900 font-bold" onClick={() => setIsOpen(false)}>Ateliers</Link>
                        <Link href="/salles" className="text-lg text-neutral-900 font-bold" onClick={() => setIsOpen(false)}>Salles</Link>
                        <Link href="/contact" className="text-lg text-neutral-900 font-bold" onClick={() => setIsOpen(false)}>Contact</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavigationMenu;
