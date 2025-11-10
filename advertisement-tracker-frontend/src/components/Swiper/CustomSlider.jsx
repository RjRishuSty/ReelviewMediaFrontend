import { Box, Container, useMediaQuery } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ServiceCard from "../Cards/ServiceCard";
import { servicesCategories } from "../../data/servicesCategoriesData";
import ReviewCard from "../Cards/ReviewCard";
import { reviews } from "../../data/reviewsData";
import { commanAnimate } from "../../animate/commanAnimate";
import { motion } from "framer-motion";
import { teamMembers } from "../../data/teamData";

const MotionContainer = motion(Container);

const CustomSlider = ({ useIn }) => {
  const minLaptop = useMediaQuery("(max-width:1082px)");
  const isTablet = useMediaQuery("(max-width:700px)");
  const isMobile = useMediaQuery("(max-width:599px)");
  const otherPhone = useMediaQuery("(max-width:463px)");
  const service = useIn === "service";
  const aboutService = useIn === "aboutService";
  const review = useIn === "review";
  const teamSection = useIn === "teamSection";
  //BreakPoints..........
  const breakpoints =
    service || aboutService
      ? {
          320: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          960: { slidesPerView: aboutService ? 2 : 3 },
          1063: { slidesPerView: aboutService ? 2 : 3 },
          1280: { slidesPerView: 3 },
        }
      : {
          320: { slidesPerView: 1 },
          600: { slidesPerView: 1 },
          960: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        };
  return (
    <MotionContainer
      maxWidth="xl"
      {...commanAnimate.slider}
      sx={{ py: 5, display: "flex", flexWrap: "wrap" }}
    >
      <Swiper
        className="customSlider"
        modules={[Navigation, Autoplay]}
        spaceBetween={
          service || aboutService || review
            ? isMobile
              ? 10
              : 20
            : isTablet
            ? 10
            : 80
        }
        slidesPerView={service || aboutService ? 3.5 : 2}
        navigation
        autoplay={
          service
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        loop={true}
        onSwiper={(swiper) => {
          const el = swiper.el;
          el.addEventListener("mouseenter", () => swiper.autoplay.stop());
          el.addEventListener("mouseleave", () => swiper.autoplay.start());
        }}
        style={{
          padding:
            service || review || aboutService
              ? otherPhone
                ? "0px"
                : isMobile
                ? "0px 20px"
                : isTablet
                ? "0px 0px"
                : minLaptop
                ? "0px 20px"
                : "0px 50px "
              : "10px 70px",
          flex: "1 1 300px",
          display: "flex",
        }}
        breakpoints={breakpoints}
      >
        {(service || aboutService
          ? servicesCategories
          : teamSection
          ? teamMembers
          : reviews
        ).map((item) => (
          <SwiperSlide key={item.id}>
            {service || aboutService ? (
              <ServiceCard item={item} />
            ) : (
              <ReviewCard item={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </MotionContainer>
  );
};

export default CustomSlider;
