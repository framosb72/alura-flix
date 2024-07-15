import Banner from "../../components/Banner";
import Seccion from "../../components/Seccion";
import styles from "./Inicio.module.css"

function Inicio() {
  return (
    <section className={styles.fondo}>
      <Banner />
      <Seccion nombre="Front end" color="#6BD1FF" />
      <Seccion nombre="Back end" color="#00C86F" />
      <Seccion nombre="Inovacion y Gestion" color="#FFBA05" />
    </section>
  );
}

export default Inicio;
