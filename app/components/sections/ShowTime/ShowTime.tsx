import Image from "next/image";
import clock from "../../../../public/clock.png";
import timeline from "../../../../public/timeline.png";
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
            </div>
            <div className="mt-6 lg:max-w-2xl text-center lg:text-lg text-md">
                <Image width={400} src={timeline} alt="Show Time" />
            </div>
        </div>
    );
}

export default showTime;
