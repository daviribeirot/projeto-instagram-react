import Sugestao from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar() {
  const items = [
    {
      perfilSugestao: "assets/img/bad.vibes.memes.svg",
      nomeSugestao: "bad.vibes.memes",
      razaoSugestao: "Segue você"
    },
    {
      perfilSugestao: "assets/img/chibirdart.svg",
      nomeSugestao: "chibirdart",
      razaoSugestao: "Segue você"
    },
    {
      perfilSugestao: "assets/img/razoesparaacreditar.svg",
      nomeSugestao: "razoesparaacreditar",
      razaoSugestao: "Novo no Instagram"
    },
    {
      perfilSugestao: "assets/img/adorable_animals.svg",
      nomeSugestao: "adorable_animals",
      razaoSugestao: "Segue você"
    },
    {
      perfilSugestao: "assets/img/smallcutecats.svg",
      nomeSugestao: "smallcutecats",
      razaoSugestao: "Segue você"
    }
  ];
  return (
    <div className="sidebar">
      <Usuario
        perfilUsuario="assets/img/catanacomics.svg"
        nomeUsuario="catanacomics"
        apelidoUsuario="Catana"
      />

      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {items.map((item, i) => (
          <Sugestao
            key={i}
            perfilSugestao={item.perfilSugestao}
            nomeSugestao={item.nomeSugestao}
            razaoSugestao={item.razaoSugestao}
          />
        ))}
      </div>

      <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}