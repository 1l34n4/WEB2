import CasoCard from './CasoCard';
import { casos } from '../data/casos';

function ListaCasos() {
  return (
    <section className="seccion" id="casos">
      <h2>Casos Registrados</h2>
      <div className="grid-casos">
        {casos.map((caso) => (
          <CasoCard
            key={caso.id}
            titulo={caso.titulo}
            descripcion={caso.descripcion}
            año={caso.año}
            link={caso.link}
          />
        ))}
      </div>
    </section>
  );
}

export default ListaCasos;