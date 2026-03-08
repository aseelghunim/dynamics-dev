import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Instagram } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Button, IconButton } from "@mui/material";
import { Grid } from "@mui/system";
import { tokens } from "locales/tokens";
import { paths } from "paths";
import { useTranslation } from "react-i18next";
import { RouterLink } from "./router-link";
import logo from 'assets/dynamics-logo.svg'
export const Footer = (props) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const items = [
    { title: t(tokens.nav.home), path: paths.index },
    { title: t(tokens.nav.about), path: paths.aboutUs },
    { title: t(tokens.nav.brands), path: paths.ourBrands },
    { title: t(tokens.nav.contact), path: paths.contactUs },
  ];

  // desktop (current)
  const socialStyleDesktop = {
    border: "1px solid",
    backgroundColor: "#168C8C",
    color: "#fff",
    "&:hover": { backgroundColor: "#147373" },
  };

  // mobile (match screenshot: simple purple icons, no filled bg)
  const socialStyleMobile = {
    border: "none",
    backgroundColor: "transparent",
    color: "#9B86D8",
    "&:hover": { backgroundColor: "transparent" },
  };

  return (
    <Box
      sx={{
        bgcolor: { xs: "#fff", sm: "#f5f3f8" },
        // borderTop: { xs: "6px solid #EEE8F5", sm: "none" }, // purple top line
        pt: { xs: 3, sm: 2 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {/* DESKTOP: nav buttons row */}
          <Grid size={12} sx={{ display: { xs: "none", sm: "block" } }}>
            <Stack direction="row" justifyContent="center">
              {items.map((section, index) => (
                <Button
                  key={section.title + index}
                  LinkComponent={RouterLink}
                  href={section.path}
                >
                  {section.title}
                </Button>
              ))}
            </Stack>
          </Grid>

          {/* MOBILE: logo left + social icons right */}
          <Grid size={12} sx={{ display: { xs: "block", sm: "none" } }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 1 }}
            >
              {/* Replace src with your actual logo path/component */}
              <Box
                component="img"
                src={logo}
                alt="Dynamics Medica"
                sx={{ height: 38, width: "auto" }}
              />

              <Stack direction="row" spacing={1}>
                <IconButton
                  sx={socialStyleMobile}
                  LinkComponent={RouterLink}
                  href="https://www.facebook.com/profile.php?id=100064091173234&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#AC93E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </IconButton>

                <IconButton
                  sx={socialStyleMobile}
                  LinkComponent={RouterLink}
                  href="https://linktr.ee/dynamicsmedica"
                  target="_blank"
                >
                  <Instagram sx={{ fontSize: 24 }} />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Divider only on desktop */}
          <Grid size={12} sx={{ mt: 3, display: { xs: "none", sm: "block" } }}>
            <Divider sx={{ borderColor: "#ddd" }} />
          </Grid>

          {/* Copyright (centered on both; tighter spacing on mobile) */}
          <Grid size={12}>
            <Box sx={{ p: { xs: 3, sm: 5 } }}>
              <Stack direction="row" justifyContent="center">
                <Typography
                  color="text.secondary"
                  variant="caption"
                  sx={{ color: { xs: "#9B86D8", sm: "text.secondary" } }}
                >
                  Dynamics &copy; Copyright All Rights Reserved.2024
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* DESKTOP: social icons row (keep your current look) */}
          <Grid size={12} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box sx={{ pb: 5 }}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <IconButton
                  sx={socialStyleDesktop}
                  LinkComponent={RouterLink}
                  href="https://www.facebook.com/profile.php?id=100064091173234&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <FacebookIcon fontSize="inherit" />
                </IconButton>

                <IconButton
                  sx={socialStyleDesktop}
                  LinkComponent={RouterLink}
                  href="https://linktr.ee/dynamicsmedica"
                  target="_blank"
                >
                  <Instagram fontSize="inherit" />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};