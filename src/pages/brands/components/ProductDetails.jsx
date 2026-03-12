import { Box, Button, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const ProductDetails = ({ products, collection }) => {
  const theme = useTheme();
  const [productTab, setProductTab] = useState(
    products?.length > 0 ? products[0].value : ""
  );

  return (
    <Box>
      {products?.map((product) => {
        return product.value === productTab ? (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{
              height: { xs: "auto", sm: "auto", md: "50vh" },
              gap: { xs: 2, sm: 6, md: 0 },
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "40%",
                },
                padding: { xs: 2, sm: 0, md: 3 },
                height: "fit-content",
                overflow: "hidden",
                wordWrap: "break-word",
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                  },
                }}
              >
                <Stack spacing={1}>
                  <Typography
                    variant="h5"
                    fontWeight={{ xs: "bold", sm: "regular", md: "bold" }}
                    gutterBottom
                    sx={{
                      fontFamily:"ParagraphFonts!important",
                      fontSize: { xs: "1rem", sm: "0.875rem", md: "0.875rem" },
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.primary.main}
                    gutterBottom
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "13px", md: "13px" },
                    }}
                  >
                    {product.subtitle}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "13px", md: "13px" },
                      ...(product.descriptionSx || {}),
                    }}
                  >
                    {product.description}
                  </Typography>
                </Stack>
                <Box sx={{ mt: { xs: "10px", sm: "20px" } }}>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "20px",
                    }}
                  >
                    {product?.items?.map((item) => {
                      return (
                        <li key={item}>
                          <Typography
                            sx={{
                              fontSize: { xs: "0.75rem", sm: "13px", md: "13px" },
                            }}
                          >
                            {item}{" "}
                          </Typography>
                        </li>
                      );
                    })}
                  </ul>
                </Box>
                {product.description2 && (
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      mt: 2,
                      fontSize: { xs: "0.75rem", sm: "13px", md: "13px" },
                    }}
                  >
                    {product.description2}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  sm: "60%",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {collection === 1 ? (
                <Box
                  component="img"
                  src={
                    product.img
                      ? product.img
                      : "https://via.placeholder.com/250"
                  }
                  sx={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    "@media(min-width: 768px) and (max-width: 991px)": {
                      transform: "scale(1.5)"
                    }
                  }}
                  alt="Product Image"
                />
              ) : (
                <Box
                  component="img"
                  src={
                    product.img
                      ? product.img
                      : "https://via.placeholder.com/250"
                  }
                  sx={{
                    height: { xs: "300px", sm: "auto", md: "50vh" },
                    width: "auto",
                    maxWidth: "100%",
                    "@media(min-width: 768px) and (max-width: 991px)": {
                      transform: "scale(1.5)"
                    }
                  }}
                  alt="Product Image"
                />
              )}
            </Box>
          </Stack>
        ) : null;
      })}

      <Stack alignItems={"center"} sx={{
        mt: { xs: 2, sm:collection == '2'? 10:0,md:0 },

      }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent={"space-around"}
          spacing={{ xs: 1, sm: 0 }}
          sx={{
            columnGap: "12px!important",
            width: { xs: "100%",sm:collection == 1 ? "100%": "50%", md: "50%" },
            justifyContent: collection == '1' ? "center":"space-around",

            "@media(min-width: 768px) and (max-width: 991px)": {
              // columnGap: "12px"
            }
          }}
        >
          {products.length > 1 &&
            products?.map((product) => {
              return (
                <Button
                  onClick={() => {
                    setProductTab(product.value);
                  }}
                  variant={
                    product.value === productTab ? "contained" : "outlined"
                  }
                  sx={{
                    width: { xs: "100%", sm: "61px", md: "61px" },
                    height:"32px",
                    px:0,
                    borderRadius: "5px",
                    fontSize: { xs: "0.75rem", sm: "10px", md: "11px" },
                    py: { xs: 1, sm: 0, md: 1.5 },
                    "@media(min-width: 768px) and (max-width: 991px)": {
                      fontWeight: "medium",
                      px: 0,
                      width: "61px",
                      borderRadius: "8px"
                    }
                  }}
                >
                  {product.buttonTitle}
                </Button>
              );
            })}
        </Stack>
      </Stack>
    </Box>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
