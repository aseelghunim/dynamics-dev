import { Box, Container } from "@mui/system";
import Carousel from "./Carousel";
import { useState } from "react";
import { BRANDS } from "../contants";
import video1 from "assets/HeroMove1.mp4";
import video4 from "assets/ksugery1.mp4";
import video2 from "assets/lenisna.mov";
import video3 from "assets/renee1.mp4";
import video5 from 'assets/ellanse/video3.mp4';
import video6 from 'assets/maili/video3.mp4'
import BrandContainer from "./brands/BrandContainer";
import { useTranslation } from "react-i18next";
import { tokens } from "locales/tokens";
import { paths } from "paths";

const BrandsBanner = (props) => {
  const { t } = useTranslation();
  const brands = [
    {
      title: t(tokens.brands.juvelook.title),
      subTitle: t(tokens.brands.juvelook.subtitle),
      description: t(tokens.brands.juvelook.description),
      video: video1,
      path: paths.brands.juvelook,
    },
    {
      title: t(tokens.brands.lenisna.title),
      subTitle: t(tokens.brands.lenisna.subtitle),
      description: t(tokens.brands.lenisna.description),
      video: video2,
      path: paths.brands.lenisna,
    },
    {
      title: t(tokens.brands.renee.title),
      subTitle: t(tokens.brands.renee.subtitle),
      description: t(tokens.brands.renee.description),
      video: video3,
      path: paths.brands.renee,
    },
    {
      title: t(tokens.brands.ksurgery.title),
      subTitle: t(tokens.brands.ksurgery.subtitle),
      description: t(tokens.brands.ksurgery.description),
      video: video4,
      path: paths.brands.ksurgery,
    },
    {
      title: t(tokens.brands.ellanse.title),
      subTitle: t(tokens.brands.ellanse.subtitle),
      description: t(tokens.brands.ellanse.description),
      video: video5,
      path: paths.brands.ellanse,
    },
    {
      title: t(tokens.brands.lanluma.title),
      subTitle: t(tokens.brands.lanluma.subtitle),
      description: t(tokens.brands.lanluma.description),
      video: video4,
      path: paths.brands.lanluma,
    },
    {
      title: t(tokens.brands.maili.title),
      subTitle: t(tokens.brands.maili.subtitle),
      description: t(tokens.brands.maili.description),
      video: video6,
      path: paths.brands.maili,
    },
    {
      title: t(tokens.brands.dimono.title),
      subTitle: t(tokens.brands.dimono.subtitle),
      description: t(tokens.brands.dimono.description),
      video: video4,
      path: paths.brands.dimono,
    },
    {
      title: t(tokens.brands.drcyj.title),
      subTitle: t(tokens.brands.drcyj.subtitle),
      description: t(tokens.brands.drcyj.description),
      video: video4,
      path: paths.brands.drcyj,
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState(BRANDS.JUVELOOK);

  return (
    <Box
      sx={{
        padding: 0,
        overflow: "hidden",
        filter: "grayscale(100%)",
        backgroundColor: "#000",
        // Mobile: auto height so the relative-positioned carousel flows naturally below
        // Desktop: fixed 50rem unchanged
        height: { xs: "auto", md: "50rem" },
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          position: "relative",
          margin: 0,
          // Mobile: fixed height for just the video/content area
          // Desktop: full 100% height so absolute carousel anchors to bottom
          height: { xs: "100vh",sm:"65vh", md: "100%" },
        }}
      >
        {selectedBrand === BRANDS.KSURGERY && (
          <BrandContainer
            title={brands[3].title}
            subTitle={brands[3].subTitle}
            description={brands[3].description}
            video={brands[3].video}
            path={brands[3].path}
          />
        )}
        {selectedBrand === BRANDS.JUVELOOK && (
          <BrandContainer
            title={brands[0].title}
            subTitle={brands[0].subTitle}
            description={brands[0].description}
            video={brands[0].video}
            path={brands[0].path}
          />
        )}
        {selectedBrand === BRANDS.LENISNA && (
          <BrandContainer
            title={brands[1].title}
            subTitle={brands[1].subTitle}
            description={brands[1].description}
            video={brands[1].video}
            path={brands[1].path}
          />
        )}
        {selectedBrand === BRANDS.RENEE && (
          <BrandContainer
            title={brands[2].title}
            subTitle={brands[2].subTitle}
            description={brands[2].description}
            video={brands[2].video}
            path={brands[2].path}
          />
        )}
        {selectedBrand === BRANDS.ELLANSE && (
          <BrandContainer
            title={brands[4].title}
            subTitle={brands[4].subTitle}
            description={brands[4].description}
            video={brands[4].video}
            path={brands[4].path}
          />
        )}
        {selectedBrand === BRANDS.LANLUMA && (
          <BrandContainer
            title={brands[5].title}
            subTitle={brands[5].subTitle}
            description={brands[5].description}
            video={brands[5].video}
            path={brands[5].path}
          />
        )}
        {selectedBrand === BRANDS.MAILI && (
          <BrandContainer
            title={brands[6].title}
            subTitle={brands[6].subTitle}
            description={brands[6].description}
            video={brands[6].video}
            path={brands[6].path}
          />
        )}
        {selectedBrand === BRANDS.DIMONO && (
          <BrandContainer
            title={brands[7].title}
            subTitle={brands[7].subTitle}
            description={brands[7].description}
            video={brands[7].video}
            path={brands[7].path}
          />
        )}
        {selectedBrand === BRANDS.DRCYJ && (
          <BrandContainer
            title={brands[8].title}
            subTitle={brands[8].subTitle}
            description={brands[8].description}
            video={brands[8].video}
            path={brands[8].path}
          />
        )}
        <Carousel selectedBrand={setSelectedBrand} active={selectedBrand} />
      </Container>
    </Box>
  );
};

BrandsBanner.propTypes = {};

export default BrandsBanner;