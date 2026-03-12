import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/system";
import { useState } from "react";

import opera_1_body_img from "assets/ksurgery/products/body/opera_body1.png";
import opera_1_img from "assets/ksurgery/products/face/opera1.png";
import opera_2_img from "assets/ksurgery/products/face/opera2.png";
import opera_3_img from "assets/ksurgery/products/face/opera3.png";
import opera_4_img from "assets/ksurgery/products/face/opera4.png";
import opera_1_rev_img from "assets/ksurgery/products/face/rev-opera-face1.png";
import opera_2_rev_img from "assets/ksurgery/products/face/rev-opera-face2.png";
import opera_1_body_rev_img from "assets/ksurgery/products/body/rev-opera-body1.png";

import ProductDetails from "./ProductDetails";
import { useTranslation } from "react-i18next";
import { tokens } from "locales/tokens";
import './KsurgeryProductComponent.css'
/**
 * Mobile-only purple section header like screenshot ("Face", "Body")
 */
const MobileSectionHeader = ({ label }) => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "#fff",
        borderRadius: { xs: "3px", sm: 6, },
        px: 3,
        py: 2,
        width: "100%",
        maxWidth: 520,
        mx: "auto",
      }}
    >
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: "1.5rem", sm: "2.25rem" },
          lineHeight: 1,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

/**
 * Mobile accordion list:
 * - Subtitle appears ONLY when expanded
 * - Title color changes when expanded
 * - Single accordion open at a time
 */
const MobileAccordionList = ({ products, collection }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panelId) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panelId : false);
  };

  return (
    <Stack sx={{ width: "100%", maxWidth: 520, mx: "auto" }}>
      <Divider sx={{ opacity: 0.6 }} />

      {products.map((p) => {
        const panelId = p.value || p.title;
        const isOpen = expanded === panelId;

        return (
          <Box key={panelId}>
            <Accordion
              disableGutters
              elevation={0}
              expanded={isOpen}
              onChange={handleChange(panelId)}
              sx={{
                bgcolor: "transparent",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 0,
                  py: 2.25,
                  "& .MuiAccordionSummary-content": { my: 0 },
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    color: "text.primary",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 150ms linear",
                  },
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontWeight: isOpen ? 700 : 400,
                      letterSpacing: "0.08em",
                      fontSize: "1.25rem",
                      color: isOpen ? "primary.main" : "text.primary",
                    }}
                  >
                    {p.title}
                  </Typography>

                  {isOpen && p.subtitle && (
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "primary.main",
                        fontSize: "1.125rem",
                        mt: 0.5,
                      }}
                    >
                      {p.subtitle}
                    </Typography>
                  )}
                </Stack>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 0, pb: 2 }}>
                {p.description && (
                  <Typography sx={{ mb: 2, ...(p.descriptionSx || {}) }}>
                    {p.description}
                  </Typography>
                )}

                {p.img && (
                  <Box
                    component="img"
                    src={p.img}
                    alt={p.title}
                    sx={{
                      width: "100%",
                      display: "block",
                      borderRadius: 1,
                      mb: 2,
                      position: "relative",
                      top: p.group == 1 ? "-100px" : "-70px"
                    }}
                  />
                )}

                {Array.isArray(p.items) && p.items.length > 0 && (
                  <Box component="ul" sx={{ pl: 2.5, m: 0, marginTop: p.group == 1 ? "-200px" : "-120px" }}>
                    {p.items.map((it, i) => (
                      <Box component="li" key={i} sx={{ mb: 0.5 }}>
                        <Typography>{it}</Typography>
                      </Box>
                    ))}
                  </Box>
                )}

                {/* Optional extra description line for body if you want it visible on mobile */}
                {p.description2 && (
                  <Typography sx={{

                    marginTop: p.group == 1 ? "-200px" : "-120px"


                  }}>{p.description2}</Typography>
                )}
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ opacity: 0.6 }} />
          </Box>
        );
      })}
    </Stack>
  );
};

/**
 * Mobile layout like screenshot:
 * Face header + accordions
 * Body header + accordions
 */
const MobileFaceBodyLayout = ({
  collection,
  faceProducts,
  bodyProducts,
  faceLabel,
  bodyLabel,
}) => {
  return (
    <Stack spacing={6} sx={{ pb: 4 }} >
      <Stack spacing={3}>
        <MobileSectionHeader label={faceLabel} />
        <MobileAccordionList products={faceProducts} collection={collection} />
      </Stack>

      <Stack spacing={3}>
        <MobileSectionHeader label={bodyLabel} />
        <MobileAccordionList products={bodyProducts} collection={collection} />
      </Stack>
    </Stack>
  );
};

