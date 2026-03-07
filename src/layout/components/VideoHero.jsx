import { Button, Typography, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import StyledTypography from "layout/components/StyledTypography";
import PropTypes from "prop-types";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import { RouterLink } from "./router-link";
import './VideoHero.css'

const heroButton = {
  color: "white",
  borderColor: "white",
  height: { xs: "50px", md: "65px" },
  width: { xs: "100%",sm:"250px", md: "281px" },
  "&:hover": {
    borderColor: "white",
    color: "#ab92e1",
    backgroundColor: "white",
  },
};

const heroTextStyle = {
  color: "#fff",
  textAlign: { xs: "right", sm:"start", md: "left" },
  alignItems: { xs: "flex-end", sm: "flex-start" },
  position: "relative",
  zIndex: 2, // Ensure text appears above overlay
  paddingBottom: { xs: 0, md: "calc(5vh + 75px)" }, // 5vh + ~2cm (75px)
  maxWidth: { xs: "100%", md: "80%" },
  px: { xs: 0, md: 6 }, 
};

const videoContainerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transform: "translate(-50%, -50%) scale(1)", // قلل الزوم
  zIndex: 0,
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.2)", // Dark overlay with 20% opacity
  zIndex: 1,
};

const loaderStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "24px",
  zIndex: 3,
};

const bounce = keyframes`
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
`;

const scrollButtonStyle = {
  display: { xs: "none", md: "inline-flex" }, // hide on mobile, show on desktop

  position: "absolute",
  bottom: { xs: "15px", md: "85px" }, // Adjusted slightly lower
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 4,
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  border: "2px solid rgba(255, 255, 255, 0.5)",
  borderRadius: "8px",
  width: { xs: "40px", md: "56px" }, // Smaller on mobile
  height: { xs: "40px", md: "56px" }, // Smaller on mobile
  color: "white",
  animation: `${bounce} 2s infinite`,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderColor: "rgba(255, 255, 255, 0.8)",
    transform: "translateX(-50%) translateY(3px)",
  },
  transition: "all 0.3s ease",
};

export const VideoHero = ({
  name = undefined,
  title,
  title2,
  description,
  videoSrc,
  actionPath,
  actionLabel,
  actionOnClick,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleScrollDown = () => {
    // Get navbar element (header) to calculate its height
    const navbar = document.querySelector("header");
    const navbarHeight = navbar ? navbar.offsetHeight : 120; // Fallback to 120px if not found

    // Scroll to just below the hero section, accounting for navbar height
    window.scrollTo({
      top: window.innerHeight - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <Box
      className={`video-parent ${name?? ""} `}
      maxWidth="xxl"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        margin: { xs: 0, md: "auto" },
        padding: 0,
        "@media (max-width: 991px)": {
          marginLeft: 0,
          marginRight: 0,
          width: "100vw",
          maxWidth: "100%",
        },
      }}
    >
      {/* Overlay */}
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          // stronger overlay on mobile, lighter on desktop
          backgroundColor: {
            xs: "rgba(0, 0, 0, 0.55)", // mobile
            md: "rgba(0, 0, 0, 0.2)",  // desktop
          },
          "@media (max-width: 991px)": {
            width: "100vw",
            left: 0,
          },
        }}
      />

      {/* Scroll Down Button */}
      <IconButton
        onClick={handleScrollDown}
        sx={scrollButtonStyle}
        aria-label="Scroll down"
      >
        <ArrowDownwardIcon sx={{ fontSize: { xs: "20px", md: "32px" } }} />
      </IconButton>

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={videoContainerStyle}
        onCanPlay={handleVideoLoaded}
        className="video-hero-mobile-fix"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <style>{`
        @media (max-width: 991px) {
          .video-hero-mobile-fix {
            left: 0 !important;
            transform: translateY(-50%) !important;
            width: 100vw !important;
            min-width: 100vw !important;
            margin-left: 0 !important;
            padding-left: 0 !important;
          }
          
          body {
            overflow-x: hidden !important;
          }
        }
      `}</style>

      {/* Content */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          paddingBottom: { xs: 0, md: 5 },
          marginLeft: { xs: 0, md: "7.5%" },
          px: { xs: 2, md: 0 },
        }}
      >
        <Stack
          className="video-text-holder"
          alignItems={{ xs: "center", md: "flex-end" }}
          justifyContent={{ xs: "center", md: "flex-start" }}
          spacing={2}
          sx={{
            height: "100%",
            flexDirection: { xs: "column", md: "row" },
            "@media (max-width: 991px)": {
              marginTop: "-40px", // Move content up on mobile
            },
          }}
        >
          <Stack spacing={3} sx={heroTextStyle}>
            {title && (
              <Box sx={{ pr: { xs: 0, md: "-160px" }, width: { xs: "100%", md: "unset" } }}>
                <StyledTypography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.25rem",sm:"2.5rem", md: "3rem" },

                    textAlign: { xs: "center", sm: "left", md:"inherit" }
                  }}
                >
                  {title}
                </StyledTypography>
              </Box>
            )}
            {title2 && (
              <Typography
                variant="h3"
                sx={{
                  "@media (max-width: 991px)": {
                    fontSize: "2.25rem",
                    width: "100%",
                    textAlign: "center"
                  },
                }}
              >
                {title2}
              </Typography>
            )}
            <StyledTypography
              variant="body2"
              sx={{
                maxWidth: { xs: "100%", sm:"60%", md: "500px" },
                whiteSpace: "normal",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                textAlign: { xs: "center",sm:"start", md: "justify"},
                "@media (max-width: 991px)": {
                  fontSize: "1.125rem",
                },
              }}
            >
              {description}
            </StyledTypography>
            <Box>
              {actionLabel && (
                <Button
                  sx={heroButton}
                  size="large"
                  variant="outlined"
                  {...(actionOnClick
                    ? { onClick: actionOnClick }
                    : { LinkComponent: RouterLink, href: actionPath })}
                >
                  {actionLabel}
                </Button>
              )}
            </Box>
          </Stack>
        </Stack>
      </Container>

      {/* Loader */}
      {isLoading && (
        <CircularProgress style={loaderStyle} size={60} thickness={5} />
      )}
    </Box>
  );
};

VideoHero.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
