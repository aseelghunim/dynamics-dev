import { Button, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import StyledTypography from "layout/components/StyledTypography";
import { RouterLink } from "./router-link";
import './ImageHero.css'
export const ImageHero = ({
  name = undefined,
  sectionSx = {},
  image,
  imageCover = true,
  centerImage = true,
  imageDark = true,
  title,
  description,
  actionPath,
  actionLabel,
  darken = true,
  component = undefined,
  descriptionSx = {},
}) => {
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";

  return (
    <Box
    className = {name ?? ""}
      maxWidth="xxl"
      sx={{
        position: "relative",
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "400px", md: "100vh" },
        width: "100%",
        overflow: "hidden",
        ...sectionSx,
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${image})`,
          // backgroundSize: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: imageCover ? "cover" : "contain",
          filter: darken ? "brightness(50%)" : "",
          backgroundPosition: centerImage ? { xs: "center center", md: "center" } : "left bottom",
          transform: isRtl ? "none" : "scaleX(-1)",
          zIndex: 0,
        },
      }}
    >
      {/* Overlay to match VideoHero */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: imageDark ? "rgba(0, 0, 0, 0.2)" : "unset",
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
          sx={{
            height: "100%",
            flexDirection: { xs: "column", md: "row" },
            py: { xs: 4, md: 0 },
          }}
        >
          <Stack
          className="text-holder"
            spacing={3}
            sx={{
              color: "#fff",
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "left", md: "left" },
              alignItems: { xs: "center", md: "flex-start" },
              position: "relative",
              zIndex: 2,
              px: { xs: 2, md: 0 },
            }}
          >
            {component ? (
              <>{component}</>
            ) : (
              <>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.25rem", md: "3rem" },
                    textAlign: { xs: "left", md: "justify" },
                    width: { xs: "100%", md: "unset" }
                  }}
                >
                  {title}
                </Typography>
                <StyledTypography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "1.125rem", md: "0.875rem" },
                    lineHeight: { xs: 1.6, md: "inherit" },
                    ...descriptionSx,
                  }}
                >
                  {description}
                </StyledTypography>
                <Box>
                  {actionLabel && (
                    <Button
                      sx={{
                        textTransform: "uppercase",
                        color: "white",
                        borderColor: "white",
                        height: { xs: "50px", md: "65px" },
                        width: { xs: "100%", md: "auto" },
                        fontSize: { xs: "0.75rem", md: "inherit" },
                        "&:hover": {
                          borderColor: "white",
                          color: "#ab92e1",
                          backgroundColor: "white",
                        },
                      }}
                      LinkComponent={RouterLink}
                      href={actionPath}
                      size="large"
                      variant="outlined"
                    >
                      {actionLabel}
                    </Button>
                  )}
                </Box>
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
