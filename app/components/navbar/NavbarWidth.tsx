'use client';
import { useState }from "react";
import { Libre_Bodoni } from "next/font/google";
import Divider from "../divider/Divider";

const librBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

const NavbarWidth = () => {
    return (
         <div className="hidden lg:block md:block sticky top-0 z-40 bg-base w-full">
        <ul className="border-t-2 border-secondary flex justify-center">
        <li key="inicio" className="inline mx-4 px-2">
          <span className={librBodoni.className + " text-lg text-primary"}><a href="#inicio">Inicio</a></span>  
        </li>
        <li key="reserva" className="inline mx-4 px-2">
          <span className={librBodoni.className + " text-lg text-primary"}><a href="#reserva">Reserva</a></span>
        </li>
        <li key="dressCode" className="inline mx-4 px-2">
          <span className={librBodoni.className + " text-lg text-primary"}><a href="#dressCode">Dress Code</a></span>
        </li>
        <li key="showTime" className="inline mx-4 px-2">
          <span className={librBodoni.className + " text-lg text-primary"}><a href="#showTime">Show Time</a></span>
        </li>
        <li key="contacto" className="inline mx-4 px-2">
          <span className={librBodoni.className + " text-lg text-primary"}><a href="#contacto">Contacto</a></span>
        </li>
      </ul>
      <hr className="border-t-2 border-secondary" />
    </div>
    );
};

export default NavbarWidth;
