import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "./carousel.css";

export const SwiperCarousel = () => {
  return (
    <Swiper
      spaceBetween={45}
      slidesPerView={1}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
        waitForTransition: true,
      }}
      loop={true}
      navigation={false}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <Image
          src="https://img.elo7.com.br/product/main/4651C19/bolsa-em-croche-croche.jpg"
          width={400}
          height={120}
          alt="aaaaa"
          className="image-size"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://dcdn.mitiendanube.com/stores/003/370/780/products/img_01411-e7aa9fa3c9bf564f9816855486143451-1024-1024.jpeg"
          width={400}
          height={120}
          alt="aaaaa"
          className="image-size"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://kleincode.blob.core.windows.net/cdn/k4sale/ateliecordegirassol/cfe63bff-4a2c-416a-a7cd-43451207bd03.jpeg"
          width={400}
          height={120}
          alt="aaaaa"
          className="image-size"
        />
      </SwiperSlide>
    </Swiper>
  );
};
