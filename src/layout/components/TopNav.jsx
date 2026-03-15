import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";

import { RouterLink } from "./router-link";
import { TopNavItem } from "./top-nav-item";
import { useTranslation } from "react-i18next";
import { tokens } from "locales/tokens";
import { useSettings } from "hooks/use-settings";
import { BrandsPopover } from "./Popover";
import { usePathname } from "hooks/use-pathname";
import { useWindowScroll } from "hooks/use-window-scroll";
import { paths } from "paths";

import logo from "assets/logo.svg";
import logoLight from "assets/logoLight.svg";
import mobileNavBg from "assets/mobile-nav-bg.svg";

import logo1 from "assets/home-brands-logos/logo1.png";
import logo2 from "assets/home-brands-logos/logo2.png";
import logo3 from "assets/home-brands-logos/logo3.png";
import logo4 from "assets/home-brands-logos/logo4.png";
import logo5 from "assets/home-brands-logos/logo5.svg";
import logo6 from "assets/home-brands-logos/logo6.svg";
import logo7 from "assets/home-brands-logos/logo7.svg";
import logo8 from "assets/home-brands-logos/logo8.svg";
import logo9 from "assets/home-brands-logos/logo9.svg";

import "./TopNav.css";

const TOP_NAV_HEIGHT = 95;

