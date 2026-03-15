import React from "react";
import { Box, Container, Grid, Stack } from "@mui/system";

import image1 from "assets/product-01.png";
import image2 from "assets/product-02.png";
import image3 from "assets/product-03.png";
import image4 from "assets/product-04.png";
import image5 from "assets/our-brands/5.png";
import image6 from "assets/our-brands/6.png";
import image7 from "assets/our-brands/7.png";
import image8 from "assets/our-brands/8.png";
import image9 from "assets/our-brands/9.png";

import { ButtonBase, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { RouterLink } from "layout/components/router-link";
import { QuoteTypography } from "layout/components/StyledTypography";
import { paths } from "paths";
import { useTranslation } from "react-i18next";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const OurCollectionBanner = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const items = [
    { image: image1, title: t("brands.juvelook.subtitle"), description: t("brands.juvelook.description2"), path: paths.brands.juvelook },
    { image: image2, title: t("brands.lenisna.subtitle"), description: t("brands.lenisna.description2"), path: paths.brands.lenisna },
    { image: image3, title: t("brands.renee.subtitle"), description: t("brands.renee.description2"), path: paths.brands.renee },
    { image: image4, title: t("brands.ksurgery.subtitle"), description: t("brands.ksurgery.description2"), path: paths.brands.ksurgery },
    { image: image5, title: t("brands.ellanse.subtitle"), description: t("brands.ellanse.description2"), path: paths.brands.ellanse },
    { image: image6, title: t("brands.lanluma.subtitle"), description: t("brands.lanluma.description2"), path: paths.brands.lanluma },
    { image: image7, title: t("brands.maili.subtitle"), description: t("brands.maili.description2"), path: paths.maili },
    { image: image8, title: t("brands.dimono.subtitle"), description: t("brands.dimono.description2"), path: paths.dimono },
    { image: image9, title: t("brands.drcyj.subtitle"), description: t("brands.drcyj.description2"), path: paths.drcyj },
  ];

  const EDGE_GUTTER = 32;

  const Heading = () => (
    <Stack spacing={2}>
      <QuoteTypography
        sx={{
          color: "#012169",
          "@media (max-width: 991px)": { fontSize: "1rem" },
        }}
        variant="h6"
      >
        {t("brands.our_collection.title")}
      </QuoteTypography>

      <Typography
        sx={{
          color: "#012169",
          "@media (max-width: 991px)": { fontSize: "1.25rem" },
        }}
        variant="h3"
      >
        {t("brands.our_collection.paragraph2")}
      </Typography>
    </Stack>
  );

  const ItemCard = ({ item }) => (
    <ButtonBase
      LinkComponent={RouterLink}
      href={item.path}
      sx={{
        textAlign: "left",
        height: "100%",
        width: "100%",
        "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Card sx={{ width: "100%", height: "100%", borderRadius: 0 }}>
        <CardMedia sx={{ height: { xs: 200, md: 300 } }} image={item.image} title={item.title} />
        <CardContent sx={{ padding: { xs: 1.5, md: 2 } }}>
          <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: { xs: "0.875rem", md: "100% !important" } }}>
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
              fontSize: { xs: "0.75rem", md: "inherit" },
            }}
          >
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );

  return (
    <Box  sx={{ backgroundColor: "#eee8f5", }}>
      {isMobile ? (
        // Mobile: ONLY cards scroll horizontally (no heading)
        <Container
          maxWidth="xl"
          disableGutters
          sx={{
            position: "relative",
            height: "100%",
            margin: 0,
            pt: 4,
            pb: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollPaddingLeft: `${EDGE_GUTTER}px`,
              scrollPaddingRight: `${EDGE_GUTTER}px`,
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
            }}
          >
            {items.map((item, index) => (
              <Box
                key={item.title + index}
                sx={{
                  flex: "0 0 70%",
                  scrollSnapAlign: "start",
                  minWidth: 0,
                  pr: 2,
                  ml: index === 0 ? `${EDGE_GUTTER}px` : 0,
                  mr: index === items.length - 1 ? `${EDGE_GUTTER}px` : 0,
                }}
              >
                <ItemCard item={item} />
              </Box>
            ))}
          </Box>
        </Container>
      ) : (
        // Desktop + Tablet: heading stays, cards scroll horizontally right next to it
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            height: "100%",
            padding: { xs: 2, md: 10 },
            paddingRight:{xs:2,md:10,xl:0},
            // paddingTop: ,
            marginRight:"auto!important",
            marginLeft:"auto!important",
            margin: 0,
          }}
        >
          <Grid container spacing={2} alignItems="stretch">
            {/* ✅ remove offset (this was causing the big empty space) */}
            <Grid size={{ xs: 12, md: 3 }} sx={{ paddingTop: 1 }}>
              <Heading />
            </Grid>

            {/* Scroll area */}
            <Grid size={{ xs: 12, md: 9 }} sx={{ minWidth: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  overflowX: "auto",
                  WebkitOverflowScrolling: "touch",
                  // (optional) snap on desktop too:
                  scrollSnapType: "x mandatory",

                  // keep some breathing room at the end so last card isn't flush
                  pr: 2,

                  "&::-webkit-scrollbar": { display: "none" },
                  scrollbarWidth: "none",
                }}
              >
                {items.map((item, index) => (
                  <Box
                    key={item.title + index}
                    sx={{
                      flex: "0 0 250px", // desktop card width (adjust)
                      scrollSnapAlign: "start",
                      minWidth: 0,
                      mr: 2, // spacing between cards
                    }}
                  >
                    <ItemCard item={item} />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default OurCollectionBanner;