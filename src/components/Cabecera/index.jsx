import styles from "./Cabecera.module.css";
import logoAlura from "./LogoAluraFlix.svg";

function Cabecera() {
  return (
    <header className={styles.cabecera}>
      <section className={styles.logoContainer}>
        <img src={logoAlura} alt="Logo AluraFlix" />
      </section>
    </header>
  );
}

export default Cabecera;
