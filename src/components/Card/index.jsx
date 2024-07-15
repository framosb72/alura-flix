import style from "./Card.module.css";
import iconoBorrar from "./Borrar.png";
import iconoEditar from "./Editar.png";

function Card({ item, color, eliminaVideo, alSolicitarEdit }) {
  return (
    <section className={style.card} style={{ borderColor: `${color}` }}>
      <div>
        <img
          className={style.secVideo}
          src={item.imagen}
          alt="Miniatura Video"
        />
      </div>
      <div className={style.secControles}>
        <div className={style.iconos}>
          <img
            src={iconoBorrar}
            alt="Borrar"
            onClick={() => eliminaVideo(item.id)}
          />
          Borrar
        </div>
        <div className={style.iconos}>
          <img
            src={iconoEditar}
            alt="Editar"
            onClick={() => {
              alSolicitarEdit(item);
            }}
          />
          Editar
        </div>
      </div>
    </section>
  );
}

export default Card;
