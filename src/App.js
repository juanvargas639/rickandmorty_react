import imageRickMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";
/* USO DE API REST */
function App() {
  /*LA APLICACION INICIAL CON EL ARREGLO NULO, LUEGO SE EJECUTA EL ONCLICK, ES DECIR EL REQAPI Y LLENA EL ARREGLO DE PERSONAJES*/
  /* DESPUES DEL H1 SE REVISA SI EL ARREGLO DE CARACTERES TIENE INFORMACIÓN PARA DECIDIR QUÉ ESCONDER */
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    /*HACER PETICION A LA API */
    const api = await fetch("https://rickandmortyapi.com/api/character");
    /* ACCEDIENDO A LA INFORMACIÓN DE LA API */
    const characterApi = await api.json();
    /*ENVIAR RESULTADOS AL STATE */
    setCharacters(characterApi.results);
  };
  console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personaje
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
