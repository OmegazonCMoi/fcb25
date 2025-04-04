'use client'

import React, { useRef, useState } from "react";
import NavigationMenuDesktop from '@/components/blocks/navigation-menu';
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
        window.location.href = `mailto:noah@dekeyzer.fr?subject=Contact de ${firstname.current?.value} ${lastname.current?.value} - ${selectedValue}&body=${message.current?.value}`;
    }

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/neat-long.png')" }}
            />

            <div className="relative z-50">
                <NavigationMenuDesktop />
            </div>

            <div className="relative z-30 flex flex-col items-center justify-center w-full md:w-[30em] mx-auto h-screen p-6">
                <div className="text-left self-start mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold">Contactez-nous !</h1>
                    <p className="text-neutral-400">N&apos;hésitez pas à nous contacter pour plus d&apos;informations.</p>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex gap-4 w-full">
                        <div className="w-full">
                            <Label htmlFor="firstname">Prénom</Label>
                            <Input
                                type="text"
                                className="w-full text-sm bg-neutral-900"
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
                                className="w-full text-sm bg-neutral-900"
                                placeholder="Entrez votre nom..."
                                name="lastname"
                                id="lastname"
                                ref={lastname}
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <Label htmlFor="statut">Statut</Label>
                        <Select name="statut" onValueChange={(value) => setSelectedValue(value)}>
                            <SelectTrigger className="w-full bg-neutral-900">
                                <SelectValue placeholder="Sélectionnez votre statut..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Étudiant">Étudiant</SelectItem>
                                <SelectItem value="Professeur">Professeur</SelectItem>
                                <SelectItem value="Personnel">Personnel</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            className="w-full text-sm bg-neutral-900"
                            placeholder="Entrez votre email..."
                            name="email"
                            id="email"
                            ref={email}
                        />
                    </div>

                    <div className="w-full">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            className="w-full text-sm bg-neutral-900"
                            placeholder="Écrivez votre message..."
                            name="message"
                            id="message"
                            ref={message}
                        />
                    </div>

                    <Button
                        className="w-full"
                        onClick={handleSubmit}
                    >Envoyer</Button>
                </div>
            </div>

            <a href={'https://www.linkedin.com/in/fab-men/'} className={'absolute bottom-4 right-4 text-white text-sm hover:underline'}>Créé par Fabian Menoni</a>
        </div>
    );
}

export default Contact;