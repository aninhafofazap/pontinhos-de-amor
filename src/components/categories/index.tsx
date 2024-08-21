import { IoArrowForward } from "react-icons/io5";
import "./categorie.css";
import Image from "next/image";

export const Categories = () => {
  return (
    <section className="categories">
      <div className="categories-wrapper">
        <h2 className="categories-subtitle">Catálago de cores</h2>

        {/* List */}
        <div className="categories-col">
          <div className="categories-col-bags">
            <img
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
            />
            <p className="description-category">Marfim </p>
          </div>
          <div className="categories-col-bags">
            <img
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
            />
            <p className="description-category">Caqui</p>
          </div>
          <div className="categories-col-bags">
            <img
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
            />
            <p className="description-category">Mostarda</p>
          </div>
          <div className="categories-col-bags">
            <img
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
            />
            <p className="description-category">Vinho</p>
          </div>
        </div>
        <div className="categories-link">
          <div className="link-container">
            <IoArrowForward />
            <a href="/catalog">Ver todo o catálogo</a>
          </div>
        </div>
      </div>

      {/* End List */}
    </section>
  );
};
