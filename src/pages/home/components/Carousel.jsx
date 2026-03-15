import { Box, Container, Stack } from "@mui/system";
import { useEffect, useRef } from "react";
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

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

const Carousel = ({ items, activeIndex, onSelect }) => {
  const logosScrollerRef = useRef(null);
  const itemRefs = useRef([]);

  const scrollLogoToCenter = (index, behavior = "auto") => {
    if (!itemRefs.current[index] || !logosScrollerRef.current) return;

    const carousel = logosScrollerRef.current;
    const item = itemRefs.current[index];

    const itemLeft = item.offsetLeft;
    const itemWidth = item.offsetWidth;
    const carouselWidth = carousel.offsetWidth;
    const maxScrollLeft = carousel.scrollWidth - carouselWidth;

    let scrollPosition = itemLeft - carouselWidth / 2 + itemWidth / 2;

    if (scrollPosition < 0) scrollPosition = 0;
    if (scrollPosition > maxScrollLeft) scrollPosition = maxScrollLeft;

    carousel.scrollTo({
      left: scrollPosition,
      behavior,
    });
  };

  useEffect(() => {
    scrollLogoToCenter(activeIndex, "smooth");
  }, [activeIndex]);

  return (
    <div className="carousel-container">
      <Container
        maxWidth="xl"
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
          <Box sx={{ width: "100%" }}>
            <div className="carousel">
              <div className="carousel-track-line" />

              <div className="carousel-logos" ref={logosScrollerRef}>
                {items.map((item, index) => (
                  <div
                    key={item.key}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className={`carousel-item ${activeIndex === index ? "active" : ""}`}
                    onClick={() => onSelect(index)}
                  >
                    <img src={logos[index]} alt={item.key} />
                  </div>
                ))}
              </div>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Carousel;