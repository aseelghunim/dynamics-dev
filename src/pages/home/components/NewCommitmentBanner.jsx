import { useTheme } from "@emotion/react";
import { Box, Divider, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import Container from "@mui/material/Container";

import StyledTypography from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const NewCommitmentBanner = () => {
  const theme = useTheme();
  const issmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const { t, i18n } = useTranslation();

  const title = t(tokens.commitment.title);
  const isEn = (i18n.resolvedLanguage || i18n.language || "").startsWith("en");

  // Only split for English
  const parts = isEn ? title.split(" ") : [];
  const first = isEn ? parts[0] || "" : "";
  const second = isEn ? parts[1] || "" : "";
  const third = isEn ? parts.slice(2).join(" ") || "" : "";

  return (
    <Box
      className="general-shared-section"
      sx={{
        background: "linear-gradient(to right, #6bb6b6, #a9e0eb)",
        color: "white",
        py: { xs: 4, sm: 4, md: 9 },
        "@media(min-width:768px) and (max-width:991px)":{
          paddingLeft:"40px"
        }
       
      }}
    >
      <Container
        maxWidth="xl" sx={{ 
          px: { xs: 4, sm: 3, md: 19.5 },
        }}>


        <Section height={issmUp ? "auto" : "auto"} >
          <Stack sx={{
            minHeight: { xs: "auto", sm: "auto" },
            width: { xs: "100%", md: "100%" },
            margin: { xs: "0", md: "0 auto!important" }
          }}
            justifyContent="center">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="center"
              alignItems="center"
              spacing={{ xs: 2, sm: "25px", md: "21px" }}
              divider={
                <Divider
                  orientation={issmUp ? "vertical" : "horizontal"}
                  flexItem
                  sx={{
                    borderColor: "rgba(255,255,255,0.6)",

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
              <Stack alignItems={{ xs: "center", sm: "flex-start" }} sx={{ width: { xs: "100%", sm: "auto" } }}>
                <StyledTypography
                  variant="h2"
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                    lineHeight: 1.05,
                    fontSize: { xs: "2.25rem", sm: "2rem", md: "2.5rem" }

                  }}
                >
                  {isEn ? (
                    <>
                      {`${first} ${second}`}
                      <br />
                      <span style={{ whiteSpace: "nowrap" }}>{third}</span>
                    </>
                  ) : (
                    title
                  )}
                </StyledTypography>
              </Stack>

              <StyledTypography
                variant="body2"
                sx={{
                  textAlign: { xs: "center", sm: "justify" },
                  textJustify: { sm: "inter-word" },
                  wordSpacing: { sm: "0.15em" },
                  letterSpacing: "0.02em",
                  lineHeight: 1.35,
                  maxWidth: { xs: 520, sm: "none" },
                  // marginLeft:"25px!important",
                  fontSize: { xs: "18px", sm: "14px", md: "18px" }

                }}
              >
                {t(tokens.commitment.paragraph)}
              </StyledTypography>
            </Stack>
          </Stack>
        </Section>
      </Container>
    </Box>
  );
};

export default NewCommitmentBanner;