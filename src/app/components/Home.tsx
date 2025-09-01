export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Bienvenido a Hotel JSJ</h1>
      
      <div className="text-lg mb-8">
        <p>Un sistema de próxima generación para administración y reservas de hoteles de lujo, 
        diseñado específicamente para resorts de lujo y spas donde los huéspedes pueden ver y 
        reservar cuartos específicos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-200 h-64 rounded-lg"></div>
        <div className="bg-gray-200 h-64 rounded-lg"></div>
        <div className="bg-gray-200 h-64 rounded-lg"></div>
      </div>

      <div className="bg-blue-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Nuestras Instalaciones</h2>
        <p>Contamos con habitaciones de lujo, spa de primera clase y servicios exclusivos 
        para garantizar una estadía inolvidable.</p>
      </div>
    </div>
  );
}
