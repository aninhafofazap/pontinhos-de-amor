import { IoArrowBack } from "react-icons/io5";
import "./catalog.css";

export const Catalog = () => {
  return (
    <section className="catalogs">
      <div className="catalogs-wrapper">
        {/* List */}
        <div className="col-catalogs">
          <div className="bags-catalogs">
            <img
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
            />
            <p className="description-catalogs">Outros </p>
          </div>

          <div className="bags-catalogs">
            <img
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
            />
            <p className="description-catalogs">Outros</p>
          </div>
          <div className="bags-catalogs">
            <img
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
            />
            <p className="description-catalogs">Outros</p>
          </div>
          <div className="bags-catalogs">
            <img
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
            />
            <p className="description-catalogs">Outros</p>
          </div>
          <div className="bags-catalogs">
            <img
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
            />
            <p className="description-catalogs">Outros</p>
          </div>
          <div className="bags-catalogs">
            <img
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
            />
            <p className="description-catalogs">Outros</p>
          </div>
          <div className="bags-catalogs">
            <img
              className="bags-img"
              src="https://http2.mlstatic.com/D_NQ_NP_999572-MLB48633503036_122021-O.webp"
            />
            <p className="description-catalogs">Outros</p>
          </div>

          {/* End List */}
        </div>

        <div className="back-catalogs">
          <div>
            <IoArrowBack />
          </div>
          <a href="/">Voltar</a>
        </div>
      </div>
    </section>
  );
};
