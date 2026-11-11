function CasoCard({ titulo, descripcion, año, link }) {
  return (
    <div className="caso-card">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <p style={{ color: '#8b0000', marginTop: '0.8rem', fontSize: '0.8rem' }}>
        Registro: {año}
      </p>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-video"
      >
        ▶ Ver video
      </a>
    </div>
  );
}

export default CasoCard;