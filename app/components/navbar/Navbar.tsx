'use client';
import { useState }from "react";
import { Libre_Bodoni } from "next/font/google";

const librBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 md:hidden lg:hidden">
      <li key="menu" className="absolute m-4 p-2 bg-secondary-base rounded-lg w-12 text-center" onClick={() => setIsOpen(true)}>
          <span className="text-lg text-secondary">☰</span>
        </li>
      <div className={isOpen ? "w-screen h-screen bg-black fixed inset-0 opacity-50" : "hidden"} onClick={() => setIsOpen(false)} />
      <div onBlur={() => setIsOpen(false)} className={`left-0 top-0 lg:w-1/4 w-1/2 bg-secondary-base h-full fixed transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className={librBodoni.className + " w-full h-12 p-1 bg-transparent text-black flex flex-col"}>
          <ul>
            <li key="inicio" className="mt-14 ml-3">
              <span className="text-lg text-secondary"><a href="#inicio">Inicio</a></span>
            </li>
            <li key="reserva" className="mt-6 ml-3">
              <span className="text-lg text-secondary"><a href="#reserva">Reserva</a></span>
            </li>
            <li key="evento" className="mt-6 ml-3">
              <span className="text-lg text-secondary"><a href="#evento">Dress Code</a></span>
            </li>
            <li key="hospedaje" className="mt-6 ml-3">
              <span className="text-lg text-secondary"><a href="#hospedaje">Show Time</a></span>
            </li>
            <li key="contacto" className="mt-6 ml-3">
              <span className="text-lg text-secondary"><a href="#contacto">Contacto</a></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;