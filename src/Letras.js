import react from "react";

function Letras(props) {
  const [ativo, setativo] = react.useState(props.desativar);

  react.useEffect(() => {
    setativo(props.desativar);
  }, [props.desativar]);

  function clique() {
    setativo(true);
    if (props.palavra.includes(props.letra)) {
      props.setacertos([...props.acertos, props.letra]);
    }
    else{
      props.seterros(props.erros + 1);
    }
    console.log(props.palavra);
  }
  if (props.erros === 6) {
    props.setfim("#FF0000");
    props.setdesativar(true);
    props.setesconde(props.palavra
      .split("")
      .join(" "))
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
