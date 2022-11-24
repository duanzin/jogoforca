import react from "react";

function Letras(props) {
  const [ativo, setativo] = react.useState(props.desativar);

  react.useEffect(() => {
    setativo(props.desativar);
  }, [props.desativar]);

  function clique() {
    setativo(true);
    if (props.palavra.includes(props.letra)) {
      console.log("ativou");
      props.setacertos([...props.acertos, props.letra]);
      console.log(props.acertos);
    }
    console.log(props.palavra);
  }
  return (
    <>
      <button onClick={clique} disabled={ativo}>
        {props.letra.toUpperCase()}
      </button>
    </>
  );
}

export default Letras;
