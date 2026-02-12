"use client";

import Image from "next/image";
import { Libre_Bodoni } from "next/font/google";
import { useState, useEffect } from "react";

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
  const [remainingDays, setRemainingDays] = useState(() => getRemainingDays("2026-05-09"));

  useEffect(() => {
    // Run immediately on mount/refresh to ensure value is up-to-date
    setRemainingDays(getRemainingDays("2026-05-09"));
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        setRemainingDays(getRemainingDays("2026-05-09"));
      }
    };

    const handleFocus = () => {
      setRemainingDays(getRemainingDays("2026-05-09"));
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("focus", handleFocus);

    const interval = setInterval(() => {
      setRemainingDays(getRemainingDays("2026-05-09"));
    }, 24 * 60 * 60 * 1000); // Update every 24 hours

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
      <div className="flex flex-col items-center text-primary w-5/6 px-2 lg:w-3/4 md:w-3/4 pt-10 md:px-20 bg-base mx-auto border border-secondary">
        <h1 key="title" id="inicio" className={librBodoni.className + " lg:text-5xl text-3xl text-center break-words"}>Robin Arturo & Susana Paola</h1>
        <Divider key="divider" />
        <div key="info" className="mt-10 text-center max-w-xl">
          <p key="location" className={librBodoni.className + " mb-4 text-2xl"}>
            Mayo 9, 2026
            <br />
            Manzanillo, Colima
          </p>
          <p key="days" className={librBodoni.className + " mb-4 text-2xl"}>
            {remainingDays} días restantes
          </p>
        </div>
        <NavbarWidth key="navbar-width" />
        <div key="image-container" className="lg:w-1/2 w-6/7 mt-2 ">
          <Image src={base} alt="Wedding" />
        </div>
        <div key="footer-text" className="mt-10 text-center max-w-xl">
          <p className={librBodoni.className + " mb-4 lg:text-2xl text-1xl"}>
            Estamos muy emocionados de compartir este día tan especial con ustedes. ¡Nos vemos pronto!
          </p>
        </div>
      <Sections key="sections" />
      <div className="fixed bottom-4 right-4 z-50 group">
        <div className="cursor-pointer text-2xl">🎵</div>
        <audio controls className="hidden group-hover:block absolute bottom-full right-0 bg-white p-2 rounded shadow-lg">
          <source src="/Bad%20Bunny%20-%20Ojitos%20Lindos%20ft.%20Bomba%20Est%C3%A9reo.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      </div>
  );
}
