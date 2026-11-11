import { useState, useEffect } from 'react';

function ApiGenerador() {
  const [imagen, setImagen] = useState('');
  const [cargando, setCargando] = useState(true);

  const obtenerArchivo = async () => {
    setCargando(true);
    try {
      // API nativa de la lista (Random Duck)
      const respuesta = await fetch('https://random-d.uk/api/random');
      const datos = await respuesta.json();
      setImagen(datos.url);
    } catch (error) {
      console.error("Error al conectar con la API:", error);
      // Imagen de respaldo por si la API falla
      setImagen('https://random-d.uk/api/2.jpg');
    } finally {
      setCargando(false);
    }
  };

  // useEffect para que cargue una imagen apenas abre la página
  useEffect(() => {
    obtenerArchivo();
  }, []);

  return (
    <section className="seccion" id="api" style={{ textAlign: 'center' }}>
      <h2>Archivo Recuperado de la Deep Web</h2>
      <p style={{ color: '#888', marginBottom: '1rem' }}>
        Cada vez que actualices, el sistema buscará un archivo distinto al azar.
      </p>
      
      {cargando ? (
        <p style={{ color: '#ff1a1a' }}>Buscando en los servidores...</p>
      ) : (
        <div className="caso-card" style={{ display: 'inline-block', padding: '1rem' }}>
          <img 
            src={imagen} 
            alt="Archivo recuperado" 
            style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', border: '2px solid #8b0000' }} 
          />
          <br/>
          <button 
            onClick={obtenerArchivo} 
            className="btn-video" 
            style={{ marginTop: '1rem', width: '100%' }}
          >
            Buscar otro archivo
          </button>
        </div>
      )}
    </section>
  );
}

export default ApiGenerador;