import React from "react";
import { Box  } from "@mui/system";
import { Container } from "@mui/material";
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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const BrandsBanner = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  const [activeIndex, setActiveIndex] = React.useState(0);
  const scrollerRef = React.useRef(null);
  const scrollEndTimer = React.useRef(null);
  const isProgrammaticScroll = React.useRef(false);

  React.useEffect(() => {
    if (!isMobile) return;

    const el = scrollerRef.current;
    if (!el) return;

    const slides = () =>
      Array.from(el.querySelectorAll("[data-brand-slide='true']"));

    const getClosestIndex = () => {
      const nodes = slides();
      if (!nodes.length) return 0;

      const viewportCenter = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;

      nodes.forEach((node, idx) => {
        const slideCenter = node.offsetLeft + node.offsetWidth / 2;
        const dist = Math.abs(slideCenter - viewportCenter);

        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      return bestIdx;
    };

    const snapToNearest = () => {
      if (isProgrammaticScroll.current) return;

      const nodes = slides();
      const idx = getClosestIndex();
      const target = nodes[idx];
      if (!target) return;

      setActiveIndex(idx);
      el.scrollTo({
        left: target.offsetLeft,
        behavior: "smooth",
      });
    };

    const onScroll = () => {
      const idx = getClosestIndex();
      setActiveIndex(idx);

      if (scrollEndTimer.current) {
        clearTimeout(scrollEndTimer.current);
      }

      if (!isProgrammaticScroll.current) {
        scrollEndTimer.current = setTimeout(() => {
          snapToNearest();
        }, 140);
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      el.removeEventListener("scroll", onScroll);
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
    };
  }, [isMobile]);

  const scrollToBrand = (idx) => {
    setActiveIndex(idx);

    if (isMobile && scrollerRef.current) {
      const slides = Array.from(
        scrollerRef.current.querySelectorAll("[data-brand-slide='true']")
      );
      const target = slides[idx];
      if (!target) return;

      if (scrollEndTimer.current) {
        clearTimeout(scrollEndTimer.current);
      }

      isProgrammaticScroll.current = true;

      scrollerRef.current.scrollTo({
        left: target.offsetLeft,
        behavior: "smooth",
      });

      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 450);

      return;
    }
  };

  const activeBrand = brands[activeIndex];

  return (
    <Box
      sx={{
        padding: 0,
        overflow: "hidden",
        filter: "grayscale(100%)",
        backgroundColor: "#000",
        height: { xs: "100vh", sm: "100vh", md: "100vh" },
      }}
    >
      <Container
        // maxWidth="xl"
        disableGutters
        sx={{
          position: "relative",
          // margin: 0,
          width: "100%",
          height: { xs: "100vh", sm: "100vh", md: "100vh" },
          overflow: "hidden",
           "@media(max-width:767px)": {
             margin:"0"
           },
        }}
      >
        {isMobile ? (
          <Box
            ref={scrollerRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              overflowY: "hidden",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "auto",
              height: "100%",
              width: "100%",
              overscrollBehaviorX: "contain",
              touchAction: "pan-x",
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {brands.map((brand) => (
              <Box
                key={brand.key}
                data-brand-slide="true"
                sx={{
                  flex: "0 0 100%",
                  minWidth: "100%",
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  scrollSnapAlign: "center",
                  scrollSnapStop: "always",
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
        ) : (
          <BrandContainer
            title={activeBrand.title}
            subTitle={activeBrand.subTitle}
            description={activeBrand.description}
            buttonText={activeBrand.buttonText}
            video={activeBrand.video}
            path={activeBrand.path}
          />
        )}

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