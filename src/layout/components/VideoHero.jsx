import { Button, IconButton, Typography, keyframes } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import StyledTypography from "layout/components/StyledTypography";
import PropTypes from "prop-types";
import { useState } from "react";
import { RouterLink } from "./router-link";
import "./VideoHero.css";

const heroButton = {
  color: "white",
  borderColor: "white",
  height: { xs: "35px", sm: "46px" },
  fontSize: "18px",
  width: { xs: "213px", sm: "250px" },
  borderRadius: "8px",
  backgroundColor: "rgba(255,255,255,0.2)",
  "&:hover": {
    borderColor: "white",
    color: "#ab92e1",
    backgroundColor: "white",
  },
};

const heroTextStyle = {
  color: "#fff",
  position: "relative",
  zIndex: 2,
  width: "100%",
  maxWidth: { xs: "100%", sm: "620px", lg: "720px" },
  textAlign: { xs: "center", sm: "left" },
  alignItems: { xs: "center", sm: "flex-start" },
};

const videoContainerStyle = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
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
  name = "",
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
      className={`video-parent ${name}`}
      sx={{
        position: "relative",
        minHeight: { xs: "100svh", md: "100vh" },
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backgroundColor: {
            xs: "rgba(0, 0, 0, 0.55)",
            md: "rgba(0, 0, 0, 0.2)",
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

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: { xs: "100svh", md: "100vh" },
          display: "flex",
          alignItems: { xs: "center", md: "flex-end" },
          justifyContent: "flex-start",
          px: { xs: 2, sm: 4, md: 6, lg: 22 },
          pb: { xs: 0, md: "calc(5vh + 75px)" },
        }}
      >
        <Stack
          className="video-text-holder"
          sx={{
            width: "100%",
          }}
        >
          <Stack spacing={3} sx={heroTextStyle}>
            {title && (
              <Box sx={{ width: "100%" }}>
                <StyledTypography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.25rem", sm: "2.5rem", md: "2.5rem" },
                    textAlign: { xs: "center", sm: "left", md: "inherit" },
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
                    textAlign: "center",
                  },
                }}
              >
                {title2}
              </Typography>
            )}

            <StyledTypography
              variant="body2"
              sx={{
                maxWidth: { xs: "100%", sm: "60%", md: "500px" },
                whiteSpace: "normal",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                textAlign: { xs: "center", sm: "start", md: "justify" },
                fontSize: "1.125rem!important",
              }}
            >
              {description}
            </StyledTypography>

            {actionLabel && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
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
              </Box>
            )}
          </Stack>
        </Stack>
      </Container>

      {isLoading && (
        <CircularProgress style={loaderStyle} size={60} thickness={5} />
      )}
    </Box>
  );
};

VideoHero.propTypes = {
  name: PropTypes.string,
  title: PropTypes.node,
  title2: PropTypes.node,
  description: PropTypes.node,
  videoSrc: PropTypes.string,
  actionPath: PropTypes.string,
  actionLabel: PropTypes.node,
  actionOnClick: PropTypes.func,
};