import { Box, Container, Stack } from "@mui/system";
import logoImage from "assets/dimono/1.png";
import image from "assets/dimono/cover-girl.png";
import background from 'assets/dimono/background.png'
import backgroundRtl from 'assets/dimono/background-rtl.png'

import girlImage from "assets/ellanse/girlImage.png";
import video1 from "assets/dimono/video1.mp4";

import { Typography, useTheme } from "@mui/material";
import background_green from "assets/dynamics-gradient-green.png";
import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { ImageHero } from "layout/components/ImageHero";
import { Seo } from "layout/components/Seo";
import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import StorySection from "pages/about/components/StorySection";
import { useTranslation } from "react-i18next";
import KsurgeryProductComponent from "../components/KsurgeryProductComponent";
import LatestArticles from "../components/LatestArticles";
import DimonoProductComponent from "../components/DimonoProductComponent";
import DimonoApplicationArea from "../components/DimonoApplicationArea";
import InitColorSchemeScript from "@mui/system/InitColorSchemeScript/InitColorSchemeScript";
import './DimonoPage.css';

const DimonoPage = (props) => {
  const { t } = useTranslation();

  usePageView();
  useScrollToTop();
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  return (
    <>
      <Seo />
      <main className="dimono-main">
        <VideoHero
          name="dimono"
          title={t(tokens.brands.dimono.title)}
          description={t(tokens.brands.dimono.description)}
          videoSrc={video1}
          actionPath="#"
        />

        <Box sx={{ backgroundColor: { xs: "#fff", sm: "#E0FFF5", md: "#E0FFF5" } }}>
          <Container maxWidth="xl">
            <StorySection
              name='dimono-story-section-1'
              backgroundColor={{ xs: "transparent", sm: "#E0FFF5", md: "#E0FFF5" }}
              backImage={background_green}

              title={t(tokens.brands.ellanse.whatIs)}
              paragraph={t(tokens.brands.ellanse.whatIsDescription)}
              passedImage={logoImage}
              hideAction
              paragraphSx={{
                textAlign: "justify",
                textJustify: "inter-word",
                wordSpacing: "0.15em",
                letterSpacing: "0.02em",
                lineHeight: 1.7,
              }}
              component={
                <Stack spacing={2}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "inherit" },
                    }}
                  >
                    {t(tokens.brands.dimono.whatIs)}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                      wordSpacing: "0.15em",
                      letterSpacing: "0.02em",
                      lineHeight: 1.7,
                      fontSize: { xs: "0.875rem", md: "inherit" },
                    }}
                  >
                    {t(tokens.brands.dimono.whatIsDescription)}
                  </Typography>


                  {/* <ul
                    sx={{
                      mt: { xs: 2, md: "160px" },
                      fontSize: { xs: "0.75rem", md: "inherit" },
                    }}
                  >
                    <li>{t(tokens.brands.ksurgery.keyBenefit1)}</li>
                    <li>{t(tokens.brands.ksurgery.keyBenefit2)}</li>
                    <li>{t(tokens.brands.ksurgery.keyBenefit3)}</li>
                  </ul> */}
                </Stack>
              }
            />
          </Container>
        </Box>

        <DimonoProductComponent />
        <DimonoApplicationArea />

        <ImageHero
          name='dimono-image-hero-1'
          sectionSx={{
            backgroundImage: `url(${isRtl ? backgroundRtl : background})`,
            backgroundColor: { xs: "#e5e5e5", md: "transparent" },
            backgroundSize: "cover"
          }}
          image={image}
          centerImage={false}
          // imageCover={false}
          imageDark={false}
          title={t(tokens.brands.dimono.productoverviewTitle)}
          description={t(tokens.brands.dimono.productoverviewDesc)}
          actionPath="#"
          darken={false}
          descriptionSx={{ textAlign: "justify" }}
          component={
            <>

              <Stack spacing={2}>


                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2.25rem" },
                    color: "black",
                    paddingLeft: { xs: "inherit", md: "0" }
                  }}
                >
                  {t(tokens.brands.dimono.productoverviewTitle)}
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "0.875rem" },
                    color: "black",
                    width: "100%",
                    paddingLeft: { xs: "inherit", md: "0" }

                  }}
                >
                  {t(tokens.brands.dimono.productoverviewDesc)}
                </Typography>


              </Stack>
            </>
          }
        />













      </main>
    </>
  );
};

DimonoPage.propTypes = {};

export default DimonoPage;
