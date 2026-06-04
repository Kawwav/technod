import './sobre.css'

function Sobre() {
  return (
    <section id="sobre">
      <nav className="sobre-nav">
        <a href="#comeco" className="sobre-nav-logo" aria-label="TechnoD">
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">

          </svg>

        </a>

      </nav>

      <div className="sobre-main">
        <div className="sobre-top">
          <div className="sobre-titulo">
            <h2>
              ENTENDENDO O
              <span className="destaque">PROGRESSO INDUSTRIAL</span>
            </h2>
          </div>

          <div className="sobre-texto">
            <p>
              Com décadas de experiência no setor industrial, a TechnoD entrega
              soluções de engenharia que unem inovação tecnológica e excelência
              operacional. Nosso compromisso é transformar processos e impulsionar
              resultados com precisão e confiabilidade em cada etapa.
            </p>
          </div>
        </div>

        <div className="sobre-imagem-wrap">
          <img src="/industria.png" alt="Linha de produção industrial TechnoD" />
        </div>
      </div>
    </section>
  )
}

export default Sobre