import "./ListaOpciones.css";

const ListaOpciones = ({props}) => {
  //Metodo Map -> equipos.map ( ()=>{ })
  /*
  const equipos = [
    "Programacion",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvi",
    "Innovación y Gestión",
  ];
  */
  const manejarCambio = (e) => {
    //setValor(e.target.value)
    props.actualizaCampo(e.target.value);
  };
  return (
    <div className="lista-opciones">
      <label>Categoría</label>
      {console.log(props.valor)}
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar categoría
        </option>
        {props.categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
