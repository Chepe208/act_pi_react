'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"  className="text-xl font-bold">Hotel JSJ</Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-300">Inicio</Link>
          <Link href="/rooms" className="hover:text-blue-300">Habitaciones</Link>
          <Link href="/comida" className="hover:text-blue-300">Restaurante</Link>
          <Link href="/eventos" className="hover:text-blue-300">Eventos</Link>
          <Link href="/about" className="hover:text-blue-300">Sobre Nosotros</Link>
          <Link href="/help" className="hover:text-blue-300">Ayuda</Link>
        </div>
      </div>
    </nav>
  );
}