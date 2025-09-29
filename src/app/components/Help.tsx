export default function Help() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Centro de Ayuda</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Cómo utilizar nuestra página</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Selecciona la pestaña "Habitaciones" para ver nuestras opciones disponibles</li>
          <li>Haz clic en el botón "Reservar" de la habitación que prefieras</li>
          <li>Completa el formulario de reserva con tus datos personales</li>
          <li>Confirma tu reserva y recibe tu comprobante por correo electrónico</li>
        </ol>
      </div>

      <div className="bg-blue-100 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Contactos de Soporte</h2>
         <h2 className="text-2xl font-semibold mb-4">Simón Sierra</h2>
        <p className="mb-2"><strong>Email:</strong> simonuwusierra@gmail.com</p>
        <p><strong>Teléfono:</strong> 3137928483</p>
        <br />
         <h2 className="text-2xl font-semibold mb-4">Jose Manuel</h2>
        <p className="mb-2"><strong>Email:</strong> jruizzapata38@gmail.com</p>
        <p><strong>Teléfono:</strong> 3113300196</p>
        <br />
         <h2 className="text-2xl font-semibold mb-4">Juan Jose</h2>
        <p className="mb-2"><strong>Email:</strong> uiehcskuf@gmail.com</p>
        <p><strong>Teléfono:</strong> 3136129425</p>
        <br />
        <p className="mt-4">Estamos disponibles para ayudarte de lunes a viernes de 8:00 am a 6:00 pm.</p>
      </div>
    </div>
  );
}