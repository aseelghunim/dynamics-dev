import { Box, Container, Stack } from "@mui/system";
import logoImage from "assets/ellanse/box-1.svg";
import image from "assets/ellanse/cover-girl.png";
import background from "assets/ellanse/background.png";
import image3 from "assets/ellanse/3.png";

import icons from "assets/ksurgery/icons.svg";
import girlImage from "assets/ellanse/girlImage.png";
import video1 from "assets/ellanse/video1.mp4";

import { Typography, useMediaQuery } from "@mui/material";
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


const EllansePage = (props) => {
  const { t } = useTranslation();

  usePageView();
  useScrollToTop();

  // ✅ detect mobile
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      <Seo />
      <main>
        <VideoHero
          name="ellanse"
          title={t(tokens.brands.ellanse.title)}
          description={t(tokens.brands.ellanse.description)}
          videoSrc={video1}
          actionPath="#"
        />

        <Box maxWidth="xxl" sx={{ backgroundColor: { xs: "#E0FFF5", md: "#fff" } }}>
          <Container maxWidth="xxl">
            <StorySection
              name="ellanse-hero-image-1"
              backgroundColor={{ xs: "#E0FFF5", md: "#fff" }}
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
                    {t(tokens.brands.ellanse.whatIs)}
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
                    {t(tokens.brands.ellanse.whatIsDescription)}
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

                  <p>{/* {t(tokens.brands.ellanse.box1Description)} */}</p>
                </Stack>
              }
            />
          </Container>
        </Box>

        <Box maxWidth="xxl" sx={{ backgroundColor: "#E0FFF5" }}>
          <Container maxWidth="xxl">
            <StorySection
              name="ellanse-story-section-2"
              backgroundColor="#E0FFF5"
              reverse={true}
              title={t(tokens.brands.ellanse.box2Title)}
              paragraph={t(tokens.brands.ellanse.box2p1)}
              passedImage={girlImage}
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
                    {t(tokens.brands.ellanse.box2Title)}
                  </Typography>

                  <Typography
                    variant="body"
                    sx={{
                      fontSize: { xs: "0.875rem", md: "inherit" },
                    }}
                  >
                    {t(tokens.brands.ellanse.box2p1)}
                  </Typography>

                  <Typography
                    variant="body"
                    sx={{
                      fontSize: { xs: "0.875rem", md: "inherit" },
                    }}
                  >
                    {t(tokens.brands.ellanse.box2p2)}
                  </Typography>
                </Stack>
              }
            />
          </Container>
        </Box>

        <ImageHero
          name="ellanse-hero-image-1"
          sectionSx={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
          image={image}
          imageCover={false}
          centerImage={false}
          imageDark={false}
          title={t(tokens.brands.ellanse.productoverviewTitle)}
          description={t(tokens.brands.ellanse.productoverviewDesc)}
          actionPath="#"
          darken={false}
          descriptionSx={{ textAlign: "justify" }}
          component={
            <>
              {/* ✅ desktop keeps the existing inline SVG, mobile uses ellanse-logo-light.svg */}
              {isMobile ? (
                <svg width="174" height="49" viewBox="0 0 174 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M53.8711 35.4076V20.5625H62.5186V22.3396L55.8138 22.3113V27.0824H61.1913V28.8595L55.8138 28.8313V33.6587L63.1662 33.6305V35.4076H53.8711Z" fill="white" />
                  <path d="M71.3828 35.4083V20.5391H73.3255V33.6595L80.0866 33.6312V35.4083H71.3828Z" fill="white" />
                  <path d="M87.8009 35.4083V20.5391H89.7436V33.6595L96.5007 33.6312V35.4083H87.7969" fill="white" />
                  <path d="M109.571 24.1496L106.643 30.1014H112.531L109.575 24.1496H109.571ZM115.202 35.4366L113.428 31.8824H105.794L104.048 35.4366H101.965L109.599 20.0273L117.261 35.4366H115.202Z" fill="white" />
                  <path d="M126.242 24.5741L126.298 35.4379H124.355L124.384 20.1133L136.382 31.5412L136.325 20.5364H138.268L138.24 35.9698L126.242 24.57" fill="white" />
                  <path d="M147.11 32.2479C147.757 33.0095 149.169 34.0249 151.168 34.0249C152.914 34.0249 154.321 33.1223 154.321 31.5991C154.321 27.7911 146.969 28.5809 146.969 24.0637C146.969 21.5533 149.278 20.1953 151.727 20.1953C153.782 20.1953 155.194 21.0979 155.866 21.7749L154.88 23.1289C154.148 22.4519 153.079 21.8595 151.755 21.8595C150.291 21.8595 149.024 22.5365 149.024 23.9751C149.024 27.2471 156.405 26.3163 156.405 31.5951C156.405 33.6542 154.49 35.7456 151.108 35.7456C148.827 35.7456 146.744 34.5326 146.012 33.5736L147.11 32.2479Z" fill="white" />
                  <path d="M164.707 35.4076V20.5625H173.355V22.3396L166.65 22.3113V27.0824H172.031V28.8595L166.65 28.8313V33.6587L174.002 33.6305V35.4076H164.707Z" fill="white" />
                  <path d="M167.746 17.9456H165.863L169.608 13.3438H172.649L167.746 17.9456Z" fill="white" />
                  <path d="M22.0693 24.504C22.0693 12.7013 31.0868 2.96982 42.7308 2.02689C43.1571 3.50979 43.4226 5.03298 43.5392 6.57632C43.5794 7.14046 43.6036 7.70461 43.6036 8.27278C43.6036 18.2017 36.9752 27.091 27.487 29.8997C27.6841 30.5243 27.9174 31.1287 28.1748 31.7211C38.411 28.6223 45.5462 19.0076 45.5462 8.27278C45.5462 7.65222 45.5221 7.03569 45.4738 6.41916C45.329 4.47286 44.955 2.5588 44.3557 0.705181L44.1264 0L43.3864 0.0362664C30.3427 0.660855 20.1226 11.4078 20.1226 24.504C20.1226 26.6397 20.4001 28.715 20.9149 30.6895C19.0567 30.488 17.2749 30.0488 15.5977 29.404C7.57763 26.3254 1.94267 18.5483 1.94267 9.4736C1.94267 7.47492 2.21618 5.50041 2.75916 3.59844C7.91147 4.02558 12.7018 6.3023 16.3136 10.0579C16.8968 10.6664 17.4519 11.3151 17.9587 11.9881C18.2603 11.3433 18.5861 10.7147 18.932 10.0982C18.5379 9.61867 18.1356 9.15123 17.7093 8.70798C13.5786 4.41242 8.03213 1.88988 2.09954 1.60781L1.35947 1.57155L1.13021 2.27673C0.382099 4.59375 0 7.01554 0 9.4736C0 19.8095 6.69277 28.5981 16.0602 31.6324C17.8018 32.1965 19.6359 32.5552 21.5343 32.6922C24.9048 42.1819 33.9586 49 44.5729 49V47.0537C32.1607 47.0537 22.0652 36.9394 22.0652 24.504" fill="white" />
                </svg>

              ) : (
                <svg
                  style={{ marginBottom: "24px" }}
                  width="243"
                  height="68"
                  viewBox="0 0 243 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_646_828)">
                    <path
                      d="M75.2344 49.1384V28.5371H87.3111V31.0032L77.9474 30.9641V37.5851H85.4574V40.0513L77.9474 40.0121V46.7115L88.2154 46.6723V49.1384H75.2344Z"
                      fill="black"
                    />
                    <path
                      d="M99.6914 49.1388V28.5039H102.404V46.7118L111.847 46.6727V49.1388H99.6914Z"
                      fill="black"
                    />
                    <path
                      d="M122.621 49.1388V28.5039H125.334V46.7118L134.771 46.6727V49.1388H122.615"
                      fill="black"
                    />
                    <path
                      d="M153.02 33.5137L148.931 41.7732H157.154L153.026 33.5137H153.02ZM160.884 49.1772L158.407 44.2449H147.746L145.308 49.1772H142.398L153.06 27.793L163.76 49.1772H160.884Z"
                      fill="black"
                    />
                    <path
                      d="M176.302 34.1006L176.381 49.1769H173.668L173.707 27.9102L190.463 43.7694L190.384 28.4973H193.097L193.058 49.9151L176.302 34.095"
                      fill="black"
                    />
                    <path
                      d="M205.444 44.7533C206.348 45.8102 208.32 47.2195 211.111 47.2195C213.549 47.2195 215.515 45.9668 215.515 43.853C215.515 38.5685 205.247 39.6645 205.247 33.3958C205.247 29.9119 208.471 28.0273 211.892 28.0273C214.762 28.0273 216.734 29.28 217.672 30.2195L216.296 32.0984C215.273 31.1589 213.779 30.3369 211.931 30.3369C209.887 30.3369 208.117 31.2764 208.117 33.2727C208.117 37.8135 218.425 36.5218 218.425 43.8474C218.425 46.705 215.751 49.6073 211.027 49.6073C207.842 49.6073 204.932 47.9241 203.91 46.5931L205.444 44.7533Z"
                      fill="black"
                    />
                    <path
                      d="M230.025 49.1384V28.5371H242.102V31.0032L232.738 30.9641V37.5851H240.254V40.0513L232.738 40.0121V46.7115L243.006 46.6723V49.1384H230.025Z"
                      fill="black"
                    />
                    <path
                      d="M234.266 24.9018H231.637L236.866 18.5156H241.113L234.266 24.9018Z"
                      fill="black"
                    />
                    <path
                      d="M30.8209 34.0056C30.8209 17.6263 43.4143 4.12138 59.6757 2.81283C60.2711 4.87072 60.6419 6.98454 60.8048 9.12632C60.8609 9.90921 60.8946 10.6921 60.8946 11.4806C60.8946 25.2595 51.6377 37.5957 38.387 41.4934C38.6623 42.3602 38.9881 43.199 39.3476 44.0211C53.643 39.7207 63.6077 26.378 63.6077 11.4806C63.6077 10.6194 63.574 9.76382 63.5066 8.90822C63.3044 6.20724 62.782 3.55099 61.945 0.978618L61.6249 0L60.5913 0.050329C42.3752 0.917105 28.1022 15.8313 28.1022 34.0056C28.1022 36.9694 28.4898 39.8493 29.2088 42.5895C26.6137 42.3099 24.1253 41.7003 21.783 40.8056C10.5826 36.5332 2.71304 25.7405 2.71304 13.147C2.71304 10.3734 3.09501 7.63322 3.85331 4.99375C11.0488 5.58651 17.7387 8.74605 22.7828 13.9579C23.5973 14.8023 24.3725 15.7026 25.0802 16.6365C25.5015 15.7418 25.9565 14.8694 26.4395 14.0138C25.8891 13.3484 25.3274 12.6997 24.732 12.0845C18.9632 6.12336 11.2173 2.6227 2.93211 2.23125L1.89857 2.18092L1.5784 3.15954C0.533621 6.375 0 9.73586 0 13.147C0 27.4908 9.3468 39.6872 22.429 43.898C24.8611 44.6809 27.4225 45.1786 30.0738 45.3687C34.7809 58.5382 47.4249 68 62.2484 68V65.299C44.9141 65.299 30.8152 51.2628 30.8152 34.0056"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_646_828">
                      <rect width="243" height="68" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}

              <Stack spacing={2}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    color: { xs: "white", md: "black" },
                  }}
                >
                  {t(tokens.brands.ellanse.productoverviewTitle)}
                </Typography>

                <Typography
                  variant="body"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "inherit" },
                    color: { xs: "white", md: "black" },
                    width: { xs: "100%", md: "80%" },
                  }}
                >
                  {t(tokens.brands.ellanse.productoverviewDesc)}
                </Typography>
              </Stack>
            </>
          }
        />

        <Box maxWidth="xxl" sx={{ backgroundColor: "#E0FFF5" }}>
          <Container maxWidth="xxl">
            <StorySection
              name="ellanse-story-section-3"

              backgroundColor="#E0FFF5"
              title=""
              paragraph=""
              passedImage={image3}
              backImage={background_green}
              paragraphSx={{
                textAlign: "justify",
                textJustify: "inter-word",
                wordSpacing: "0.15em",
                letterSpacing: "0.02em",
                lineHeight: 1.7,
              }}
              component={
                <Stack spacing={5} >
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
                    {t(tokens.brands.ellanse.box3p1)}
                  </Typography>
                </Stack>
              }
            />
          </Container>
        </Box>

        <LatestArticles page="ellanse" />
      </main>
    </>
  );
};

EllansePage.propTypes = {};

export default EllansePage;