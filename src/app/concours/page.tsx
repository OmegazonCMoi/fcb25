'use client'

import React, { useRef, useState } from "react";
import NavigationMenuDesktop from '@/components/blocks/navigation-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CryptoJS from "crypto-js";

const PASSWORD_HASH = "246b2fe279d3fcef8fa18251bfa55cecb1e5d07aa74615fdeb9c52d119806a9d";
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1355109623106900018/hSr-Kx9PYG9s1t3yn8e8Dry4kCfWIJipSRrb2aMaKqgSlcpnwEf01FX2_3SbZSUOvcZ0";

const Concours = () => {
    const firstname = useRef<HTMLInputElement>(null);
    const lastname = useRef<HTMLInputElement>(null);
    const tel = useRef<HTMLInputElement>(null);
    const pwd = useRef<HTMLInputElement>(null);
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    async function sendMessage(firstname: string, lastname: string, tel: string, niveau: string) {
        const messageContent = `📩 **Nouveau participant au concours**\n\n👤 **Nom :** ${firstname} ${lastname}\n📞 **Téléphone :** ${tel}\n🎓 **Niveau :** ${niveau}`;

        try {
            const response = await fetch(DISCORD_WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: messageContent }),
            });

            if (response.ok) {
                alert("Merci " + firstname + " " + lastname + " pour votre participation !");
            } else {
                setError("Erreur lors de l'envoi du message.");
            }
        } catch {
            setError("Impossible d'envoyer le message.");
        } finally {
            setLoading(false);
        }
    }

    function onClick() {
        if (!firstname.current?.value || !lastname.current?.value || !tel.current?.value || !pwd.current?.value) {
            setError("Veuillez remplir tous les champs.");
            return;
        }

        if (CryptoJS.SHA256(pwd.current.value).toString() === PASSWORD_HASH) {
            setLoading(true);
            sendMessage(firstname.current.value, lastname.current.value, tel.current.value, selectedValue);
            setError("");
        } else {
            setError("Mot de passe incorrect !");
        }
    }

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/neat-long.png')" }} />

            <div className="relative z-50">
                <NavigationMenuDesktop />
            </div>

            <div className="relative z-30 flex flex-col items-center justify-center w-full md:w-[30em] mx-auto h-screen p-6">
                <div className="text-left self-start mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold">Concours</h1>
                    <p className="text-neutral-400">N&apos;hésitez pas à participer au concours !</p>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <div className="flex gap-4 w-full">
                        <div className="w-full">
                            <Label>Prénom</Label>
                            <Input type="text" className='bg-neutral-900' placeholder="Entrez votre prénom..." ref={firstname} />
                        </div>
                        <div className="w-full">
                            <Label>Nom</Label>
                            <Input type="text" className='bg-neutral-900' placeholder="Entrez votre nom..." ref={lastname} />
                        </div>
                    </div>

                    <div className="w-full">
                        <Label>Statut</Label>
                        <Select onValueChange={setSelectedValue}>
                            <SelectTrigger className="w-full bg-neutral-900">
                                <SelectValue placeholder="Sélectionnez votre statut..." />
                            </SelectTrigger>
                            <SelectContent>
                                {["Seconde", "Première", "Terminale", "BTS", "DCG"].map((statut) => (
                                    <SelectItem key={statut} value={statut}>{statut}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full">
                        <Label>Téléphone</Label>
                        <Input type="tel" className='bg-neutral-900' placeholder="Entrez votre numéro de téléphone..." ref={tel} />
                    </div>

                    <div className="w-full">
                        <Label>Mot de passe</Label>
                        <Input type="password" className='bg-neutral-900' placeholder="Entrez le mot de passe..." ref={pwd} />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button onClick={onClick} className="w-full" disabled={loading}>
                        {loading ? "Envoi en cours..." : "Participer"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Concours;
