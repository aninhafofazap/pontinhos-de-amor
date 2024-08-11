import { IoArrowForward } from "react-icons/io5";
import "./categorie.css";
import Image from "next/image";

export const Categories = () => {
  return (
    <section className="categories">
      <div className="categories-wrapper">
        <h2 className="subtitle-category">Catálago de produtos</h2>

        {/* List */}
        <div className="col-category">
          <div className="bags-category">
            <Image
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
              width={100}
              height={100}
              alt=""
            />
            <p className="description-category">Dia a dia </p>
          </div>
          <div className="bags-category">
            <Image
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
              width={100}
              height={100}
              alt=""
            />
            <p className="description-category">Festas</p>
          </div>
          <div className="bags-category">
            <Image
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
              width={100}
              height={100}
              alt=""
            />
            <p className="description-category">Praia</p>
          </div>
          <div className="bags-category">
            <Image
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
              width={100}
              height={100}
              alt=""
            />
            <p className="description-category">Sustentaveis</p>
          </div>
        </div>
        {/* End List */}
        <div className="link-category">
          <div className="link-container">
            <IoArrowForward />
            <a href="/catalog">Ver todo o catálogo</a>
          </div>
        </div>
      </div>
    </section>
  );
};
