import { Libre_Bodoni } from "next/font/google";

const librBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

const navbar = () => {
  return (
    <nav className={librBodoni.className + " w-full h-12 p-1 bg-transparent text-white flex justify-center"}>
      <span className="text-lg text-primary ml-1"><a href="#inicio">Inicio</a></span>
      <span className="text-lg text-primary ml-1">|</span>
      <span className="text-lg text-primary ml-1"><a href="#reserva">Reserva</a></span>
      <span className="text-lg text-primary ml-1">|</span>
      <span className="text-lg text-primary ml-1"><a href="#contacto">Contacto</a></span>
    </nav>
  );
};

export default navbar;