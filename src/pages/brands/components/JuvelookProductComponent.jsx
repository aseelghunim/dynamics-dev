import { Box, Button, Grid, Typography, Container } from "@mui/material";
import { Stack, useMediaQuery } from "@mui/system";
import { tokens } from "locales/tokens";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

import logo from "assets/juvelook/logo.png";
import product1 from "assets/juvelook/juvelook-product-1.png";
import productTablet from 'assets/juvelook/product-mobile-bg.png'
import './JuvelookProductComponent.css'
const JuvelookProductComponent = () => {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState("product-1");
  const theme = useTheme();

  const isTablet = useMediaQuery("(min-width:768px) and (max-width:991px)");
  const productImage = isTablet ? productTablet : product1;
  const products = [
    {
      value: "product-1",
      title1: t(tokens.brands.juvelook.products[0].aging[0].title1),
      title2: t(tokens.brands.juvelook.products[0].aging[0].title2),
      title4: t(tokens.brands.juvelook.products[0].aging[0].title4),
      description1: t(tokens.brands.juvelook.products[0].aging[0].description1),
      description2: t(tokens.brands.juvelook.products[0].aging[0].description2),
      description3: t(tokens.brands.juvelook.products[0].aging[0].description3),
      volumeItems: [
        t(tokens.brands.juvelook.products[0].aging[0].volumeItems[0]),
        t(tokens.brands.juvelook.products[0].aging[0].volumeItems[1]),
        t(tokens.brands.juvelook.products[0].aging[0].volumeItems[2]),
        t(tokens.brands.juvelook.products[0].aging[0].volumeItems[3]),
        t(tokens.brands.juvelook.products[0].aging[0].volumeItems[4]),
        t(tokens.brands.juvelook.products[0].aging[0].volumeItems[5]),
        t(tokens.brands.juvelook.products[0].aging[0].volumeItems[6]),
      ],

      items: [
        t(tokens.brands.juvelook.products[0].aging[0].items[0]),
        t(tokens.brands.juvelook.products[0].aging[0].items[1]),
        t(tokens.brands.juvelook.products[0].aging[0].items[2]),
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
      className="juvelook-product"
      sx={{
        padding: { xs: 2, sm: "2rem", md: "2rem" },
        paddingLeft: { xs: 2, sm: "2rem", md: 19.5 },
        paddingRight: { xs: 2, sm: "2rem", md: 19.5 },
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
      }}
      maxWidth="xxl"
    >
      <Stack alignItems={"stretch"} sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ py: 2 }}>
          <Grid container alignItems="stretch">
            <Grid item xs={12} sm={12}>
              <Box
                component="img"
                src={logo}
                alt="juvelook"
                loading="lazy"
                sx={{
                  // paddingTop: { xs: "16px", sm: 0, md: "16px" },
                  marginLeft: { xs: 0, md: "0" },
                  width: { xs: "265px", sm: "85px", md: "126px" },
                  height: { xs: "96px", sm: "27px", md: "40px" },
                  objectFit: "cover"
                  // width: { xs: "120px", sm: "85px", md: "180px" },
                }}
              />
              <Typography
                className="subtitle-p"
                variant="body1"
                sx={{
                  color: "#6D6E71",
                  mb: { xs: 2, sm: "50px" },
                  fontSize: { xs: "0.875rem", sm: "9px", md: "0.875rem" },
                }}
              >
                {t(tokens.brands.juvelook.products[0].title)}
              </Typography>
            </Grid>
            {products?.map((product) =>
              product.value === tabValue ? (
                <>
                  <Grid item xs={12} sm={4.5} md={4.5}>
                    <Stack spacing={{ xs: 3, sm: 2, md: 6 }}>
                      <Box>
                        <Typography
                          className="no-margin-p"
                          variant="h6"
                          sx={{
                            color: "#1B5EA5",
                            mb: 2,
                            fontSize: { xs: "1.25rem", sm: "11px", md: "1.25rem" },
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
                            fontSize: { xs: "0.875rem", sm: "9px", md: "0.875rem" },
                          }}
                        >
                          {product.description1}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#1B5EA5",
                            mb: 2,
                            mt: { xs: 2, sm: 3, md: 6 },
                            fontSize: { xs: "1.25rem", sm: "11px", md: "1.25rem" },
                          }}
                        >
                          {product.title2}
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
                            fontSize: { xs: "0.875rem", sm: "9px", md: "0.875rem" },
                          }}
                        >
                          {product.description2}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={3} md={3} sx={{
 alignSelf: "flex-end",
                    "@media(min-width:768px) and (max-width:991px)": {
                     
                    }
                  }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        // minHeight: { xs: "auto", md: "457px" },
                        mt: { xs: 2, sm: 0, md: 0 },
                        mb: { xs: 2, sm: 0 },
                      }}
                    >
                      <Box
                        component="img"
                        src={product.img}
                        alt="Juvelook product"
                        loading="lazy"
                        sx={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          height: "auto",
                          // height: 324px;
                          // width: 238px;
                          // object-fit: cover;
                          width: { xs: "100%", sm: "95%", md: "auto" },
                          "@media(max-width:767px)": {
                            marginTop: "-50px !important",
                            transform: "scale(2)",
                          }


                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4.5} md={4.5}>
                    <Stack spacing={{ xs: 3, sm: 2, md: 6 }}>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 2,
                            color: "#1B5EA5",
                            fontSize: { xs: "1.25rem", sm: "11px", md: "1.25rem" },
                            marginTop: { xs: "120px", sm: "unset" }
                          }}
                        >
                          {product.title4}
                        </Typography>
                        <Typography
                          component="ul"
                          sx={{
                            pl: 2,
                            fontSize: { xs: "0.875rem", sm: "9px", md: "1rem" },
                            color: "#6D6E71",
                          }}
                        >
                          {product.volumeItems.map((item) => (
                            <li>{item}</li>
                          ))}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 2,
                            color: "#1B5EA5",
                            fontSize: { xs: "1.25rem", sm: "11px", md: "1.25rem" },
                          }}
                        >
                          {t(tokens.brands.juvelook.keyBenefits)}
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
                    </Stack>
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

export default JuvelookProductComponent;
