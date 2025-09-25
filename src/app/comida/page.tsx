'use client';

import { useRouter } from 'next/navigation';

export default function ComidaPage() {
  const router = useRouter();

  const menuItems = [
    {
      id: 1,
      name: 'Desayuno Continental',
      description: 'Huevos, tostadas, jugo natural, café y fruta',
      price: 25000,
      image: 'https://static.bainet.es/clip/716c1a78-70b8-430b-9bd7-16e87e81d379_16-9-aspect-ratio_1600w_0.webp',
      category: 'desayuno'
    },
    {
      id: 2,
      name: 'Hamburguesa Premium',
      description: 'Carne angus, queso cheddar, tocino y papas fritas',
      price: 32000,
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop',
      category: 'almuerzo'
    },
    {
      id: 3,
      name: 'Ensalada César',
      description: 'Lechuga romana, pollo grillé, croutons y aderezo césar',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      category: 'ensalada'
    },
    {
      id: 4,
      name: 'Pizza Margherita',
      description: 'Salsa de tomate, mozzarella fresca y albahaca',
      price: 28000,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
      category: 'cena'
    },
    {
      id: 5,
      name: 'Salmón a la Plancha',
      description: 'Salmón con vegetales salteados y puré de papas',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
      category: 'cena'
    },
    {
      id: 6,
      name: 'Postre de Chocolate',
      description: 'Torta de chocolate con helado de vainilla',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      category: 'postre'
    }
  ];

  const handleOrder = (itemId: number) => {
    router.push(`/comida/orden?itemId=${itemId}`);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Menú del Restaurante</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Servicio a la habitación disponible las 24 horas
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-1 xl font-bold">${item.price.toLocaleString()} COP</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <button 
                onClick={() => handleOrder(item.id)}
                className="w-full bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
              >
                Ordenar a la Habitación
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}