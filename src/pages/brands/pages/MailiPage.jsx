import { Box, Container, Stack } from "@mui/system";
import logoImage from "assets/maili/1.png";
import image from "assets/maili/2.png";

import video1 from "assets/maili/video1.mp4";
import video2 from "assets/maili/video2.mp4";


import { Typography } from "@mui/material";
import background_green from "assets/dynamics-gradient-green.png";
import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { ImageHero } from "layout/components/ImageHero";
import { Seo } from "layout/components/Seo";
import SharedSection from "layout/components/SharedSection";
import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import StorySection from "pages/about/components/StorySection";
import { useTranslation } from "react-i18next";
import KsurgeryProductComponent from "../components/KsurgeryProductComponent";
import LatestArticles from "../components/LatestArticles";

const MailiPage = (props) => {
  const { t } = useTranslation();

  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <VideoHero
          name='maili'
          title={t(tokens.brands.maili.title)}
          description={t(tokens.brands.maili.description)}
          videoSrc={video1}
          actionPath="#"
        />
        <Box maxWidth="xxl" sx={{ backgroundColor: "#E0FFF5" }}>
          <Container maxWidth="xxl">
            <StorySection
              name='maili-story-section-1'
              backgroundColor="#E0FFF5"
              backImage={background_green}

              title={t(tokens.brands.maili.whatIs)}
              paragraph={t(tokens.brands.maili.whatIsDescription)}
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
                    {t(tokens.brands.maili.whatIs)}
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
                    {t(tokens.brands.maili.whatIsDescription)}
                  </Typography>
                  <Box sx={{ height: { xs: "2px", md: "5px" } }} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "1.25rem", md: "inherit" },
                    }}
                  >
                    {/* {t(tokens.brands.maili.box2Title)} */}
                  </Typography>
                  <p>
                    {/* {t(tokens.brands.maili.box1Description)} */}

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





        <ImageHero
          name='maili-image-hero-1'
          sectionSx={{
            backgroundImage: `url(${image})`,

            backgroundSize: "cover"
          }}
          // image={image}
          imageCover={false}
          imageDark={false}
          title={t(tokens.brands.maili.productoverviewTitle)}
          description={t(tokens.brands.maili.productoverviewDesc)}
          actionPath="#"
          darken={false}
          descriptionSx={{ textAlign: "justify" }}
          component={
            <>

              <Stack spacing={2}> 


                <Typography
                  variant="h3"
                  sx={{
                    fontWeight:{xs:"400",md:"700"},
                    fontSize: { xs: "2.25rem", md: "1.5rem" },
                    color: "white"
                  }}
                >
                  {t(tokens.brands.maili.productoverviewTitle)}
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: { xs: "1.125rem", md: "inherit" },
                    color: "white",
                    width: { xs: "100%", md: "80%" },
                    textAlign: { xs: "left", md: "justify" }
                  }}
                >
                  {t(tokens.brands.maili.productoverviewDesc)}
                </Typography>


              </Stack>
            </>
          }
        />
        <Box maxWidth="xxl" sx={{ backgroundColor: "#E0FFF5" }}>
          <Container maxWidth="xxl">
            <StorySection
            name="maili-story-section-2"
              backgroundColor="#E0FFF5"
              reverse={true}
              title={t(tokens.brands.maili.box2Title)}
              paragraph={t(tokens.brands.maili.box2p1)}
              // passedImage={girlImage}
              passedVideo={video2}
              // hideAction
              backImage={background_green}
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
                    {t(tokens.brands.maili.box2Title)}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      fontSize: { xs: "0.875rem", md: "inherit" },
                    }}
                  >
                    {t(tokens.brands.maili.box2p1)}
                  </Typography>




                </Stack>
              }
            />
          </Container>
        </Box>
















        <LatestArticles page="maili" />
      </main>
    </>
  );
};

MailiPage.propTypes = {};

export default MailiPage;
