import React from "react";
import { Box, Container, Grid } from "@mui/system";

import image1 from "assets/1.png";
import image2 from "assets/2.png";
import image3 from "assets/3.png";
import image4 from "assets/4.png";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { QuoteTypography } from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const NewsBanner = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const items = [
    { image: image1, title: t(tokens.cards.card1.title), description: t(tokens.cards.card1.paragraph) },
    { image: image2, title: t(tokens.cards.card2.title), description: t(tokens.cards.card2.paragraph) },
    { image: image3, title: t(tokens.cards.card3.title), description: t(tokens.cards.card3.paragraph) },
    { image: image4, title: t(tokens.cards.card4.title), description: t(tokens.cards.card4.paragraph) },
  ];

  // ---- Mobile horizontal scroll ----
  const scrollerRef = React.useRef(null);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (!isMobile) return;

    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const slides = Array.from(el.querySelectorAll("[data-item-slide='true']"));
      if (!slides.length) return;

      // Use the viewport center to decide which card is active
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

      setActive(bestIdx);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => el.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  const scrollToItem = (idx) => {
    const el = scrollerRef.current;
    if (!el) return;

    const slides = Array.from(el.querySelectorAll("[data-item-slide='true']"));
    const target = slides[idx];
    if (!target) return;

    el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  };

  // ✅ Hidden on mobile
  const BannerHeading = () => (
    <QuoteTypography
      sx={{
        display: { xs: "none", sm: "block" },
        color: "#012169",
        "@media (max-width: 991px)": { fontSize: "1rem" },
      }}
      variant="h6"
    >
      {t(tokens.site.name)}
    </QuoteTypography>
  );

  const BannerCard = ({ item }) => (
    <Card sx={{
      width: "100%", height: "100%", borderRadius: 0,
      "@media (min-width: 768px) and (max-width:991px)":
        { height: "95%!important" }
    }}>
      <CardMedia sx={{ height: { xs: 150, sm: 200, md: 300 } }} image={item.image} title={item.title} />
      <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          fontSize="0.875rem!important"
          fontWeight={600}
          sx={{ "@media (max-width: 991px)": { fontSize: "0.875rem" } }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="caption"
          component="div"
          sx={{
            color: "text.secondary",
            textAlign: "justify",
            textJustify: "inter-word",
            wordSpacing: "0.15em",
            letterSpacing: "0.02em",
            lineHeight: 1.7,
            display: "block",
            width: "100%",
            hyphens: "auto",
            WebkitHyphens: "auto",
            msHyphens: "auto",
            "@media (max-width: 991px)": { fontSize: "0.65rem" },
          }}
        >
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );

  const EDGE_GUTTER = 32; // px like your design padding

  return (
    <Box maxWidth="xxl" sx={{ backgroundColor: "#eee8f5" }}>
      {!isMobile ? (
        <Container
          maxWidth="xxl"
          sx={{
            position: "relative",
            height: "100%",
            padding: { xs: 2, sm: 2, md: 10 },
            paddingTop: { xs: 2, sm: "5rem!important", md: 10 },
            margin: 0,
          }}
        >
          <Grid container spacing={1} alignItems="stretch" justifyContent="center">
            <Grid className="" offset={{ xs: 0, sm: 1 }} size={{ xs: 12, sm: 12, md: 3 }}

              sx={{
                paddingTop: 1,
                "@media(min-width:768px) and (max-width: 991px)": {
                  marginLeft: "0!important",
                  marginBottom: "16px!important"
                }

              }}
            >
              <BannerHeading />
            </Grid>

            {items.map((item, index) => (
              <Grid key={item.title + index} size={{ xs: 6, sm: 3, md: 2 }}>
                <BannerCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        // ✅ Mobile: remove container side padding and manage gutters inside scroller
        <Container
          maxWidth="xxl"
          disableGutters
          sx={{
            position: "relative",
            height: "100%",
            margin: 0,
            pt: 4, // keep vertical spacing
            pb: 2
          }}
        >
          <Box
            ref={scrollerRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              pb: 3,

              // ✅ ensures first/last snap positions respect gutters
              scrollPaddingLeft: `${EDGE_GUTTER}px`,
              scrollPaddingRight: `${EDGE_GUTTER}px`,

              // hide scrollbar
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
            }}
          >
            {items.map((item, index) => (
              <Box
                key={item.title + index}
                data-item-slide="true"
                sx={{
                  flex: "0 0 50%",
                  scrollSnapAlign: "start",
                  minWidth: 0,

                  // ✅ internal spacing between cards
                  mr: 2,

                  // ✅ gutters so cards never go under container edges
                  ml: index === 0 ? `${EDGE_GUTTER}px` : 0,
                  mr: index === items.length - 1 ? `${EDGE_GUTTER}px` : 2,
                }}
              >
                <BannerCard item={item} />
              </Box>
            ))}
          </Box>

          {/* Static dots */}
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mt: 1 }}>
            {items.map((_, idx) => {
              const isActive = idx === active;
              return (
                <Box
                  key={idx}
                  onClick={() => scrollToItem(idx)}
                  role="button"
                  aria-label={`Go to card ${idx + 1}`}
                  sx={{
                    cursor: "pointer",
                    transition: "all 200ms ease",
                    width: isActive ? 56 : 10,
                    height: 10,
                    borderRadius: 999,
                    bgcolor: isActive ? "#7C6BE6" : "#D8D3F3",
                  }}
                />
              );
            })}
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default NewsBanner;