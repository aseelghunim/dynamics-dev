import { Box, Container, Stack } from "@mui/system";
import image1 from "assets/drcyj/1.webp";
import image from "assets/drcyj/cover-girl.png";
import background from 'assets/lanluma/background.png'
import image3 from 'assets/lanluma/3.png'

import video1 from "assets/drcyj/video1.mp4";


import { Typography } from "@mui/material";
import background_green from "assets/dynamics-gradient-green.png";
import background_purple from "assets/gradient.png";

import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { ImageHero } from "layout/components/ImageHero";
import { Seo } from "layout/components/Seo";
import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import StorySection from "pages/about/components/StorySection";
import { useTranslation } from "react-i18next";
import LatestArticles from "../components/LatestArticles";
import DrcyjProductComponent from "../components/DrcyjProductComponent";

const DRCYJPage = (props) => {
  const { t } = useTranslation();

  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <VideoHero
          name='drcyj'
          title={t(tokens.brands.drcyj.title)}
          description={t(tokens.brands.drcyj.description)}
          videoSrc={video1}
          actionPath="#"
        />


        <Box maxWidth="xxl" sx={{ backgroundColor: "#fff" }}>
          <Container maxWidth="xxl">
            <StorySection
              name='drcyj-story-section-1'
              backgroundColor="#fff"
              title={t(tokens.brands.drcyj.box2Title)}
              paragraph={t(tokens.brands.drcyj.box2p1)}
              passedImage={image1}
              // hideAction
              backImage={background_purple}
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
                    {t(tokens.brands.drcyj.whatIs)}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      fontSize: { xs: "0.875rem", md: "inherit" },
                    }}
                  >
                    {t(tokens.brands.drcyj.whatIsDescription)}
                  </Typography>




                </Stack>
              }
            />
          </Container>
        </Box>



        <DrcyjProductComponent />



        <ImageHero
          name='drcyj-image-hero-1'
          sectionSx={{

            backgroundImage: `url(${background})`,

            backgroundSize: "cover"
          }}
          image={image}
          imageCover={false}
          centerImage={false}
          imageDark={false}
          title={t(tokens.brands.drcyj.productoverviewTitle)}
          description={t(tokens.brands.drcyj.productoverviewDesc)}
          actionPath="#"
          darken={false}
          descriptionSx={{ textAlign: "justify" }}
          component={
            <>

              <Stack spacing={2}>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "inherit" },
                    color: "black"
                  }}
                >
                  {t(tokens.brands.drcyj.productoverviewTitle)}
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "inherit" },
                    color: "black",
                    width: {xs:"100%",md:"80%"}
                  }}
                >
                  {t(tokens.brands.drcyj.productoverviewDesc)}
                </Typography>
                {/* <Typography
                  variant="body2"
                  sx={{
                    textAlign: "justify",
                    fontSize: { xs: "0.875rem", md: "inherit" },
                  }}
                >
                  {t(tokens.brands.ksurgery.benefits.description)}
                </Typography> */}
                
              </Stack>
            </>
          }
        />

      </main>
    </>
  );
};

DRCYJPage.propTypes = {};

export default DRCYJPage;
