import church from "../../../../public/church-removebg-preview.png";
import hotel from "../../../../public/civil-removebg-preview.png";
import Image from "next/image";
import { Libre_Bodoni } from "next/font/google";
import { useState, useEffect } from "react";

const librBodoni = Libre_Bodoni({
    subsets: ["latin"],
    weight: "400",
});

const Locations = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div id="locations" className="flex flex-col items-center text-primary pt-10 pb-10 ">
            <h2 className={librBodoni.className + " lg:text-4xl text-2xl"}>Localidades</h2>
            <div className="mt-6 max-w-2xl px-4 text-center lg:text-lg text-md flex flex-col items-center">
                <Image src={church} alt="Iglesia" width={90} />
                <p className={librBodoni.className + " mb-4 lg:text-2xl text-1xl flex flex-col items-center"}>
                    Parroquia de Nuestra Señora del Rosario
                    <a href="https://maps.app.goo.gl/wU4xeBYeeca1za3D8" target={isMobile ? "_self" : "_blank"} className="bg-secondary p-3 rounded-full ml-2 text-white hover:text-primary">Ver Mapa</a>
                </p>
                <Image src={hotel} alt="Hotel" width={140} />
                <p className={librBodoni.className + " mb-4 lg:text-2xl text-1xl flex flex-col items-center"}>
                    Hotel Las Hadas by Brisas
                    <a href="https://maps.app.goo.gl/tXbHYHyFVE3Xk6a86" target={isMobile ? "_self" : "_blank"} className="bg-secondary p-3 rounded-full ml-2 text-white hover:text-primary">
                        Ver Mapa
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Locations;
