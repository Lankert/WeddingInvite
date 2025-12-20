import { Libre_Bodoni } from "next/font/google";

const librBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

const navbar = () => {
  return (
    <nav className={librBodoni.className + " w-full h-12 p-1 bg-transparent text-white flex justify-center"}>
      <span className="text-lg text-primary ml-1">Inicio</span>
      <span className="text-lg text-primary ml-1">|</span>
      <span className="text-lg text-primary ml-1">Reserva</span>
      <span className="text-lg text-primary ml-1">|</span>
      <span className="text-lg text-primary ml-1">Contacto</span>
    </nav>
  );
};

export default navbar;