const MobileBrandsGrid = ({ onItemClick }) => {
  const { t } = useTranslation();

  const brandItems = [
    { title: t(tokens.brands.drcyj.title), img: logo9, path: paths.brands.drcyj },
    { title: t(tokens.brands.ksurgery.title), img: logo4, path: paths.brands.ksurgery },
    { title: t(tokens.brands.lanluma.title), img: logo6, path: paths.brands.lanluma },
    { title: t(tokens.brands.juvelook.title), img: logo1, path: paths.brands.juvelook },
    { title: t(tokens.brands.dimono.title), img: logo8, path: paths.brands.dimono },
    { title: t(tokens.brands.ellanse.title), img: logo5, path: paths.brands.ellanse },
    { title: t(tokens.brands.maili.title), img: logo7, path: paths.brands.maili },
    { title: t(tokens.brands.renee.title), img: logo3, path: paths.brands.renee },
    { title: t(tokens.brands.lenisna.title), img: logo2, path: paths.brands.lenisna },
  ];

  return (
    <Box
      className="top-nav"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 4,
        pt: 3,
        pb: 4,
        px: 4,
      }}
    >
      {brandItems.map((item) => (
        <Box
          key={item.title}
          component={RouterLink}
          href={item.path}
          onClick={onItemClick}
          sx={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: 75, xsm: 94 },
              height: { xs: 75, xsm: 94 },
              border: "1.5px solid #ab92e1",
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 1,
              color: "#444",
              fontSize: 13,
              fontWeight: 500,
              lineHeight: 1.2,
              backgroundColor: "#fff",
            }}
          >
            <img src={item.img} width="100%" style={{ objectFit: "cover" }} alt="" />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

MobileBrandsGrid.propTypes = {
  onItemClick: PropTypes.func,
};

export const TopNav = (props) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [languageLabel, setLanguageLabel] = useState("en");
  const { handleUpdate } = useSettings();

  const handleLanguageLabels = useCallback(
    (lang) => {
      if (lang === "ar") {
        handleUpdate({ direction: "rtl" });
        setLanguageLabel("English");
        setLanguage("en");
      }

      if (lang === "en") {
        handleUpdate({ direction: "ltr" });
        setLanguageLabel("عربي");
        setLanguage("ar");
      }
    },
    [handleUpdate]
  );

  const handleChange = useCallback(
    async (lang) => {
      await i18n.changeLanguage(lang);
      handleLanguageLabels(lang);
    },
    [i18n, handleLanguageLabels]
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    handleLanguageLabels(savedLanguage || "en");
    return () => {};
  }, [handleLanguageLabels]);

  const items = [
    { title: t(tokens.nav.home), path: paths.index },
    { title: t(tokens.nav.about), path: paths.aboutUs },
    {
      title: t(tokens.nav.brands),
      path: paths.ourBrands,
      popover: <BrandsPopover />,
    },
    { title: t(tokens.nav.contact), path: paths.contactUs },
  ];

  const pathname = usePathname();
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const [elevate, setElevate] = useState(false);
  const offset = 64;
  const delay = 100;

  const handleWindowScroll = useCallback(() => {
    if (window.scrollY > offset) setElevate(true);
    else setElevate(false);
  }, []);

  useWindowScroll({ handler: handleWindowScroll, delay });

  const mobileHeaderHeight = 95;

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setMobileBrandsOpen(false);
  };

  return (
    <>
      <Box
        className="top-nav"
        maxWidth="xxl"
        component="header"
        sx={{
          height: { xs: "95px", sm: "72px", md: "90px" },
          left: 0,
          position: "fixed",
          backgroundColor: elevate ? "white" : "rgba(255, 255, 255, 0.2)",
          color: "#fff",
          right: 0,
          top: 0,
          transition: (theme) =>
            theme.transitions.create("box-shadow, background-color", {
              easing: theme.transitions.easing.easeInOut,
              duration: 200,
            }),
          ...(elevate && {
            color: "#ab92e1",
            boxShadow: 8,
          }),
          zIndex: (theme) => theme.zIndex.appBar,
          width: "100%",
          "@media (min-width: 899px)": {
            width: "100vw",
            left: 0,
            right: 0,
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            "@media (min-width: 992px)": {
              paddingLeft: "180px",
              paddingRight: "180px",
            },
          }}
        >
          {!smUp && (
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                height: `${mobileHeaderHeight}px`,
                position: "relative",
                padding: 0,
              }}
            >
              <Box sx={{ flex: "0 0 auto" }}>
                <Tooltip title={languageLabel}>
                  <IconButton onClick={() => handleChange(language)} aria-label="language">
                    <SvgIcon sx={{ color: elevate ? "#ab92e1" : "#fff" }}>
                      <LanguageIcon />
                    </SvgIcon>
                  </IconButton>
                </Tooltip>
              </Box>

              <Box
                component={RouterLink}
                href={paths.index}
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: { xs: "57px", sm: "18px", md: "50px!important" },
                  width: { xs: "200px", sm: "144px", md: "220px" },
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={elevate ? logo : logoLight}
                  alt="Dynamics"
                />
              </Box>

              <Box sx={{ marginLeft: "auto", flex: "0 0 auto" }}>
                <IconButton
                  onClick={handleMenuOpen}
                  aria-label="menu"
                  sx={{ color: elevate ? "#ab92e1" : "#fff" }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Stack>
          )}

          {smUp && (
            <Stack
              direction="row"
              sx={{
                height: { xs: "95px", sm: "72px", md: "90px" },
                alignItems: "center",
              }}
            >
              <Stack alignItems="center" direction="row" spacing={1} sx={{ flex: "0 0 auto" }}>
                <Stack
                  component={RouterLink}
                  alignItems="center"
                  direction="row"
                  href={paths.index}
                  sx={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      height: { xs: "57px", sm: "18px", md: "50px" },
                      width: { xs: "200px", sm: "144px", md: "220px" },
                    }}
                  >
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                      src={elevate ? logo : logoLight}
                      alt="Dynamics"
                    />
                  </Box>
                </Stack>
              </Stack>

              <Stack alignItems="center" direction="column" spacing={2} sx={{ flex: 1 }}>
                <Box component="nav" sx={{ height: "100%", width: "100%" }}>
                  <Stack
                    component="ul"
                    alignItems="center"
                    justifyContent="center"
                    direction="row"
                    spacing={1}
                    sx={{
                      padding: "0!important",
                      width: "100%",
                      height: "100%",
                      listStyle: "none",
                      m: 0,
                      p: 0,
                      justifyContent: { sm: "flex-end", md: "center" },
                    }}
                  >
                    {items.map((item, index) => {
                      const checkPath = !!(item.path && pathname);
                      const partialMatch = checkPath ? pathname.includes(item.path) : false;
                      const exactMatch = checkPath ? pathname === item.path : false;
                      const active = item.popover ? partialMatch : exactMatch;

                      return (
                        <TopNavItem
                          active={active}
                          external={item.external}
                          key={item.title}
                          path={item.path}
                          popover={item.popover}
                          title={item.title}
                          isBrands={index === 2}
                        />
                      );
                    })}
                  </Stack>
                </Box>
              </Stack>

              <Stack alignItems="center" direction="row" sx={{ flex: "0 0 auto" }}>
                <Tooltip title={languageLabel}>
                  <IconButton onClick={() => handleChange(language)} aria-label="language">
                    <SvgIcon
                      className="language-btn"
                      sx={{ color: elevate ? "#ab92e1" : "#fff" }}
                    >
                      <LanguageIcon />
                    </SvgIcon>
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
          )}
        </Container>

        {!smUp && (
          <Drawer
            anchor="right"
            open={menuOpen}
            onClose={handleMenuClose}
            ModalProps={{
              keepMounted: true,
            }}
            PaperProps={{
              sx: {
                width: "calc(100vw - 50px)",
                maxWidth: "100vw",
                minHeight: "100vh",
                borderRadius: 0,
                overflowY: "auto",
                boxShadow: "none",
                backgroundColor: "#f8f8f8",
                top: "0 !important",
                left: "auto",
                right: 0,
                m: 0,
                background: "white",
              },
            }}
          >
            <Box
              sx={{
                px: 0,
                pt: 4.5,
                pb: 0,
                minHeight: "100vh",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  px: 2,
                  mb: 1,
                  width: "33px",
                  height: "33px",
                  marginLeft: "auto",
                }}
              >
                <IconButton
                  onClick={handleMenuClose}
                  aria-label="close menu"
                  sx={{
                    color: "#AC93E1",
                    backgroundColor: "#fff",
                    border: "none",
                    width: "33px",
                    height: "33px",
                  }}
                >
                  <CloseIcon
                    sx={{
                      width: "33px",
                      height: "33px",
                    }}
                  />
                </IconButton>
              </Box>

              <Box
                component="img"
                src={mobileNavBg}
                alt="Dynamics Medica"
                sx={{ marginBottom: "72px", px: 4 }}
              />

              <Box
                sx={{
                  padding: "32px 32px 32px 0",
                  backgroundColor: "#F8F4FF",
                  borderRadius: "36px 36px 0 0",
                  height: "100vh",
                }}
              >
                <Box
                  component={RouterLink}
                  href={paths.index}
                  onClick={handleMenuClose}
                  sx={{
                    textDecoration: "none",
                    display: "block",
                    mb: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { sm: "14px", md: "15px" },
                      fontWeight: 400,
                      color: "#1D1D1D",
                      width: "100%",
                      padding: "12px 0 12px 32px",
                      borderRadius: "4px",
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#AC93E1",
                      },
                    }}
                  >
                    {t(tokens.nav.home)}
                  </Typography>
                </Box>

                <Box
                  component={RouterLink}
                  href={paths.aboutUs}
                  onClick={handleMenuClose}
                  sx={{
                    textDecoration: "none",
                    display: "block",
                    mb: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { sm: "14px", md: "15px" },
                      fontWeight: 400,
                      color: "#1D1D1D",
                      width: "100%",
                      padding: "12px 0 12px 32px",
                      borderRadius: "4px",
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#AC93E1",
                      },
                    }}
                  >
                    {t(tokens.nav.about)}
                  </Typography>
                </Box>

                <Box sx={{ mb: 0 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1.5,
                    }}
                  >
                    <Box
                      component={RouterLink}
                      href={paths.ourBrands}
                      onClick={handleMenuClose}
                      sx={{
                        textDecoration: "none",
                        display: "block",
                        flex: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { sm: "14px", md: "15px!important" },
                          fontWeight: 400,
                          color: "#1D1D1D",
                          width: "100%",
                          padding: "12px 0 12px 32px",
                          borderRadius: "4px",
                          "&:hover": {
                            color: "white",
                            backgroundColor: "#AC93E1",
                          },
                        }}
                      >
                        {t(tokens.nav.brands)}
                      </Typography>
                    </Box>

                    <IconButton
                      onClick={() => setMobileBrandsOpen((prev) => !prev)}
                      aria-label="toggle brands menu"
                      sx={{
                        color: "#111",
                        mr: 1,
                        p: 1.5,
                      }}
                    >
                      <SvgIcon
                        sx={{
                          fontSize: 23,
                          transform: mobileBrandsOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <svg
                          width="23"
                          height="11"
                          viewBox="0 0 23 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.7321 0.384149C23.1321 0.8454 23.078 1.53983 22.6113 1.9352L12.2243 10.7352C11.8075 11.0883 11.1926 11.0883 10.7757 10.7352L0.38866 1.9352C-0.0780163 1.53983 -0.132029 0.845399 0.267874 0.384148C0.667925 -0.0771022 1.37054 -0.130533 1.83721 0.264835L11.5 8.4512L21.1628 0.264836C21.6295 -0.130532 22.3321 -0.0771013 22.7321 0.384149Z"
                            fill="#272727"
                          />
                        </svg>
                      </SvgIcon>
                    </IconButton>
                  </Box>

                  <Collapse in={mobileBrandsOpen} timeout={0}>
                    <MobileBrandsGrid onItemClick={handleMenuClose} />
                  </Collapse>
                </Box>

                <Box
                  component={RouterLink}
                  href={paths.contactUs}
                  onClick={handleMenuClose}
                  sx={{
                    textDecoration: "none",
                    display: "block",
                    mt: 0,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { sm: "14px", md: "15px" },
                      fontWeight: 400,
                      color: "#1D1D1D",
                      width: "100%",
                      padding: "12px 0 12px 32px",
                      borderRadius: "4px",
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#AC93E1",
                      },
                    }}
                  >
                    {t(tokens.nav.contact)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Drawer>
        )}
      </Box>
    </>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func,
};