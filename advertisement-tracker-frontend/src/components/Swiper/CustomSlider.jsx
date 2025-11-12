import { Container } from "@mui/material";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { commanAnimate } from "../../animate/commanAnimate";
import { motion } from "framer-motion";
import { teamData } from "../../data/teamData";
import TeamCard from "../Cards/TeamCard";

const MotionContainer = motion(Container);

const CustomSlider = () => {
  const breakpoints = {
    320: { slidesPerView: 1 },
    600: { slidesPerView: 1 },
    960: { slidesPerView: 2 },
    1280: { slidesPerView: 4.3 },
  };
  return (
    <MotionContainer
      maxWidth="xl"
      {...commanAnimate.slider}
      sx={{ py: 5, display: "flex", flexWrap: "wrap" }}
    >
      <Swiper
        className="customSlider"
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={10}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => {
          const el = swiper.el;
          el.addEventListener("mouseenter", () => swiper.autoplay.stop());
          el.addEventListener("mouseleave", () => swiper.autoplay.start());
        }}
        style={{
          "--swiper-pagination-color": "#55552b",
          "--swiper-pagination-bullet-inactive-color": "#cce6ff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        breakpoints={breakpoints}
      >
        {teamData.map((item) => (
          <SwiperSlide key={item.id}>
            <TeamCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </MotionContainer>
  );
};

export default CustomSlider;
