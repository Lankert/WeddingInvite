import { Libre_Bodoni } from "next/font/google";
import Gifts from "../Gifts";

const librBodoni = Libre_Bodoni({
    subsets: ["latin"],
    weight: "400",
});

const Galeria = () => {
    return (
        <div id="galeria" className="flex flex-col items-center text-primary pt-10 pb-10 ">
            <h2 className={librBodoni.className + " lg:text-4xl text-2xl"}>Galería de Fotos</h2>
            <div className="mt-6 max-w-2xl px-4 text-center lg:text-lg text-md">
                <p className={librBodoni.className + " mb-8 lg:text-2xl text-1xl flex flex-col items-center"}>
                    Aqui podras ver las fotos de nuestra session de fotos. Esperemos que las disfruten tanto como nosotros disfrutamos tomandolas.
                    <a href="https://www.instagram.com/robinuribe/" target="_blank" className={librBodoni.className + " mt-2 bg-secondary p-3 rounded-full text-white hover:text-primary"}>
                        Ver Fotos
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Galeria;