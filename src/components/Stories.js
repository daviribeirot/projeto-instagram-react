function Story(props){
    return (
      <div className="story">
            <div className="imagem">
                <img src={props.url} />
            </div>
            <div className="usuario">
                {props.nome}
            </div>
      </div>
    )
  }


export default function Stories(){

    const storyobj = [
        {nome: "9gag", url: "assets/img/9gag.svg"},
        {nome: "meowed", url: "assets/img/meowed.svg"},
        {nome: "barked", url: "assets/img/barked.svg"},
        {nome: "nathanwpylestrangeplanet", url: "assets/img/nathanwpylestrangeplanet.svg"},
        {nome: "wawawicomics", url: "assets/img/wawawicomics.svg"},
        {nome: "respondeai", url: "assets/img/respondeai.svg"},
        {nome: "filomoderna", url: "assets/img/filomoderna.svg"},
        {nome: "memeriagourmet", url: "assets/img/memeriagourmet.svg"}
    ];

    return (
        <div className="stories">
            {storyobj.map((s, i) => <Story key={i} nome = {s.nome} url = {s.url}/>)}
            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}