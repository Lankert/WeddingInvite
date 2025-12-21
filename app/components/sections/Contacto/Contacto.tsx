import { Libre_Bodoni } from "next/font/google";
import Image from "next/image";
import message from "../../../../public/message.png";

const librBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

const Contacto = () => {
    return (
        <div id="contacto" className="w-full h-auto bg-contacto bg-cover bg-center flex flex-col items-center mb-10">
            <div className="rounded-lg flex flex-col items-center">
                <h2 className={librBodoni.className + " lg:text-4xl text-2xl text-primary mb-6"}>Contacto</h2>
                <Image src={message} alt="Phone" width={90} />
            </div>
            <p className={librBodoni.className + " my-6 max-w-2xl px-4 text-center text-lg"}>
                Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos al número:
            </p>
            <p className={librBodoni.className + " text-lg font-bold mb-4"}>312-193-5886 (Robin Uribe)</p>
            <p className={librBodoni.className + " text-lg font-bold mb-4"}>312-193-2364 (Paola Diaz)</p>
            <p className={librBodoni.className}> ¡Estamos aquí para ayudarte!</p>
        </div>
    );
}

export default Contacto;
