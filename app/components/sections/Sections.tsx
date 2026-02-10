import Dresscode from "./Dresscode";
import ShowTime from "./ShowTime";
import Reserva from "./Reserva";
import Contacto from "./Contacto";
import Locations from "./Locations";
import Gifts from "./Gifts";
import Galeria from "./Galeria";

const Sections = () => {
    return (
        <div>
            <Locations />
            <Reserva />
            <Dresscode />
            <ShowTime />
            <Gifts />
            <Galeria />
            <Contacto />
         </div>
    );
}

export default Sections;
