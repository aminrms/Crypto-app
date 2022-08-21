import React, { useContext, useEffect, useState } from "react";
// Material-UI
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Container,
  Box,
  Button,
  Toolbar,
  Typography,
  Skeleton,
} from "@mui/material";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Components
import NewsCard from "./NewsCard";
// Css
import axios from "axios";
const NewsCrypto = () => {
  const breakpointsData = {
    320: {
      slidesPerView: 1.2,
    },
    375: {
      // spaceBetween: 20,
      slidesPerView: 1.2,
    },
    410: {
      // spaceBetween: 20,
      slidesPerView: 1.5,
    },
    450: {
      slidesPerView: 2.1,
      // spaceBetween: 20,
    },
    640: {
      slidesPerView: 2.9,
      // spaceBetween: 20,
    },
    800: {
      // spaceBetween: 20,
      slidesPerView: 3,
    },
    900: {
      spaceBetween: 20,
      slidesPerView: 3.15,
    },
    1000: {
      spaceBetween: 20,
      slidesPerView: 3.5,
    },
    1200: {
      spaceBetween: 20,
      slidesPerView: 4.15,
    },
    1800: {
      spaceBetween: 20,
      slidesPerView: 6,
    },
  };
  const [News, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("https://free-news.p.rapidapi.com/v1/search", {
        params: {
          q: "Crypto , BNB , Bitcoin , Ethereum , cryptocurrency",
          lang: "en",
          page_size: "5",
        },
        headers: {
          "X-RapidAPI-Key":
            "7a0b99756bmshe83324ffd2f070dp160b7ejsn2f759834c6b3",
          "X-RapidAPI-Host": "free-news.p.rapidapi.com",
        },
      })
      .then((response) => setNews(response?.data?.articles));
  }, []);
  return (
    <Container maxWidth="xl">
      <Toolbar className="news-toolbar" sx={{ mt: 2 }}>
        <Typography
          flexGrow={1}
          variant="h5"
          component="h5"
          fontWeight={"bold"}
        >
          Cryptos News
        </Typography>
      </Toolbar>
      <Container className="slider-container" maxWidth="xl">
        <Swiper
          breakpoints={breakpointsData}
          slidesPerView={4}
          spaceBetween={10}
          navigation={{
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 7000,
            disableOnInteraction: true,
          }}
          className="mySwiper mySwiperSlider"
        >
          {News.length
            ? News.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <NewsCard
                      imageCard={item?.media || ""}
                      CardAlt={item?.title}
                      category={item?.topic}
                      content={item?.summary}
                      datePublished={item?.published_date}
                      title={item?.title}
                      url={item?.link}
                    />
                  </SwiperSlide>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                return (
                  <SwiperSlide key={item}>
                    <Skeleton
                      variant="rounded"
                      sx={{ height: "300px", borderRadius: "15px" }}
                    />
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </Container>
    </Container>
  );
};

export default NewsCrypto;
