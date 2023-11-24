import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import catData from "../assets/DB/catData";
import { useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";

const ExSwiper = () => {
  const path = process.env.PUBLIC_URL;
  const [data, setData] = useState(catData);
  return (
    <div className="swiperBox">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper">
        {data.map((img) => (
          <SwiperSlide key={img.id} className="swiperimg">
            <img src={path + img.image} alt={img.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <h4>Types of clients we want to work</h4>
      <p>
        &#169;MadeByProxymaDesign 2023. Web Design Italy Company. P.lva
        02130380385. All Rights Reserved. Privacy Policy
      </p>
    </div>
  );
};

export default ExSwiper;
