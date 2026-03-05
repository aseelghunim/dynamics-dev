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
            direction={{ xs: "column", sm: "column", md: "row" }}
            sx={{
              height: { xs: "auto", sm: "auto", md: "50vh" },
              gap: { xs: 2, sm: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "40%",
                },
                padding: { xs: 2, sm: 2, md: 3 },
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
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1rem", md: "inherit" },
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.primary.main}
                    gutterBottom
                    sx={{
                      fontSize: { xs: "0.875rem", md: "inherit" },
                    }}
                  >
                    {product.subtitle}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "0.75rem", md: "inherit" },
                      ...(product.descriptionSx || {}),
                    }}
                  >
                    {product.description}
                  </Typography>
                </Stack>
                <Box sx={{ mt: { xs: "10px", md: "20px" } }}>
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
                              fontSize: { xs: "0.75rem", md: "inherit" },
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
                      fontSize: { xs: "0.75rem", md: "inherit" },
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
                  md: "60%",
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
                    height: { xs: "300px", sm: "400px", md: "50vh" },
                    width: "auto",
                    maxWidth: "100%",
                  }}
                  alt="Product Image"
                />
              )}
            </Box>
          </Stack>
        ) : null;
      })}

      <Stack alignItems={"center"} sx={{ mt: { xs: 2, md: 0 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-around"}
          spacing={{ xs: 1, md: 0 }}
          sx={{
            width: { xs: "100%", md: "50%" },
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
                    width: { xs: "100%", md: "auto" },
                    fontSize: { xs: "0.75rem", md: "inherit" },
                    py: { xs: 1, md: 1.5 },
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