const KsurgeryProductComponent = ({ collection = 1 }) => {
  // keep original desktop tab behavior exactly
  const [tabValue, setTabValue] = useState("face");
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const tabs = [
    { value: "face", label: t(tokens.brands.our_collection.face) },
    { value: "body", label: t(tokens.brands.our_collection.body) },
  ];

  const faceProducts = [
    {
      group: 1,

      value: "opera-1",
      title: t(tokens.brands.ksurgery.products[0].face[0].title),
      buttonTitle: t(tokens.brands.ksurgery.products[0].face[0].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[0].face[0].subtitle),
      description: t(tokens.brands.ksurgery.products[0].face[0].description),
      items: [
        t(tokens.brands.ksurgery.products[0].face[0].items[0]),
        t(tokens.brands.ksurgery.products[0].face[0].items[1]),
        t(tokens.brands.ksurgery.products[0].face[0].items[2]),
        t(tokens.brands.ksurgery.products[0].face[0].items[3]),
      ],
      img: opera_1_img,
    },
    {
      group: 1,

      value: "opera-2",
      title: t(tokens.brands.ksurgery.products[0].face[1].title),
      buttonTitle: t(tokens.brands.ksurgery.products[0].face[1].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[0].face[1].subtitle),
      description: t(tokens.brands.ksurgery.products[0].face[1].description),
      items: [
        t(tokens.brands.ksurgery.products[0].face[1].items[0]),
        t(tokens.brands.ksurgery.products[0].face[1].items[1]),
        t(tokens.brands.ksurgery.products[0].face[1].items[2]),
        t(tokens.brands.ksurgery.products[0].face[1].items[3]),
      ],
      img: opera_2_img,
    },
    {
      group: 1,

      value: "opera-3",
      title: t(tokens.brands.ksurgery.products[0].face[2].title),
      buttonTitle: t(tokens.brands.ksurgery.products[0].face[2].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[0].face[2].subtitle),
      description: t(tokens.brands.ksurgery.products[0].face[2].description),
      items: [
        t(tokens.brands.ksurgery.products[0].face[2].items[0]),
        t(tokens.brands.ksurgery.products[0].face[2].items[1]),
        t(tokens.brands.ksurgery.products[0].face[2].items[2]),
        t(tokens.brands.ksurgery.products[0].face[2].items[3]),
      ],
      img: opera_3_img,
    },
    {
      group: 1,
      value: "opera-4",
      title: t(tokens.brands.ksurgery.products[0].face[3].title),
      buttonTitle: t(tokens.brands.ksurgery.products[0].face[3].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[0].face[3].subtitle),
      description: t(tokens.brands.ksurgery.products[0].face[3].description),
      descriptionSx: {
        textAlign: "justify",
        textJustify: "inter-word",
        wordSpacing: "0.15em",
        letterSpacing: "0.02em",
        lineHeight: 1.7,
        display: "block",
        width: "100%",
      },
      items: [
        t(tokens.brands.ksurgery.products[0].face[3].items[0]),
        t(tokens.brands.ksurgery.products[0].face[3].items[1]),
        t(tokens.brands.ksurgery.products[0].face[3].items[2]),
        t(tokens.brands.ksurgery.products[0].face[3].items[3]),
      ],
      img: opera_4_img,
    },
  ];

  const bodyProducts = [
    {
      group: 1,
      value: "opera-body-1",
      title: t(tokens.brands.ksurgery.products[0].body[0].title),
      buttonTitle: t(tokens.brands.ksurgery.products[0].body[0].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[0].body[0].subtitle),
      description: t(tokens.brands.ksurgery.products[0].body[0].description),
      description2: t(tokens.brands.ksurgery.products[0].body[0].description2),
      img: opera_1_body_img,
    },
  ];

  const faceRevProducts = [
    {
      group: 2,
      value: "opera-1",
      title: t(tokens.brands.ksurgery.products[1].face[0].title),
      buttonTitle: t(tokens.brands.ksurgery.products[1].face[0].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[1].face[0].subtitle),
      description: t(tokens.brands.ksurgery.products[1].face[0].description),
      descriptionSx: {
        textAlign: "justify",
        textJustify: "inter-word",
        wordSpacing: "0.15em",
        letterSpacing: "0.02em",
        lineHeight: 1.7,
        display: "block",
        width: "100%",
      },
      items: [
        t(tokens.brands.ksurgery.products[1].face[0].items[0]),
        t(tokens.brands.ksurgery.products[1].face[0].items[1]),
        t(tokens.brands.ksurgery.products[1].face[0].items[2]),
        t(tokens.brands.ksurgery.products[1].face[0].items[3]),
      ],
      img: opera_1_rev_img,
    },
    {
      group: 2,
      title: t(tokens.brands.ksurgery.products[1].face[1].title),
      buttonTitle: t(tokens.brands.ksurgery.products[1].face[1].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[1].face[1].subtitle),
      description: t(tokens.brands.ksurgery.products[1].face[1].description),
      descriptionSx: {
        textAlign: "justify",
        textJustify: "inter-word",
        wordSpacing: "0.15em",
        letterSpacing: "0.02em",
        lineHeight: 1.7,
        display: "block",
        width: "100%",
      },
      items: [
        t(tokens.brands.ksurgery.products[1].face[1].items[0]),
        t(tokens.brands.ksurgery.products[1].face[1].items[1]),
        t(tokens.brands.ksurgery.products[1].face[1].items[2]),
        t(tokens.brands.ksurgery.products[1].face[1].items[3]),
      ],
      value: "opera-2",
      img: opera_2_rev_img,
    },
  ];

  const bodyRevProducts = [
    {
      group: 2,
      value: "opera-body-1",
      title: t(tokens.brands.ksurgery.products[1].body[0].title),
      buttonTitle: t(tokens.brands.ksurgery.products[1].body[0].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[1].body[0].subtitle),
      description: t(tokens.brands.ksurgery.products[1].body[0].description),
      items: [
        t(tokens.brands.ksurgery.products[1].body[0].items[0]),
        t(tokens.brands.ksurgery.products[1].body[0].items[1]),
        t(tokens.brands.ksurgery.products[1].body[0].items[2]),
        t(tokens.brands.ksurgery.products[1].body[0].items[3]),
      ],
      img: opera_1_body_rev_img,
    },
  ];

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  const faceShown = collection === 1 ? faceProducts : faceRevProducts;
  const bodyShown = collection === 1 ? bodyProducts : bodyRevProducts;

  return (
    <Box
      className='ksurgery-product'
      maxWidth="xxl"
      sx={{
        height: { xs: "auto", sm: "auto", md: "80vh" },
        minHeight: { xs: "400px", sm: "unset", md: "80vh" },
        backgroundColor: { xs: "#EEE8F5", sm: "#fff" },
        "@media(min-width:992px)": {
          paddingLeft: "132px",
          paddingRight: "132px"
        }
      }}
    >
      <Stack alignItems={"stretch"} sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{
          py: {
            xs: 1, sm: 2,
            "@media(min-width: 768px) and (max-width: 991px)": {
              padding: "32px 88px 64px!important"
            }
          }
        }}>
          {/* ✅ MOBILE: show Face section then Body section like screenshot */}
          {!smUp ? (
            <MobileFaceBodyLayout
              collection={collection}
              faceProducts={faceShown}
              bodyProducts={bodyShown}
              faceLabel={t(tokens.brands.our_collection.face)}
              bodyLabel={t(tokens.brands.our_collection.body)}
            />
          ) : (
            /* ✅ DESKTOP: keep your original code/behavior */
            <Stack spacing={{
              xs: 2, sm: 5,
              "@media(min-width: 768px) and (max-width: 991px)": {
                padding: "32px"
              }

            }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent={"center"}
                sx={{ width: { xs: "100%", sm: "auto" } }}
              >
                <ButtonGroup
                  variant="contained"
                  orientation={smUp ? "horizontal" : "vertical"}
                  sx={{
                    width: { xs: "100%", sm: "106px" },
                    height: "32px"
                  }}
                >
                  {tabs.map((tab) => (
                    <Button
                      key={tab.value}
                      onClick={() => handleTabChange(tab.value)}
                      color={tabValue === tab.value ? "primary" : "white"}
                      border={tabValue === tab.value ? "1px solid #A575F5" : "1px solid #A575F5"}


                      size="large"
                      sx={{
                        border: "1px solid #A575F5",
                        width: { xs: "100%", sm: "auto" },
                        fontSize: { xs: "0.75rem", sm: "10px", md: "11px" },
                        py: { xs: 1, sm: 0 },
                        "@media(min-width: 768px) and (max-width: 991px)": {
                          borderRadius: "8px",
                          width: "53px",
                          height: "32px"
                        }
                      }}
                    >
                      {tab.label}
                    </Button>
                  ))}
                </ButtonGroup>
              </Stack>

              {tabValue === "face" && (
                <ProductDetails products={faceShown} collection={collection} />
              )}
              {tabValue === "body" && (
                <ProductDetails products={bodyShown} collection={collection} />
              )}
            </Stack>
          )}
        </Container>
      </Stack>
    </Box>
  );
};

export default KsurgeryProductComponent;