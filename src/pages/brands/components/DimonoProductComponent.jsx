import React from "react";
import { Box, Grid, Typography, Container, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import productLogo from "assets/dimono/product-logo.svg";
import product1 from "assets/dimono/product1.webp";
import './DimonoProductComponent.css'
const DimonoProductComponent = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const product = {
    img: product1,
    title: t(tokens.brands.dimono.product.title),
    subtitle: t(tokens.brands.dimono.product.subtitle),
    featuresTitle: t(tokens.brands.dimono.product.featuresTitle),
    treatmentTitle: t(tokens.brands.dimono.product.treatmentTitle),
    keyBenefitsTitle: t(tokens.brands.dimono.product.keyBenefitsTitle),
    functionTitle: t(tokens.brands.dimono.product.functionTitle),

    features: [
      t(tokens.brands.dimono.product.features[0]),
      t(tokens.brands.dimono.product.features[1]),
      t(tokens.brands.dimono.product.features[2]),
      t(tokens.brands.dimono.product.features[3]),
    ],

    treatments: [
      t(tokens.brands.dimono.product.treatmentItems[0]),
      t(tokens.brands.dimono.product.treatmentItems[1]),
      t(tokens.brands.dimono.product.treatmentItems[2]),
    ],

    keyBenefits: [
      t(tokens.brands.dimono.product.keyBenefitsItems[0]),
      t(tokens.brands.dimono.product.keyBenefitsItems[1]),
      t(tokens.brands.dimono.product.keyBenefitsItems[2]),
      t(tokens.brands.dimono.product.keyBenefitsItems[3]),
      t(tokens.brands.dimono.product.keyBenefitsItems[4]),
    ],

    functions: [
      t(tokens.brands.dimono.product.functionItems[0]),
      t(tokens.brands.dimono.product.functionItems[1]),
      t(tokens.brands.dimono.product.functionItems[2]),
    ],
  };

  const Section = ({ title, items }) => (
    <Box>
      <Typography
        variant="h6"
        sx={{ color: "#0B1B5A", fontWeight: 700, fontSize: "1.25rem", mb: 1.5 }}
      >
        {title}
      </Typography>
      <Box component="ul" sx={{ pl: 2.2, color: "#000", m: 0 }}>
        {items.map((it) => (
          <li key={it}>
            <Typography variant="body2" sx={{ color: "#333", lineHeight: 1.6 }}>
              {it}
            </Typography>
          </li>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
    className="dimono-product-component"
      sx={{
        p: { xs: 2, sm: "2rem", md:"2rem"},
        paddingLeft:{xs:2,sm:"2rem",md:19.5},
        paddingRight:{xs:2,sm:"2rem",md:19.5},

        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
      }}
      maxWidth="xxl"
    >
      <Container maxWidth="xl" sx={{ py: 2 }}>
        {/* ✅ MOBILE (matches screenshot: header -> subtitle -> image -> sections) */}
        {isMobile ? (
          <Stack spacing={3} sx={{ width: "100%" }}>
            {/* Header row: logo + title */}
            <Stack direction="column" spacing={1.5} alignItems="left">
              <Box
                className="product-logo"
                component="img"
                src={productLogo}
                alt="Dimono logo"
                loading="lazy"
                sx={{ width: 110, maxWidth: "100%" }}
              />

              <Typography
                sx={{
                  color: "#092BAF",
                  fontWeight: 700,
                  fontSize: "0.8375rem",
                  lineHeight: 1.1,
                }}
              >
                {product.title}
              </Typography>
            </Stack>

            {/* Big grey subtitle like screenshot */}
            <Typography
              sx={{
                color: "#7A7A7A",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontSize: "1rem",
                lineHeight: 1.2,
                marginTop: "12px"
              }}
            >
              {product.subtitle}
            </Typography>

            {/* Center image */}
            <Box sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src={product.img}
                alt={product.title}
                loading="lazy"
                sx={{
                  width: "35%",
                  maxWidth: 320,
                  height: "auto",
                }}
              />
            </Box>

            {/* Sections stacked */}
            <Section title={product.featuresTitle} items={product.features} />
            <Section title={product.treatmentTitle} items={product.treatments} />
            <Section title={product.keyBenefitsTitle} items={product.keyBenefits} />
            <Section title={product.functionTitle} items={product.functions} />
          </Stack>
        ) : (
          /* ✅ DESKTOP (your existing 3-column layout) */
          <Grid container alignItems="center" spacing={4}>
            {/* LEFT */}
            <Grid item xs={12} sm={4.5} md={4.5}>
              <Box>
              <Box
                className="product-logo"
                component="img"
                src={productLogo}
                alt="Dimono logo"
                loading="lazy"
                sx={{ width: 110, maxWidth: "100%" }}
              />

                <Typography
                  variant="body1"
                  sx={{ color: "#797979", fontSize: { xs: "0.875rem", sm: "10px", md: "0.875rem" }, mt: 0.5, mb: 3 }}
                >
                  {product.subtitle}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ color: "#000", fontWeight: 400, 
                  fontSize: { xs: "1.25rem", sm: "10px", md: "0.875rem" }, mb: 1.5 }}
                >
                  {product.featuresTitle}
                </Typography>

                <Box component="ul" sx={{ pl: 2, color: "#000", m: 0 }}>
                  {product.features.map((it) => (
                    <li key={it} >{it}</li>
                  ))}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#000",
                    fontWeight: 400,
                    fontSize: { xs: "1.25rem", sm: "10px", md: "0.875rem" },
                    mt: {xs:3,sm:3,md:8},
                    mb: 1.5,
                  }}
                >
                  {product.treatmentTitle}
                </Typography>

                <Box component="ul" sx={{ pl: 2, color: "#000", m: 0 }}>
                  {product.treatments.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* CENTER IMAGE */}
            <Grid item xs={12} sm={3} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src={product.img}
                  alt={product.title}
                  loading="lazy"
                  sx={{
                    maxWidth: "100%",
                    height: "auto",
                    width: "107px",
                    mt: 0,
                  }}
                />
              </Box>
            </Grid>

            {/* RIGHT */}
            <Grid item xs={12} sm={4.5} md={4.5}>
              <Box>
                <Typography
                className="key-benifits-h6"
                  variant="h6"
                  sx={{ color: "#000", fontWeight: 400,
                  fontSize: { xs: "1.25rem", sm: "10px", md: "0.875rem" },

                   mb: 1.5 }}
                >
                  {product.keyBenefitsTitle}
                </Typography>

                <Box component="ul" sx={{ pl: 2, color: "#000", m: 0 }}>
                  {product.keyBenefits.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#000",
                    fontWeight: 400,
                    fontSize: { xs: "1.25rem", sm: "10px", md: "0.875rem" },

                    mt: {xs:3,sm:3,md:8},
                    
                    mb: 1.5,
                  }}
                >
                  {product.functionTitle}
                </Typography>

                <Box component="ul" sx={{ pl: 2, color: "#000", m: 0 }}>
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

export default DimonoProductComponent;