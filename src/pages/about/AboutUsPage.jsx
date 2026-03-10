import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/system";
import { usePageView } from "hooks/use-page-view";
import { Seo } from "layout/components/Seo";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import { AboutUsHero } from "./components/AboutUsHero";
import ValuesBanner from "./components/ValuesBanner";
import product from "assets/about-hero-image-girl.png";
import productRtl from "assets/aboutRtl.png";
import productBg from "assets/about-hero-image-bg.svg"

import background_dark from "assets/dynamics-gradient-dark.png";
import background_green from "assets/dynamics-gradient-green.png";
import useScrollToTop from "hooks/useScrollToTop";
import DualSection from "./components/DualSection";
import { Button, useTheme } from "@mui/material";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { RouterLink } from "layout/components/router-link";
import { paths } from "paths";

const AboutUsPage = (props) => {
  usePageView();
  const { t } = useTranslation();
  useScrollToTop();
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const isTablet = useMediaQuery("(max-width: 991px)");
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <>
      <Seo />
      <main>
        <AboutUsHero />
        <Box maxWidth="xxl" sx={{ backgroundColor: "#eee8f5", p: { xs: 0, sm: "0", md: 0 } }}>
          <Container maxWidth="xxl" >
            <DualSection
              name='about-us-page-dual-section-1'
              reverse={true}
              title1={t(tokens.about.title)}
              paragraph1={t(tokens.about.page.card1)}
              title2={t(tokens.about.page.card2.title)}
              paragraph2={t(tokens.about.page.card2.paragraph)}
              backImage2={background_green}
            />
          </Container>
          <Container maxWidth="xl">
            <ValuesBanner />
          </Container>
          <Container maxWidth="xxl">
            <DualSection
              name='about-us-page-dual-section-2'
              reverse={true}
              title1={t(tokens.about.page.card3.title)}
              paragraph1={t(tokens.about.page.card3.paragraph)}
              title2={t(tokens.about.page.card4.title)}
              paragraph2={t(tokens.about.page.card4.paragraph)}
              backImage1={background_dark}
              backImage2={background_green}
            />
          </Container>
          <Container
            maxWidth="xxl"
            sx={{
              display: "block",
              backgroundImage: `url(${productBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: { xs: "center center", sm: "top center" },
              position: "relative",
              height: "100%",

              paddingTop: { xs: 2, sm: 2, md: 5 },
              paddingBottom: { xs: 2, sm: 2, md: 0 },

              "::before": {
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${product})`,
                // backgroundSize: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: isTablet ? "50%" : "contain",
                backgroundPosition: "right bottom",
                transform: isRtl ? "scaleX(-1)" : "none",
                zIndex: 0,
                display: isMobile ? 'none' : 'block'
              },
              "@media (max-width: 991px)": {
                width: "100vw",
                maxWidth: "100%",
                marginLeft: 0,
                marginRight: 0,

              },
            }}
          >
            <Box maxWidth="xxl">
              <Container maxWidth="xxl" sx={{

                "@media (max-width:991px)": {
                  paddingRight: "0!important",
                  paddingLeft: "0!important"
                }
              }}>
                <Grid
                  container
                  spacing={2}
                  alignItems="stretch"
                  sx={{ padding: { xs: 0, sm: 5 } }}
                >
                  <Grid size={{ xs: 12, }}>
                    <Box
                      sx={{
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "white",
                      }}
                    >
                      <Stack className="bebebe" direction="row" justifyContent="center">
                        <Box
                          sx={{
                            width: { xs: "100%", },
                            minHeight: { xs: "auto", sm: "auto", md: "400px" },
                            display: "flex",
                          }}
                        >
                          <Stack
                            spacing={5}
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            sx={{
                              height: "100%",
                              width: "100%",
                              px: { xs: 2, sm: 3 },
                              py: { xs: 3, sm: 0, md: 0 },
                              pt: { xs: 3, sm: 0, },
                              textAlign: "left",
                            }}
                          >
                            <Stack
                              spacing={3}
                              direction={"column"}
                              sx={{ width: "100%" }}
                            >
                              <Box
                                maxWidth="xxl"
                                sx={{
                                  height: { xs: "auto", },
                                  width: "100%",
                                }}
                              >
                                <Stack
                                  spacing={3}
                                  sx={{
                                    color: "#fff",
                                    height: "100%",
                                    ml: { xs: 0, sm: "0" },
                                  }}
                                  justifyContent="center"
                                >
                                  <QuoteTypography
                                    variant="body1"
                                    sx={{
                                      fontSize: "15px",
                                      "@media (min-width: 768px) and (max-width:991px)": {
                                        // fontSize: "15px!important",
                                        fontSize: "12px!important"
                                      },
                                      "@media (max-width: 767px)": {
                                        fontSize: "0.875rem!important",
                                      },
                                    }}
                                  >
                                    {t(tokens.about.page.product.title)}
                                  </QuoteTypography>
                                  <StyledTypography
                                    variant="h2"

                                    sx={{

                                      fontSize: "2.5rem",
                                      "@media (max-width: 991px)": {
                                        fontSize: "1.25rem!important",
                                      },
                                    }}
                                  >
                                    {t(tokens.about.page.product.subtitle)}
                                  </StyledTypography>
                                  <StyledTypography
                                    variant="body2"
                                    sx={{
                                      textAlign: "justify",
                                      whiteSpace: "normal",
                                      wordBreak: "break-word",
                                      fontSize: "1.125rem!important",
                                      width: { xs: "100%", sm: "60%" },
                                      "@media (max-width: 991px)": {
                                        fontSize: "0.875rem!important",
                                        lineHeight: 1.6,
                                      },
                                    }}
                                  >
                                    {t(tokens.about.page.product.paragraph)}
                                  </StyledTypography>
                                  <Box>
                                    <Button
                                      LinkComponent={RouterLink}
                                      href={paths.ourBrands}
                                      sx={{
                                        color: "white",
                                        borderColor: "white",
                                        height: { xs: "41px", sm: "45px", md: "41px" },
                                        width: {  xs: "175px" },
                                        marginTop: "60px!important",
                                        borderRadius: "8px",

                                        // "@media (min-width: 768px) and (max-width:991px)": {
                                        // },
                                        "@media (max-width: 991px)": {
                                          fontSize: "0.75rem",
                                          marginTop: "24px!important",

                                        },
                                        "&:hover": {
                                          borderColor: "white",
                                          color: "#ab92e1",
                                          backgroundColor: "white",
                                        },
                                      }}
                                      size="large"
                                      variant="outlined"
                                    >
                                      {t(tokens.common.buttons.readMore)}
                                    </Button>
                                  </Box>
                                </Stack>
                              </Box>
                            </Stack>
                          </Stack>
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Container>
        </Box>
      </main>
    </>
  );
};

AboutUsPage.propTypes = {};
export default AboutUsPage;
