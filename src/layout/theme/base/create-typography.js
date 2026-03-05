export const createTypography = (direction = "ltr") => {
  const isRTL = direction === "rtl";

  return {
    fontFamily: isRTL
      ? "'RTLParagraphFonts', serif"
      : "'ParagraphFonts', serif",
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      fontFamily: isRTL
        ? "'RTLParagraphFonts', serif"
        : "'ParagraphFonts', serif",
    },
    body2: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.57,
      fontFamily: isRTL
        ? "'RTLParagraphFonts', serif"
        : "'ParagraphFonts', serif",
    },
    body3: {
      fontSize: "2rem",
      fontWeight: 400,
      fontFamily: isRTL
        ? "'RTLParagraphFonts', serif"
        : "'ParagraphFonts', serif",
    },
    button: {
      fontWeight: 600,
      fontFamily: isRTL
        ? "'RTLParagraphFonts', serif"
        : "'ParagraphFonts', serif",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.66,
      fontFamily: isRTL
        ? "'RTLParagraphFonts', serif"
        : "'ParagraphFonts', serif",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.57,
      fontFamily: isRTL
        ? "'RTLParagraphFonts', serif"
        : "'ParagraphFonts', serif",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
      fontFamily: isRTL
        ? "'RTLParagraphFonts', serif"
        : "'ParagraphFonts', serif",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
      fontFamily: isRTL
        ? "'RTLParagraphFonts', serif"
        : "'ParagraphFonts', serif",
    },
    h1: {
      fontFamily: isRTL ? "'RTLTitleFonts', serif" : "'TitleFonts', serif",
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: isRTL ? "'RTLTitleFonts', serif" : "'TitleFonts', serif",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: isRTL ? "'RTLTitleFonts', serif" : "'TitleFonts', serif",
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: isRTL ? "'RTLTitleFonts', serif" : "'TitleFonts', serif",
      fontWeight: 700,
      fontSize: "1.125rem",
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: isRTL ? "'RTLTitleFonts', serif" : "'TitleFonts', serif",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: isRTL ? "'RTLTitleFonts', serif" : "'TitleFonts', serif",
      fontWeight: 700,
      fontSize: "1.125rem",
      lineHeight: 1.2,
    },
  };
};
