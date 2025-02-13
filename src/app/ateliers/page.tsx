import React from "react";
import NavigationMenu from '@/components/blocks/navigation-menu';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Ateliers = () => {
    return (
        <>
            <NavigationMenu />
            <div className="flex flex-col items-center justify-center w-[50em] mx-auto h-screen">
                <h1 className="text-4xl font-bold mb-8 text-left self-start">Ateliers</h1>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Atelier N°1</AccordionTrigger>
                        <AccordionContent>
                            Oui bonjour j&apos;aime les quiches ah bah non en fait c&apos;est pas si ouf en vrai. Présenté par <strong>Zitoune</strong> et <strong>Pignouf</strong>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Atelier N°2</AccordionTrigger>
                        <AccordionContent>
                            Oui bonjour j&apos;aime les quiches ah bah non en fait c&apos;est pas si ouf en vrai. Présenté par <strong>Zitoune</strong> et <strong>Pignouf</strong>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Atelier N°3</AccordionTrigger>
                        <AccordionContent>
                            Oui bonjour j&apos;aime les quiches ah bah non en fait c&apos;est pas si ouf en vrai. Présenté par <strong>Zitoune</strong> et <strong>Pignouf</strong>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Atelier N°4</AccordionTrigger>
                        <AccordionContent>
                            Oui bonjour j&apos;aime les quiches ah bah non en fait c&apos;est pas si ouf en vrai. Présenté par <strong>Zitoune</strong> et <strong>Pignouf</strong>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Atelier N°5</AccordionTrigger>
                        <AccordionContent>
                            Oui bonjour j&apos;aime les quiches ah bah non en fait c&apos;est pas si ouf en vrai. Présenté par <strong>Zitoune</strong> et <strong>Pignouf</strong>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Atelier N°6</AccordionTrigger>
                        <AccordionContent>
                            Oui bonjour j&apos;aime les quiches ah bah non en fait c&apos;est pas si ouf en vrai. Présenté par <strong>Zitoune</strong> et <strong>Pignouf</strong>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Atelier N°7</AccordionTrigger>
                        <AccordionContent>
                            Oui bonjour j&apos;aime les quiches ah bah non en fait c&apos;est pas si ouf en vrai. Présenté par <strong>Zitoune</strong> et <strong>Pignouf</strong>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>Atelier N°8</AccordionTrigger>
                        <AccordionContent>
                            Oui bonjour j&apos;aime les quiches ah bah non en fait c&apos;est pas si ouf en vrai. Présenté par <strong>Zitoune</strong> et <strong>Pignouf</strong>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>Atelier N°9</AccordionTrigger>
                        <AccordionContent>
                            Oui bonjour j&apos;aime les quiches ah bah non en fait c&apos;est pas si ouf en vrai. Présenté par <strong>Zitoune</strong> et <strong>Pignouf</strong>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger>Atelier N°10</AccordionTrigger>
                        <AccordionContent>
                            Oui bonjour j&apos;aime les quiches ah bah non en fait c&apos;est pas si ouf en vrai. Présenté par <strong>Zitoune</strong> et <strong>Pignouf</strong>.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default Ateliers;