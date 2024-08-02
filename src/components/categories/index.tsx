import "./styles.css";

export const Categories = () => {
  return (
    <section className="categories">
      <div className="categories-wrapper">
        <h2 className="subtitle-category">Catálago</h2>

        {/* List */}
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
        {/* End List */}
      </div>
    </section>
  );
};
