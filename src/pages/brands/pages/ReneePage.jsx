import { Box, Container } from "@mui/system";
import background_green from "assets/dynamics-gradient-green.png";
import girlImage from "assets/renee/renee-girls.png";
import productImage from "assets/renee/renee-product.png";
import video from "assets/ReneeMovie1.mp4";
import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { Seo } from "layout/components/Seo";
import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import StorySection from "pages/about/components/StorySection";
import { useTranslation } from "react-i18next";
import ReneeProductComponent from "../components/ReneeProductComponent";

const ReneePage = (props) => {
  const { t } = useTranslation();

  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <VideoHero
          title={t(tokens.brands.renee.title)}
          description={t(tokens.brands.renee.description)}
          videoSrc={video}
        />
        <Box maxWidth="xxl" sx={{ backgroundColor: {xs:"white", md:"#E0FFF5"} }}>
          <Container maxWidth="xxl">
            <StorySection
              name="renee-story-1"
              backgroundColor={{xs:"white", md:"#E0FFF5"}}
              title={t(tokens.brands.renee.whatIs)}
              paragraph={t(tokens.brands.renee.whatIsDescription)}
              backImage={background_green}
              passedImage={productImage}
              hideAction
            />
          </Container>
        </Box>

        {/* <ReneeProductComponent /> */}

        <Box sx={{ display: "grid" }}>
          <Box sx={{ order: { xs: 2, md: 1 } }}>
            <ReneeProductComponent />
          </Box>

          <Box sx={{ order: { xs: 1, md: 2 }, backgroundColor: {xs:"white", md:"#E0FFF5"} }} maxWidth="xxl">
            <Container maxWidth="xl">
            <StorySection
              name="renee-story-2"
              backgroundColor= {{xs:"white", md:"#E0FFF5"}}
              title={t(tokens.brands.renee.keyBenefits)}
              paragraph={
                <>
                  <ul>
                    <li>{t(tokens.brands.renee.keyBenefit1)}</li>
                    <li>{t(tokens.brands.renee.keyBenefit2)}</li>
                    <li>{t(tokens.brands.renee.keyBenefit3)}</li>
                  </ul>
                </>
              }
              passedImage={girlImage}
              hideAction
              reverse
            />
            </Container>
          </Box>
        </Box>


      </main>
    </>
  );
};

ReneePage.propTypes = {};

export default ReneePage;
