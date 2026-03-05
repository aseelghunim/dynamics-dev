import { Button, CircularProgress, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { RouterLink } from "layout/components/router-link";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./brands.css";
import { buttonStyle, videoStyle } from "./styles";

const heroTextStyle = {
  color: "#fff",
  width: { xs: "100%", md: "50%" },
  "@media (max-width: 899px)": {
    height: "100%",
    justifyContent: "center",
    marginTop: "-70px !important"
  },
};

const loaderStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "24px",

};

const BrandContainer = ({ title, description, video, subTitle, path }) => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(false); // Hide loader once the video can play
  };

  return (
    <>
      <Container maxWidth="xl" sx={{
        position: "relative", zIndex: 1, "@media (max-width: 899px)": {
          height: "100%",

        },
      }}>
        <Stack
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            flexGrow: 1,
            paddingTop: { xs: "0", md: "10%" },
            px: { xs: 2, md: 0 },
            "@media (max-width: 899px)": {
              height: "100%",
              justifyContent: "center",

            },
          }}
        >
          <Stack spacing={3} sx={heroTextStyle} className="slide-up">
            <QuoteTypography
              variant="h6"
              sx={{
                display: { xs: "none", md: "flex" },

              }}
            >
              {title}
            </QuoteTypography>
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 899px)": {
                  fontSize: "1.5rem",
                  marginTop: "0!important"
                },
              }}
            >
              {subTitle}
            </Typography>
            <StyledTypography
              variant="body2"
              sx={{
                textAlign: "justify",
                "@media (max-width: 899px)": {
                  fontSize: "1.125rem",
                  textAlign: "left",

                },
              }}
            >
              {description}{" "}
            </StyledTypography>
            <Box>
              <Button
                sx={{
                  ...buttonStyle,
                  "@media (max-width: 899px)": {
                    width: " 213px !important",
                    marginRight: "auto",
                    color: "#AC93E1 !important",
                    backgroundColor: "white!important",
                    borderColor: "white !important",
                    fontWeight: "400 !important",
                    borderRadius: "4px!important",
                    fontSize: "14px!important",
                    height: "35px !important"
                  },
                }}
                size="large"
                variant="outlined"
                LinkComponent={RouterLink}
                href={path}
              >
                {t(tokens.common.discover_brand)}
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
      {isLoading && (
        <CircularProgress style={loaderStyle} size={60} thickness={5} />
      )}

      <video
        autoPlay
        muted
        loop
        playsInline
        style={videoStyle}
        onCanPlay={handleVideoLoaded}
        className="brand-video-responsive"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <style>{`
        @media (max-width: 899px) {
          .brand-video-responsive {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            width: 100% !important;
            height: 100% !important;
            min-width: 100% !important;
            min-height: 100% !important;
            transform: translate(-50%, -50%) !important;
            object-fit: cover !important;
            object-position: center !important;
          }
        }
      `}</style>
    </>
  );
};

BrandContainer.propTypes = {};

export default BrandContainer;
