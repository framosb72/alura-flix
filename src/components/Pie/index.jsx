import styles from "./Pie.module.css";
import logoAlura from "./LogoAluraFlix.svg";

function Pie() {
  return (
    <footer className={styles.piePagina}>
      <img className={styles.logoPie} src={logoAlura} alt="Logo AluraFlix" />
    </footer>
  );
}

export default Pie;
