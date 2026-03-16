import React from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import Carousel from "./Carousel";
import video1 from "assets/juvelook/home-video.mp4";
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

const WHEEL_LOCK_MS = 600;
const SWIPE_THRESHOLD = 50;
const SNAP_SETTLE_MS = 150;

const BrandsBanner = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isRTL = i18n.dir() === "rtl";

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

  const total = brands.length;
  const [activeIndex, setActiveIndex] = React.useState(0);

  const clamp = React.useCallback(
    (idx) => Math.max(0, Math.min(total - 1, idx)),
    [total]
  );

  const goTo = React.useCallback(
    (idx) => setActiveIndex(clamp(idx)),
    [clamp]
  );

  // ── Mobile scroller ──────────────────────────────────────────────
  const mobileScrollerRef = React.useRef(null);
  const scrollEndTimerRef = React.useRef(null);
  const isProgrammatic = React.useRef(false);

  const mobileScrollTo = React.useCallback((logicalIdx) => {
    const el = mobileScrollerRef.current;
    if (!el) return;
    const slides = Array.from(el.querySelectorAll("[data-slide]"));
    const target = slides[logicalIdx];
    if (!target) return;

    clearTimeout(scrollEndTimerRef.current);
    isProgrammatic.current = true;

    target.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });

    setTimeout(() => {
      isProgrammatic.current = false;
    }, 450);
  }, []);

  const getClosestIndex = React.useCallback(() => {
    const el = mobileScrollerRef.current;
    if (!el) return 0;
    const slides = Array.from(el.querySelectorAll("[data-slide]"));
    const scrollerRect = el.getBoundingClientRect();
    const center = scrollerRect.left + scrollerRect.width / 2;

    let bestIdx = 0;
    let bestDist = Infinity;

    slides.forEach((node, i) => {
      const rect = node.getBoundingClientRect();
      const nodeCenter = rect.left + rect.width / 2;
      const dist = Math.abs(nodeCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    });

    return bestIdx;
  }, []);



  React.useEffect(() => {
    if (!isMobile) return;
    const el = mobileScrollerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const idx = getClosestIndex();
      setActiveIndex(idx);

      if (isProgrammatic.current) return;

      clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = setTimeout(() => {
        const snapIdx = getClosestIndex();
        setActiveIndex(snapIdx);
        mobileScrollTo(snapIdx);
      }, SNAP_SETTLE_MS);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      el.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollEndTimerRef.current);
    };
  }, [isMobile, getClosestIndex, mobileScrollTo]);

  React.useEffect(() => {
    setActiveIndex(0);
    if (isMobile) {
      const timer = setTimeout(() => mobileScrollTo(0), 60);
      return () => clearTimeout(timer);
    }
  }, [isRTL, isMobile, mobileScrollTo]);

  // ── Desktop wheel / touch / keyboard ────────────────────────────
  const wheelLocked = React.useRef(false);
  const touchStartX = React.useRef(0);

  const handleWheel = React.useCallback(
    (e) => {
      if (wheelLocked.current) return;
      const delta = e.deltaX;
      if (Math.abs(delta) < 18) return;

      wheelLocked.current = true;

      if (isRTL) {
        goTo(activeIndex + (delta > 0 ? -1 : 1));
      } else {
        goTo(activeIndex + (delta > 0 ? 1 : -1));
      }

      setTimeout(() => {
        wheelLocked.current = false;
      }, WHEEL_LOCK_MS);
    },
    [activeIndex, goTo, isRTL]
  );

  const handleTouchStart = React.useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = React.useCallback(
    (e) => {
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      // Same in both LTR and RTL — swipe left = next, swipe right = prev
      goTo(activeIndex + (delta < 0 ? 1 : -1));
    },
    [activeIndex, goTo]
  );

  React.useEffect(() => {
    if (isMobile) return;
    const handleKey = (e) => {
      // Same in both directions — ArrowRight = next, ArrowLeft = prev
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
      if (e.key === "ArrowLeft") goTo(activeIndex - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMobile, activeIndex, goTo]);
  React.useEffect(() => {
    if (isMobile) return;
    const el = sliderRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      handleWheel(e);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [isMobile, handleWheel]);
  const handleSelect = React.useCallback(
    (idx) => {
      setActiveIndex(idx);
      if (isMobile) mobileScrollTo(idx);
    },
    [isMobile, mobileScrollTo]
  );
  const sliderRef = React.useRef(null);
  React.useEffect(() => {
    if (!isMobile && sliderRef.current) {
      sliderRef.current.focus();
    }
  }, [isMobile, isRTL]);
  // ── Desktop slide transform ──────────────────────────────────────
  // Always row, always translate left — no RTL flip needed.
  // dir="rtl" on the outer Box handles text/button alignment inside slides.
  const desktopTranslate = `translateX(-${(activeIndex * 100) / total}%)`;

  return (
    <Box
      dir={isRTL ? "rtl" : "ltr"}
      sx={{
        padding: 0,
        overflow: "hidden",
        filter: "grayscale(100%)",
        backgroundColor: "#000",
        height: "100vh",
      }}
    >
      <Container
        maxWidth="xxl"
        disableGutters
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {isMobile ? (
          // ── Mobile: native scroll snap, always LTR internally ──
          <Box
            ref={mobileScrollerRef}
            sx={{
              display: "flex",
              flexDirection: "row",
              overflowX: "scroll",
              overflowY: "hidden",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "auto",
              height: "100%",
              width: "100%",
              overscrollBehaviorX: "contain",
              touchAction: "pan-x",
              "&::-webkit-scrollbar": { height: 4 },
              "&::-webkit-scrollbar-track": {
                background: "rgba(255,255,255,0.08)",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(255,255,255,0.45)",
                borderRadius: 2,
              },
              scrollbarWidth: "thin",
              scrollbarColor:
                "rgba(255,255,255,0.45) rgba(255,255,255,0.08)",
            }}
          >
            {brands.map((brand) => (
              <Box
                key={brand.key}
                data-slide
                sx={{
                  flex: "0 0 100%",
                  minWidth: "100%",
                  height: "100%",
                  position: "relative",
                  scrollSnapAlign: "start",
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
          // ── Desktop: transform-based slider ──
          <Box
            // ref={sliderRef}
            // onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            tabIndex={0}
            // autoFocus
            aria-roledescription="slider"
            aria-label="Brands slider"
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              outline: "none",
              userSelect: "none",
              touchAction: "pan-y",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: `${total * 100}%`,
                height: "100%",
                transform: desktopTranslate,
                transition:
                  "transform 0.55s cubic-bezier(0.77, 0, 0.175, 1)",
                willChange: "transform",
              }}
            >
              {brands.map((brand) => (
                <Box
                  key={brand.key}
                  sx={{
                    flex: `0 0 ${100 / total}%`,
                    width: `${100 / total}%`,
                    height: "100%",
                    overflow: "hidden",
                    position: "relative",
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
          </Box>
        )}

        <Carousel
          items={brands}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          isRTL={isRTL}
        />
      </Container>
    </Box>
  );
};

export default BrandsBanner;