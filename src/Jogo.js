import react from "react";

function Jogo(props) {
  const [linha, setlinha] = react.useState([]);
  const [palavra, setpalavra] = react.useState("");
  function comecar() {
    setlinha([]);
    setpalavra(
      Array.from(
        props.palavras[Math.floor(Math.random() * props.palavras.length)]
      )
    );
    palavra.map(() => setlinha((current) => [...current, "_ "]));
    props.setdesativar(false);
  }

  return (
    <div className="jogo">
      <img src={props.forcas[props.erros]} alt="forca" />
      <div>
        <button onClick={comecar}>Escolher Palavra</button>
        <p>{linha}</p>
      </div>
    </div>
  );
}

export default Jogo;
