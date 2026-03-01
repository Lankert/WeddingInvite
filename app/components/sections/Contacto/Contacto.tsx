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
                <Image src={message} alt="Teléfono" width={90} />
            </div>
            <p className={librBodoni.className + " my-6 max-w-2xl px-4 text-center text-lg"}>
                Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos a los siguientes números:
            </p>
            <p className={librBodoni.className + " text-lg font-bold mb-4"}>312-193-5886 (Robin Uribe)</p>
            <p className={librBodoni.className + " text-lg font-bold mb-4"}>312-133-2364 (Paola Díaz)</p>
            <p className={librBodoni.className}>¡Estamos aquí para ayudarte!</p>

            <p className={librBodoni.className + " mt-4 text-center text-lg font-bold mb-4"}>Por favor, contesta nuestra encuesta de confirmación de asistencia en el siguiente enlace:</p>
            <a href="https://forms.gle/YLrCP8eTdcquEhFh8" className={librBodoni.className + " mt-4 px-6 py-3 bg-primary text-white rounded-lg text-lg font-bold hover:bg-primary-dark transition-colors duration-300"}>
                Confirmar Asistencia
            </a>
        </div>
    );
}

export default Contacto;
