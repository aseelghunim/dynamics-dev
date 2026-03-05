import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
import { Container, Stack } from "@mui/system";
import lenisnaImage from "assets/lenisna/LENISNA1.png";
import mobileImg from 'assets/lenisna/mobile-bg.png'
import logo from "assets/lenisna/logo_light.png";
import { tokens } from "locales/tokens";
import React from "react";
import { useTranslation } from "react-i18next";


const Point = ({ position }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev); // Toggle Popper on click
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClose}>
        <div>
          <Popper
            open={open}
            anchorEl={anchorEl}
            placement="right"
            disablePortal={true}
            transition
            sx={{ padding: 0, zIndex: 1500 }}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography sx={{ p: 2 }}>{position.label}</Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
          <IconButton
            size="small"
            key={position.id}
            sx={{
              color: "white",
              position: "absolute",
              top: position.top,
              left: position.left,
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              border: "1px dashed #7B1238",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                color: "#7B1238",
                backgroundColor: "rgba(255, 255, 255, 1)",
              },
              margin: 1,
            }}
            onClick={handleClick}
          >
            {open ? <ArrowForwardIcon /> : <AddIcon />}
          </IconButton>
        </div>
      </ClickAwayListener>
    </>
  );
};
const FaceInjectionPointsLenisna = () => {
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const imgSrc = isMobile ? mobileImg : lenisnaImage;

  const { t } = useTranslation();

  const positions = [
    // face
    // top: 88.2%;
    // left: 60%;
    // top: 83%;
    // left: 30%;

    { id: 1, top: { xs: "74%", md: "27%" }, left: { xs: "37%", md: "14%" }, label: t(tokens.brands.lenisna.face.point1) },
    { id: 2, top: { xs: "78.5%", md: "44%" }, left: { xs: "22%", md: "11%" }, label: t(tokens.brands.lenisna.face.point2) },
    { id: 3, top: { xs: "83%", md: "51%" }, left: { xs: "30%", md: "14%" }, label: t(tokens.brands.lenisna.face.point3) },
    { id: 4, top: { xs: "88%", md: "63%" }, left: { xs: "35%", md: "15.5%" }, label: t(tokens.brands.lenisna.face.point4) },
    { id: 5, top: { xs: "88.2%", md: "73%" }, left: { xs: "60%", md: "29%" }, label: t(tokens.brands.lenisna.face.point5) },
    { id: 6, top: { xs: "93%", md: "88%" }, left: { xs: "68%", md: "31%" }, label: t(tokens.brands.lenisna.face.point6) },
    {
      id: 7, top: { xs: "77%", md: "40%" },
      left: { xs: "69%", md: "31.5%" }, label: t(tokens.brands.lenisna.face.point7)
    },
    { id: 8, top: { xs: "82.7%", md: "50%" }, left: { xs: "66%", md: "31%" }, label: t(tokens.brands.lenisna.face.point8) },

    // body
    // top: 35%;
    // left: 55%;
    // top: 42%;
    //     left: 28%;
    { id: 9, top: { xs: "35%", md: "24%" }, left: { xs: "55%", md: "87%" }, label: t(tokens.brands.lenisna.body.point1) },
    { id: 10, top: { xs: "42%", md: "40%" }, left: { xs: "28%", md: "71%" }, label: t(tokens.brands.lenisna.body.point2) },


    // top: 56%;
    // left: 41%;

    { id: 11, top: { xs: "56%", md: "76%" }, left: { xs: "41%", md: "81%" }, label: t(tokens.brands.lenisna.body.point3) },
   
    // top: 60%;
    // left: 42%;
    { id: 12, top: { xs: "60%", md: "84%" }, left: { xs: "42%", md: "82%" }, label: t(tokens.brands.lenisna.body.point4) },
    // top: 63%;
    // left: 33%;

    { id: 13, top: { xs: "63%", md: "91%" }, left: { xs: "33%", md: "78%" }, label: t(tokens.brands.lenisna.body.point5) },
  ];

  return (
    <Box maxWidth="xxl">
      <Container
        maxWidth="xxl"
        disableGutters
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          px: 0, // IMPORTANT: remove container side padding
        }}
      >
        {/* Full-bleed wrapper on mobile only */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            // mobile: make it span the viewport width even inside a centered container
            width: { xs: "100vw", md: "100%" },
            left: { xs: "50%", md: "auto" },
            right: { xs: "50%", md: "auto" },
            marginLeft: { xs: "-50vw", md: 0 },
            marginRight: { xs: "-50vw", md: 0 },
            overflow: "hidden",
            background: { xs: "#7b1238", md: "transparent" }
          }}
        >
          <Box
            component="img"
            src={imgSrc}

            alt="Lenisna Injection Area"
            sx={{
              display: "block",
              width: "100%",
              height: "auto",
              transform: isRtl ? "scaleX(-1)" : "none",
              userSelect: "none",
            }}
          />

          {/* Logo + title overlay */}
          <Box
            sx={{
              width: { xs: "60%", md: "25%" },
              position: "absolute",
              top: { xs: 40, md: 150 }, // slightly higher on mobile
              left: 0,
              right: 0,
              margin: "auto",
              pointerEvents: "none",
            }}
          >
            <Stack justifyContent="center" alignItems="center">
              <Box component="img" src={logo} sx={{ width: { xs: "70%", md: "100%" } }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "1.625rem", md: "inherit" },
                  mt: { xs: 0, md: 0 },
                }}
              >
                {t(tokens.brands.lenisna.face.title)}
              </Typography>
            </Stack>
          </Box>

          {/* Points */}
          {positions.map((position) => (
            <Point key={position.id} position={position} mdUp={mdUp} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FaceInjectionPointsLenisna;
