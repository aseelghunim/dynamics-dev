import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 100,
  wordSpacing: 5,
  textTransform: "none",
}));

export const QuoteTypography = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  fontFamily:
    theme.direction === "rtl"
      ? "'RTLParagraphFonts' !important"
      : "'ParagraphFonts' !important",

  display: "flex",
  alignItems: "center", // Centers the text vertically with the border line

  "&::before": {
    content: '""',
    marginRight: "20px",
    width: "71px",
    height: "1px",
    display: "inline-block",
    borderBottom: "1px solid",
    position: "relative",
    top: "0", // No vertical offset needed
  },
}));

export default StyledTypography;
