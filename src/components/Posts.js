import React from "react";
import {useState} from "react";

function RenderPosts(props){
    const [save, setSave] = useState("bookmark-outline");
    const [nameButton, setButton] = useState("heart-outline");
    const [likes, setLike] = useState(Number(props.qtdLike));

  function like() {
    if (nameButton === "heart-outline") {
      setButton("heart");
      setLike(likes + 0.001);
      
    } else {
      setButton("heart-outline");
      setLike(likes - 0.001);
    }
}

  function salvo() {
    if (save === "bookmark-outline") {
        setSave("bookmark");
    } else {
        setSave("bookmark-outline");
    }
}
    return (
        <div className="post" data-test="post">
            <div className="topo">
              <div className="usuario">
                <img src={props.imgUser}/>
                {props.usuario}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img data-test="post-image" src={props.imagem}/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                <ion-icon data-test="like-post" onClick={like} name={nameButton} className={nameButton}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                <ion-icon data-test="save-post" onClick={salvo} name={save}></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={props.imgLike}/>
                <div className="texto" data-test="likes-number">
                  Curtido por <strong>{props.userLike}</strong> e <strong>outras {likes} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )

}

export default function Posts(){
     const posts = [
        {usuario: "barked", imgUser: "assets/img/barked.svg", imagem: "assets/img/dog.svg", imgLike: "assets/img/respondeai.svg", userLike: "respondeai", qtdLike: "101.523"},
        {usuario: "mewoed", imgUser: "assets/img/meowed.svg", imagem: "assets/img/gato-telefone.svg", imgLike: "assets/img/adorable_animals.svg", userLike: "adorable_animals", qtdLike: "99.158"}
    ];

    return (
        <div className="posts"> 
            {posts.map((p, i) => <RenderPosts key={i} usuario = {p.usuario} imgUser = {p.imgUser} imagem = {p.imagem} imgLike = {p.imgLike} userLike = {p.userLike} qtdLike = {p.qtdLike}/>)}
        </div>
    )
}
