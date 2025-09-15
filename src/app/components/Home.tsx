export default function Home() {
  const hotelImages = [
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop'
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Bienvenido a Hotel JSJ</h1>
      
      <div className="text-lg mb-8">
        <p>Un sistema de próxima generación para administración y reservas de hoteles de lujo, 
        diseñado específicamente para resorts de lujo donde los huéspedes pueden ver y 
        reservar cuartos específicos.</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {hotelImages.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`Imagen del hotel ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="bg-blue-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Nuestras Instalaciones</h2>
        <p>Contamos con habitaciones de lujo, spa de primera clase y servicios exclusivos 
        para garantizar una estadía inolvidable.</p>
      </div>
    </div>
  );
}