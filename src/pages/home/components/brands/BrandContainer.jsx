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
  "@media (max-width: 767px)": {
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

const BrandContainer = ({ title, description, buttonText, video, subTitle, path }) => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(false); // Hide loader once the video can play
  };

  return (
    <>
      <Container maxWidth="xl" sx={{
        position: "relative", zIndex: 1, "@media (max-width: 767px)": {
          height: "100%",
        },

        "@media(min-width:992px)": {
          marginLeft: "7.5%",
          marginRight: "7.5%",

        },
        "@media (min-width: 768px) and (max-width:991px)": {
          height: "80%",
        },
      }}>
        <Stack
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            flexGrow: 1,
            paddingTop: { xs: "0", md: "100px" },
            px: { xs: 2, md: 0 },
            "@media (max-width: 991px)": {
              height: "100%",
              justifyContent: "center",

            },
          }}
        >
          <Stack spacing={3} sx={heroTextStyle} className="slide-up">
            <QuoteTypography
              variant="h6"
              sx={{
                fontSize: "15px!important",
                display: { xs: "none", sm: "flex" },
                mb: { xs: "16px !important", md: "unset" }
              }}
            >
              {title}
            </QuoteTypography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "24px", sm: "24px" },
                marginTop:0,
                "@media (max-width: 767px)": {
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
                fontSize: { xs: "18px", sm: "18px" },
                marginTop:"16px!important",
                "@media (max-width: 767px)": {

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
                  "@media (max-width: 767px)": {
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
                {buttonText}
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
        @media (max-width: 767px) {
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
