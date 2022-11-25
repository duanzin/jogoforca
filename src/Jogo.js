import react from "react";


function Jogo(props) {
  let randomizar = "";

  function comecar() {
    props.seterros(0);
    props.setacertos([]);
    props.setfim("#000000");
    randomizar = props.palavras[Math.floor(Math.random() * props.palavras.length)];
    props.setpalavra(randomizar);
    props.setesconde(randomizar
      .split("")
      .map((letra) => (props.acertos.includes(letra) ? letra : "_"))
      .join(" "));
    props.setdesativar(false);
    console.log(randomizar);
  }

  react.useEffect(() => {
    props.setesconde(props.palavra
      .split("")
      .map((letra) => (props.acertos.includes(letra) ? letra : "_"))
      .join(" "));
  }, [props.acertos]);

  if (!props.esconde.includes("_")) {
    props.setfim("#27AE60");
    props.setdesativar(true);
  }

  return (
    <div className="jogo">
      <img src={props.forcas[props.erros]} alt="forca" />
      <div>
        <button onClick={comecar}>Escolher Palavra</button>
        <p style={{color:props.fim}}>{props.esconde}</p>
      </div>
    </div>
  );
}

export default Jogo;
