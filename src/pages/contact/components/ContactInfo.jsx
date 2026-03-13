import { Container, Link, Stack, Typography } from "@mui/material";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="sm" sx={{
      textAlign: "center",
      // mt: 4,
      mb: 4,
      fontFamily: "ParagraphFonts, serif!important"
    }}>
      <Typography variant="body1" sx={{ color: "#000", mb:"16px!important", mt:"0!important", fontSize: "14px" }}>
        {t(tokens.contact.info.title1)}
      </Typography>

      <Typography
        variant="h6"

        sx={{
          mb:"16px!important", mt:"0!important",
          color: "#000",

          fontFamily: "ParagraphFonts, serif!important",

          fontWeight: "regular", fontSize: "14px!important"
        }}
      >
        {t(tokens.contact.info.title2)}
      </Typography>

      <Stack spacing={1} sx={{ color: "#000",  my:"0!important", }}>
        <Typography variant="subtitle1" sx={{
          mb:"16px!important", mt:"0!important",

          fontFamily: "ParagraphFonts, serif!important",

          fontSize: "14px!important"
        }}>
          {t(tokens.contact.info.address)}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px!important",


            mb:"16px!important", mt:"0!important",

          }}>
          {t(tokens.contact.info.address_info_street)}</Typography>
        <Typography sx={{ mb:"16px!important", mt:"0!important", fontSize: "14px!important" }}>{t(tokens.contact.info.address_info_city)}</Typography>
      </Stack>

      <Stack spacing={1} sx={{ color: "#000" }}>
        <Typography variant="subtitle1" sx={{
          fontFamily: "ParagraphFonts, serif!important",
          mb:"16px!important", mt:"0!important",
          fontSize: "14px!important"
        }}>
          {t(tokens.contact.info.contact_info)}
        </Typography>
        <Typography sx={{ mb:"16px!important", mt:"0!important", fontSize: "14px!important" }}>{t(tokens.contact.info.phone)} #20200</Typography>
        <Link href="mailto:Info@dynamicsmedica.com" underline="hover" color="inherit" sx={{  mb:"16px!important", mt:"0!important",fontSize: "14px" }}>
          {t(tokens.contact.info.email)} Info@dynamicsmedica.com
        </Link>
      </Stack>
    </Container>
  );
};

export default ContactInfo;
