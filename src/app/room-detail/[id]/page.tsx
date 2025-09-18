'use client';

import { useParams, useRouter } from 'next/navigation';

interface RoomDetail {
  name: string;
  description: string;
  image: string;
  price: string;
}

export default function RoomDetail() {
  const router = useRouter();
  const params = useParams();
  const roomId = params.id;

   const roomDetails: Record<number, RoomDetail> = {
    1: { 
      name: 'Habitación Estándar', 
      description: 'Una habitación cómoda con todas las comodidades básicas.',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop',
      price: '$70.000'
    },
    2: { 
      name: 'Habitación de Lujo', 
      description: 'Amplia habitación con amenities premium y vista privilegiada.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
      price: '$120.000'
    },
    3: { 
      name: 'Suite Presidencial', 
      description: 'Nuestra suite más exclusiva con jacuzzi y servicio personalizado.',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=400&fit=crop',
      price: '$200.000'
    },
    4: { 
      name: 'Habitación Vista al Mar', 
      description: 'Disfruta de vistas espectaculares al océano.',
      image: 'https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$140.000'
    }
  };

  const numericRoomId = Number(roomId);
  const room = roomDetails[numericRoomId] || roomDetails[1];

  const handleReserve = () => {
    router.push(`/reserva/form?roomId=${roomId}`);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">{room.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src={room.image} 
            alt={room.name}
            className="w-full object-cover"
          />
        </div>
        
        {}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
          <p className="text-lg mb-6">{room.description}</p>
          
          <div className="bg-blue-100 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Características:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Aire acondicionado</li>
              <li>TV por cable</li>
              <li>Wi-Fi gratuito</li>
              <li>Baño privado</li>
              <li>Minibar</li>
              <li>Caja fuerte</li>
              <li>Servicio de habitaciones</li>
            </ul>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Precio por noche:</h3>
            <p className="text-2xl font-bold text-green-800">{room.price}</p>
          </div>
          
          <button 
            onClick={handleReserve}
            className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 text-lg font-semibold"
          >
            Confirmar Reserva
          </button>
        </div>
      </div>
    </div>
  );
}