"use client";

import "./page.css";

import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";
import { SwiperCarousel } from "../components/carousel";
import { Categories } from "../components/categories";
import { Sellers } from "../components/sellers";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="products">
        <section className="carousel">
          <div className="carousel-content">
            <SwiperCarousel />
          </div>
        </section>
        <Categories />
        <Sellers />
      </main>
      <Footer />
    </>
  );
}
