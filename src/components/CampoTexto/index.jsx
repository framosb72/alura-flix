//import { useState } from 'react'
import "./CampoTexto.css";

const CampoTexto = (props) => {
  //const [valor, setValor ] = useState('')
  const manejarCambio = (e) => {
    //setValor(e.target.value)
    props.actualizaCampo(e.target.value);
  };
  return (
    <div className="campo">
      <label>{props.titulo}</label>
      <input
        type="text"
        placeholder={props.campo}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default CampoTexto;
