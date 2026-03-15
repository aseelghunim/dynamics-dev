import React from "react";
import {
  Box,
  ClickAwayListener,
  Fade,
  IconButton,
  Paper,
  Popper,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Container, Stack, padding } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import faceImage from "assets/juvelook/juvelook-face.png";
import logo from "assets/juvelook/jubelook-light-logo.png";
import scarImage from "assets/juvelook/Scar.png";
import stretchImage from "assets/juvelook/Stretch.png";

import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import './FaceInjectionPointsJuvelook.css';
const Point = ({ position }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleClick = (event) => {
    // if you click the same point, toggle.
    // if you click a different point, switch anchor and open.
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={mdUp ? "right" : "bottom"}
          disablePortal
          transition
          sx={{ padding: 0, zIndex: 1500 }}
          // helps avoid some layout/resize jitter in certain layouts
          modifiers={[
            { name: "offset", options: { offset: [0, 8] } },
            { name: "preventOverflow", options: { padding: 8 } },
          ]}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={250}>
              <Paper>
                <Typography sx={{ p: 2 }}>{position.label}</Typography>
              </Paper>
            </Fade>
          )}
        </Popper>

        <IconButton
          className='mark-svg'
          size="small"
          sx={{

            color: "white",
            position: "absolute",
            // ✅ mobile (xs) uses topMobile/leftMobile when provided
            // ✅ md+ uses top/left
            top: { xs: position.topMobile ?? position.top, sm: position.topTablet ?? position.top, md: position.top },
            left: { xs: position.leftMobile ?? position.left, sm: position.leftTablet ?? position.left, md: position.left },
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "50%",
            border: "1px dashed #ABDFF4",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              color: "#ABDFF4",
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
            m: 1,
            "@media(min-width:768px) and (max-width:991px)": {
              width: "15px!important",
              height: "15px!important",
            }


          }}
          onClick={handleClick}
        >
          {open ? <ArrowForwardIcon /> : <AddIcon />}
        </IconButton>
      </div>
    </ClickAwayListener>
  );
};

