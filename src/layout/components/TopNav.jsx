// ✅ Changes:
// 1) Use MUI Popover instead of Drawer (so it APPEARS instantly, no slide)
// 2) Anchor it under the menu icon
// 3) Keep your exact styles/look

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha } from "@mui/system/colorManipulator";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { RouterLink } from "./router-link";
import { TopNavItem } from "./top-nav-item";
import { SvgIcon, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { tokens } from "locales/tokens";
import { useSettings } from "hooks/use-settings";
import { BrandsPopover } from "./Popover";
import { usePathname } from "hooks/use-pathname";
import { useWindowScroll } from "hooks/use-window-scroll";
import { paths } from "paths";

import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import logo from "assets/logo.png";
import logoLight from "assets/dynamics.png";

const TOP_NAV_HEIGHT = 120;

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
    return () => { };
  }, [handleLanguageLabels]);

  const items = [
    { title: t(tokens.nav.home), path: paths.index },
    { title: t(tokens.nav.about), path: paths.aboutUs },
    { title: t(tokens.nav.brands), path: paths.ourBrands, popover: <BrandsPopover /> },
    { title: t(tokens.nav.contact), path: paths.contactUs },
  ];

  const pathname = usePathname();
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const [elevate, setElevate] = useState(false);
  const offset = 64;
  const delay = 100;

  const handleWindowScroll = useCallback(() => {
    if (window.scrollY > offset) setElevate(true);
    else setElevate(false);
  }, []);

  useWindowScroll({ handler: handleWindowScroll, delay });

  const mobileHeaderHeight = 70;

  // ✅ Mobile menu popover state
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const menuOpen = Boolean(menuAnchorEl);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <Box
        className="top-nav"
        maxWidth="xxl"
        component="header"
        sx={{
          left: 0,
          position: "fixed",
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "#fff",
          right: 0,
          top: 0,
          borderBottom: "1px solid #fff",
          transition: (theme) =>
            theme.transitions.create("box-shadow, background-color", {
              easing: theme.transitions.easing.easeInOut,
              duration: 200,
            }),
          ...(elevate && {
            color: "#ab92e1",
            backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.9),
            boxShadow: 8,
          }),
          zIndex: (theme) => theme.zIndex.appBar,
          width: "100%",
          "@media (max-width: 899px)": {
            width: "100vw",
            left: 0,
            right: 0,
            background: elevate ? "white" : "transparent"
          },
        }}
      >
        <Container maxWidth="xl">
          {/* ✅ MOBILE HEADER */}
          {!smUp && (
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                height: `${mobileHeaderHeight}px`,
                position: "relative",
                padding: 0
              }}
            >
              {/* Left: Language */}
              <Box sx={{ flex: "0 0 auto" }}>
                <Tooltip title={languageLabel}>
                  <IconButton onClick={() => handleChange(language)} aria-label="language">
                    <SvgIcon sx={{ color: elevate ? "#ab92e1" : "#fff" }}>
                      <LanguageIcon />
                    </SvgIcon>
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Center: Logo */}
              <Box
                component={RouterLink}
                href={paths.index}
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: 46,
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <img style={{ height: "100%" }} src={elevate ? logo : logoLight} alt="Dynamics"

                 
                />
              </Box>

              {/* Right: Menu */}
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

          {/* ✅ DESKTOP HEADER */}
          {smUp && (
            <Stack
              direction="row"
              sx={{
                height: { xs: "70px", sm: TOP_NAV_HEIGHT },
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
                  <Box style={{ height: "60px" }} sx={{ 
                      "@media(min-width: 768px) and (max-width: 991px)": {
                        width: "150px",
                        objectFit: "cover"
                      }
                   }}>
                    <img
                      style={{ height: "100%", 
                     
                       width: "100%",
                       objectFit: "contain"
                    
                    
                    }}
                      src={elevate ? logo : logoLight}
                      alt={"Dynamics"}

                    />
                  </Box>
                </Stack>
              </Stack>

              <Stack alignItems={"center"} direction="column" spacing={2} sx={{ flex: 1 }}>
                <Box component="nav" sx={{ height: "100%", width: "100%", }}>
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
                      justifyContent:{sm:"flex-end" , md:"center"} ,

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
                    <SvgIcon sx={{ color: elevate ? "#ab92e1" : "#fff" }}>
                      <LanguageIcon />
                    </SvgIcon>
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
          )}

          {/* {smUp && (
            <Box sx={{
              position: "fixed",

              top: "106px",
              left: "60%",
              transform: "translateX(-50%)",
              zIndex: 9999,
              background: "white",
              borderRadius: "2px",
              boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.33)",

              minWidth: 600,
            }}>
              <BrandsPopover />
            </Box>
          )} */}

        </Container>

        {/* ✅ MOBILE MENU (APPEARS instantly, no slide) */}
        {!smUp && (
          <Popover
            open={menuOpen}
            anchorEl={menuAnchorEl}
            onClose={handleMenuClose}
            // Disable popover transition so it "just appears"
            transitionDuration={0}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            anchorPosition={{ top: 80, left: 200 }} // ✅ controls top & left directly

            PaperProps={{
              sx: {
                mt: 2,
                mx: "auto",
                width: "45vw",
                left: "unset!important",
                right: "0",
                maxWidth: 420,
                borderRadius: "0",
                overflow: "hidden",
                boxShadow: 12,
              },
            }}
          >
            <List sx={{ p: 2 }}>
              {items.map((item, idx) => {
                const isLast = idx === items.length - 1;

                return (
                  <Box key={item.title}>
                    <Box
                      component={RouterLink}
                      href={item.path}
                      onClick={handleMenuClose}
                      sx={{ textDecoration: "none", display: "block" }}
                    >
                      <ListItemButton
                        sx={{
                          py: 1,
                          "& .MuiListItemText-primary": {
                            fontSize: 16,
                            fontWeight: 300,
                            color: "#ab92e1",
                          },
                        }}
                      >
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </Box>

                    {!isLast && <Divider />}
                  </Box>
                );
              })}
            </List>
          </Popover>
        )}
      </Box>
    </>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func,
};




