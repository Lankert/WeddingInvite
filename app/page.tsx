import Image from "next/image";
import { Libre_Bodoni } from "next/font/google";
import Navbar from "./components/navbar";

import base from "../public/base.jpg";
import Divider from "./components/divider/Divider";

const librBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

const getRemainingDays = (dateString: string) => {
  const today = new Date();
  const targetDate = new Date(dateString);
  const timeDiff = targetDate.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-base text-primary pt-10  ">
        <h1 id="inicio" className={librBodoni.className + " lg:text-5xl text-3xl"}>Paola Diaz & Robin Uribe</h1>
        <Divider />
        <div className="mt-10 text-center max-w-xl">
          <p className={librBodoni.className + " mb-4 text-2xl"}>
            Mayo 9, 2026 Manzanillo, Colima
          </p>
          <p className={librBodoni.className + " mb-4 text-2xl"}>
            { getRemainingDays("2026-05-09") } dias restantes
          </p>
        </div>
        <Navbar />
        <div className="lg:w-1/2 w-5/6 ">
          <Image src={base} alt="Wedding" />
        </div>
        <div className="mt-10 text-center max-w-xl">
          <p className={librBodoni.className + " mb-4 lg:text-2xl text-1xl"}>
            Estamos muy emocionados de compartir este día tan especial con ustedes. ¡Nos vemos pronto!
          </p>
        </div>
      </div>
      <div id="reserva" className="mt-10 text-center max-w-xl">
        <p className={librBodoni.className + " mb-4 lg:text-2xl text-1xl"}>
          Reserva tu lugar en la boda
        </p>
      </div>
      <div id="contacto" className="mt-10 text-center max-w-xl">
        <p className={librBodoni.className + " mb-4 lg:text-2xl text-1xl"}>
          Contacto
        </p>
      </div>
    </>
  );
}
