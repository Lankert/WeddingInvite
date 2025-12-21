'use client';
import { useState }from "react";
import { Libre_Bodoni } from "next/font/google";

const librBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

const NavbarWidth = () => {
    return (
         <div className="hidden lg:block md:block">
      <ul>
        <li key="inicio" className="inline m-4 p-2">
          <span className={librBodoni.className + " text-lg text-primary"}><a href="#inicio">Inicio</a></span>  
        </li>
        <li key="reserva" className="inline m-4 p-2">
          <span className={librBodoni.className + " text-lg text-primary"}><a href="#reserva">Reserva</a></span>
        </li>
        <li key="evento" className="inline m-4 p-2">
          <span className={librBodoni.className + " text-lg text-primary"}><a href="#evento">Dress Code</a></span>
        </li>
        <li key="hospedaje" className="inline m-4 p-2">
          <span className={librBodoni.className + " text-lg text-primary"}><a href="#hospedaje">Show Time</a></span>
        </li>
        <li key="contacto" className="inline m-4 p-2">
          <span className={librBodoni.className + " text-lg text-primary"}><a href="#contacto">Contacto</a></span>
        </li>
      </ul>
    </div>
    );
};

export default NavbarWidth;
