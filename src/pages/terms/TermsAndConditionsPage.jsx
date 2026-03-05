import { Container, Typography, Box, Paper } from "@mui/material";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import { Seo } from "layout/components/Seo";

const TermsAndConditionsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t(tokens.terms.page.title)} />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper elevation={1} sx={{ p: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "#2F2F5F",
              mb: 4,
              textAlign: "center",
            }}
          >
            {t(tokens.terms.page.title)}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#6F6F7F", mb: 4, textAlign: "center" }}
          >
            {t(tokens.terms.page.lastUpdated)}
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#4F4F6F", mb: 2 }}
            >
              {t(tokens.terms.page.introduction.title)}
            </Typography>
            <Typography variant="body1" sx={{ color: "#5F5F7F", mb: 2 }}>
              {t(tokens.terms.page.introduction.content)}
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#4F4F6F", mb: 2 }}
            >
              {t(tokens.terms.page.acceptance.title)}
            </Typography>
            <Typography variant="body1" sx={{ color: "#5F5F7F", mb: 2 }}>
              {t(tokens.terms.page.acceptance.content)}
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#4F4F6F", mb: 2 }}
            >
              {t(tokens.terms.page.services.title)}
            </Typography>
            <Typography variant="body1" sx={{ color: "#5F5F7F", mb: 2 }}>
              {t(tokens.terms.page.services.content)}
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#4F4F6F", mb: 2 }}
            >
              {t(tokens.terms.page.privacy.title)}
            </Typography>
            <Typography variant="body1" sx={{ color: "#5F5F7F", mb: 2 }}>
              {t(tokens.terms.page.privacy.content)}
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#4F4F6F", mb: 2 }}
            >
              {t(tokens.terms.page.liability.title)}
            </Typography>
            <Typography variant="body1" sx={{ color: "#5F5F7F", mb: 2 }}>
              {t(tokens.terms.page.liability.content)}
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#4F4F6F", mb: 2 }}
            >
              {t(tokens.terms.page.modifications.title)}
            </Typography>
            <Typography variant="body1" sx={{ color: "#5F5F7F", mb: 2 }}>
              {t(tokens.terms.page.modifications.content)}
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#4F4F6F", mb: 2 }}
            >
              {t(tokens.terms.page.contact.title)}
            </Typography>
            <Typography variant="body1" sx={{ color: "#5F5F7F", mb: 2 }}>
              {t(tokens.terms.page.contact.content)}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default TermsAndConditionsPage;
