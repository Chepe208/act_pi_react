export default function About() {
  const team = [
    { name: 'Jóse Manuel', specialty: 'Desarrollo Frontend' },
    { name: 'Juan Giraldo', specialty: 'Diseño UX/UI' },
    { name: 'Simon Sierra', specialty: 'Desarrollo Backend' }
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <div className="bg-gray-300 h-32 w-32 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
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