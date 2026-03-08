import { useTheme } from "@emotion/react";
import { Box, Divider, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import StyledTypography from "layout/components/StyledTypography";
import Section from "pages/home/components/Section";
import "./SharedSection.css";

const SharedSection = ({
  name = undefined,
  title,
  description,
  background = "linear-gradient(to right, #c096f4,#5d2c71)",
  descriptionSx = {},
}) => {
  const theme = useTheme();
  const issmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      className={`ksurgery-shared-section ${name ?? ""}`}
      sx={{
        background,
        color: "white",
        py: { xs: 4, sm: 4 },
        px: { xs: 4, sm: 3 },
      }}
    >
      <Section height="auto">
        <Stack
          sx={{ minHeight: { xs: "auto", sm: "auto" } }}
          justifyContent="center"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 2, sm: "25px" }}
            divider={
              <Divider
                orientation={issmUp ? "vertical" : "horizontal"}
                flexItem
                sx={{ borderColor: "rgba(255,255,255,0.6)" }}
              />
            }
            sx={{
              width: "100%",
              maxWidth: { xs: 520,sm:"none", md: "64%" },
              mx: "auto",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Stack
              alignItems={{ xs: "center", sm: "flex-start" }}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              <StyledTypography
                variant="h2"
                fontSize="2rem"
               
                sx={{
                  
                  fontSize:"2.5rem!important",
                  textAlign: { xs: "center", sm: "left" },
                  lineHeight: 1.05,
                  "@media (max-width: 767px)": {
                    fontSize: "2.25rem!important",
                  },
                  "@media (min-width: 768px) and (max-width: 991px)": {
                    fontSize: "2rem!important",
                  },
                }}
              >
                {title}
              </StyledTypography>
            </Stack>

            <StyledTypography
              variant="body2"
              sx={{
                textAlign: { xs: "center", sm: "justify!important",md:"justify" },
                textJustify: { sm: "inter-word" },
                wordSpacing: { sm: "0.15em" },
                fontSize: "1.125rem!important",
                // letterSpacing: "0.02em",
                lineHeight: 1.6,
                // textAlign: "justify",

                maxWidth: { xs: 520, sm: "none"},
                "@media (max-width: 767px)": {
                  fontSize: "1.125rem!important",
                },
                "@media (min-width: 768px) and (max-width: 991px)": {
                  fontSize: "0.875rem!important",
                  marginLeft: "25px",
                  textAlign:"justify"
                },
                ...descriptionSx,
              }}
            >
              {description}
            </StyledTypography>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
};

SharedSection.propTypes = {};

export default SharedSection;