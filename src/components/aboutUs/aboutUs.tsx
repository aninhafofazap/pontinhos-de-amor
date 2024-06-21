import Link from "next/link";
import "./aboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="about-container">
        <h1 className="about-title">
          Envolva-se com Elegância: Bolsas Artesanais da Pontynhos de Amor
        </h1>
        <img
          className="about-img"
          src="/images/bolsas.png"
          alt="Mulher loira segurando uma bolsa"
        />
      </div>
      <section className="section-container">
        <div className="section-div">
          <h2 className="section-title">
            A Magia por Trás dos Pontynhos de Amor:O Processo de Criação
          </h2>
          <p className="section-description">
            Uma viagem Artesanal: Da Seleção do Fio ao Toque Final
          </p>
        </div>
        <div className="div-about">
          <h3 className="div-title">01</h3>
          <h2 className="div-sub">Seleção dos Materiais</h2>
          <p className="div-description">
            Tudo começa com a escolha dos melhores materiais. Selecionamos fios
            de alta qualidade, garantindo durabilidade e beleza para cada bolsa.
            Nossa paleta de cores é cuidadosamente escolhida para oferecer
            opções que vão do clássico ao moderno.
          </p>
        </div>
        <div className="div-about">
          <h3 className="div-title">02</h3>
          <h2 className="div-sub">O Toque Artesanal</h2>
          <p className="div-description">
            Com os materiais em mãos, nossos artesãos começam a trabalhar, ponto
            por ponto. Cada bolsa é tecida com precisão e amor, utilizando
            técnicas tradicionais de crochê que foram aperfeiçoadas ao longo dos
            anos. É aqui que a mágica realmente acontece, transformando fios
            simples em peças únicas e elegantes.
          </p>
        </div>
        <div className="div-about">
          <h3 className="div-title">03</h3>
          <h2 className="div-sub">Acabamentos e Detalhes</h2>
          <p className="div-description">
            O toque final envolve a adição de acabamentos e detalhes que tornam
            cada bolsa especial. Desde forros internos até acessórios
            personalizados, cada elemento é cuidadosamente selecionado e
            aplicado para garantir que sua bolsa seja tão prática quanto bonita.
          </p>
        </div>
        <div className="div-products">
          <img
            className="div-img"
            src="/images/bolsa-azul.png"
            alt="Bolsa azul"
          />
        </div>
        <div>
          <h2 className="products-title">Bolsas para o Dia a Dia</h2>
          <p className="products-description">
            Na Pontynhos de Amor, nossas bolsas de ombro são elegantes e
            práticas, ideais para o dia a dia. As bolsas transversais oferecem
            conforto e versatilidade, perfeitas para quem está sempre em
            movimento. Já as mochilas proporcionam praticidade com estilo,
            feitas com atenção aos detalhes para atender suas necessidades
            diárias.
          </p>
          <div className="div-products">
            <img
              className="div-img"
              src="/images/bolsa-marinho.png"
              alt="Bolsa marinho"
            />
          </div>
          <div>
            <h2 className="products-title">Bolsas para Ocasiôes Especiais</h2>
            <p className="products-description">
              Para eventos especiais, nossas clutches sofisticadas adicionam um
              toque de glamour ao seu look. Pequenas e elegantes, são perfeitas
              para carregar o essencial com muito estilo.
            </p>
          </div>
          <div className="div-products">
            <img
              className="div-img"
              src="/images/bolsa-rosa.png"
              alt="Bolsa rosa"
            />
          </div>
          <div>
            <h2 className="products-title">Bolsas Versáteis e Espaçosas</h2>
            <p className="products-description">
              Quando você precisa de mais espaço, nossas bolsas tote são a
              escolha ideal. Espaçosas e duráveis, combinam elegância e
              funcionalidade, sendo ótimas para o trabalho ou passeios de fim de
              semana.
            </p>
          </div>
          <div>
            <h2 className="products-title">
              Explore uma Seleção Exclusiva de Nossos Melhores Produtos
              Disponíveis Agora
            </h2>
          </div>
          <div className="div-button">
            <button>
              <Link href="/products">Ver produtos</Link>
            </button>
            <img src="/images/bolsa-branca.png" />
          </div>
          <div className="setas">
            <img src="/images/seta.png" alt="Seta para a esquerda" />
            <img src="/images/seta2.png" alt="Seta para a direita" />
          </div>
          <div className="div-depoiments">
            <img src="/images/aspas.png" alt="Uma aspas" />
            <h2 className="depoiments-title">
              Depoimentos de Clientes Safisfeitos: O Que Dizem Sobre Nossa
              Experiência
            </h2>
            <h3 className="depoiments-subtitle">
              A qualidade do produto é muito boa e o preço é muito acessível
            </h3>
            <p className="depoiments">
              Estou encantada com a Pontinhos do Amor! A qualidade das bolsas é
              incrível e o preço é super acessível. Fiquei realmente surpreso
              com o cuidado e atenção aos detalhes em cada peça. Com certeza vou
              continuar comprando aqui e já estou...
            </p>
          </div>
          <div className="people">
            <img src="/images/pessoa.png" alt="Imagem de uma pessoa" />
            <div className="people-info">
              <p className="people-name">Suzan Alexandria</p>
              <p className="people-description">Superwife</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
