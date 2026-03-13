import { Box, Container, Grid } from "@mui/system";

import image1 from "assets/val1.png";
import image2 from "assets/val2.png";
import image3 from "assets/val3.png";
import image4 from "assets/val4.png";
import image5 from "assets/val5.png";
import image6 from "assets/val6.png";

import { Card, CardContent, Typography } from "@mui/material";
import { QuoteTypography } from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import './ValuesBanner.css'
const ValuesBanner = (props) => {
  const { t } = useTranslation();
  const items1 = [
    {
      image: image1,
      title: t(tokens.about.page.values.value1.title),
      description: t(tokens.about.page.values.value1.paragraph),
    },
    {
      image: image2,
      title: t(tokens.about.page.values.value2.title),
      description: t(tokens.about.page.values.value2.paragraph),
    },
    {
      image: image3,
      title: t(tokens.about.page.values.value3.title),
      description: t(tokens.about.page.values.value3.paragraph),
    },
    {
      image: image4,
      title: t(tokens.about.page.values.value4.title),
      description: t(tokens.about.page.values.value4.paragraph),
    },
    {
      image: image5,
      title: t(tokens.about.page.values.value5.title),
      description: t(tokens.about.page.values.value5.paragraph),
    },
    {
      image: image6,
      title: t(tokens.about.page.values.value6.title),
      description: t(tokens.about.page.values.value6.paragraph),
    },
  ];

  return (
    <Box
    className='values-banner'
      maxWidth="xxl"
      sx={{
        backgroundColor: "#eee8f5",
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          position: "relative",
          height: "100%",
          padding: { xs: 0, sm: 5,md:3 },
          paddingTop: { xs: 0,sm:2, md: 5 },
          margin: 0,
        }}
      >
        <Grid container spacing={2} alignItems="stretch" >
          <Grid className="ff1" size={12} sx={{ paddingTop: 1, display: { xs: "none", sm: "block" } }}>
            <Grid
              size={{ xs: 12, sm: 3 }}
              sx={{
                paddingTop: 1, paddingBottom: 1,

                "@media (min-width: 768px) and (max-width:991px)": {
                  // fontSize: "15px!important",
                  width: "100%"
                },

              }}
            >
              <QuoteTypography
                sx={{
                  color: "#00226D",
                  fontSize: "15px!important",
                  "@media (min-width: 768px) and (max-width:991px)": {
                   
                    width: "100%"
                  },
                  "@media (max-width: 767px)": {
                    fontSize: "1rem",

                  },
                }}
                variant="h6"
              >
                {t(tokens.about.page.values.title)}
              </QuoteTypography>
            </Grid>
          </Grid>
        {items1.map((item, index) => {
            return (
              <Grid key={item.title + index} size={{ xs: 12, sm: 6, md: 4 }} >
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                  }}
                >
                  <CardContent sx={{ padding: { xs: 4, sm: 3,md:3 },pb:{ xs: 4, sm: 2,md:"24px!important" } }}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{
                        fontSize: "15px!important",
                        fontWeight: 600,
                        marginBottom: "24px",
                        "@media (min-width: 768px) and (max-width:991px)": {
                          fontSize: "15px!important",

                        },
                        "@media (max-width: 768px)": {
                          fontSize: "1rem",
                          fontWeight: 600,
                          marginBottom: "16px"
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      component="div"
                      sx={{
                        color: { xs: "#000", sm: "text.secondary" },
                        fontSize: { xs: "0.875rem", sm: "10px", md: "0.875rem" },
                        textAlign: { xs: "left", sm: "justify" },
                        textJustify: "inter-word",
                        wordSpacing: "0.15em",
                        letterSpacing: "0.02em",
                        lineHeight: { xs: "1.7", sm: "1.4", md: "1.4" },
                        display: "block",
                        width: "100%",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
    </Box >
  );
};

ValuesBanner.propTypes = {};

export default ValuesBanner;
