import { Box, Container, Stack, useMediaQuery } from "@mui/system";
import image2 from "assets/ksurgery/cover-girl-2.svg";
import image from "assets/ksurgery/cover-girl.png";
import icons from "assets/ksurgery/icons.svg";
import girlImage from "assets/ksurgery/ksurgery-filler.jpg";
import productImage from "assets/ksurgery/ksurgery-product.jpg";
import video2 from "assets/ksurgery/kusrgery-movie2.mp4";

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
import "./KsurgeryPage.css"
const KsurgeryPage = (props) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:767px)");
  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <VideoHero
          name='ksurgery'
          title={t(tokens.brands.ksurgery.title)}
          description={t(tokens.brands.ksurgery.description)}
          videoSrc={video2}
          actionPath="#"
        />

        {/* what is */}
        <Box maxWidth="xl" sx={{
          backgroundColor: "#EEE8F5",
          "@media(min-width: 768px) ": {
            backgroundColor: "#E0FFF5!important"
          }
        }}>
          <Container maxWidth="xl">
            <StorySection
              name="ksurgery-story-1"
              backgroundColor="#EEE8F5"

              title={t(tokens.brands.ksurgery.whatIs)}
              paragraph={t(tokens.brands.ksurgery.whatIsDescription)}
              passedImage={productImage}
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
                      fontSize: { xs: "1.5rem", sm: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    {t(tokens.brands.ksurgery.whatIs)}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                      wordSpacing: "0.15em",
                      letterSpacing: "0.02em",
                      lineHeight: 1.7,
                      fontSize: { xs: "0.875rem", sm: "0.875rem", md: "0.875rem" },
                    }}
                  >
                    {t(tokens.brands.ksurgery.whatIsDescription)}
                  </Typography>
                  <Box sx={{ height: { xs: "2px", md: "5px" } }} />
                  {/* <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "1.25rem", md: "inherit" },
                    }}
                  >
                    {t(tokens.brands.ksurgery.keyBenefits)}
                  </Typography>
                  <ul
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


        {!isMobile && (
          <>

            {/* how is section - opera line */}
            <SharedSection
              name="ksurgery-shared-section"
              title={t(tokens.brands.ksurgery.howIs)}
              description={t(tokens.brands.ksurgery.howIsDescription)}
              background="linear-gradient(to right, #6bb6b6, #a9e0eb)"
              descriptionSx={{ textAlign: { xs: "center", sm: "justify" } }}
            />
          </>

        )}




        <Box maxWidth="xl" sx={{
          backgroundColor: { xs: "#eee8f5", sm: "#E0FFF5" }
        }}>
          <Container maxWidth="xl">
            <StorySection
              name="ksurgery-story-2"
              backgroundColor={{ backgroundColor: { xs: "#eee8f5" } }}
              reverse={true}
              title={t(tokens.brands.ksurgery.opera)}
              paragraph={t(tokens.brands.ksurgery.applicationDescription)}
              passedImage={girlImage}
              hideAction
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
                      fontSize: { xs: "1.5rem", sm: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    {t(tokens.brands.ksurgery.opera)}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      textAlign: "justify",
                      fontSize: { xs: "0.875rem", sm: "0.875rem", md: "1.125rem" },
                      "@media(min-width: 768px) and (max-width: 991px)": {
                        marginTop: "20px!important",
                        lineHeight: "1.4!important"
                      }
                    }}
                  >
                    {t(tokens.brands.ksurgery.operaDescription)}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      "@media(min-width: 768px) and (max-width: 991px)": {
                        marginTop: "0!important",
                        lineHeight: "1.4!important"
                      },
                      textAlign: "justify",
                      fontSize: { xs: "0.875rem", md: "1.125rem" },
                    }}
                  >
                    {t(tokens.brands.ksurgery.operaDescription1)}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      "@media(min-width: 768px) and (max-width: 991px)": {
                        marginTop: "0!important",
                        lineHeight: "1.4!important"
                      },
                      textAlign: "justify",
                      fontSize: { xs: "0.875rem", md: "1.125rem" },
                    }}
                  >
                    {t(tokens.brands.ksurgery.operaDescription2)}
                  </Typography>
                </Stack>
              }
            />
          </Container>
        </Box>

        {isMobile && (
          <>

            {/* how is section - opera line */}
            <SharedSection
              name="ksurgery-shared-section"
              title={t(tokens.brands.ksurgery.howIs)}
              description={t(tokens.brands.ksurgery.howIsDescription)}
              background="linear-gradient(to right, #6bb6b6, #a9e0eb)"
              descriptionSx={{ textAlign: { xs: "center", sm: "justify" } }}
            />
          </>

        )}

        <Box
          component={"img"}
          src={icons}
          className="icons"
          maxWidth="xl"
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
            "@media (max-width: 991px)": {
              width: "100vw",
              maxWidth: "100%",
            },
          }}
        />



        <KsurgeryProductComponent collection={1} />

        <SharedSection
          name="ksurgery-shared-section-2"
          title={t(tokens.brands.ksurgery.skinbooster1)}
          description={t(tokens.brands.ksurgery.description3)}
          descriptionSx={{ textAlign: { xs: "center", md: "justify" } }}
        />

        <KsurgeryProductComponent collection={2} />

        <ImageHero
          name='ksurgery-image-hero'
          image={image}
          centerImage={false}
          title={t(tokens.brands.ksurgery.howIs)}
          description={t(tokens.brands.ksurgery.howIsDescription)}
          actionPath="#"
          darken={false}
          descriptionSx={{ textAlign: "justify" }}
          component={
            <>
              <Stack spacing={2} className='ksurgery-stack'>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "inherit" },
                  }}
                >
                  {t(tokens.brands.ksurgery.skinbosoter)}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1rem", md: "1.25rem" },
                    "@media(min-width: 768px) and (max-width: 991px)": {
                      marginTop: "10px!important",
                      marginBottom: "22px",
                      fontWeight: "400"
                    }
                  }}
                >
                  {t(tokens.brands.ksurgery.benefits.title)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "justify",
                    fontSize: { xs: "0.875rem", sm: "0.875rem", md: "0.875rem" },
                    "@media(min-width: 768px) and (max-width: 991px)": {
                      lineHeight: "1.4"
                    }
                  }}
                >
                  {t(tokens.brands.ksurgery.benefits.description)}
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "0.875rem" },
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
                </Box>
              </Stack>
            </>
          }
        />

        {false && (
          <ImageHero
            image={image2}
            title={t(tokens.brands.ksurgery.howIs)}
            description={t(tokens.brands.ksurgery.howIsDescription)}
            actionPath="#"
            actionLabel={t(tokens.common.buttons.readMore)}
            darken={false}
          />
        )}
      </main>
    </>
  );
};

KsurgeryPage.propTypes = {};

export default KsurgeryPage;
