"use client";

import { FaWhatsapp } from "react-icons/fa";
import productsJson from "./index.json";
import { useState } from "react";
import "./sellers.css";
import { IoArrowBack } from "react-icons/io5";

interface IProduct {
  bagsImg: {
    imgSrc: string;
    cartButton: {
      icon: string;
      size: number;
    };
  };
  bagsSellersContainer: {
    description: string;
    button: {
      value: string;
    };
  };
}

interface IMoreproducts {
  bagsSellers: IProduct[];
}

export const MoreProducts = () => {
  const [products, setProducts] = useState<IMoreproducts[]>(productsJson);

  return (
    <section className="best-sellers">
      <div className="best-sellers-wrapper">
        <h2 className="subtitle-sellers">Todas as bolsas</h2>

        <div className="col-sellers">
          {products.map((product, productIndex) =>
            product.bagsSellers.map((item, index) => (
              <div key={`${productIndex}-${index}`} className="bags-sellers">
                <div className="bags-img">
                  <img
                    src={item.bagsImg.imgSrc}
                    alt={item.bagsSellersContainer.description}
                  />
                  <button className="cart">
                    <FaWhatsapp size={item.bagsImg.cartButton.size} />
                  </button>
                </div>
                <div className="bags-sellers-container">
                  <p className="bags-sellers-description">
                    {item.bagsSellersContainer.description}
                  </p>
                  <div className="bags-sellers-button">
                    <p className="bags-sellers-value">
                      R${item.bagsSellersContainer.button.value}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="back-sellers">
          <div className="back-sellers-container">
            <IoArrowBack size={16} />
            <a href="/">Voltar</a>
          </div>
        </div>
      </div>
    </section>
  );
};
