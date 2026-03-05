import { Button, Typography } from "@mui/material";
import { Box, Container, Grid, Stack } from "@mui/system";

import image from "assets/gradient.png";
import { tokens } from "locales/tokens";
import { buttonStyle } from "pages/home/components/brands/styles";
import { useTranslation } from "react-i18next";
import './DualSection.css';

const TitleBox = ({
  title,
  paragraph,
  title2,
  paragraph2,
  backImage,
  hideAction = true,
  component,
}) => {
  const { t } = useTranslation();

  return (
    <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }} className="test">
      {" "}
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${backImage || image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          height: "100%",
          display: "flex",
        }}
      >
        <Stack direction="row" justifyContent="center" sx={{ width: "100%" }}>
          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              minHeight: { md: "660px" },
              display: "flex",
              height: "100%",
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
                px: { xs: 4, md: 6 },
                py: { xs: 4, md: 8 },
                pt: { xs: 4, md: 18 },
                textAlign: "left",
              }}
            >
              {component ? (
                <Box
                  sx={{
                    width: "100%",
                    "& > *": {
                      width: "100%",
                    },
                  }}
                >
                  {component}
                </Box>
              ) : (
                <Stack spacing={3} direction={"column"} sx={{ width: "100%" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      pt: { xs: 0, md: 2 },
                      "@media (max-width: 899px)": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "justify",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                      "@media (max-width: 899px)": {
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                      },
                    }}
                  >
                    {paragraph}
                  </Typography>
                  {title2 && (
                    <Typography
                      variant="h3"
                      sx={{
                        "@media (max-width: 899px)": {
                          fontSize: "1.5rem",
                        },
                      }}
                    >
                      {title2}
                    </Typography>
                  )}
                  {paragraph2 && (
                    <Typography
                      variant="body2"
                      sx={{
                        "@media (max-width: 899px)": {
                          fontSize: "0.875rem",
                          lineHeight: 1.6,
                        },
                      }}
                    >
                      {paragraph2}
                    </Typography>
                  )}

                  {hideAction && (
                    <Button sx={buttonStyle} size="large" variant="outlined">
                      {t(tokens.common.buttons.readMore)}
                    </Button>
                  )}
                </Stack>
              )}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};

const DualSection = ({
  name = 'undefined',
  title1,
  paragraph1,
  backImage1,
  title2,
  paragraph2,
  backgroundColor = "#eee8f5",
  backImage2,
  hideAction = false,
  component = undefined,
}) => {
  return (
    <Box
      className={name ?? ""}
      maxWidth="xxl"
      sx={{
        backgroundColor: { backgroundColor },
        position: "relative",
        height: "100%",
        paddingTop: { xs: 2, md: 5 },
        paddingBottom: { xs: 2, md: 5 },
      }}
    >
      <Container maxWidth="xxl" className='container'>
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          sx={{
            paddingTop: { xs: 2, md: 5 },
            paddingBottom: { xs: 2, md: 5 },

            paddinLeft:{xs:0,md:5},
            paddingRight:{xs:0,md:5}
            
          }}
        >
          <TitleBox
            title={title1}
            paragraph={paragraph1}
            backImage={backImage1}
            hideAction={hideAction}
            component={component}
          />
          <TitleBox
            title={title2}
            paragraph={paragraph2}
            backImage={backImage2}
            hideAction={hideAction}
            component={component}
          />
        </Grid>
      </Container>
    </Box>
  );
};

DualSection.propTypes = {};

export default DualSection;
