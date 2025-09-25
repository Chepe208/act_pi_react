'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SolicitudEvento() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const salonId = searchParams.get('salonId');

  const salones = {
    1: { nombre: 'Salón Gran Jardín', precio: 2500000 },
    2: { nombre: 'Salón Ejecutivo', precio: 1200000 },
    3: { nombre: 'Salón Familiar', precio: 1800000 },
    4: { nombre: 'Terraza Vista al Mar', precio: 2200000 },
    5: { nombre: 'Salón Versátil', precio: 2000000 },
    6: { nombre: 'Salón Íntimo', precio: 800000 }
  };

  const tiposEvento = [
    'Matrimonio/Boda',
    'Quinceañeros',
    'Cumpleaños',
    'Reunión Corporativa',
    'Conferencia',
    'Cóctel/Recepción',
    'Graduación',
    'Otro'
  ];

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    fechaEvento: '',
    numPersonas: '50',
    horaInicio: '',
    horaFin: '',
    comentarios: ''
  });
const selectedSalon = salones[salonId as unknown as keyof typeof salones] || salones[1];

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Solicitud enviada! Te contactaremos para confirmar la reserva del ${selectedSalon.nombre}`);
    router.push("/eventos");
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Solicitud de Reserva de Salón</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="bg-purple-100 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Solicitando: {selectedSalon.nombre}</h2>
          <p className="text-lg font-bold">${selectedSalon.precio.toLocaleString()} COP</p>
          <p className="text-sm text-gray-600">Precio base por evento (sujeto a personalización)</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {}
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
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="+57 300 123 4567"
              />
            </div>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Evento *
              </label>
              <select
                name="tipoEvento"
                value={formData.tipoEvento}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecciona un tipo</option>
                {tiposEvento.map((tipo) => (
                  <option key={tipo} value={tipo}>{tipo}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha del Evento *
              </label>
              <input
                type="date"
                name="fechaEvento"
                value={formData.fechaEvento}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de Personas *
              </label>
              <input
                type="number"
                name="numPersonas"
                value={formData.numPersonas}
                onChange={handleChange}
                required
                min="10"
                max="200"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hora Inicio *
              </label>
              <input
                type="time"
                name="horaInicio"
                value={formData.horaInicio}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hora Fin *
              </label>
              <input
                type="time"
                name="horaFin"
                value={formData.horaFin}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Comentarios o Requerimientos Especiales
            </label>
            <textarea
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
              placeholder="Decoración especial, catering, equipo adicional, etc."
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
              className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 font-semibold"
            >
              Enviar Solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}