import { Libre_Bodoni } from "next/font/google";
import Image from "next/image";
import dresscodeImage from "../../../../public/image.png";

const librBodoni = Libre_Bodoni({
    subsets: ["latin"],
    weight: "400",
});

const  Dresscode = () => {
    return (
        <div id="dressCode" className="flex flex-col items-center mt-10 mb-10 px-4">
            <h2 className={librBodoni.className + " lg:text-4xl text-2xl mb-6"}>Dress Code</h2>
            <div className="max-w-2xl text-center lg:text-lg text-md">
                <p className={librBodoni.className + " mb-4"}>
                    Semiformal
                </p>
                <Image src={dresscodeImage} alt="Dress Code" />
            </div>
        </div>
    );
}

export default Dresscode;
