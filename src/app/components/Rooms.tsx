'use client';

import { useRouter } from 'next/navigation';

export default function Rooms() {
  const router = useRouter();
  
  const rooms = [
    { 
      id: 1, 
      name: 'Habitación Estándar', 
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop',
      price: '$70.000'
    },
    { 
      id: 2, 
      name: 'Habitación de Lujo', 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
      price: '$120.000'
    },
    { 
      id: 3, 
      name: 'Suite Presidencial', 
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop',
      price: '$200.000'
    },
    { 
      id: 4, 
      name: 'Habitación con vista al mar', 
      image: 'https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$140.000'
    }
  ];

  
  const handleReserve = (roomId: number) => {
    router.push(`/room-detail/${roomId}`);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestras Habitaciones</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={room.image} 
              alt={room.name}
              className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
              <br />
              <h3 className="font-semibold mb-2">Precio: {room.price}</h3>
              <button 
                onClick={() => handleReserve(room.id)}
                className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}