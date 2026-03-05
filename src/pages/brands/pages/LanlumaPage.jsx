import { Box, Container, Stack } from "@mui/system";
import image1 from "assets/lanluma/1.png";
import image from "assets/lanluma/cover-girl.png";
import background from 'assets/lanluma/background.png'
import image3 from 'assets/lanluma/3.png'

import girlImage from "assets/ellanse/girlImage.png";
import video1 from "assets/lanluma/video1.mp4";
import video2 from "assets/lanluma/video2.mp4";


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

const LanlumaPage = (props) => {
  const { t } = useTranslation();

  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <VideoHero
          name='lanluma'
          title={t(tokens.brands.lanluma.title)}
          description={t(tokens.brands.lanluma.description)}
          videoSrc={video1}
          actionPath="#"
        />
        <Box maxWidth="xxl" sx={{ backgroundColor: "#FFFFFF", }}>
          <Container maxWidth="xxl" sx={{ padding: { xs: "0", md: "1rem" } }}>
            <StorySection
              name="lanluma-story-section-1"
              backgroundColor="#FFFFFF"
              backImage={background_purple}

              title={t(tokens.brands.lanluma.whatIs)}
              paragraph={t(tokens.brands.lanluma.whatIsDescription)}
              passedVideo={video2}
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
                    {t(tokens.brands.lanluma.whatIs)}
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
                    {t(tokens.brands.lanluma.whatIsDescription)}
                  </Typography>
                  <Box sx={{ height: { xs: "2px", md: "5px" } }} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "1.25rem", md: "inherit" },
                    }}
                  >
                    {/* {t(tokens.brands.ellanse.box2Title)} */}
                  </Typography>
                  <p>
                    {/* {t(tokens.brands.ellanse.box1Description)} */}

                  </p>
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

        <Box maxWidth="xxl" sx={{ backgroundColor: { xs: "#EEE8F5", md: "#fff" } }}>
          <Container maxWidth="xxl">
            <StorySection
              name="lanluma-story-section-2"
              backgroundColor={{ xs: "#EEE8F5", md: "#fff" }}
              reverse={true}
              title={t(tokens.brands.lanluma.box2Title)}
              paragraph={t(tokens.brands.lanluma.box2p1)}
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
                <Stack spacing={2}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "inherit" },
                    }}
                  >
                    {t(tokens.brands.lanluma.box2Title)}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      fontSize: { xs: "0.875rem", md: "inherit" },
                    }}
                  >
                    {t(tokens.brands.lanluma.box2p1)}
                  </Typography>




                </Stack>
              }
            />
          </Container>
        </Box>







        <ImageHero
          name="lanluma-image-hero-1"

          sectionSx={{
            backgroundImage: `url(${background})`,

            backgroundSize: "cover"
          }}
          image={image}
          centerImage={false}
          imageDark={false}
          title={t(tokens.brands.lanluma.productoverviewTitle)}
          description={t(tokens.brands.lanluma.productoverviewDesc)}
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
                  {t(tokens.brands.lanluma.productoverviewTitle)}
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "inherit" },
                    color: "black",
                    width: { xs: "100%", md: "80%" }

                  }}
                >
                  {t(tokens.brands.lanluma.productoverviewDesc)}
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
                {/* <Box
                  component="ul"
                  sx={{
                    fontSize: { xs: "0.75rem", md: "inherit" },
                    pl: 2,
                    m: 0,
                  }}
                >
                  <li> {t(tokens.brands.ksurgery.benefits.item1)}</li>
                  <li> {t(tokens.brands.ksurgery.benefits.item2)}</li>
                  <li> {t(tokens.brands.ksurgery.benefits.item3)}</li>
                  <li> {t(tokens.brands.ksurgery.benefits.item4)}</li>
                  <li> {t(tokens.brands.ksurgery.benefits.item5)}</li>
                  <li> {t(tokens.brands.ksurgery.benefits.item6)}</li>
                </Box> */}
              </Stack>
            </>
          }
        />




        <Box maxWidth="xxl" sx={{ backgroundColor: "#EEE8F5" }}>
          <Container maxWidth="xxl">
            <StorySection
              name="lanluma-story-section-3"

              backgroundColor="#EEE8F5"

              title=""
              paragraph=""
              passedImage={image3}
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
                <Stack spacing={5}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "inherit" },
                    }}
                  >
                    {/* {t(tokens.brands.ellanse.box2Title)} */}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      fontSize: { xs: "0.875rem", md: "inherit" },
                    }}
                  >
                    {t(tokens.brands.lanluma.box3p1)}
                  </Typography>



                </Stack>
              }
            />
          </Container>
        </Box>




        <LatestArticles page="lanluma" />
      </main>
    </>
  );
};

LanlumaPage.propTypes = {};

export default LanlumaPage;
