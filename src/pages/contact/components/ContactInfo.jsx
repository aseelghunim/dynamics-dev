import { Container, Link, Stack, Typography } from "@mui/material";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4, mb: 4 }}>
      <Typography variant="body1" sx={{ color: "#6F6F7F", mb: 4 }}>
        {t(tokens.contact.info.title1)}
      </Typography>

      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "#4F4F6F", mb: 1 }}
      >
        {t(tokens.contact.info.title2)}
      </Typography>

      <Stack spacing={1} sx={{ color: "#5F5F7F", mb: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {t(tokens.contact.info.address)}
        </Typography>
        <Typography> {t(tokens.contact.info.address_info_street)}</Typography>
        <Typography>{t(tokens.contact.info.address_info_city)}</Typography>
      </Stack>

      <Stack spacing={1} sx={{ color: "#5F5F7F" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {t(tokens.contact.info.contact_info)}
        </Typography>
        <Typography>{t(tokens.contact.info.phone)} #20200</Typography>
        <Link href="mailto:Info@dynainv.com" underline="hover" color="inherit">
          {t(tokens.contact.info.email)} Info@dynainv.com
        </Link>
      </Stack>
    </Container>
  );
};

export default ContactInfo;
