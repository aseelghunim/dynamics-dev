import { Box, Container, Stack } from "@mui/system";
import { useRef } from "react";
import { BRANDS } from "../contants";
import "./Carousel.css"; // Optional: for custom styling

import logo1 from "assets/home-brands-logos/logo1.png";
import logo2 from "assets/home-brands-logos/logo2.png";
import logo3 from "assets/home-brands-logos/logo3.png";
import logo4 from "assets/home-brands-logos/logo4.png";
import logo5 from "assets/home-brands-logos/logo5.svg";
import logo6 from "assets/home-brands-logos/logo6.svg";
import logo7 from "assets/home-brands-logos/logo7.svg";
import logo8 from "assets/home-brands-logos/logo8.svg";
import logo9 from "assets/home-brands-logos/logo9.svg";



const Carousel = ({ selectedBrand, active }) => {
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);

  // const scrollLeft = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({
  //       left: -200, // Adjust the scroll amount as needed
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({
  //       left: 200, // Adjust the scroll amount as needed
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const scrollToCenter = (index) => {
    if (itemRefs.current[index] && carouselRef.current) {
      const carousel = carouselRef.current;
      const item = itemRefs.current[index];

      // Calculate the scroll position to center the clicked item
      const itemLeftPosition = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const carouselWidth = carousel.offsetWidth;
      const maxScrollLeft = carousel.scrollWidth - carouselWidth;

      // Scroll position to center the item
      let scrollPosition = itemLeftPosition - carouselWidth / 2 + itemWidth / 2;

      // Ensure scroll position stays within bounds
      if (scrollPosition < 0) {
        scrollPosition = 0;
      } else if (scrollPosition > maxScrollLeft) {
        scrollPosition = maxScrollLeft;
      }

      carousel.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const items = [
    { title: BRANDS.JUVELOOK, logo: logo1, video: "" },
    { title: BRANDS.LENISNA, logo: logo2, video: "" },
    { title: BRANDS.RENEE, logo: logo3, video: "" },
    { title: BRANDS.KSURGERY, logo: logo4, video: "" },

    { title: BRANDS.ELLANSE, logo: logo5, video: "" },
    { title: BRANDS.LANLUMA, logo: logo6, video: "" },
    { title: BRANDS.MAILI, logo: logo7, video: "" },
    { title: BRANDS.DIMONO, logo: logo8, video: "" },
    { title: BRANDS.DRCYJ, logo: logo9, video: "" },

  ];

  return (
    <div className="carousel-container">
      <Container
        maxWidth="xxl"
        sx={{
          position: "relative",
          margin: 0,
          height: { xs: "auto", md: "auto" },   // ✅ change
          pb: { xs: 2, md: 0 },                 // optional breathing room
          px: { xs: 0, md: "16px" }
        }}
      >
        <Stack
          direction={"row"}
          spacing={5}
          justifyContent="center"
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          {/* <button className="carousel-button" onClick={scrollLeft}>
          ❮
        </button> */}
          <Box sx={{ width: { xs: "100%", md: "100%" } }}>
            <div className="carousel" ref={carouselRef}>
              {items.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`carousel-item ${active === item.title && "active"
                    }`}
                  onClick={() => {
                    selectedBrand(item.title.toUpperCase());
                    scrollToCenter(index);
                  }}
                >
                  <img src={item.logo} alt={item.title} />
                </div>
              ))}
            </div>
          </Box>
          {/* <Box>
          <button className="carousel-button" onClick={scrollRight}>
            ❯
          </button>
        </Box> */}
        </Stack>
      </Container>
    </div>
  );
};

export default Carousel;
