export default function About() {
  const team = [
    { 
      name: 'Jóse Manuel', 
      specialty: 'Desarrollo FrontEnd',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Ejemplo.png' 
    },
    { 
      name: 'Simon Sierra', 
      specialty: 'Desarrollo BackEnd',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Ejemplo.png' 
    },
    { 
      name: 'Juan Giraldo', 
      specialty: 'Diseño UX/UI',
      image: 'https://s1.significados.com/foto/ejemplo-og.jpg' 
    }
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-600">{member.specialty}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Hotel JSJ</h2>
        <p className="mb-4">
          Un sistema de próxima generación para administración y reservas de hoteles de lujo, 
          diseñado específicamente para resorts de lujo donde los huéspedes pueden ver y 
          reservar cuartos específicos.
        </p>
        <p>
          Nuestro proyecto se enfoca en brindar una experiencia premium a los huéspedes, 
          con reservas flexibles y visualización de habitaciones, garantizando eficiencia 
          operativa y una arquitectura escalable.
        </p>
      </div>
    </div>
  );
}