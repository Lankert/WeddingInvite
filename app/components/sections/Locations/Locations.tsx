import church from "../../../../public/church-removebg-preview.png";
import hotel from "../../../../public/civil-removebg-preview.png";
import Image from "next/image";
import { Libre_Bodoni } from "next/font/google";

const librBodoni = Libre_Bodoni({
    subsets: ["latin"],
    weight: "400",
});

const iglesiaOnClick= () => {
    window.open("https://maps.app.goo.gl/wU4xeBYeeca1za3D8", "_blank");
}

const Locations = () => {
    return (
        <div id="locations" className="flex flex-col items-center text-primary pt-10 pb-10 ">
            <h2 className={librBodoni.className + " lg:text-4xl text-2xl"}>Localidades</h2>
            <div className="mt-6 max-w-2xl px-4 text-center lg:text-lg text-md flex flex-col items-center">
                <Image src={church} alt="Iglesia" width={90} />
                <p className={librBodoni.className + " mb-4 lg:text-2xl text-1xl flex flex-col items-center"}>
                    Parroquia de Nuestra Señora del Rosario
                    <button onClick={iglesiaOnClick} className="bg-secondary p-3 rounded-full ml-2 text-white hover:text-primary">Ver Mapa</button>
                </p>
                <Image src={hotel} alt="Hotel" width={140} />
                <p className={librBodoni.className + " mb-4 lg:text-2xl text-1xl flex flex-col items-center"}>
                    Hotel Las Hadas
                    <button
                        onClick={() => window.open("https://maps.app.goo.gl/tXbHYHyFVE3Xk6a86", "_blank")}
                        className="bg-secondary p-3 rounded-full ml-2 text-white hover:text-primary">
                            Ver Mapa
                        </button>
                </p>
            </div>
        </div>
    );
}

export default Locations;
