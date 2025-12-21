import Image from "next/image";
import { Libre_Bodoni } from "next/font/google";
import { useMemo } from "react";

import base from "../public/base.jpg";
import Divider from "./components/divider/Divider";
import NavbarWidth from "./components/navbar/NavbarWidth";
import Sections from "./components/sections";

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
  const remainingDays = useMemo(() => getRemainingDays("2026-05-09"), []);

  return (
      <div className="flex flex-col items-center text-primary w-5/6 px-2 lg:w-3/4 md:w-3/4 pt-10 md:px-20 bg-base mx-auto border border-secondary">
        <h1 key="title" id="inicio" className={librBodoni.className + " lg:text-5xl text-3xl text-center break-words"}>Paola Diaz & Robin Uribe</h1>
        <Divider key="divider" />
        <div key="info" className="mt-10 text-center max-w-xl">
          <p key="location" className={librBodoni.className + " mb-4 text-2xl"}>
            Mayo 9, 2026 Manzanillo, Colima
          </p>
          <p key="days" className={librBodoni.className + " mb-4 text-2xl"}>
            {remainingDays} dias restantes
          </p>
        </div>
        <NavbarWidth key="navbar-width" />
        <div key="image-container" className="lg:w-1/2 w-5/6 ">
          <Image src={base} alt="Wedding" />
        </div>
        <div key="footer-text" className="mt-10 text-center max-w-xl">
          <p className={librBodoni.className + " mb-4 lg:text-2xl text-1xl"}>
            Estamos muy emocionados de compartir este día tan especial con ustedes. ¡Nos vemos pronto!
          </p>
        </div>
      <Sections key="sections" />
      </div>
  );
}
