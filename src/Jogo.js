import react from "react";

function Jogo(props) {

    const [palavra,setpalavra] = react.useState("");
    function comecar(){
        setpalavra(props.palavras[Math.floor(Math.random()*props.palavras.length)]);
        props.setdesativar(false)
    }

  return (
    <div className="jogo">
      <img src={props.forcas[props.erros]} alt="forca" />
      <div>
        <button onClick={comecar}>
          Escolher Palavra
        </button>
        <p>{palavra}</p>
      </div>
    </div>
  );
}

export default Jogo;
