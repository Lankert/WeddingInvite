import { Libre_Bodoni } from "next/font/google";

const librBodoni = Libre_Bodoni({
    subsets: ["latin"],
    weight: "400",
});

const Gifts = () => {
    return (
        <div id="gifts" className="flex flex-col items-center text-primary pt-10 pb-10 ">
            <h2 className={librBodoni.className + " lg:text-4xl text-2xl"}>Mesa de Regalos</h2>
            <div className="mt-6 max-w-2xl px-4 text-center lg:text-lg text-md">
                <p className={librBodoni.className + " mb-8 lg:text-2xl text-1xl flex flex-col items-center"}>
                    Lo más importante para nosotros es contar con tu presencia en este día tan especial. Si deseas hacernos un regalo, puedes hacerlo a través de nuestra Mesa de Regalos en Liverpool.
                    <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51789398" target="_blank" 
                    className={librBodoni.className + " mt-2 bg-secondary p-3 rounded-full text-white hover:text-primary"}>
                    Ver Lista de Regalos
                </a>
                </p>
                
                <p className={librBodoni.className + " mb-8 lg:text-2xl text-1xl flex flex-col items-center"}>
                    Si desean obsequiarnos algo mas, habra lluvia de sobres en la fiesta.
                </p>
            </div>
        </div>
    );
}

export default Gifts;