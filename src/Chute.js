function Chute(props) {
  return (
    <div className="chute">
      <p>Já sei a palavra!</p>
      <input disabled={props.desativar}></input>
      <button>Chutar</button>
    </div>
  );
}

export default Chute;
