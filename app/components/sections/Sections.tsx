import Dresscode from "./Dresscode";
import ShowTime from "./ShowTime";
import Reserva from "./Reserva";
import Contacto from "./Contacto";

const Sections = () => {
    return (
        <div>
            <Reserva />
            <Dresscode />
            <ShowTime />
            <Contacto />
         </div>
    );
}

export default Sections;
