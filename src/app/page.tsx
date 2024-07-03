import "./page.css";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="products">
        <section className="carousel">
          <div className="carousel-content">
            <h1>Aqui ficara o carrossel</h1>
          </div>
        </section>
        <section className="categorys">
          <h2 className="subtitle-category">Categorias</h2>
          <div className="col-category">
            <div className="bags-category">
              <p className="description-category">categoria 1</p>
            </div>
            <div className="bags-category">
              <p className="description-category">categoria 2</p>
            </div>
            <div className="bags-category">
              <p className="description-category">categoria 3</p>
            </div>
            <div className="bags-category">
              <p className="description-category">categoria 4</p>
            </div>
          </div>
        </section>
        <section className="best-sellers">
          <h2 className="subtitle-sellers">Mais vendidos</h2>
          <div className="col-sellers">
            <div className="best-sellers-bags">
              <div className="best-sellers-image">
                <button className="cart">
                  <FaWhatsapp size={25} />
                </button>
              </div>
              <p className="best-selles-description">Casual</p>
              <p className="best-selles-value">R$129,99</p>
              <p className="best-selles-amount">Qtde: 10</p>
            </div>
            <div className="best-sellers-bags">
              <div className="best-sellers-image">
                <button className="cart">
                  <FaWhatsapp size={25} />
                </button>
              </div>
              <p className="best-selles-description">Casual</p>
              <p className="best-selles-value">R$129,99</p>
              <p className="best-selles-amount">Qtde: 10</p>
            </div>
            <div className="best-sellers-bags">
              <div className="best-sellers-image">
                <button className="cart">
                  <FaWhatsapp size={25} />
                </button>
              </div>
              <p className="best-selles-description">Casual</p>
              <p className="best-selles-value">R$129,99</p>
              <p className="best-selles-amount">Qtde: 10</p>
            </div>
            <div className="best-sellers-bags">
              <div className="best-sellers-image">
                <button className="cart">
                  <FaWhatsapp size={25} />
                </button>
              </div>
              <p className="best-selles-description">Casual</p>
              <p className="best-selles-value">R$129,99</p>
              <p className="best-selles-amount">Qtde: 10</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
