import react from "react";

function Chute(props) {

  const [inteira,setinteira] = react.useState("");

  const mudavalor = event => {
    setinteira(event.target.value);
    console.log(event.target.value);
  }

  function palavrainteira() {
    if (inteira === props.palavra) {
      props.setfim("#27AE60");
    }
    else{
      props.seterros(6);
    }
    props.setdesativar(true);
  }

  return (
    <div className="chute">
      <p>Já sei a palavra!</p>
      <input
        type="text"
        onChange={mudavalor}
        value={inteira}
        disabled={props.desativar}
        data-test="guess-input"
      ></input>
      <button onClick={palavrainteira} data-test="guess-button">Chutar</button>
    </div>
  );
}

export default Chute;
