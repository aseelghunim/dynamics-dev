import { useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import BGImage from "assets/statement-bg.png";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const boxStyle = {
  heigh: "100%",
  paddingTop: "15%",
  color: "#012169",
};

const CommitmentBanner = (props) => {
  const theme = useTheme();

  const { t } = useTranslation();
  return (
    <Section backGroundImage={BGImage}>
      <Stack spacing={4} sx={boxStyle}>
        <QuoteTypography variant={theme.direction === "ltr" ? "h3" : "h2"}>
          {t(tokens.commitment.title)}
        </QuoteTypography>
        <StyledTypography
          variant="body2"
          sx={{
            textAlign: "justify",
            textJustify: "inter-word",
            wordSpacing: "0.15em",
            letterSpacing: "0.02em",
            lineHeight: 1.7,
          }}
        >
          {t(tokens.commitment.paragraph)}
        </StyledTypography>
      </Stack>
    </Section>
  );
};

CommitmentBanner.propTypes = {};

export default CommitmentBanner;
