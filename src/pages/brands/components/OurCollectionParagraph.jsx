import { Divider, useTheme, useMediaQuery } from "@mui/material";
import { Box, Stack } from "@mui/system";
import StyledTypography from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import Section from "pages/home/components/Section";
import { useTranslation } from "react-i18next";

const OurCollectionParagraph = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Box
    className="general-shared-section"
      sx={{
        
        background: "linear-gradient(to right, #ec5e87, rgb(245, 203, 218))",
        color: "white",
        py: { xs: 4, sm: 4,md:9 },
        px: { xs: 4, sm: 3,md:19.5 },
      }}
    >
      <Section height={{ xs: "auto", md: "auto" }}>
        <Stack
          sx={{
            minHeight: { xs: "auto", sm: "auto" },
            width: { xs: "100%", md: "100%" },
            margin: { xs: "0", md: "0 auto!important" }
          }}
          justifyContent="center"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 2, sm: "25px", md: "21px" }}
            divider={
              <Divider
                orientation={isSmall ? "horizontal" : "vertical"}
                flexItem
                sx={{
                  borderColor: "rgba(255,255,255,0.6)",
                  width: isSmall ? "100%" : "auto",
                }}
              />
            }
            sx={{
              width: "100%",
              maxWidth: { xs: 520, sm: "none" },
              mx: "auto",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <StyledTypography
              variant="h2"
              sx={{
                "@media (max-width: 991px)": {
                  fontSize: "2.25rem",
                  textAlign: "center",
                  marginLeft: "auto!important",
                  marginRight: "auto!important",
                },
              }}
            >
              {t(tokens.brands.our_collection.title)}
            </StyledTypography>

            <StyledTypography
              variant="body2"
              sx={{
                "@media (max-width: 991px)": {
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                  textAlign: "center",
                },
              }}
            >
              {t(tokens.brands.our_collection.paragraph)}
            </StyledTypography>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
};

export default OurCollectionParagraph;