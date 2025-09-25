'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface MenuItem {
  name: string;
  price: number;
}

export default function OrdenComida() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemId = searchParams.get('itemId');

  const menuItems: Record<number, MenuItem>  = {
    1: { name: 'Desayuno Continental', price: 25000 },
    2: { name: 'Hamburguesa Premium', price: 32000 },
    3: { name: 'Ensalada César', price: 22000 },
    4: { name: 'Pizza Margherita', price: 28000 },
    5: { name: 'Salmón a la Plancha', price: 38000 },
    6: { name: 'Postre de Chocolate', price: 15000 }
  };

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    habitacion: '',
    horaEntrega: ''
  });

  const numericItemId = Number(itemId);
  const selectedItem = menuItems[numericItemId] || menuItems[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Orden confirmada! ${selectedItem.name} llegará a tu habitación a las ${formData.horaEntrega}`);
    router.push('/comida');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mb-8">Ordenar Servicio a la Habitación</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="bg-yellow-100 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Ordenando: {selectedItem.name}</h2>
          <p className="text-lg font-bold">${selectedItem.price.toLocaleString()} COP</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apellido *
              </label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Tu apellido"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de Habitación *
              </label>
              <input
                type="number"
                name="habitacion"
                value={formData.habitacion}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Ej: 101"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hora de Entrega *
              </label>
              <input
                type="time"
                name="horaEntrega"
                value={formData.horaEntrega}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Instrucciones especiales:</h3>
            <textarea
              placeholder="Alergias, preferencias, instrucciones especiales..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-20"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
            >
              Cancelar
            </button>
            
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
            >
              Confirmar Orden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}