import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras";
import react from "react";

function App() {
  const imagens = [
    "./assets/forca0.png",
    "./assets/forca1.png",
    "./assets/forca2.png",
    "./assets/forca3.png",
    "./assets/forca4.png",
    "./assets/forca5.png",
    "./assets/forca6.png",
  ];
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [desativar, setdesativar] = react.useState(true);
  const [erros, seterros] = react.useState(0);
  const [acertos, setacertos] = react.useState([]);
  const [palavra, setpalavra] = react.useState("");
  
  return (
    <div className="App">
      <Jogo
        setdesativar={setdesativar}
        erros={erros}
        acertos={acertos}
        forcas={imagens}
        palavras={palavras}
        palavra={palavra}
        setpalavra={setpalavra}
      />
      <div className="letras">
        {alfabeto.map((letra) => (
          <Letras
            key={letra}
            letra={letra}
            desativar={desativar}
            erros={erros}
            seterros={seterros}
            palavra={palavra}
            acertos={acertos}
            setacertos={setacertos}
          />
        ))}
      </div>
      <Chute
        desativar={desativar}
        seterros={seterros}
        setacertos={setacertos}
      />
    </div>
  );
}

export default App;
