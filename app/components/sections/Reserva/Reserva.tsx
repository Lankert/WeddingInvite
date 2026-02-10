import { Libre_Bodoni } from "next/font/google";

const librBodoni = Libre_Bodoni({
    subsets: ["latin"],
    weight: "400",
});

const Reserva = () => {
    return (
        <div id="reserva" className="flex flex-col items-center bg-accent-base text-primary pt-10  ">
            <h2 className={librBodoni.className + " lg:text-4xl text-2xl"}>Como reservar tu lugar</h2>
            <div className="mt-6 max-w-2xl px-4 text-center lg:text-lg text-md">
                <p className={librBodoni.className + " mb-8 text-lg"}>Importante - Fecha limite para el pago total de la habitacion 28 de Febrero</p>
                <ul className={librBodoni.className + " flex flex-col text-left text-lg"}>
                    <li className="mb-4">1. Llama al numero 314-331-0101</li>
                    <li className="mb-4">2. Menciona nuestro codigo de reserva "Boda Robin Arturo & Susana Paola".</li>
                    <li className="mb-4">3. Elige el tipo de habitación que prefieras.</li>
                    <li className="mb-4">4. Completa la información requerida y confirma tu reserva.</li>
                </ul>
            </div>
        </div>
    );
}

export default Reserva;
