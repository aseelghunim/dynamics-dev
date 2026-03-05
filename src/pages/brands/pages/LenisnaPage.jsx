import { Box, Container } from "@mui/system";
import background_green from "assets/dynamics-gradient-green.png";
import heroProductImage from "assets/lenisna/lenisna-hero-girl.png";
import productImage from "assets/lenisna/lenisnaProduct.png";
import girlImage from "assets/lenisna/lenisnaGirl.png";
import image from "assets/lenisna/lenisnaHeroImage.png";
import video from "assets/LeisnaMovie.mp4";
import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { ImageHero } from "layout/components/ImageHero";
import { Seo } from "layout/components/Seo";
import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import StorySection from "pages/about/components/StorySection";
import { useTranslation } from "react-i18next";
import LenisnaProductComponent from "../components/LenisnaProductComponent";
import FaceInjectionPointsLenisna from "../components/FaceInjectionPointsLenisna";

const LenisnaPage = (props) => {
  const { t } = useTranslation();

  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <VideoHero
          title={t(tokens.brands.lenisna.pageTitle)}
          description={t(tokens.brands.lenisna.pageDescription)}
          videoSrc={video}
          actionPath="#"
        />

        <ImageHero
        name='leninsa-hero-1'
        darken={true}
        
          image={image}
          title={t(tokens.brands.lenisna.whatIs)}
          description={t(tokens.brands.lenisna.whatIsDescription)}
          actionPath="#"
        
        />
        <LenisnaProductComponent />
        <FaceInjectionPointsLenisna />
        {false && (
          <Box maxWidth="xxl" sx={{ backgroundColor: "#E9C1CA" }}>
            <Container maxWidth="xxl">
              <StorySection
                backgroundColor="#E9C1CA"
                title2={t(tokens.brands.lenisna.results)}
                paragraph2={
                  <>
                    <ul>
                      <li>{t(tokens.brands.lenisna.result1)}</li>
                      <li>{t(tokens.brands.lenisna.result2)}</li>
                      <li>{t(tokens.brands.lenisna.result3)}</li>
                    </ul>
                  </>
                }
                backImage={background_green}
                title={t(tokens.brands.lenisna.application)}
                paragraph={t(tokens.brands.lenisna.applicationDescription)}
                passedImage={girlImage}
                hideAction
                paragraphSx={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  wordSpacing: "0.15em",
                  letterSpacing: "0.02em",
                  lineHeight: 1.7,
                }}
              />
            </Container>
          </Box>
        )}

        {false && (
          <Box maxWidth="xxl" sx={{ backgroundColor: "#E9C1CA" }}>
            <Container maxWidth="xxl">
              <StorySection
                backgroundColor="#E9C1CA"
                title={t(tokens.brands.lenisna.keyBenefits)}
                paragraph={
                  <>
                    <ul>
                      <li>{t(tokens.brands.lenisna.keyBenefit1)}</li>
                      <li>{t(tokens.brands.lenisna.keyBenefit2)}</li>
                      <li>{t(tokens.brands.lenisna.keyBenefit3)}</li>
                    </ul>
                  </>
                }
                passedImage={productImage}
                reverse
                hideAction
              />
            </Container>
          </Box>
        )}
        <ImageHero
        name='lensina-image-hero-2'
          image={heroProductImage}
          title={t(tokens.brands.lenisna.howIs)}
          description={t(tokens.brands.lenisna.howIsDescription)}
          actionPath="#"
          darken={false}
        />
      </main>
    </>
  );
};

LenisnaPage.propTypes = {};

export default LenisnaPage;
