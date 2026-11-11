import { useState } from 'react';

function FormularioContacto() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault(); 

    const nombreTransformado =
      nombre === nombre.toUpperCase()
        ? nombre.toLowerCase()
        : nombre.toUpperCase();

    console.log('Nombre transformado:', nombreTransformado);
    console.log('Mensaje:', mensaje);

    setEnviado(true);
    setNombre('');
    setMensaje('');

    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <section className="seccion" id="contacto">
      <h2>Reportá un Caso</h2>
      <form className="formulario" onSubmit={manejarEnvio}>
        <label>Tu nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="¿Cómo te llamás?"
          required
        />

        <label>Contanos qué viste</label>
        <textarea
          rows="4"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Describí el archivo, el canal, la hora..."
          required
        />

        <button type="submit">ENVIAR AL VACÍO</button>

        {enviado && (
          <p className="mensaje-exito">✓ Tu caso fue registrado en frecuencia cero.</p>
        )}
      </form>
    </section>
  );
}

export default FormularioContacto;