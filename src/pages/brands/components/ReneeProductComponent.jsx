import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";

import product1 from "assets/renee/product1.png";
import product2 from "assets/renee/product2.png";
import product3 from "assets/renee/product3.png";
import product4 from "assets/renee/product4.png";
import product5 from "assets/renee/product5.png";

import "./ReneeProductComponent.css";

/** Custom arrow (replaces ExpandMoreIcon) */
const AccordionArrow = ({ expanded, color = "#000" }) => (
  <Box
    component="span"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 200ms ease",
    }}
  >
    <svg
      width="23"
      height="11"
      viewBox="0 0 23 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.4695 0.384149C22.8649 0.8454 22.8115 1.53983 22.3502 1.9352L12.0836 10.7352C11.6716 11.0883 11.0638 11.0883 10.6518 10.7352L0.385197 1.9352C-0.0760708 1.53983 -0.129456 0.845399 0.26581 0.384148C0.661222 -0.0771022 1.35569 -0.130533 1.81695 0.264835L11.3677 8.4512L20.9185 0.264836C21.3797 -0.130532 22.0742 -0.0771013 22.4695 0.384149Z"
        fill={color}
      />
    </svg>
  </Box>
);

const ReneeProductComponent = () => {
  const { t } = useTranslation();

  // mobile accordion selection
  const [tabValue, setTabValue] = useState("product-1");

  // ✅ Mobile-only layout switch (desktop stays exactly the same)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const products = [
    {
      value: "product-1",
      title: t(tokens.brands.renee.products[0].skin[0].title),
      preQuestion: t(tokens.brands.renee.products[0].skin[0].preQuestion),
      question: t(tokens.brands.renee.products[0].skin[0].question),
      buttonTitle: t(tokens.brands.renee.products[0].skin[0].buttonTitle),
      subtitle: t(tokens.brands.renee.products[0].skin[0].subtitle),
      description: t(tokens.brands.renee.products[0].skin[0].description),
      items: [
        t(tokens.brands.renee.products[0].skin[0].items[0]),
        t(tokens.brands.renee.products[0].skin[0].items[1]),
        t(tokens.brands.renee.products[0].skin[0].items[2]),
      ],
      img: product1,
      buttonStyle: { color: "#0DADA5", borderColor: "#0DADA5" },
      activeStyle: { backgroundColor: "#0DADA5" },
      mobileIndicatorColor: "#0DADA5",
    },
    {
      value: "product-2",
      title: t(tokens.brands.renee.products[0].skin[1].title),
      question: t(tokens.brands.renee.products[0].skin[1].question),
      buttonTitle: t(tokens.brands.renee.products[0].skin[1].buttonTitle),
      subtitle: t(tokens.brands.renee.products[0].skin[1].subtitle),
      description: t(tokens.brands.renee.products[0].skin[1].description),
      items: [
        t(tokens.brands.renee.products[0].skin[1].items[0]),
        t(tokens.brands.renee.products[0].skin[1].items[1]),
        t(tokens.brands.renee.products[0].skin[1].items[2]),
      ],
      img: product2,
      buttonStyle: { color: "#E48F75", borderColor: "#E48F75" },
      activeStyle: { backgroundColor: "#E48F75" },
      mobileIndicatorColor: "#E48F75",
    },
    {
      value: "product-3",
      title: t(tokens.brands.renee.products[0].skin[2].title),
      question: t(tokens.brands.renee.products[0].skin[2].question),
      buttonTitle: t(tokens.brands.renee.products[0].skin[2].buttonTitle),
      subtitle: t(tokens.brands.renee.products[0].skin[2].subtitle),
      description: t(tokens.brands.renee.products[0].skin[2].description),
      items: [
        t(tokens.brands.renee.products[0].skin[2].items[0]),
        t(tokens.brands.renee.products[0].skin[2].items[1]),
        t(tokens.brands.renee.products[0].skin[2].items[2]),
      ],
      img: product3,
      buttonStyle: { color: "#F2E149", borderColor: "#F2E149" },
      activeStyle: { backgroundColor: "#F2E149" },
      mobileIndicatorColor: "#F2E149",
    },
    {
      value: "product-4",
      title: t(tokens.brands.renee.products[0].skin[3].title),
      question: t(tokens.brands.renee.products[0].skin[3].question),
      buttonTitle: t(tokens.brands.renee.products[0].skin[3].buttonTitle),
      subtitle: t(tokens.brands.renee.products[0].skin[3].subtitle),
      description: t(tokens.brands.renee.products[0].skin[3].description),
      items: [
        t(tokens.brands.renee.products[0].skin[3].items[0]),
        t(tokens.brands.renee.products[0].skin[3].items[1]),
        t(tokens.brands.renee.products[0].skin[3].items[2]),
      ],
      img: product4,
      buttonStyle: { color: "#DFA9B3", borderColor: "#DFA9B3" },
      activeStyle: { backgroundColor: "#DFA9B3" },
      mobileIndicatorColor: "#DFA9B3",
    },
    {
      value: "product-5",
      title: t(tokens.brands.renee.products[0].skin[4].title),
      question: t(tokens.brands.renee.products[0].skin[4].question),
      buttonTitle: t(tokens.brands.renee.products[0].skin[4].buttonTitle),
      subtitle: t(tokens.brands.renee.products[0].skin[4].subtitle),
      description: t(tokens.brands.renee.products[0].skin[4].description),
      items: [
        t(tokens.brands.renee.products[0].skin[4].items[0]),
        t(tokens.brands.renee.products[0].skin[4].items[1]),
        t(tokens.brands.renee.products[0].skin[4].items[2]),
      ],
      img: product5,
      buttonStyle: { color: "#EFB854", borderColor: "#EFB854" },
      activeStyle: { backgroundColor: "#EFB854" },
      mobileIndicatorColor: "#EFB854",
    },
  ];

  // ✅ allow open/close by tapping the same row again
  const handleTabChange = (value) => {
    setTabValue((prev) => (prev === value ? "" : value));
  };

  // ======== ✅ MOBILE VIEW =========
  if (isMobile) {
    return (
      <Box
        className="renee-product"
        sx={{
          padding: { xs: 2, sm: "2rem" },
          // borderRadius: "8px",
        }}
        maxWidth="xxl"
      >
        <Container maxWidth="xl" sx={{ py: { xs: 1, sm: 2 } }}>
          <Box sx={{ width: "100%" }}>
            {products.map((product) => {
              const expanded = tabValue === product.value;

              return (
                <Accordion
                  key={product.value}
                  disableGutters
                  elevation={0}
                  expanded={expanded}
                  onChange={() => handleTabChange(product.value)}
                  sx={{
                    borderBottom: "1px solid #D9D9D9",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AccordionArrow expanded={expanded} color="#000" />}
                    sx={{
                      px: 0,
                      py: expanded ? 2 : 3,
                      "& .MuiAccordionSummary-content": {
                        alignItems: expanded ? "flex-start" : "center",
                        justifyContent: "space-between",
                        gap: 2,
                        margin: 0,
                      },
                    }}
                  >
                    {/* LEFT: title changes style when expanded */}
                    <Typography
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: expanded ? 700 : 400,
                        lineHeight: 1.05,
                        color: expanded ? product.mobileIndicatorColor : "#000",
                        maxWidth: expanded ? "85%" : "65%",
                        whiteSpace: "normal",

                      }}
                    >
                      {product.buttonTitle}
                    </Typography>

                    {/* RIGHT: color pill ONLY when collapsed */}
                    {!expanded && (
                      <Box
                        sx={{
                          width: 49,
                          height: 14,
                          borderRadius: "2px",
                          backgroundColor: product.mobileIndicatorColor,
                          flexShrink: 0,
                          marginRight: "24px"
                        }}
                      />
                    )}
                  </AccordionSummary>

                  <AccordionDetails sx={{ px: 0, pb: 2 }}>
                    {!!product.subtitle && (
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6D6E71",
                          fontSize: "1rem",
                          mb: 2,
                          mt: { xs: "-20px", sm: 0 },
                        }}
                      >
                        {product.subtitle}
                      </Typography>
                    )}

                    {/* Image */}
                    <Box sx={{ textAlign: "center", mb: 2 }}>
                      <Box
                        component="img"
                        src={product.img}
                        alt={product.buttonTitle}
                        loading="lazy"
                        sx={{
                          width: "80%",
                          maxWidth: 360,
                          height: "auto",
                        }}
                      />
                    </Box>

                    {/* Question section */}
                    <Box sx={{
                      mb: 1.5,

                      //   margin- top: 48px;
                      // margin-bottom: 8px;
                    }}>
                      {product.preQuestion && (
                        <Typography
                          variant="body2"
                          sx={{ color: "#8B49AA", fontSize: "0.9rem" }}
                        >
                          {product.preQuestion}
                        </Typography>
                      )}
                      <Typography
                        variant="body2"
                        sx={{ color: "#5A2772", fontSize: "0.95rem" }}
                      >
                        {product.question}
                      </Typography>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#6D6E71",
                        mb: 2,
                        fontSize: { xs: "1rem", sm: "1.25rem" },
                      }}
                    >
                      {product.description}
                    </Typography>

                    {/* Key Benefits */}
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 1,
                        color: "#5A2772",
                        fontSize: { xs: "1rem", sm: "1.25rem" },
                      }}
                    >
                      {t(tokens.brands.renee.keyBenefits)}
                    </Typography>

                    <Typography component="ul" sx={{ pl: 2, m: 0 }}>
                      {product.items.map((item, idx) => (
                        <li key={`${product.value}-item-${idx}`}>{item}</li>
                      ))}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Container >
      </Box >
    );
  }

  // ======== ✅ DESKTOP VIEW (UNCHANGED) =========
  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 7, md: "2rem" },
        borderRadius: "8px",
        paddingRight: "24px",
        paddingTop:"80px!important"
      }}
      maxWidth="xxl"
    >
      <Stack alignItems={"stretch"} sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 1, sm: 2 } }}>
          <Grid container spacing={{ xs: 2, sm: 4 }} alignItems="center">
            {products?.map((product) =>
              product.value === tabValue ? (
                <React.Fragment key={product.value}>
                  <Grid item xs={12} sm={4.5} md={4}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: "1rem", sm: "inherit" },
                        mb: { xs: 1, sm: 0 },
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Box
                      sx={{
                        height: { xs: "auto", sm: "50px" },
                        mb: { xs: 1, sm: 0 },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#6D6E71",
                          fontSize: { xs: "0.875rem", sm: "inherit" },
                        }}
                      >
                        {product.subtitle}
                      </Typography>
                    </Box>

                    <Box sx={{ mt: { xs: 1, sm: 6, md: 2 }, mb: { xs: 1, sm: 1, md: 2 } }}>
                      {product.preQuestion && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#8B49AA",
                            fontSize: { xs: "0.75rem", sm: "inherit" },
                          }}
                        >
                          {product.preQuestion}
                        </Typography>
                      )}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#5A2772",
                          fontSize: { xs: "0.75rem", sm: "inherit" },
                        }}
                      >
                        {product.question}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        mb: { xs: 1, sm: 2 },
                        color: "#6D6E71",
                        fontSize: { xs: "0.75rem", sm: "inherit" },
                      }}
                    >
                      {product.description}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={3} md={4}>
                    <Box
                      sx={{
                        textAlign: "center",
                        position: "relative",
                        minHeight: { xs: "auto", sm: "auto", md: "457px" },
                        mb: { xs: 2, sm: 0 },
                      }}
                    >
                      <Box
                        component="img"
                        src={product.img}
                        alt={product.buttonTitle}
                        loading="lazy"
                        sx={{
                          maxWidth: "100%",
                          height: "auto",
                          width: { xs: "80%", sm: "100%" },
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={4.5} md={4}>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 1,
                        color: "#5A2772",
                        fontSize: { xs: "0.875rem", sm: "inherit" },
                      }}
                    >
                      {t(tokens.brands.renee.keyBenefits)}
                    </Typography>
                    <Typography
                      component="ul"
                      sx={{
                        pl: 2,
                        fontSize: { xs: "0.75rem", sm: "1rem" },
                      }}
                    >
                      {product.items.map((item, idx) => (
                        <li key={`${product.value}-desktop-item-${idx}`}>
                          {item}
                        </li>
                      ))}
                    </Typography>
                  </Grid>
                </React.Fragment>
              ) : null
            )}

            <Grid item xs={12} sm={12}>
              {/* Button Section */}
              <Grid
                item
                xs={12}
                sm={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: { xs: 2, sm: 0 },
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2 }}
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  {products?.map((product) => (
                    <Button
                      key={product.value}
                      variant={
                        product.value === tabValue ? "contained" : "outlined"
                      }
                      onClick={() => setTabValue(product.value)}
                      sx={{
                        minWidth: { xs: "100%", sm: "95px", md: "150px" },
                        fontSize: { xs: "0.75rem", sm: "9px", md: "0.75rem" },
                        py: { xs: 1, sm: 1.5 },
                        ...(product.value === tabValue
                          ? product.activeStyle
                          : product.buttonStyle),
                      }}
                    >
                      {product.buttonTitle}
                    </Button>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
};

export default ReneeProductComponent;