//import logo from './logo.svg';
import './App.css';
import HeaderPeliculas from './componentes/HeaderPeliculas';
import Pelicula from './componentes/Pelicula';
import Footer from './componentes/Footer';
import datos from './json/datos.json';

function App() {
  return (
    <>
      <HeaderPeliculas/>
      {datos.map(peli => 
        <Pelicula
          numPelicula={peli.numPelicula}
          titulo={peli.titulo}
          descripcion={peli.descripcion}
          link={peli.link}
        ></Pelicula>)}
      <Footer/>
    </>
    
  );
}

export default App;
