import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Instagram } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { Grid } from "@mui/system";
import { tokens } from "locales/tokens";
import { paths } from "paths";
import { useTranslation } from "react-i18next";
import { RouterLink } from "./router-link";
import logo from "assets/dynamics-logo.svg";

export const Footer = () => {
  const { t } = useTranslation();

  const items = [
    { title: t(tokens.nav.home), path: paths.index },
    { title: t(tokens.nav.about), path: paths.aboutUs },
    { title: t(tokens.nav.brands), path: paths.ourBrands },
    { title: t(tokens.nav.contact), path: paths.contactUs },
  ];

  const socialStyle = {
    border: "none",
    backgroundColor: "transparent",
    color: "#9B86D8",
    "&:hover": { backgroundColor: "transparent" },
  };

  return (
    <Box
      sx={{
        bgcolor: { xs: "#fff", sm: "#f5f3f8" },
        pt: { xs: 3, sm: 2 },
    
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {/* TABLET + DESKTOP */}
          <Grid
            size={12}
            sx={{
              display: { xs: "none", sm: "block" },
              py: 2,
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={4}
              sx={{ width: "100%", flexWrap: "wrap" }}
            >
              {/* Logo */}
              <Box
                component="img"
                src={logo}
                alt="Dynamics Medica"
                sx={{
                  height: { xs:39,sm: 40, md: 49 },
                  width: "auto",
                  flexShrink: 0,
                }}
              />

              {/* Links */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ flexWrap: "wrap" }}
              >
                {items.map((section, index) => (
                  <Button
                    key={section.title + index}
                    LinkComponent={RouterLink}
                    href={section.path}
                    sx={{ minWidth: "auto",fontSize:{
                      sm:"13px",md:"13px"
                    } }}
                  >
                    {section.title}
                  </Button>
                ))}
              </Stack>

              {/* Social icons */}
              <Stack direction="row" spacing={1} alignItems="center">
                <IconButton
                  sx={socialStyle}
                  LinkComponent={RouterLink}
                  href="https://www.facebook.com/profile.php?id=100064091173234&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="#AC93E1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </IconButton>

                <IconButton
                  sx={socialStyle}
                  LinkComponent={RouterLink}
                  href="https://www.instagram.com/dynamicsmedica"
                  target="_blank"
                >
                  <Instagram sx={{ fontSize: 24 }} />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* MOBILE */}
          <Grid size={12} sx={{ display: { xs: "block", sm: "none" } }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 1 }}
            >
              <Box
                component="img"
                src={logo}
                alt="Dynamics Medica"
                sx={{
                  height: { xs: 38 },
                  width: "auto",
                }}
              />

              <Stack direction="row" spacing={1}>
                <IconButton
                  sx={socialStyle}
                  LinkComponent={RouterLink}
                  href="https://www.facebook.com/profile.php?id=100064091173234&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="#AC93E1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </IconButton>

                <IconButton
                  sx={socialStyle}
                  LinkComponent={RouterLink}
                  href="https://linktr.ee/dynamicsmedica"
                  target="_blank"
                >
                  <Instagram sx={{ fontSize: 24 }} />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Divider only on tablet + desktop */}
          <Grid size={12} sx={{ mt: 2, display: { xs: "none", sm: "block" } }}>
            <Divider sx={{ borderColor: "#ddd" }} />
          </Grid>

          {/* Copyright */}
          <Grid size={12}>
            <Box sx={{ p: { xs: 3, sm: 4 } }}>
              <Stack direction="row" justifyContent="center">
                <Typography
                  color="text.secondary"
                  variant="caption"
                  sx={{ color: { xs: "#9B86D8", sm: "text.secondary" } }}
                >
                  Dynamics Medica © Copyright All Rights Reserved.2026
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};