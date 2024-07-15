import { useState } from "react";
import styled from "styled-components";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";

const Formulario = ({ item, categorias }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `;
  const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background-color: #041a69;
    color: #2271D1;
    border-color: #2271D1;
    border-style: solid;
    border-radius: 10px;
    padding: 0;
    border: 1;
    width: 974px;
    height: 1140px;
    display: flex;
    justify-content: center;
    form {
      width: 90%;
      button {
        position: relative;
        top: 20px;
        right: 60px;
      }
    }
  `;

  return (
    <>
      {item && (
        <>
          <Overlay />
          <DialogEstilizado open={!!item}>
            <form method="dialog">
              <h2>EDITAR CARD</h2>
              <CampoTexto
                titulo="Titulo"
                campo="Ingrese Titulo"
                required
                valor={item.titulo}
                actualizaCampo={setTitulo}
              />
              {console.log(item.categoria)}
              <ListaOpciones valor={item.categoria} actualizaCampo={setCategoria} categorias={categorias} />
              <CampoTexto
                titulo="Imagen"
                campo="Ingrese Url de la imágen"
                required
                valor={item.imagen}
                actualizaCampo={setImagen}
              />
              <CampoTexto
                titulo="Video"
                campo="Ingrese Video"
                required
                valor={item.video}
                actualizaCampo={setVideo}
              />
              <CampoTexto
                titulo="Descripcion"
                campo="Ingrese descripcion"
                required
                valor={item.descripcion}
                actualizaCampo={setDescripcion}
              />
              <button>OK</button>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default Formulario;
