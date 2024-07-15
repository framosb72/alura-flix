import Card from "../Card";
import styles from "./Seccion.module.css";

function Seccion({ nombre, color, data, eliminaVideo,  alSeleccionarItem }) {
  return (
    <>
      {data.length > 0 && (
        <section className={styles.seccion}>
          <div
            className={styles.tituloSeccion}
            style={{ background: `${color}` }}
          >
            <h2>{nombre}</h2>
          </div>
          <div className={styles.cardConteiner}>
            {
              data.map((itemCard, index)=>(
                <Card 
                key={index}
                item={itemCard}
                color={color}
                alSolicitarEdit={alSeleccionarItem}
                eliminaVideo={eliminaVideo}
                />
              ))
            }
          </div>
        </section>
      )}
    </>
  );
}

export default Seccion;
