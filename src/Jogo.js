import react from "react";


function Jogo(props) {
  const [esconde,setesconde] = react.useState("");
  let randomizar = "";

  function comecar() {
    props.seterros(0);
    props.setfim("#000000");
    randomizar = props.palavras[Math.floor(Math.random() * props.palavras.length)];
    props.setpalavra(randomizar);
    setesconde(randomizar
      .split("")
      .map((letra) => (props.acertos.includes(letra) ? letra : "_"))
      .join(" "));
    props.setdesativar(false);
    console.log(randomizar);
  }

  react.useEffect(() => {
    setesconde(props.palavra
      .split("")
      .map((letra) => (props.acertos.includes(letra) ? letra : "_"))
      .join(" "));
  }, [props.acertos]);


  return (
    <div className="jogo">
      <img src={props.forcas[props.erros]} alt="forca" />
      <div>
        <button onClick={comecar}>Escolher Palavra</button>
        <p style={{color:props.fim}}>{esconde}</p>
      </div>
    </div>
  );
}

export default Jogo;
