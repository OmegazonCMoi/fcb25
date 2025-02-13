'use client'

import React, { useRef, useState } from "react";
import NavigationMenu from '@/components/blocks/navigation-menu';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


const Contact = () => {
    const firstname = useRef<HTMLInputElement>(null);
    const lastname = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const message = useRef<HTMLTextAreaElement>(null);
    const [selectedValue, setSelectedValue] = useState<string>("");

    const handleSubmit = () => {
        window.location.href = `mailto:mail@forum.com?subject=Contact de ${firstname.current?.value} ${lastname.current?.value} - ${selectedValue}&body=${message.current?.value}`;
    }
    return (
        <>
            <NavigationMenu />
            <div className="flex flex-col items-center justify-center w-[30em] mx-auto h-screen p-6">
                <div className="text-left self-start mb-4">
                    <h1 className="text-4xl font-bold">Contactez-nous !</h1>
                    <p className="text-neutral-400">N'hésitez pas à nous contacter pour plus d'informations.</p>
                </div>
                <div className="w-full flex flex-col gap-4">
                    {/* Inputs Prénom + Nom */}
                    <div className="flex gap-4 w-full">
                        <div className="w-full">
                            <Label htmlFor="firstname">Prénom</Label>
                            <Input
                                type="text"
                                className="w-full"
                                placeholder="Entrez votre prénom..."
                                name="firstname"
                                id="firstname"
                                ref={firstname}
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="lastname">Nom</Label>
                            <Input
                                type="text"
                                className="w-full"
                                placeholder="Entrez votre nom..."
                                name="lastname"
                                id="lastname"
                                ref={lastname}
                            />
                        </div>
                    </div>

                    {/* Champ Statut */}
                    <div className="w-full">
                        <Label htmlFor="statut">Statut</Label>
                        <Select name="statut" onValueChange={(value) => setSelectedValue(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Sélectionnez votre statut..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Étudiant">Étudiant</SelectItem>
                                <SelectItem value="Professeur">Professeur</SelectItem>
                                <SelectItem value="Personnel">Personnel</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Champ Email */}
                    <div className="w-full">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            className="w-full"
                            placeholder="Entrez votre email..."
                            name="email"
                            id="email"
                            ref={email}
                        />
                    </div>

                    {/* Champ Message */}
                    <div className="w-full">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            className="w-full"
                            placeholder="Écrivez votre message..."
                            name="message"
                            id="message"
                            ref={message}
                        />
                    </div>

                    {/* Bouton Envoyer */}
                    <Button
                        className="w-full"
                        onClick={handleSubmit}
                    >Envoyer</Button>
                </div>
            </div>
        </>
    );
}

export default Contact;
