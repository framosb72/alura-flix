import { useState } from "react";
import "./App.css";
import Cabecera from "./components/Cabecera";
import Banner from "./components/Banner";
import Seccion from "./components/Seccion";
import Formulario from "./components/Formulario";
import Pie from "./components/Pie";

function App() {
  const [itemSeleccionado, setItemSeleccionado] = useState(null);
  const [videos, setVideos] = useState([
    {
      id: 1,
      titulo: "Video Front",
      categoria: "Front End",
      imagen: "https://img.youtube.com/vi/QjOWz9avkg8/0.jpg",
      video: "https://www.youtube.com/watch?v=QjOWz9avkg8",
      descripcion: "Debate para orientarte que puedes estudiar",
    },
    {
      id: 2,
      titulo: "Equipo Front End Alura",
      categoria: "Front End",
      imagen: "https://img.youtube.com/vi/rpvrLaBQwgg/0.jpg",
      video: "https://youtu.be/rpvrLaBQwgg?si=wv2OC3JoA1RpDxKj",
      descripcion: "Presentación equipo Alura",
    },
  ]);

  const [categorias, setCategorias] = useState([
    {
      id: 1,
      titulo: "Front End",
      colorPrimario: "#6BD1FF",
      colorSecundario: "#D9F7E9",
    },

    {
      id: 2,
      titulo: "Back End",
      colorPrimario: "#00C86F",
      colorSecundario: "#E8F8FF",
    },
    {
      id: 3,
      titulo: "Inovacion y Gestion",
      colorPrimario: "#FFBA05",
      colorSecundario: "#F0F8E2",
    },
  ]);
  const registraVideo = (addVideo) => {
    //SpreadOperator
    setVideos([...videos, addVideo]);
  };
  const eliminaVideo = (id) => {
    console.log("eliminar coolaborador", id);
    const nuevoVideo = videos.filter((video) => video.id !== id);
    setVideos(nuevoVideo);
  };

  return (
    <div className="App">
      <Cabecera />
      <Banner />
      {categorias.map((categoria) => (
        <Seccion
          nombre={categoria.titulo}
          color={categoria.colorPrimario}
          alSeleccionarItem={(item) => setItemSeleccionado(item)}
          key={categoria.id}
          data={videos.filter(
            (itemVideo) => itemVideo.categoria === categoria.titulo
          )}
          eliminaVideo={eliminaVideo}
        />
      ))}
      <Formulario item={itemSeleccionado} categorias={categorias} />
      <Pie />
    </div>
  );
}

export default App;
