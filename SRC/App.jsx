import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function FormularioContacto() {
  const form = useRef();
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setCargando(true);

    // ⚠️ REEMPLAZÁ ESTOS 3 VALORES CON LOS TUYOS DE EMAILJS
    emailjs.sendForm(
      'TU_SERVICE_ID',   // Ejemplo: 'service_abc123'
      'TU_TEMPLATE_ID',  // Ejemplo: 'template_xyz789'
      form.current, 
      'TU_PUBLIC_KEY'    // Ejemplo: 'aBcDeFgHiJkLmNoP'
    )
    .then(() => {
      setEnviado(true);
      setNombre('');
      setMensaje('');
      setTimeout(() => setEnviado(false), 4000);
    })
    .catch((error) => {
      console.error('Error al enviar:', error);
      alert('Hubo un error. Intentá de nuevo.');
    })
    .finally(() => {
      setCargando(false);
    });
  };

  return (
    <section className="seccion" id="contacto">
      <h2>Reportá un Caso</h2>
      
      {/* Contenedor Flex para poner Formulario y Mapa lado a lado */}
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch' }}>
        
        {/* COLUMNA 1: EL FORMULARIO */}
        <form className="formulario" ref={form} onSubmit={manejarEnvio} style={{ flex: 1, minWidth: '300px' }}>
          <label>Tu nombre</label>
          <input
            type="text"
            name="from_name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="¿Cómo te llamás?"
            required
          />

          <label>Contanos qué viste</label>
          <textarea
            rows="4"
            name="message"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Describí el archivo, el canal, la hora..."
            required
          />

          <button type="submit" disabled={cargando}>
            {cargando ? 'ENVIANDO...' : 'ENVIAR AL VACÍO'}
          </button>

          {enviado && (
            <p className="mensaje-exito">✓ Tu caso fue registrado en frecuencia cero.</p>
          )}
        </form>

        {/* COLUMNA 2: EL MAPA DE UPATECO */}
        <div style={{ flex: 1, minWidth: '300px', border: '2px solid #8b0000', borderRadius: '6px', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.239605859748!2d-65.2112865!3d-26.8328119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d1c1d0e6e5d%3A0x6a0e7b8c8c8c8c8c!2sUniversidad%20Upateco!5e0!3m2!1ses!2sar!4v1600000000000!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '400px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de la Universidad Upateco"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default FormularioContacto;