const FaceInjectionPointsJuvelook = () => {
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const { t } = useTranslation();

  // ✅ desktop coords stay as-is
  // ✅ mobile coords are added and used on xs
  const positions = [
    {
      id: 1,
      top: "36%",
      left: "36%",
      topMobile: "33%",
      // leftMobile: "32%",
      // topTablet: "44%",

      topTablet: "48%",
      leftMobile: "31%",
      label: t(tokens.brands.juvelook.face.point1),
    },
    {
      id: 2,
      top: "52%",
      left: "31%",
      topMobile: "50%",
      leftMobile: "23%",
      topTablet: "60%",
      leftTablet: "27%",
      label: t(tokens.brands.juvelook.face.point2),
    },
    {
      id: 3,
      top: "60%",
      left: "33%",
      topMobile: "60%",
      leftMobile: "24%",
      topTablet: "66%",
      leftTablet: "29%",
      label: t(tokens.brands.juvelook.face.point3),
    },
    {
      id: 4,
      top: "59%",
      left: "47%",
      topMobile: "59%",
      leftMobile: "46%",
      topTablet: "67%",

      label: t(tokens.brands.juvelook.face.point4),
    },
    {
      id: 5,
      top: "65%",
      left: "55%",
      topMobile: "62%",
      leftMobile: "57%",
      topTablet: "70%",

      label: t(tokens.brands.juvelook.face.point5),
    },
    {
      id: 6,
      top: "75%",
      topTablet: "77%",

      left: "49%",
      label: t(tokens.brands.juvelook.face.point6),
    },
    {
      id: 7,
      top: "90%",
      left: "57%",
      label: t(tokens.brands.juvelook.face.point7),
    },
  ];

  return (
    <Box
      className='face-injection-juvelook'
      // maxWidth="xl"
      sx={{
        position: "relative",
        height: { xs: "auto", sm: "45vh", md: "100vh" },
        minHeight: { xs: "600px", sm: "unset", md: "100vh" },
        width: "100%",
        overflow: "hidden",
        background: "#ABDFF4",
      }}
    >
      <Container
        className="container"
        maxWidth="xl"
        sx={{
          position: "relative", zIndex: 1, height: "100%",
          "@media(min-width:768px) and (max-width:991px)": {
            paddingRight: "0!important",
            paddingLeft: "88px!important"
          }



        }}
      >
        <Stack
          alignItems="flex-end"
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            height: "100%",
            py: { xs: 4, md: 0 },
            paddingBottom: "0!important",
            // paddingLeft: { xs: 0, md: 20 },
            paddingRight: { xs: 0, md: "0" },

          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              height: { xs: "auto", sm: "100%", md: "100%" },
            }}
          >
            <Stack
              justifyContent={{ sm: "space-between", md: "center" }}
              alignItems="flex-start"
              sx={{ height: "100%" }}
              spacing={{ xs: 4, md: 20 }}
            >
              <Box sx={{
                width: { xs: "283px", sm: "148px", md: "236px" },
                marginLeft: "0",
                height: { xs: "84px", sm: "44px", md: "70px" },

                // "@media(min-width:768px) and (max-width:991px)": {

                // }
              }}>
                <Box component="img" src={logo} sx={{

                  width: { xs: "100%", md: "100%" }
                }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "0.875rem", sm: "9px", md: "1.25rem" },
                    mt: { xs: 1, md: 0 },
                  }}
                >
                  {t(tokens.brands.juvelook.face.title)}
                </Typography>
              </Box>

              <Box>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  direction="row"
                  spacing={{ xs: 3, md: 10 }}
                  sx={{
                    width: "100%",
                    padding: { xs: "0 16px", sm: "0 16px 60px 0", md: "unset" },
                    "@media(max-width:767px)": {
                      marginTop: "72px"
                    }
                  }}
                >
                  <Stack
                    sx={{ width: { xs: "60%", sm: "66px", md: "106px" } }}
                    spacing={{ xs: 2, md: 5 }}
                  >
                    <Box component="img" src={stretchImage} sx={{

                      width: { xs: "100%!important", md: "auto" }

                    }} />
                    <Box
                      sx={{
                        background: "#FFFFFF",
                        p: 1,
                        textAlign: "center",
                        color: "#ABDFF4",
                        fontSize: { xs: "0.75rem", sm: "9px", md: "14px" },
                        "@media(min-width:768px) and (max-width:991px)": {
                          width: "65px",
                          padding: "0!important",
                        }

                      }}
                    >
                      Stretch marks
                    </Box>
                  </Stack>

                  <Stack
                    sx={{ width: { xs: "60%", sm: "66px", md: "106px" } }}
                    spacing={{ xs: 2, md: 5 }}

                  >
                    <Box component="img" src={scarImage} sx={{

                      width: { xs: "100%!important", md: "auto" }

                    }} />
                    <Box
                      sx={{
                        background: "#FFFFFF",
                        p: 1,
                        textAlign: "center",
                        color: "#ABDFF4",
                        fontSize: { xs: "0.75rem", sm: "9px", md: "14px" },
                        "@media(min-width:768px) and (max-width:991px)": {
                          width: "65px",
                          padding: "0!important",
                        }
                      }}
                    >
                      C-section scar
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "60%" },
              height: { xs: "400px", md: "100%" },
              overflow: "hidden",
              "::before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${faceImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: { xs: "cover", sm: "contain", md: "cover" },
                backgroundPosition: { xs: "center", sm: "bottom", md: "center" },
                zIndex: 0,
                transform: isRtl ? "scaleX(-1)" : "none",
              },
            }}
          >
            {positions.map((position) => (
              <Point key={position.id} position={position} />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FaceInjectionPointsJuvelook;