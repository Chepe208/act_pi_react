'use client';

import { useParams } from 'next/navigation';

type Room = {
  name: string;
  description: string;
};

export default function RoomDetail() {
  const params = useParams();
  const roomId = Number(params.id);

  
  const roomDetails: Record<number, Room> = {
    1: { name: 'Habitación Estándar', description: 'Una habitación cómoda con todas las comodidades básicas.' },
    2: { name: 'Habitación de Lujo', description: 'Amplia habitación con amenities premium y vista privilegiada.' },
    3: { name: 'Suite Presidencial', description: 'Nuestra suite más exclusiva con jacuzzi y servicio personalizado.' },
    8: { name: 'Habitación con vista al Mar', description: 'Disfruta de vistas espectaculares al océano.' }
  };

  const room = roomDetails[roomId] || roomDetails[1];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">{room.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-300 h-64 md:h-96 rounded-lg"></div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
          <p className="text-lg mb-6">{room.description}</p>
          
          <div className="bg-blue-100 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Características:</h3>
            <ul className="list-disc list-inside">
              <li>Aire acondicionado</li>
              <li>TV por cable</li>
              <li>Wi-Fi gratuito</li>
              <li>Baño privado</li>
              <li>Minibar</li>
            </ul>
          </div>
          
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
            Confirmar Reserva
          </button>
        </div>
      </div>
    </div>
  );
}
