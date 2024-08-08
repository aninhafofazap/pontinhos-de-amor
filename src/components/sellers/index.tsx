import { IoArrowForward } from "react-icons/io5";
import "./sellers.css";

import { FaWhatsapp } from "react-icons/fa";

export const Sellers = () => {
  return (
    <section className="best-sellers">
      <div className="best-sellers-wrapper">
        <h2 className="subtitle-sellers">Bolsas mais vendidas</h2>

        {/* Lista */}
        <div className="col-sellers">
          <div className="bags-sellers">
            <div className="bags-img">
              <img src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp" />
              <button className="cart">
                <FaWhatsapp size={25} />
              </button>
            </div>
            <div className="bags-sellers-container">
              <p className="bags-sellers-description">Bag Antônia</p>
              <div className="bags-sellers-button">
                <p className="bags-sellers-value">R$129,99</p>
              </div>
            </div>
          </div>
          <div className="bags-sellers">
            <div className="bags-img">
              <img src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp" />
              <button className="cart">
                <FaWhatsapp size={25} />
              </button>
            </div>
            <div className="bags-sellers-container">
              <p className="bags-sellers-description">Bag Suelimar</p>
              <div className="bags-sellers-button">
                <p className="bags-sellers-value">R$129,99</p>
              </div>
            </div>
          </div>
          <div className="bags-sellers">
            <div className="bags-img">
              <img src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp" />
              <button className="cart">
                <FaWhatsapp size={25} />
              </button>
            </div>
            <div className="bags-sellers-container">
              <p className="bags-sellers-description">Bag Thatiely</p>
              <div className="bags-sellers-button">
                <p className="bags-sellers-value">R$129,99</p>
              </div>
            </div>
          </div>
          <div className="bags-sellers">
            <div className="bags-img">
              <img src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp" />
              <button className="cart">
                <FaWhatsapp size={25} />
              </button>
            </div>
            <div className="bags-sellers-container">
              <p className="bags-sellers-description">Bag Ana</p>
              <div className="bags-sellers-button">
                <p className="bags-sellers-value">R$129,99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="link-sellers">
        <div className="sellers-container">
          <IoArrowForward />
          <a href="/sellers">Ver mais</a>
        </div>
      </div>
    </section>
  );
};
