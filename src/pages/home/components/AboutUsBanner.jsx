import { Box, Container, Grid } from "@mui/system";

import logo from "assets/logo.png";
import { tokens } from "locales/tokens";
import StorySection from "pages/about/components/StorySection";
import { useTranslation } from "react-i18next";
import image from "assets/dynamics-gradient-green.png";
import image2 from "assets/dynamicshp.jpg";

const AboutUsBanner = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Box maxWidth="xxl" sx={{ backgroundColor: "#eee8f5" }}>
        <Container maxWidth="xxl">
          <StorySection
            name='about'
            title={t(tokens.about.title)}
            paragraph={t(tokens.about.paragraph)}
            backImage={image}
            passedImage={image2}
            hideAction={true}
          />
        </Container>
      </Box>
      {/* <Grid
        container
        spacing={2}
        alignItems="stretch"
        sx={{ backgroundColor: "#eee8f5" }}
      >
        <Grid offset={{ xs: 0, md: 1 }} size={{ xs: 12, md: 11 }}>
          <Box
            sx={{
              marginTop: { xs: "20px", md: "50px" },
              marginBottom: { xs: "20px", md: "50px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <img
              style={{
                height: "50px",
                maxWidth: "100%",
                
              }}
              src={logo}
              alt={"Dynamics"}
            />
          </Box>
        </Grid>
      </Grid> */}
    </>
  );
};

export default AboutUsBanner;
