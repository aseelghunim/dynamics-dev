import { Box, Button, Grid, Typography, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { tokens } from "locales/tokens";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import logo from "assets/lenisna/logo.png";
import product1 from "assets/lenisna/lenisna-product1.png";
import './LenisnaProductComponent.css'
const LenisnaProductComponent = () => {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState("product-1");

  const products = [
    {
      value: "product-1",
      title1: t(tokens.brands.lenisna.products[0].aging[0].title1),
      title2: t(tokens.brands.lenisna.products[0].aging[0].title2),
      title4: t(tokens.brands.lenisna.products[0].aging[0].title4),
      description1: t(tokens.brands.lenisna.products[0].aging[0].description1),
      description2: t(tokens.brands.lenisna.products[0].aging[0].description2),
      description3: t(tokens.brands.lenisna.products[0].aging[0].description3),
      volumeItems: [
        t(tokens.brands.lenisna.products[0].aging[0].volumeItems[0]),
        t(tokens.brands.lenisna.products[0].aging[0].volumeItems[1]),
        t(tokens.brands.lenisna.products[0].aging[0].volumeItems[2]),
        t(tokens.brands.lenisna.products[0].aging[0].volumeItems[3]),
        t(tokens.brands.lenisna.products[0].aging[0].volumeItems[4]),
        t(tokens.brands.lenisna.products[0].aging[0].volumeItems[5]),
      ],

      items: [
        t(tokens.brands.lenisna.products[0].aging[0].items[0]),
        t(tokens.brands.lenisna.products[0].aging[0].items[1]),
        t(tokens.brands.lenisna.products[0].aging[0].items[2]),
      ],
      img: product1,
      buttonStyle: { color: "#0DADA5", borderColor: "#0DADA5" },
      activeStyle: { backgroundColor: "#0DADA5" },
    },
  ];

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, md: "2rem" },
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
      }}
      maxWidth="xxl"
    >
      <Stack alignItems={"stretch"} sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ py: 2 }}>
          <Grid container alignItems="stretch">
            <Grid item xs={12} md={12}>
              <Box
                component="img"
                src={logo}
                alt="Renee Lift"
                loading="lazy"
                sx={{
                  marginLeft: { xs: 0, md: "-10px" },
                  maxWidth: "100%",
                  height: "auto",
                  width: { xs: "120px", md: "180px" },
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#6D6E71",
                  mb: { xs: 2, md: "90px" },
                  fontSize: { xs: "0.875rem", md: "inherit" },
                }}
              >
                {t(tokens.brands.lenisna.products[0].title)}
              </Typography>
            </Grid>
            {products?.map((product) =>
              product.value === tabValue ? (
                <>
                  <Grid item xs={12} md={3}>
                    <Box>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#7B1237",
                            mb: 2,
                            fontSize: { xs: "1.25rem", md: "inherit" },
                          }}
                        >
                          {product.title1}
                        </Typography>
                        <Typography
                          variant="body1"
                          component="div"
                          sx={{
                            color: "#6D6E71",
                            textAlign: "justify",
                            textJustify: "inter-word",
                            wordSpacing: "0.15em",
                            letterSpacing: "0.02em",
                            lineHeight: 1.7,
                            display: "block",
                            width: "100%",
                            fontSize: { xs: "0.875rem", md: "inherit" },
                          }}
                        >
                          {product.description1}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: { xs: 2, md: "80px" } }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#7B1237",
                            mb: 2,
                            fontSize: { xs: "1.25rem", md: "inherit" },
                          }}
                        >
                          {product.title2}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#6D6E71",
                            fontSize: { xs: "0.875rem", md: "inherit" },
                          }}
                        >
                          {product.description2}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        textAlign: "center",
                        position: "relative",
                        minHeight: { xs: "auto", md: "457px" },
                        mb: { xs: 2, md: 0 },
                      }}
                    >
                      <Box
                        component="img"
                        src={product.img}
                        alt="Renee Lift"
                        loading="lazy"
                        sx={{
                          maxWidth: "100%",
                          height: "auto",
                          mt: { xs: 0, md: "-220px" },
                          width: { xs: "80%", md: "100%" },
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 2,
                            color: "#7B1237",
                            fontSize: { xs: "1.25rem", md: "inherit" },
                          }}
                        >
                          {product.title4}
                        </Typography>
                        <Typography
                          component="ul"
                          sx={{
                            pl: 2,
                            fontSize: { xs: "0.875rem", md: "1rem" },
                            color: "#6D6E71",
                          }}
                        >
                          {product.volumeItems.map((item) => (
                            <li>{item}</li>
                          ))}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: { xs: 2, md: "40px" } }}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 2,
                            color: "#7B1237",
                            fontSize: { xs: "1.25rem", md: "inherit" },
                          }}
                        >
                          {t(tokens.brands.renee.keyBenefits)}
                        </Typography>
                        <Typography
                          component="ul"
                          sx={{
                            pl: 2,
                            fontSize: { xs: "0.875rem", md: "1rem" },
                            color: "#6D6E71",
                          }}
                        >
                          {product.items.map((item) => (
                            <li>{item}</li>
                          ))}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </>
              ) : null
            )}

            {products.length > 1 && (
              <Grid item xs={12} md={12}>
                {/* Button Section */}
                <Stack direction="row" justifyContent={"space-between"}>
                  {products?.map((product) => (
                    <Button
                      variant={
                        product.value === tabValue ? "contained" : "outlined"
                      }
                      onClick={() => {
                        handleTabChange(product.value);
                      }}
                      sx={
                        product.value === tabValue
                          ? product.activeStyle
                          : product.buttonStyle
                      }
                    >
                      {product.buttonTitle}
                    </Button>
                  ))}
                </Stack>
              </Grid>
            )}
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
};

export default LenisnaProductComponent;
