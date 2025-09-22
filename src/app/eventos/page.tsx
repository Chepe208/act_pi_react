'use client';

import { useRouter } from 'next/navigation';

export default function EventosPage() {
  const router = useRouter();

  const salones = [
    {
      id: 1,
      nombre: 'Salón Gran Jardín',
      capacidad: '150 personas',
      tipo: 'Matrimonios y Eventos Grandes',
      precio: 2500000,
      imagen: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop',
      descripcion: 'Amplio salón con jardín exterior, ideal para bodas y eventos formales',
      caracteristicas: ['Jardín exterior', 'Pista de baile', 'Sonido profesional', 'Iluminación especial']
    },
    {
      id: 2,
      nombre: 'Salón Ejecutivo',
      capacidad: '50 personas',
      tipo: 'Reuniones Corporativas',
      precio: 1200000,
      imagen: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=350&fit=crop',
      descripcion: 'Salón equipado para reuniones de negocios y conferencias',
      caracteristicas: ['Proyector HD', 'Wi-Fi empresarial', 'Mesa de conferencias', 'Coffee break']
    },
    {
      id: 3,
      nombre: 'Salón Familiar',
      capacidad: '80 personas',
      tipo: 'Quinceañeros y Cumpleaños',
      precio: 1800000,
      imagen: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=350&fit=crop',
      descripcion: 'Ambiente acogedor perfecto para celebraciones familiares',
      caracteristicas: ['Decoración temática', 'Área de juegos', 'Bar de refrescos', 'Sistema de audio']
    },
    {
      id: 4,
      nombre: 'Terraza Vista al Mar',
      capacidad: '100 personas',
      tipo: 'Cócteles y Recepciones',
      precio: 2200000,
      imagen: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=350&fit=crop',
      descripcion: 'Terraza exclusiva con vista panorámica al mar',
      caracteristicas: ['Vista al mar', 'Bar premium', 'Ambiente al aire libre', 'Iluminación decorativa']
    },
    {
      id: 5,
      nombre: 'Salón Versátil',
      capacidad: '120 personas',
      tipo: 'Eventos Variados',
      precio: 2000000,
      imagen: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=350&fit=crop',
      descripcion: 'Espacio flexible para cualquier tipo de evento social',
      caracteristicas: ['Configuración flexible', 'Catering incluido', 'Coordinador de evento', 'Estacionamiento']
    },
    {
      id: 6,
      nombre: 'Salón Íntimo',
      capacidad: '30 personas',
      tipo: 'Eventos Pequeños',
      precio: 800000,
      imagen: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=350&fit=crop',
      descripcion: 'Espacio acogedor para reuniones íntimas y familiares',
      caracteristicas: ['Ambiente íntimo', 'Decoración elegante', 'Servicio personalizado', 'Cocina privada']
    }
  ];

  const handleRentar = (salonId: number) => {
    router.push(`/eventos/solicitud?salonId=${salonId}`);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Salones de Eventos</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Espacios perfectos para bodas, quinceañeros, reuniones corporativas y más
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {salones.map((salon) => (
          <div key={salon.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src={salon.imagen} 
              alt={salon.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{salon.nombre}</h3>
              <p className="text-gray-600 text-sm mb-3">{salon.descripcion}</p>
              
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                  💼 {salon.tipo}
                </span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  👥 {salon.capacidad}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Características:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {salon.caracteristicas.slice(0, 3).map((caracteristica, index) => (
                    <li key={index}>✓ {caracteristica}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-green-700">
                  ${salon.precio.toLocaleString()} COP
                </span>
                <span className="text-sm text-gray-500">por evento</span>
              </div>

              <button 
                onClick={() => handleRentar(salon.id)}
                className="w-full bg-blue-900 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
              >
                Solicitar Reserva
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}