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
import './FaceInjectionPointsLenisna.css'


const Point = ({ position }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

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
          className="mark-svg"
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
              border: "1px dashed white",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    //               width: "14px",
    // height: "14px",
              "&:hover": {
                color: "#7B1238",
                backgroundColor: "rgba(255, 255, 255, 1)",
              },
              margin: 1,
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
    </>
  );
};
const FaceInjectionPointsLenisna = () => {
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const imgSrc = isMobile ? mobileImg : lenisnaImage;

  const { t } = useTranslation();

  const positions = [
    // face
    // top: 88.2%;
    // left: 60%;
    // top: 83%;
    // left: 30%;

    { id: 1, top: { xs: "74%", sm: "27%" }, left: { xs: "37%", sm: "14%" }, label: t(tokens.brands.lenisna.face.point1) },
    { id: 2, top: { xs: "78.5%", sm: "44%" }, left: { xs: "22%", sm: "11%" }, label: t(tokens.brands.lenisna.face.point2) },
    { id: 3, top: { xs: "83%", sm: "51%" }, left: { xs: "30%", sm: "14%" }, label: t(tokens.brands.lenisna.face.point3) },
    { id: 4, top: { xs: "88%", sm: "63%" }, left: { xs: "35%", sm: "15.5%" }, label: t(tokens.brands.lenisna.face.point4) },
    { id: 5, top: { xs: "88.2%",sm:"70%", md: "73%" }, left: { xs: "60%", sm: "29%" }, label: t(tokens.brands.lenisna.face.point5) },
    { id: 6, top: { xs: "93%", sm: "88%" }, left: { xs: "68%", sm: "31%" }, label: t(tokens.brands.lenisna.face.point6) },
    {
      id: 7, top: { xs: "77%", sm: "40%" },
      left: { xs: "69%", sm: "31.5%" }, label: t(tokens.brands.lenisna.face.point7)
    },
    { id: 8, top: { xs: "82.7%", sm: "50%" }, left: { xs: "66%", sm: "31%" }, label: t(tokens.brands.lenisna.face.point8) },

    // body
    // top: 35%;
    // left: 55%;
    // top: 42%;
    //     left: 28%;
    { id: 9, top: { xs: "35%", sm: "24%" }, left: { xs: "55%", sm: "87%" }, label: t(tokens.brands.lenisna.body.point1) },
    { id: 10, top: { xs: "42%", sm: "40%" }, left: { xs: "28%", sm: "71%" }, label: t(tokens.brands.lenisna.body.point2) },


    // top: 56%;
    // left: 41%;

    { id: 11, top: { xs: "56%", sm: "76%" }, left: { xs: "41%", sm: "81%" }, label: t(tokens.brands.lenisna.body.point3) },
   
    // top: 60%;
    // left: 42%;
    { id: 12, top: { xs: "60%", sm: "84%" }, left: { xs: "42%", sm: "82%" }, label: t(tokens.brands.lenisna.body.point4) },
    // top: 63%;
    // left: 33%;

    { id: 13, top: { xs: "63%", sm: "91%" }, left: { xs: "33%", sm: "78%" }, label: t(tokens.brands.lenisna.body.point5) },
  ];

  return (
    <Box maxWidth="xl">
      <Container
        maxWidth="xl"
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
            width: { xs: "100vw", sm: "100%" },
            left: { xs: "50%", sm: "auto" },
            right: { xs: "50%", sm: "auto" },
            marginLeft: { xs: "-50vw", sm: 0 },
            marginRight: { xs: "-50vw", sm: 0 },
            overflow: "hidden",
            background: { xs: "#7b1238", sm: "transparent" }
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
              width: { xs: "60%",sm:"126px",md: "25%" },
              position: "absolute",
              top: { xs: 40,sm:"24px", md: 150 }, // slightly higher on mobile
              left: 0,
              right: 0,
              margin: "auto",
              pointerEvents: "none",
            }}
          >
            <Stack justifyContent="center" alignItems="center">
              <Box component="img" src={logo} sx={{ width: { xs: "70%", sm: "100%" } }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "1.625rem",sm:"18px", md: "1.625rem" },
                  mt: { xs: 0, sm: 0 },
                }}
              >
                {t(tokens.brands.lenisna.face.title)}
              </Typography>
            </Stack>
          </Box>

          {/* Points */}
          {positions.map((position) => (
            <Point key={position.id} position={position} smUp={smUp} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FaceInjectionPointsLenisna;
