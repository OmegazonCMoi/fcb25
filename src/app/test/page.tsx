import Image from "next/image";

const Test = () => {
    return <>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-6 py-12 gap-12">
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-bold text-neutral-900">Les BTS SIO</h2>
                <p className="text-neutral-500">
                    Les BTS SIO sont de gros enculés qui ne savent même pas utiliser Symfony correctement et je n'ose parler de Java avec Android Studio.
                    Le peep à droite est une personne chockbar par notre débilité.
                </p>
            </div>
            <div className="md:w-1/2 flex justify-end">
                <Image src="/images/peep-sio.png" alt="Peep Standing" width={180} height={180} className="scale-x-[-1]" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full max-w-6xl mx-auto px-6 py-12 gap-12">
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-bold text-neutral-900 text-right">Les BTS SAM</h2>
                <p className="text-neutral-500 text-right">
                    Les BTS SIO sont de gros enculés qui ne savent même pas utiliser Symfony correctement et je n'ose parler de Java avec Android Studio.
                    Le peep à gauche est une personne chockbar par notre débilité.
                </p>
            </div>
            <div className="md:w-1/2 flex">
                <Image src="/images/peep-sam.png" alt="Peep Standing" width={250} height={250} />
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-6 py-12 gap-12">
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-bold text-neutral-900">Les STMG (golmons)</h2>
                <p className="text-neutral-500">
                    Les BTS SIO sont de gros enculés qui ne savent même pas utiliser Symfony correctement et je n'ose parler de Java avec Android Studio.
                    Le peep à droite est une personne chockbar par notre débilité.
                </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <Image src="/images/peep-standing-6.png" alt="Peep Standing" width={200} height={200} className="scale-x-[-1]" />
            </div>
        </div>
    </>
}

export default Test;