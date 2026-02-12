import { Swiper, SwiperSlide } from "swiper/react";
import { Libre_Bodoni } from "next/font/google";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const librBodoni = Libre_Bodoni({
    subsets: ["latin"],
    weight: "400",
});

const Galeria = () => {
        
const photoFilenames = [
  'Paola_Robin-Casual-Nogueras--WEB-002.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-006.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-008.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-014.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-016.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-018.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-027.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-030.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-032.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-036.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-037.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-040.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-041.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-042.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-044.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-045.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-046.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-052.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-058.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-059.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-068.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-072.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-079.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-080.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-082.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-093.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-094.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-097.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-102.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-105.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-106.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-108.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-109.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-112.jpg',
  'Paola_Robin-Casual-Nogueras--WEB-117.jpg',
];

const imageSources = photoFilenames.map((filename, index) => ({
  src: `/photos/${filename}`,
  alt: `Paola y Robin - Foto de boda ${index + 1}`,
  filename
}));

    return (
        <div id="galeria" className="flex flex-col items-center text-primary pt-10 pb-10 px-4">
            <h2 className={librBodoni.className + " lg:text-4xl text-2xl"}>Galería de Fotos</h2>
            <div className="mt-6 max-w-2xl text-center lg:text-lg text-md">
                <p className={librBodoni.className + " mb-8 lg:text-2xl text-1xl flex flex-col items-center"}>
                    Aqui podras ver las fotos de nuestra session de fotos. Esperemos que las disfruten tanto como nosotros disfrutamos tomandolas.
                </p>
            </div>
            <div className="w-full max-w-4xl mt-8">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    className="w-full"
                >
                    {imageSources.map((image, index) => (
                        <SwiperSlide key={image.filename}>
                            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-contain"
                                    priority={index < 3}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Galeria;