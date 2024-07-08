"use client";

import "./page.css";

import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";
import { SwiperCarousel } from "../components/carousel";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="products">
        {/* AQUI CONTEM AS INFORMAÇOES ONDE SERA O CARROSSEL DE IMAGEM DAS BOLSAS*/}
        <section className="carousel">
          <div className="carousel-content">
            <SwiperCarousel />
          </div>
        </section>
        {/* AQUI CONTEM AS INFORMAÇOES DA PARTE DAS CATEGORIAS DAS BOLSAS */}
        <section className="categorys">
          <h2 className="subtitle-category">Categorias</h2>
          <div className="col-category">
            <div className="bags-category">
              <img
                className="bags-img"
                src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
              />
              <p className="description-category">Dia a dia </p>
            </div>
            <div className="bags-category">
              <img
                className="bags-img"
                src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
              />
              <p className="description-category">Festas</p>
            </div>
            <div className="bags-category">
              <img
                className="bags-img"
                src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
              />
              <p className="description-category">Praia</p>
            </div>
            <div className="bags-category">
              <img
                className="bags-img"
                src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
              />
              <p className="description-category">Sustentaveis</p>
            </div>
          </div>
        </section>
        {/* AQUI CONTEM AS INFORMAÇOES DA PARTE DE PRODUTOS E DE MAIS VENDIDOS */}
        <section className="best-sellers">
          <h2 className="subtitle-sellers">Mais vendidos</h2>
          <div className="col-sellers">
            <div className="best-sellers-bags">
              <div className="best-sellers-image">
                <img src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp" />
                <button className="cart">
                  <FaWhatsapp size={25} />
                </button>
              </div>
              <div className="best-selles-container">
                <p className="best-selles-description">Casual</p>
                <div className="best-selles-bottom">
                  <p className="best-selles-value">R$129,99</p>
                  <p className="best-selles-amount">Qtde: 10</p>
                </div>
              </div>
            </div>
            <div className="best-sellers-bags">
              <div className="best-sellers-image">
                <img src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp" />
                <button className="cart">
                  <FaWhatsapp size={25} />
                </button>
              </div>
              <div className="best-selles-container">
                <p className="best-selles-description">Casual</p>
                <div className="best-selles-bottom">
                  <p className="best-selles-value">R$129,99</p>
                  <p className="best-selles-amount">Qtde: 10</p>
                </div>
              </div>
            </div>
            <div className="best-sellers-bags">
              <div className="best-sellers-image">
                <img src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp" />
                <button className="cart">
                  <FaWhatsapp size={25} />
                </button>
              </div>
              <div className="best-selles-container">
                <p className="best-selles-description">Casual</p>
                <div className="best-selles-bottom">
                  <p className="best-selles-value">R$129,99</p>
                  <p className="best-selles-amount">Qtde: 10</p>
                </div>
              </div>
            </div>
            <div className="best-sellers-bags">
              <div className="best-sellers-image">
                <img src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp" />
                <button className="cart">
                  <FaWhatsapp size={25} />
                </button>
              </div>
              <div className="best-selles-container">
                <p className="best-selles-description">Casual</p>
                <div className="best-selles-bottom">
                  <p className="best-selles-value">R$129,99</p>
                  <p className="best-selles-amount">Qtde: 10</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
