import react from "react";

function Letras(props) {
  const [ativo, setativo] = react.useState(props.desativar);

  react.useEffect(() => {
    setativo(props.desativar);
  }, [props.desativar]);
  
 
  function clique() {
    setativo(true);
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
