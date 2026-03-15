import React from "react";
import { Box, Container } from "@mui/system";
import Carousel from "./Carousel";
import video1 from "assets/HeroMove1.mp4";
import video4 from "assets/ksugery1.mp4";
import video2 from "assets/lenisna.mov";
import video3 from "assets/renee/video1.mp4";
import video5 from "assets/ellanse/video3.mp4";
import video6 from "assets/maili/video3.mp4";
import video7 from "assets/dimono/video2.mp4";
import video8 from "assets/lanluma/Video_Lanluma_HomePage.mp4";
import video9 from "assets/drcyj/video2.mp4";
import BrandContainer from "./brands/BrandContainer";
import { useTranslation } from "react-i18next";
import { tokens } from "locales/tokens";
import { paths } from "paths";
import { BRANDS } from "../contants";

const BrandsBanner = () => {
  const { t } = useTranslation();

  const brands = React.useMemo(
    () => [
      {
        key: BRANDS.JUVELOOK,
        title: t(tokens.brands.juvelook.title),
        subTitle: t(tokens.brands.juvelook.subtitle),
        description: t(tokens.brands.juvelook.description2),
        buttonText: t(tokens.brands.juvelook.buttonText),
        video: video1,
        path: paths.brands.juvelook,
      },
      {
        key: BRANDS.LENISNA,
        title: t(tokens.brands.lenisna.title),
        subTitle: t(tokens.brands.lenisna.subtitle),
        description: t(tokens.brands.lenisna.description2),
        buttonText: t(tokens.brands.lenisna.buttonText),
        video: video2,
        path: paths.brands.lenisna,
      },
      {
        key: BRANDS.RENEE,
        title: t(tokens.brands.renee.title),
        subTitle: t(tokens.brands.renee.subtitle),
        description: t(tokens.brands.renee.description2),
        buttonText: t(tokens.brands.renee.buttonText),
        video: video3,
        path: paths.brands.renee,
      },
      {
        key: BRANDS.KSURGERY,
        title: t(tokens.brands.ksurgery.title),
        subTitle: t(tokens.brands.ksurgery.subtitle),
        description: t(tokens.brands.ksurgery.description2),
        buttonText: t(tokens.brands.ksurgery.buttonText),
        video: video4,
        path: paths.brands.ksurgery,
      },
      {
        key: BRANDS.ELLANSE,
        title: t(tokens.brands.ellanse.title),
        subTitle: t(tokens.brands.ellanse.subtitle),
        description: t(tokens.brands.ellanse.description2),
        buttonText: t(tokens.brands.ellanse.buttonText),
        video: video5,
        path: paths.brands.ellanse,
      },
      {
        key: BRANDS.LANLUMA,
        title: t(tokens.brands.lanluma.title),
        subTitle: t(tokens.brands.lanluma.subtitle),
        description: t(tokens.brands.lanluma.description2),
        buttonText: t(tokens.brands.lanluma.buttonText),
        video: video8,
        path: paths.brands.lanluma,
      },
      {
        key: BRANDS.MAILI,
        title: t(tokens.brands.maili.title),
        subTitle: t(tokens.brands.maili.subtitle),
        description: t(tokens.brands.maili.description2),
        buttonText: t(tokens.brands.maili.buttonText),
        video: video6,
        path: paths.brands.maili,
      },
      {
        key: BRANDS.DIMONO,
        title: t(tokens.brands.dimono.title),
        subTitle: t(tokens.brands.dimono.subtitle),
        description: t(tokens.brands.dimono.description2),
        buttonText: t(tokens.brands.dimono.buttonText),
        video: video7,
        path: paths.brands.dimono,
      },
      {
        key: BRANDS.DRCYJ,
        title: t(tokens.brands.drcyj.title),
        subTitle: t(tokens.brands.drcyj.subtitle),
        description: t(tokens.brands.drcyj.description2),
        buttonText: t(tokens.brands.drcyj.buttonText),
        video: video9,
        path: paths.brands.drcyj,
      },
    ],
    [t]
  );

  const scrollerRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const slides = Array.from(
        el.querySelectorAll("[data-brand-slide='true']")
      );
      if (!slides.length) return;

      const viewportCenter = el.scrollLeft + el.clientWidth / 2;

      let bestIdx = 0;
      let bestDist = Infinity;

      slides.forEach((node, idx) => {
        const slideCenter = node.offsetLeft + node.offsetWidth / 2;
        const dist = Math.abs(slideCenter - viewportCenter);

        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      setActiveIndex(bestIdx);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToBrand = (idx) => {
    const el = scrollerRef.current;
    if (!el) return;

    const slides = Array.from(
      el.querySelectorAll("[data-brand-slide='true']")
    );
    const target = slides[idx];
    if (!target) return;

    el.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        p: 0,
        overflow: "hidden",
        filter: "grayscale(100%)",
        backgroundColor: "#000",
        height: { xs: "100vh", sm: "100vh", md: "100vh" },
      }}
    >
      <Container
        maxWidth="xxl"
        disableGutters
        sx={{
          position: "relative",
          margin: 0,
          height: { xs: "100vh", sm: "100vh", md: "100vh" },
          overflow: "hidden",
        }}
      >
        <Box
          ref={scrollerRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            overflowY: "hidden",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            height: "100%",
            width: "100%",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {brands.map((brand, index) => (
            <Box
              key={brand.key}
              data-brand-slide="true"
              sx={{
                flex: "0 0 100%",
                width: "100%",
                minWidth: "100%",
                height: "100%",
                position: "relative",
                scrollSnapAlign: "start",
                overflow: "hidden",
              }}
            >
              <BrandContainer
                title={brand.title}
                subTitle={brand.subTitle}
                description={brand.description}
                buttonText={brand.buttonText}
                video={brand.video}
                path={brand.path}
              />
            </Box>
          ))}
        </Box>

        <Carousel
          items={brands}
          activeIndex={activeIndex}
          onSelect={scrollToBrand}
        />
      </Container>
    </Box>
  );
};

export default BrandsBanner;