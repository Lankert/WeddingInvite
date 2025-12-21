import Image from "next/image";
import clock from "../../../../public/clock.png";
import { Libre_Bodoni } from "next/font/google";

const librBodoni = Libre_Bodoni({
    subsets: ["latin"],
    weight: "400",
});
const showTime = () => {
    return (
        <div id="showTime" className="flex flex-col items-center text-primary pt-10 pb-10 ">
            <div className="flex flex-col items-center">
                <h2 className={librBodoni.className + " lg:text-4xl text-2xl"}>Show Time</h2>
                <Image width={90} src={clock} alt="Clock" />
            </div>
            <div className="mt-6 max-w-2xl px-4 text-center lg:text-lg text-md">
                <ul className={librBodoni.className + " flex flex-col text-left text-lg"}>
                    <li className={librBodoni.className + " mb-4"}>17:00 - Ceremonia Iglesia</li>
                    <li className={librBodoni.className + " mb-4"}>19:00 - Ceremonia Civil</li>
                    <li className={librBodoni.className + " mb-4"}>20:00 - Entrada a la fiesta</li>
                    <li className={librBodoni.className + " mb-4"}>21:00 - Cena</li>
                    <li className={librBodoni.className + " mb-4"}>22:00 - Celebracion y Baile</li>
                </ul>
            </div>
        </div>
    );
}

export default showTime;
