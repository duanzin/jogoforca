import react from "react";

function Letras(props) {

    const [ativo, setativo] = react.useState(props.desativar);
    function clique() {
        setativo(true);
      }
    return (
      <>
          <button key={props.letra} onClick={clique} disabled={props.desativar}>
            {props.letra.toUpperCase()}
          </button>
      </>
    );
}

export default Letras;
