// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/navigation";
// import "swiper/css";
// import { Navigation } from "swiper/modules";
// import Image from "next/image";

// export const SwiperCarousel = () => {
//   return (
//     <Swiper
//       spaceBetween={45}
//       slidesPerView={1}
//       navigation={false}
//       modules={[Navigation]}
//     >
//       <SwiperSlide>
//         <Image
//           src="https://st.depositphotos.com/2170303/2736/i/450/depositphotos_27361601-stock-photo-very-old-woman-showing-her.jpg"
//           width={400}
//           height={120}
//           alt="aaaaa"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <Image
//           src="https://st.depositphotos.com/2170303/2736/i/450/depositphotos_27361601-stock-photo-very-old-woman-showing-her.jpg"
//           width={400}
//           height={120}
//           alt="aaaaa"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <Image
//           src="https://st.depositphotos.com/2170303/2736/i/450/depositphotos_27361601-stock-photo-very-old-woman-showing-her.jpg"
//           width={400}
//           height={120}
//           alt="aaaaa"
//         />
//       </SwiperSlide>
//     </Swiper>
//   );
// };

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "./carousel.css";

export const SwiperCarousel = () => {
  return (
    <Swiper
      spaceBetween={45}
      slidesPerView={1}
      navigation={false}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <Image
          src="https://st.depositphotos.com/2170303/2736/i/450/depositphotos_27361601-stock-photo-very-old-woman-showing-her.jpg"
          width={375}
          height={240}
          alt="aaaaa"
          className="image-size"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://st.depositphotos.com/2170303/2736/i/450/depositphotos_27361601-stock-photo-very-old-woman-showing-her.jpg"
          width={375}
          height={240}
          alt="aaaaa"
          className="image-size"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://st.depositphotos.com/2170303/2736/i/450/depositphotos_27361601-stock-photo-very-old-woman-showing-her.jpg"
          width={375}
          height={240}
          alt="aaaaa"
          className="image-size"
        />
      </SwiperSlide>
    </Swiper>
  );
};
