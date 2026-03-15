import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";

import product1 from "assets/drcyj/product1.png";
import mobileProduct from "assets/drcyj/mobile-product.svg"
import './DrcyjProductComponent.css';
const DrcyjProductComponent = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const productImage = isMobile ? mobileProduct : product1;
  const product = {
    img: productImage,
    mobileImg: mobileProduct,
    title: t(tokens.brands.drcyj.product.title),
    subtitle: t(tokens.brands.drcyj.product.subtitle),
    featuresTitle: t(tokens.brands.drcyj.product.featuresTitle),
    treatmentTitle: t(tokens.brands.drcyj.product.treatmentTitle),
    keyBenefitsTitle: t(tokens.brands.drcyj.product.keyBenefitsTitle),
    functionTitle: t(tokens.brands.drcyj.product.functionTitle),

    features: [
      t(tokens.brands.drcyj.product.features[0]),
      t(tokens.brands.drcyj.product.features[1]),
      t(tokens.brands.drcyj.product.features[2]),
      t(tokens.brands.drcyj.product.features[3]),
    ],
    treatments: [
      t(tokens.brands.drcyj.product.treatmentItems[0]),
      t(tokens.brands.drcyj.product.treatmentItems[1]),
      t(tokens.brands.drcyj.product.treatmentItems[2]),
    ],
    keyBenefits: [
      t(tokens.brands.drcyj.product.keyBenefitsItems[0]),
      t(tokens.brands.drcyj.product.keyBenefitsItems[1]),
      t(tokens.brands.drcyj.product.keyBenefitsItems[2]),
      t(tokens.brands.drcyj.product.keyBenefitsItems[3]),
      t(tokens.brands.drcyj.product.keyBenefitsItems[4]),
    ],
    functions: [
      t(tokens.brands.drcyj.product.functionItems[0]),
      t(tokens.brands.drcyj.product.functionItems[1]),
      t(tokens.brands.drcyj.product.functionItems[2]),
    ],
  };

  const Section = ({ title, items }) => (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          color: "#19254F", // dark blue like screenshot
          fontWeight: 700,
          fontSize: "1.1rem",
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Box
        component="ul"
        sx={{
          pl: 2.2,
          m: 0,
          "& li": { mb: 0.5 },
          "& li, & li span": { color: "#7C7C7C" }, // light grey bullets
        }}
      >
        {items.map((it) => (
          <li key={it}>
            <Typography component="span" sx={{ fontSize: "0.95rem", lineHeight: 1.35 }}>
              {it}
            </Typography>
          </li>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
      className="drcyj-product"
      sx={{
        p: { xs: 0, sm: 0, md: "2rem" },
        borderRadius: { xs: 0, sm: "8px" },
        backgroundColor: "#FFFFFF",
      }}
      maxWidth="xl"
    >
      <Container maxWidth="xl" sx={{ py: { xs: 3, sm: 2 } }}>
        {isMobile ? (
          // ✅ MOBILE: match screenshot (centered image, one-column sections)
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "100%", maxWidth: 520, px: 2 }}>
              <Stack spacing={3} alignItems="center">
                {/* Subtitle at top (grey, uppercase) */}
                {/* Title */}
                <Typography
                  sx={{
                    width: "100%",
                    color: "#19254F",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    textAlign: "left!important",
                    lineHeight: 1.2,
                  }}
                >
                  {product.title}
                </Typography>

                {/* Subtitle (grey, uppercase) */}
                <Typography
                  sx={{

                    color: "#8A8A8A",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    fontSize: "1rem",
                    textAlign: "left!important",
                    lineHeight: 1.25,
                    marginTop: "8px!important",
                 

                  }}
                >
                  {product.subtitle}
                </Typography>

                {/* Centered product image (not full width) */}

                <Box className="drcyj-img-holder" sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  <Box
                    component="img"
                    src={product.mobileImg}
                    alt={product.title}
                    loading="lazy"
                    sx={{
                      width: {xs:"155px",sm:"99px",md:"137px"},       // 👈 tweak if you want bigger/smaller
                      // maxWidth: 260,
                      // minWidth: 180,
                      height: "auto",
                      display: "block",
                      // marginTop:"0!important"
                    }}
                  />
                </Box>

                {/* Sections (ONE column, left-aligned within the column) */}
                <Box sx={{ width: "100%" }}>
                  <Stack spacing={4}>
                    <Section title={product.featuresTitle} items={product.features} />
                    <Section title={product.keyBenefitsTitle} items={product.keyBenefits} />
                    <Section title={product.functionTitle} items={product.functions} />
                    <Section title={product.treatmentTitle} items={product.treatments} />
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        ) : (
          // ✅ DESKTOP: keep your current layout
          <Grid container alignItems="center" spacing={4}>
            {/* LEFT */}
            <Grid item xs={12} sm={4.5}>
              <Box>
                <Typography variant="h6" sx={{ color: "#5A2772", fontWeight: 600 }}>
                  {product.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "#797979", fontSize: "0.875rem", mt: 0.5, mb: 3 }}
                >
                  {product.subtitle}
                </Typography>

                <Typography variant="h6" sx={{ color: "#19254F", fontWeight: 400, fontSize: "1.25rem", mb: 1.5 }}>
                  {product.featuresTitle}
                </Typography>

                <Box component="ul" sx={{ pl: 2, color: "#7C7C7C", m: 0 }}>
                  {product.features.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </Box>

                <Typography variant="h6" sx={{ color: "#19254F", fontWeight: 400, fontSize: "1.25rem", mt: 3, mb: 1.5 }}>
                  {product.treatmentTitle}
                </Typography>

                <Box component="ul" sx={{ pl: 2, color: "#7C7C7C", m: 0 }}>
                  {product.treatments.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* CENTER IMAGE */}
            <Grid item xs={12} sm={3} sx={{
              "@media(min-width:768px) and (max-width:991px)": {

                paddingLeft: 0,
                paddingTop: "52px"
              }
            }}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src={product.mobileImg}
                  alt={product.title}
                  loading="lazy"
                  sx={{
                    maxWidth: "100%",
                    height: "auto",
                    width: { xs: "70%", sm: "70%", md: "137px" },
                    mt: 0,
                  }}
                />
              </Box>
            </Grid>

            {/* RIGHT */}
            <Grid item xs={12} sm={4.5}>
              <Box>
                <Typography variant="h6" sx={{ color: "#19254F", fontWeight: 400, fontSize: "1.25rem", mb: 1.5 }}>
                  {product.keyBenefitsTitle}
                </Typography>

                <Box component="ul" sx={{ pl: 2, color: "#7C7C7C", m: 0 }}>
                  {product.keyBenefits.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </Box>

                <Typography variant="h6" sx={{ color: "#19254F", fontWeight: 400, fontSize: "1.25rem", mt: 3, mb: 1.5 }}>
                  {product.functionTitle}
                </Typography>

                <Box component="ul" sx={{ pl: 2, color: "#7C7C7C", m: 0 }}>
                  {product.functions.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default DrcyjProductComponent;