import { Box, Button, Grid, Typography, Container } from "@mui/material";
import { Stack, useMediaQuery } from "@mui/system";
import { tokens } from "locales/tokens";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import logo from "assets/lenisna/logo.png";
import product1 from "assets/lenisna/product-1.png";
import productTablet from "assets/lenisna/tablet-product.png";

import './LenisnaProductComponent.css'
const LenisnaProductComponent = () => {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState("product-1");


  const isTablet = useMediaQuery("(min-width:768px) and (max-width:991px)");
  const productImage = isTablet ? productTablet : product1;
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
      img: productImage,
      buttonStyle: { color: "#0DADA5", borderColor: "#0DADA5" },
      activeStyle: { backgroundColor: "#0DADA5" },
    },
  ];

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  return (
    <Box
      className="lenisna-product"
      sx={{
        padding: { xs: 2, sm: 8, md: "2rem" },
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
      }}
      maxWidth="xl"
    >
      <Stack alignItems={"stretch"} sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 0, md: 2 } }}>
          <Grid container alignItems="stretch">
            <Grid item xs={12} sm={12}>
              <Box
                component="img"
                src={logo}
                alt="Renee Lift"
                loading="lazy"
                sx={{
                  marginLeft: { xs: 0, md: "0" },
                  maxWidth: "100%",
                  height: "auto",
                  width: { xs: "120px", sm: "85px", md: "112px" },
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#6D6E71",
                  mb: { xs: 2, sm: "32px", md: "90px" },
                  fontSize: { xs: "0.875rem", sm: "10px", md: "0.875rem" },
                }}
              >
                {t(tokens.brands.lenisna.products[0].title)}
              </Typography>
            </Grid>
            {products?.map((product) =>
              product.value === tabValue ? (
                <>
                  <Grid item xs={12} sm={4.5}>
                    <Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#7B1237",
                            mb: { xs: "16px", sm: "4px", md: "16px" },

                            fontSize: { xs: "1.25rem", sm: "10px", md: "0.875rem" },
                          }}
                        >
                          {product.title1}
                        </Typography>
                        <Typography
                          variant="body1"
                          component="div"
                          sx={{
                            color: "#7c7c7c",
                            textAlign: "justify",
                            textJustify: "inter-word",
                            wordSpacing: "0.15em",
                            letterSpacing: "0.02em",
                            lineHeight: 1.7,
                            display: "block",
                            width: "100%",
                            fontSize: { xs: "0.875rem", sm: "9px", md: "0.875rem" },
                          }}
                        >
                          {product.description1}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: { xs: 2, sm: "66px", md: "80px" } }}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#7B1237",
                            mb: { xs: "16px", sm: "4px", md: "16px" },

                            fontSize: { xs: "1.25rem", sm: "10px", md: "14px" },
                          }}
                        >
                          {product.title2}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#6D6E71",
                            fontSize: { xs: "0.875rem", sm: "9px", md: "0.875rem" },
                          }}
                        >
                          {product.description2}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={3} sx={{

                    "@media(min-width: 768px) and (max-width: 991px)": {
                      alignSelf: "flex-end"
                    }
                  }}>
                    <Box
                      sx={{
                        textAlign: "center",
                        position: "relative",
                        // minHeight: { xs: "auto", md: "457px" },
                        mb: { xs: 2, sm: 0 },
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
                          mt: { xs: 0, sm: 0, md: "-40px" },
                          width: { xs: "80%", sm: "90%", md: "240px" },
                          "@media(min-width: 768px) and (max-width: 991px)": {
                            // transform:"scale(2)"
                          }
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4.5} >
                    <Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: { xs: "16px", sm: "4px", md: "16px" },

                            color: "#7B1237",
                            fontSize: { xs: "1.25rem", sm: "10px", md: "1.25rem" },
                          }}
                        >
                          {product.title4}
                        </Typography>
                        <Typography
                          component="ul"
                          sx={{
                            pl: 2,
                            fontSize: { xs: "0.875rem", sm: "10px", md: "1rem" },
                            color: "#6D6E71",
                          }}
                        >
                          {product.volumeItems.map((item) => (
                            <li>{item}</li>
                          ))}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: { xs: 2, sm: "29px", md: "40px" } }}>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: { xs: "16px", sm: "4px", md: "16px" },

                            color: "#7B1237",
                            fontSize: { xs: "1.25rem", sm: "10px", md: "1.25rem" },
                          }}
                        >
                          {t(tokens.brands.renee.keyBenefits)}
                        </Typography>
                        <Typography
                          component="ul"
                          sx={{
                            pl: 2,
                            fontSize: { xs: "0.875rem", sm: "9px", md: "1rem" },
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
              <Grid item xs={12} sm={12}>
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
