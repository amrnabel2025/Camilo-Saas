"use client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { QuetsSVG } from "../../../public/SVGs";
import { testimonials } from "../../utils/Constants";

interface TestimonialCardProps {
  item: (typeof testimonials)[0];
  quoteSize: number;
  t: (key: string) => string;
}

const TestimonialSection = () => {
  const isTablet = useMediaQuery("(min-width:1200px) and (max-width:1535px)");
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const locale = useLocale();
  const isArabic = locale === "ar";

  console.log(
    "🚀 ~ :35 ~ TestimonialSection ~ swiperInstance:",
    swiperInstance
  );

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const t = useTranslations("Home.Testimonials");
  const quoteSize = 60;

  return (
    <Box id="testimonials" sx={styles.container}>
      <Typography
        data-aos="zoom-out"
        data-aos-duration="1200"
        data-aos-delay="300"
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={styles.title}
      >
        {t("title")}
      </Typography>
      <Typography
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300"
        variant="subtitle1"
        sx={styles.subtitle}
      >
        <Box component="span" sx={{ display: { xs: "inline", md: "none" } }}>
          {t("subtitleMobile")}
        </Box>
        <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
          {t("subtitle")}
        </Box>
      </Typography>

      <Box sx={styles.swiperContainer()}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={false}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 20,
              allowTouchMove: true,
              touchRatio: 1,
              touchAngle: 45,
              resistance: true,
              resistanceRatio: 0.85,
              speed: 300,
              followFinger: true,
              threshold: 5,
              shortSwipes: true,
              longSwipes: true,
              longSwipesRatio: 0.5,
              longSwipesMs: 300,
              watchSlidesProgress: true,
            },
            400: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2,
              centeredSlides: false,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 3,
              centeredSlides: false,
              spaceBetween: 30,
            },
          }}
          direction="horizontal"
          style={{ width: "100%" }}
          touchStartPreventDefault={false}
          preventInteractionOnTransition={true}
          grabCursor={true}
          slideToClickedSlide={true}
          observer={true}
          observeParents={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.name + index}>
              <TestimonialCard item={item} quoteSize={quoteSize} t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          display={{ xs: "flex", md: isTablet ? "flex" : "none" }}
          justifyContent="center"
          mt={2}
          gap={2}
        >
          <IconButton
            className="custom-prev"
            sx={{
              backgroundColor: isBeginning ? "#ccc" : "#00796B",
              color: "#fff",
              "&:hover": {
                backgroundColor: isBeginning ? "#ccc" : "#00695C",
              },
            }}
          >
            {isArabic ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
          </IconButton>

          <IconButton
            className="custom-next"
            sx={{
              backgroundColor: isEnd ? "#ccc" : "#00796B",
              color: "#fff",
              "&:hover": {
                backgroundColor: isEnd ? "#ccc" : "#00695C",
              },
            }}
          >
            {isArabic ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

//______________________________________ C O M P O N E N T S ______________________________________//

const TestimonialCard = ({ item, quoteSize, t }: TestimonialCardProps) => (
  <Box sx={styles.slideContainer}>
    <Avatar alt={t(item.name)} src={item.avatar} sx={styles.avatar} />
    <Card sx={styles.card}>
      <CardContent>
        <Box sx={styles.cardContent}>
          <Box sx={styles.ratingContainer}>
            {QuetsSVG(quoteSize, quoteSize)}
          </Box>

          <Rating
            value={item.rating}
            readOnly
            sx={{ mb: 1, color: "#00796B", mt: 2 }}
          />
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            {t(item.name)}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={styles.message}
          >
            {t(item.message)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  </Box>
);

//______________________________________ S T Y L E S ______________________________________//
const styles = {
  container: {
    width: "100%",
    background: "linear-gradient(180deg, rgb(238 251 249), transparent)",
    pt: { xs: 10, md: 10 },
    textAlign: "center",
    overflow: "hidden",
  },
  title: {
    textTransform: "capitalize" as const,
  },
  subtitle: {
    mb: 6,
    textTransform: "capitalize" as const,
  },
  swiperContainer: () => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: { xs: "auto" },
    textAlign: "-webkit-center",
    "& .swiper-pagination-bullet-active": {
      backgroundColor: "#00796B",
    },
  }),
  swiperControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    mt: 2,
    "& .swiper-pagination-custom": {
      position: "relative",
      width: "auto!important",
      "& .swiper-pagination-bullet": {
        backgroundColor: "grey.400",
      },
      "& .swiper-pagination-bullet-active": {
        backgroundColor: "#00796B",
      },
    },
    "& .custom-prev": {
      backgroundColor: "#FFFFFF",
      color: "#00796B",
      width: 48,
      height: 48,
      "&:hover": {
        backgroundColor: "#00695C",
      },
      "&:active": {
        backgroundColor: "#00796B !important",
        color: "#FFFFFF !important",

        transition: "background-color 0.2s ease",
      },
    },
    "& .custom-next": {
      backgroundColor: "#FFFFFF",
      color: "#00796B",
      width: 48,
      height: 48,
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
      },
      "&:active": {
        backgroundColor: "rgba(0, 0, 0, 0.16)",
      },
    },
    "& .swiper-button-disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    "& .custom-prev.swiper-button-disabled:hover": {
      backgroundColor: "#00796B",
    },
    "& .custom-next.swiper-button-disabled:hover": {
      backgroundColor: "transparent",
    },
  },
  slideContainer: {
    position: "relative",
    width: { xs: "90%", sm: "90%", md: "90%" },
    flexShrink: 0,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    mt: { xs: 4, md: 8 },
    mb: { xs: 4, md: 8 },
  },
  avatar: {
    width: 70,
    height: 70,
    position: "absolute",
    top: -35,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    border: "3px solid #fff",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
  },
  card: {
    borderRadius: 3,
    px: 3,
    py: 2,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
    position: "relative",
    zIndex: 1,
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0px 8px 30px rgba(0, 121, 107, 0.15)",
    },
    minHeight: 260,
    maxHeight: 300,
    flexDirection: "column",
    alignContent: "center",
  },
  cardContent: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    gap: 1,
    zIndex: 1000000,
  },
  ratingContainer: {
    flex: 1,
    position: "absolute",
    left: "10%",
    transform: "translateX(-50%)",
  },
  message: {
    fontSize: { xs: "15px", md: "20px" },
  },
};

export default TestimonialSection;
