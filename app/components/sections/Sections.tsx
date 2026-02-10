import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Locations = dynamic(() => import('./Locations'), { ssr: false });
const Reserva = dynamic(() => import('./Reserva'), { ssr: false });
const Dresscode = dynamic(() => import('./Dresscode'), { ssr: false });
const ShowTime = dynamic(() => import('./ShowTime'), { ssr: false });
const Gifts = dynamic(() => import('./Gifts'), { ssr: false });
const Galeria = dynamic(() => import('./Galeria'), { ssr: false });
const Contacto = dynamic(() => import('./Contacto'), { ssr: false });

const Sections = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Locations />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Reserva />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Dresscode />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ShowTime />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Gifts />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Galeria />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Contacto />
            </Suspense>
        </div>
    );
}

export default Sections;
