import React from "react";
import { useState } from "react";

export default function Usuario() {

  const fotoInicial = "https://thumbs.dreamstime.com/z/imagen-masculina-an%C3%B3nima-del-perfil-32796656.jpg"

  const [name, setUsername] = useState("Usuario") 
  const [foto, setFoto] = useState(fotoInicial)

  function trocarUser(){
      const user = prompt("Digite o seu nome!")
      setUsername(user) 
  }

  function trocarFoto(){
      const foto = prompt("Coloque o url de sua foto!")
      setFoto(foto)
  }

  return (
          <div className="usuario" data-test="user">
              <img src={foto} onClick={trocarFoto} data-test="profile-image"/>
              <div className="texto">
                  <strong>{name}</strong>
                  <span data-test="name">
                      {name}
                      <ion-icon data-test="edit-name" name="pencil" onClick={trocarUser}></ion-icon>
                  </span>
              </div>
          </div>

  )
}