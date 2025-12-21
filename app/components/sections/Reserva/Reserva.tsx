import { Libre_Bodoni } from "next/font/google";

const librBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});


const Reserva = () => {
    return (
        <div id="reserva" className="flex min-h-screen flex-col items-center bg-accent-base text-primary pt-10  ">
        <h2 className={librBodoni.className + " lg:text-4xl text-2xl"}>Como reservar tu lugar</h2>
        </div>
    );
}

export default Reserva;
