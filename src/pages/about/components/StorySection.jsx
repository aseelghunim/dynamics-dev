import { Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import Grid from "@mui/material/Grid";

import image from "assets/gradient.png";
import image2 from "assets/image-2.png";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import { buttonStyle } from "pages/home/components/brands/styles";
import './StorySection.css'
const TitleBox = ({
  className,
  title,
  paragraph,
  title2,
  paragraph2,
  backImage,
  hideAction = true,
  component,
  paragraphSx = {},
}) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 899px)");

  return (
    <Grid item xs={12} md={6} className={className}>
      <Box

        sx={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${backImage || image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding:{xs: "0!important" , md: 2}
        }}
      >
        <Stack direction="row" justifyContent="center"  sx={{ 
          padding:{xs: 0 , md: 2},
          paddingLeft:"0!important"
         }}>
          <Box
            sx={{
              padding: 0,
              width: { xs: "100%", md: "85%" },
              minHeight: { xs: "auto", md: "660px" },
              display: "flex",
              boxSizing: "border-box",
            }}
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{
                height: "100%",
                width: "100%",
                px: { xs: 2, md: 12 },
                py: { xs: 3, md: 8 },
                pt: { xs: 3, md: 18 },
                textAlign: "left",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              {component ? (
                <Box
                  sx={{
                    width: "100%",
                    "& > *": { width: "100%" },
                  }}
                >
                  {component}
                </Box>
              ) : (
                <Stack spacing={3} direction="column" sx={{ width: "100%" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      pt: { xs: 0, md: 2 },
                      "@media (max-width: 899px)": { fontSize: "1.5rem" },
                    }}
                  >
                    {title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                      wordSpacing: "0.05em",
                      letterSpacing: "0.01em",
                      lineHeight: 1.7,
                      maxWidth: { xs: "100%", md: "120%" },
                      width: "120%",
                      "@media (max-width: 900px)": { fontSize: "0.875rem" },
                      ...paragraphSx,
                    }}
                  >
                    {paragraph}
                  </Typography>

                  {title2 && (
                    <Typography
                      variant="h3"
                      sx={{
                        "@media (max-width: 899px)": { fontSize: "1.5rem" },
                      }}
                    >
                      {title2}
                    </Typography>
                  )}

                  {paragraph2 && (
                    <Typography
                      variant="body1"
                      sx={{
                        "@media (max-width: 899px)": { fontSize: "0.875rem" },
                      }}
                    >
                      {paragraph2}
                    </Typography>
                  )}

                  {!hideAction && (
                    <Button
                      sx={{
                        ...buttonStyle,
                        "@media (max-width: 600px)": {
                          fontSize: "0.65rem",
                          padding: "3px 8px",
                          minWidth: "auto",
                          width: "auto",
                          height: "28px",
                          borderWidth: "1px",
                        },
                        "@media (min-width: 601px) and (max-width: 899px)": {
                          fontSize: "0.75rem",
                          padding: "4px 10px",
                          minWidth: "auto",
                          width: "auto",
                          height: "32px",
                          borderWidth: "1px",
                        },
                      }}
                      size={isMobile ? "small" : isTablet ? "medium" : "large"}
                      variant="outlined"
                    >
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

const ImageBox = ({ reverse, passedImage, passedVideo }) => {
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const isVideo = Boolean(passedVideo);

  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        position: "relative",
        display: "block",
        height: { xs: "300px", md: "auto" }

      }}
      className="image-box"
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          height: "80%",
          width: { xs: "105%", md: "115%" },
          overflow: "hidden",

          ...(reverse ? { left: { xs: "0", md: -110 } } : { right: { xs: "0", md: -110 } }),
        }}
      >
        {isVideo ? (
          <Box
            component="video"
            src={passedVideo}
            autoPlay
            muted
            loop
            playsInline
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: isRtl ? "left" : "right",
              ...(reverse
                ? { transform: isRtl ? "none" : "scaleX(-1)" }
                : { transform: isRtl ? "scaleX(-1)" : "none" }),
            }}
          />
        ) : (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${passedImage || image2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: isRtl ? "left" : "right",
              ...(reverse
                ? { transform: isRtl ? "none" : "scaleX(-1)" }
                : { transform: isRtl ? "scaleX(-1)" : "none" }),
            }}
          />
        )}
      </Box>
    </Grid>
  );
};

const StorySection = ({
  name = undefined,
  reverse,
  title,
  paragraph,
  title2,
  paragraph2,
  passedImage,
  passedVideo, // <-- NEW: pass a video URL/import here if you want video instead of image
  backImage,
  backgroundColor = "#eee8f5",
  hideAction = false,
  component = undefined,
  paragraphSx = {},
}) => {
  return (
    <Box
      className={name ?? ""}
      maxWidth="xxl"
      sx={{
        backgroundColor,
        position: "relative",
        height: "100%",
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          sx={{ padding: { xs: 2, md: 5 } }}
        >
          {reverse ? (
            <>
              <TitleBox
              className="story-section-text-holder"
                title={title}
                paragraph={paragraph}
                backImage={backImage}
                title2={title2}
                paragraph2={paragraph2}
                hideAction={hideAction}
                component={component}
                paragraphSx={paragraphSx}
              />
              <ImageBox reverse passedImage={passedImage} passedVideo={passedVideo} />
           </>
          ) : (
            <>
              <ImageBox
                reverse={false}
                passedImage={passedImage}
                passedVideo={passedVideo}
              />
              <TitleBox
              className="story-section-text-holder"

                title={title}
                paragraph={paragraph}
                title2={title2}
                paragraph2={paragraph2}
                backImage={backImage}
                hideAction={hideAction}
                component={component}
                paragraphSx={paragraphSx}
              />
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default StorySection;