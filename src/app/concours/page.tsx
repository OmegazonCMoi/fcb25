'use client'

import React, { useRef, useState } from "react";
import NavigationMenuDesktop from '@/components/blocks/navigation-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CryptoJS from "crypto-js";

const PASSWORD_HASH = "55a8aa11f7dfa8e45c18f6371ac5ca373fa1e587c672883ddaaea926e4c36669";
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1355109623106900018/hSr-Kx9PYG9s1t3yn8e8Dry4kCfWIJipSRrb2aMaKqgSlcpnwEf01FX2_3SbZSUOvcZ0";

const Concours = () => {
    const firstnameRef = useRef<HTMLInputElement>(null);
    const lastnameRef = useRef<HTMLInputElement>(null);
    const telRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [error, setError] = useState<string>("");

    async function saveEntry() {
        const MAX_ATTEMPTS = 5;
        const BLOCK_DURATION_MINUTES = 5;
        const attemptKey = 'concours_attempts';
        const blockKey = 'concours_block_until';

        const now = Date.now();
        const blockedUntil = localStorage.getItem(blockKey);
        if (blockedUntil && now < parseInt(blockedUntil)) {
            setError("Trop de tentatives. Réessayez plus tard.");
            return;
        }

        let attempts = parseInt(localStorage.getItem(attemptKey) || "0");

        const firstname = firstnameRef.current?.value.trim();
        const lastname = lastnameRef.current?.value.trim();
        const tel = telRef.current?.value.trim();
        const password = pwdRef.current?.value.trim();

        if (!firstname || !lastname || !tel || !password || !selectedValue) {
            setError("Veuillez remplir tous les champs.");
            return;
        }

        if (CryptoJS.SHA256(password).toString() !== PASSWORD_HASH) {
            attempts += 1;
            localStorage.setItem(attemptKey, attempts.toString());

            if (attempts >= MAX_ATTEMPTS) {
                const blockUntil = now + BLOCK_DURATION_MINUTES * 60 * 1000;
                localStorage.setItem(blockKey, blockUntil.toString());
                setError(`Trop de tentatives. Réessayez dans ${BLOCK_DURATION_MINUTES} minutes.`);
            } else {
                setError(`Mot de passe incorrect. Tentative ${attempts}/${MAX_ATTEMPTS}`);
            }

            return;
        }

        // Réinitialise les tentatives si le mot de passe est bon
        localStorage.removeItem(attemptKey);
        localStorage.removeItem(blockKey);

        const newEntry = {
            firstname,
            lastname,
            tel,
            niveau: selectedValue,
        };

        // Envoi à Discord
        const discordMessage = `📩 **Nouveau participant au concours**\n\n👤 **Nom :** ${firstname} ${lastname}\n📞 **Téléphone :** ${tel}\n🎓 **Niveau :** ${selectedValue}`;

        try {
            await fetch(DISCORD_WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: discordMessage }),
            });
            console.log("Message envoyé à Discord.");
        } catch (error) {
            console.error("Erreur lors de l'envoi du message à Discord :", error);
        }

        // Envoi au serveur
        try {
            const response = await fetch("/api/inscriptions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEntry),
            });

            if (response.ok) {
                alert(`Merci ${firstname} ${lastname} pour votre participation !`);
            } else {
                console.error("Erreur lors de l'enregistrement.");
            }
        } catch (error) {
            console.error("Erreur de requête :", error);
        }
    }

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Image de fond */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/neat-long.png')" }} />

            {/* Menu de navigation */}
            <div className="relative z-50">
                <NavigationMenuDesktop />
            </div>

            {/* Formulaire */}
            <div className="relative z-30 flex flex-col items-center justify-center w-full md:w-[30em] mx-auto h-screen p-6">
                <div className="text-left self-start mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold">Concours</h1>
                    <p className="text-neutral-400">N&apos;hésitez pas à participer au concours !</p>
                </div>

                <div className="w-full flex flex-col gap-4">
                    {/* Prénom et Nom */}
                    <div className="flex gap-4 w-full">
                        <div className="w-full">
                            <Label htmlFor="firstname">Prénom</Label>
                            <Input type="text" className="w-full text-sm bg-neutral-900" placeholder="Entrez votre prénom..." ref={firstnameRef} />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="lastname">Nom</Label>
                            <Input type="text" className="w-full text-sm bg-neutral-900" placeholder="Entrez votre nom..." ref={lastnameRef} />
                        </div>
                    </div>

                    {/* Statut */}
                    <div className="w-full">
                        <Label htmlFor="statut">Statut</Label>
                        <Select name="statut" onValueChange={(value) => setSelectedValue(value)}>
                            <SelectTrigger className="w-full bg-neutral-900">
                                <SelectValue placeholder="Sélectionnez votre statut..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Seconde">Seconde</SelectItem>
                                <SelectItem value="Première">Première</SelectItem>
                                <SelectItem value="Terminale">Terminale</SelectItem>
                                <SelectItem value="BTS">BTS</SelectItem>
                                <SelectItem value="DCG">DCG</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Téléphone */}
                    <div className="w-full">
                        <Label htmlFor="tel">Téléphone</Label>
                        <Input type="tel" className="w-full text-sm bg-neutral-900" placeholder="Entrez votre numéro de téléphone..." ref={telRef} />
                    </div>

                    {/* Mot de passe */}
                    <div className="w-full">
                        <Label htmlFor="pwd">Mot de passe</Label>
                        <Input type="password" className="w-full text-sm bg-neutral-900" placeholder="Entrez le mot de passe..." ref={pwdRef} />
                    </div>

                    {/* Boutons */}
                    <Button onClick={saveEntry} className="w-full">Participer</Button>

                    {error}
                </div>
            </div>

            <a href={'https://www.linkedin.com/in/fab-men/'} className={'absolute bottom-4 right-4 text-white text-xs md:text-sm hover:underline'}>Créé par Fabian Menoni</a>
        </div>
    );
}

export default Concours;
