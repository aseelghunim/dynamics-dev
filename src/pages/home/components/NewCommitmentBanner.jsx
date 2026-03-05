import { useTheme } from "@emotion/react";
import { Box, Divider, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import StyledTypography from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const NewCommitmentBanner = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
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
      sx={{
        background: "linear-gradient(to right, #6bb6b6, #a9e0eb)",
        color: "white",
        py: { xs: 4, md: 4 },
        px: { xs: 4, md: 3 },
      }}
    >
      <Section height={isMdUp ? "30vh" : "auto"}>
        <Stack sx={{ minHeight: { xs: "auto", md: "30vh" } }} justifyContent="center">
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 2, md: 5 }}
            divider={
              <Divider
                orientation={isMdUp ? "vertical" : "horizontal"}
                flexItem
                sx={{ borderColor: "rgba(255,255,255,0.6)" }}
              />
            }
            sx={{
              width: "100%",
              maxWidth: { xs: 520, md: "none" },
              mx: "auto",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Stack alignItems={{ xs: "center", md: "flex-start" }} sx={{ width: { xs: "100%", md: "auto" } }}>
              <StyledTypography
                variant="h2"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  lineHeight: 1.05,
                  "@media (max-width: 899px)": {
                    fontSize: "2.25rem",
                  },
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
                textAlign: { xs: "center", md: "justify" },
                textJustify: { md: "inter-word" },
                wordSpacing: { md: "0.15em" },
                letterSpacing: "0.02em",
                lineHeight: 1.7,
                maxWidth: { xs: 520, md: "none" },
                "@media (max-width: 899px)": {
                  fontSize: "0.95rem",
                },
              }}
            >
              {t(tokens.commitment.paragraph)}
            </StyledTypography>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
};

export default NewCommitmentBanner;