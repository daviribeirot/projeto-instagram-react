export default function Sugestao(props) {
    return (
      <div className="sugestao">
        <div className="usuario">
          <img src={props.perfilSugestao} />
          <div className="texto">
            <div className="nome">{props.nomeSugestao}</div>
            <div className="razao">{props.razaoSugestao}</div>
          </div>
        </div>
  
        <div className="seguir">Seguir</div>
      </div>
    );
  }