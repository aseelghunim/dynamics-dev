import { Box, Container, Stack } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { BRANDS } from "../contants";
import "./Carousel.css";

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
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 40,
    left: 0,
  });

  const items = [
    { title: BRANDS.JUVELOOK, logo: logo1 },
    { title: BRANDS.LENISNA, logo: logo2 },
    { title: BRANDS.RENEE, logo: logo3 },
    { title: BRANDS.KSURGERY, logo: logo4 },
    { title: BRANDS.ELLANSE, logo: logo5 },
    { title: BRANDS.LANLUMA, logo: logo6 },
    { title: BRANDS.MAILI, logo: logo7 },
    { title: BRANDS.DIMONO, logo: logo8 },
    { title: BRANDS.DRCYJ, logo: logo9 },
  ];

  const updateIndicator = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
  
    const visibleWidth = carousel.clientWidth;
    const totalWidth = carousel.scrollWidth;
    const scrollLeft = carousel.scrollLeft;
    const maxScrollLeft = totalWidth - visibleWidth;
  
    const thumbWidth = 40; // fixed width
    const maxThumbLeft = visibleWidth - thumbWidth;
  
    const thumbLeft =
      maxScrollLeft > 0 ? (scrollLeft / maxScrollLeft) * maxThumbLeft : 0;
  
    setIndicatorStyle({
      width: thumbWidth,
      left: thumbLeft,
    });
  };

  useEffect(() => {
    updateIndicator();

    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", updateIndicator, { passive: true });
    window.addEventListener("resize", updateIndicator);

    return () => {
      carousel.removeEventListener("scroll", updateIndicator);
      window.removeEventListener("resize", updateIndicator);
    };
  }, []);

  const scrollToCenter = (index) => {
    if (itemRefs.current[index] && carouselRef.current) {
      const carousel = carouselRef.current;
      const item = itemRefs.current[index];

      const itemLeftPosition = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const carouselWidth = carousel.offsetWidth;
      const maxScrollLeft = carousel.scrollWidth - carouselWidth;

      let scrollPosition = itemLeftPosition - carouselWidth / 2 + itemWidth / 2;

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

  return (
    <div className="carousel-container">
      <Container
        maxWidth="xxl"
        sx={{
          position: "relative",
          margin: 0,
          height: { xs: "auto", md: "auto" },
          pb: { xs: 2, md: 0 },
          px: { xs: 0, md: "16px" },
        }}
      >
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Box sx={{ width: { xs: "100%", md: "100%" } }}>
            <div className="carousel" ref={carouselRef}>
              {items.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`carousel-item ${active === item.title ? "active" : ""}`}
                  onClick={() => {
                    selectedBrand(item.title.toUpperCase());
                    scrollToCenter(index);
                  }}
                >
                  <img src={item.logo} alt={item.title} />
                </div>
              ))}
            </div>

            {/* shared moving scroll indicator */}
            <div className="carousel-scrollbar">
              <div
                className="carousel-scrollbar-thumb"
                style={{
                  width: `${indicatorStyle.width}px`,
                  transform: `translateX(${indicatorStyle.left}px)`,
                }}
              />
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Carousel;