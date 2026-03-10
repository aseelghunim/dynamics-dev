import React from "react";
import { Box, Typography } from "@mui/material";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import applicationAreaImg from "assets/dimono/dimono girl and arrows.png";
import logo from "assets/dimono/logo.png";
import './DimonoApplicationArea.css';

const DimonoApplicationArea = ({
  showOverlay = true,
  leftItems: leftItemsProp,
  rightItems: rightItemsProp,
}) => {
  const { t } = useTranslation();

  const leftItems =
    leftItemsProp ??
    [
      { n: 1, label: t(tokens.brands.dimono.applicationAreas[0]) },
      { n: 2, label: t(tokens.brands.dimono.applicationAreas[1]) },
      { n: 3, label: t(tokens.brands.dimono.applicationAreas[2]) },
      { n: 4, label: t(tokens.brands.dimono.applicationAreas[3]) },
      { n: 5, label: t(tokens.brands.dimono.applicationAreas[4]) },
    ];

  const rightItems =
    rightItemsProp ??
    [
      { n: 6, label: t(tokens.brands.dimono.applicationAreas[5]) },
      { n: 7, label: t(tokens.brands.dimono.applicationAreas[6]) },
      { n: 8, label: t(tokens.brands.dimono.applicationAreas[7]) },
      { n: 9, label: t(tokens.brands.dimono.applicationAreas[8]) },
      { n: 10, label: t(tokens.brands.dimono.applicationAreas[9]) },
    ];

  const allItems = [...leftItems, ...rightItems];

  // Mobile label positions — placed near each numbered circle on the face image
  // Percentages based on the image dimensions
  const mobileLabelPositions = {
    1: { top: "53%", left: "8%", textAlign: "right" },   // Vertical wrinkles
    2: { top: "53%", right: "16%", textAlign: "left" },    // Crow's feet
    3: { top: "60%", left: "1.5%", textAlign: "right" },    // Under-eye fine lines
    4: { top: "61%", left: "48%", textAlign: "left" },    // Nasolabial folds
    5: { top: "64%", right: "17%", textAlign: "left" },   // Perioral wrinkles
    6: { top: "39%", left: "26%", textAlign: "center" },  // Forehead lines
    7: { top: "71%", left: "18%", textAlign: "right" },   // Barcode lip lines
    8: { top: "92%", left: "52%", textAlign: "center" },  // Neck wrinkles
    9: { top: "74%", right: "6%", textAlign: "left" },    // Chin and lower face
  };

  return (
    <Box className="dimono-area" sx={{ width: "100%", mt: { xs: "50px", sm: "0" } }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: { xs: 0, sm: 0 },
        }}
      >
        {/* Base image */}
        <Box
          component="img"
          src={applicationAreaImg}
          alt="Dimono Application Area"
          loading="lazy"
          sx={{
            display: "block",
            width: "100%",
            height: { xs: "90vh", sm: "auto" },
            objectFit: "cover",
          }}
        />

        {showOverlay && (
          <>
            {/* Title / Logo */}
            <Box
              className='dimono-logo'
              sx={{
                position: "absolute",
                top: { xs: 40, sm: 40 },
                left: 0,
                right: 0,
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              <img src={logo} alt="Dimono Logo"
              />
            
            </Box>

            {/* ── MOBILE: overlay labels directly on image ── */}
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              {allItems.map((it) => {
                const pos = mobileLabelPositions[it.n];
                if (!pos) return null;
                return (
                  <Typography
                    key={it.n}
                    className="dimono-application-area-p"
                    sx={{
                      position: "absolute",
                      ...pos,
                      fontSize: 10,
                      fontWeight: 500,
                      color: "#111",
                      lineHeight: 1.2,
                      pointerEvents: "none",
                      maxWidth: 90,
                    }}
                  >
                    {it.label}
                  </Typography>
                );
              })}
            </Box>

            {/* ── DESKTOP: original left/right column layout ── */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {/* Left list */}
              <Box
                sx={{
                  position: "absolute",
                  top: {sm:"30%",md:"33%"},
                  left: {sm:0,md:190},
                  display: "flex",
                  flexDirection: "column",
                  gap: {sm:"17px",md:"38px"},

                  width: 260,
                }}
              >
                {leftItems.map((it) => (
                  <Box key={it.n} sx={{ display: "flex", direction: "rtl", alignItems: "center", gap:  {sm:1,md:3} }}>
                    <Box
                      sx={{
                        width: {sm:15,md:26},
                        height: {sm:15,md:26},
                        borderRadius: "50%",
                        bgcolor: "#fff",
                        color: "#111",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: 800,
                        fontSize: {sm:7,md:12},
                        flex: "0 0 auto",
                      }}
                    >
                      {it.n}
                    </Box>
                    <Typography sx={{ color: "#111", fontSize: {sm:7,md:14} , lineHeight: 1.2 }}>
                      {it.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Right list */}
              <Box
                sx={{
                  position: "absolute",
                  top: {sm:"30%",md:"33%"},

                  right: {sm:0,md:190},
                  display: "flex",
                  flexDirection: "column",
                  gap: {sm:"17px",md:"38px"},
                  width: 270,
                }}
              >
                {rightItems.slice(0, 4).map((it) => (
                  <Box key={it.n} sx={{ display: "flex", alignItems: "center", gap: {sm:1,md:3} }}>
                    <Box
                      sx={{
                        width: {sm:15,md:26},
                        height: {sm:15,md:26},
                        borderRadius: "50%",
                        bgcolor: "#fff",
                        color: "#111",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: 800,
                        fontSize: {sm:7,md:12},
                        flex: "0 0 auto",
                      }}
                    >
                      {it.n}
                    </Box>
                    <Typography sx={{ color: "#111", fontSize: {sm:7,md:14}, lineHeight: 1.2 }}>
                      {it.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Hand rejuvenation callout (desktop only) */}
              <Box
                sx={{
                  position: "absolute",
                  right: {sm:120, md:150},
                  top: "80%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                <Box
                  sx={{
                    width:  {sm:15,md:40},
                    height: {sm:15,md:40},
                    borderRadius: "50%",
                    bgcolor: "#fff",
                    display: "grid",
                    placeItems: "center",
                    boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
                  }}
                >
                  <ArrowForwardRoundedIcon sx={{ color: "#6aaee5",
                    "@media (min-width: 768px) and (max-width: 991px)": {
                      fontSize: "9px",
                    },
                
                }} />
                </Box>
                <Typography sx={{ color: "#111", fontSize: {sm:7,md:14}, fontWeight: 600, whiteSpace: "nowrap" }}>
                  {rightItems.find((x) => x.n === 10)?.label || "Hand rejuvenation"}
                </Typography>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default DimonoApplicationArea;