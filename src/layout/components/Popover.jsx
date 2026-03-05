import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import { paths } from "paths";
import { RouterLink } from "./router-link";
import { useTranslation } from "react-i18next";
import { tokens } from "locales/tokens";

export const BrandsPopover = () => {
  const { t } = useTranslation();
  const sections = [
    {
      items: [
        {
          title: t(tokens.brands.juvelook.title),
          path: paths.brands.juvelook,
          icon: <SvgIcon fontSize="small"></SvgIcon>,
          caption: t(tokens.brands.juvelook.subtitle),
        },
        {
          title: t(tokens.brands.lenisna.title),
          path: paths.brands.lenisna,
          icon: <SvgIcon fontSize="small"></SvgIcon>,
          caption: t(tokens.brands.lenisna.subtitle),
        },
      ],
    },
    {
      items: [
        {
          title: t(tokens.brands.renee.title),
          path: paths.brands.renee,
          icon: <SvgIcon fontSize="small"></SvgIcon>,
          caption: t(tokens.brands.renee.subtitle),
        },
        {
          title: t(tokens.brands.ksurgery.title),
          path: paths.brands.ksurgery,
          icon: <SvgIcon fontSize="small"></SvgIcon>,
          caption: t(tokens.brands.ksurgery.subtitle),
        },
      ],
    },


    {
      items: [
        {
          title: t(tokens.brands.ellanse.title),
          path: paths.brands.ellanse,
          icon: <SvgIcon fontSize="small"></SvgIcon>,
          caption: t(tokens.brands.ellanse.subtitle),
        },
        {
          title: t(tokens.brands.lanluma.title),
          path: paths.brands.lanluma,
          icon: <SvgIcon fontSize="small"></SvgIcon>,
          caption: t(tokens.brands.lanluma.subtitle),
        },
      ],
    },


    {
      items: [
        {
          title: t(tokens.brands.maili.title),
          path: paths.brands.maili,
          icon: <SvgIcon fontSize="small"></SvgIcon>,
          caption: t(tokens.brands.maili.subtitle),
        },
        {
          title: t(tokens.brands.dimono.title),
          path: paths.brands.dimono,
          icon: <SvgIcon fontSize="small"></SvgIcon>,
          caption: t(tokens.brands.dimono.subtitle),
        },
      ],

    },
    {
      items: [
        {
          title: t(tokens.brands.drcyj.title),
          path: paths.brands.drcyj,
          icon: <SvgIcon fontSize="small"></SvgIcon>,
          caption: t(tokens.brands.drcyj.subtitle),
        },
       
      ],
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: "repeat(2, 1fr)",
        p: 3,
      }}
    >
      {sections.map((section, index) => {
        return (
          <Stack
            component="ul"
            key={index}
            spacing={0.5}
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            {section.items.map((item) => {
              const linkProps = item.path
                ? item.external
                  ? {
                    component: "a",
                    href: item.path,
                    target: "_blank",
                  }
                  : {
                    component: RouterLink,
                    href: item.path,
                  }
                : {};

              return (
                <li key={item.title}>
                  <ButtonBase
                    sx={{
                      alignItems: "center",
                      borderRadius: 1,
                      display: "flex",
                      justifyContent: "flex-start",
                      px: "12px",
                      py: "6px",
                      textAlign: "left",
                      width: "100%",
                      "&:hover": {
                        backgroundColor: "action.hover",
                      },
                    }}
                    {...linkProps}
                  >
                    <Box
                      component="span"
                      sx={{
                        alignItems: "center",
                        color: "action.active",
                        display: "inline-flex",
                        justifyContent: "center",
                        mr: 2,
                        width: 20,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box component="span" sx={{ flexGrow: 1 }}>
                      <Box
                        component="span"
                        sx={{
                          display: "block",
                          fontFamily: (theme) => theme.typography.fontFamily,
                          fontSize: 14,
                          fontWeight: 500,
                          lineHeight: "24px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.title}
                      </Box>
                      {item.caption && (
                        <Box
                          component="span"
                          sx={{
                            color: "text.secondary",
                            display: "block",
                            fontFamily: (theme) => theme.typography.fontFamily,
                            fontSize: 12,
                            fontWeight: 400,
                            lineHeight: "18px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.caption}
                        </Box>
                      )}
                    </Box>
                  </ButtonBase>
                  {item.children && (
                    <Stack
                      component="ul"
                      spacing={0.5}
                      sx={{
                        listStyle: "none",
                        m: 0,
                        p: 0,
                        pl: 20 + 16 + "px", // icon size + icon margin
                      }}
                    >
                      {item.children.map((child) => {
                        const linkProps = child.path
                          ? child.external
                            ? {
                              component: "a",
                              href: child.path,
                              target: "_blank",
                            }
                            : {
                              component: RouterLink,
                              href: child.path,
                            }
                          : {};

                        return (
                          <li key={child.title}>
                            <ButtonBase
                              sx={{
                                alignItems: "center",
                                borderRadius: 1,
                                display: "flex",
                                justifyContent: "flex-start",
                                px: "12px",
                                py: "6px",
                                textAlign: "left",
                                width: "100%",
                                "&:hover": {
                                  backgroundColor: "action.hover",
                                },
                              }}
                              {...linkProps}
                            >
                              <Box
                                component="span"
                                sx={{
                                  color: "text.secondary",
                                  display: "block",
                                  fontFamily: (theme) =>
                                    theme.typography.fontFamily,
                                  fontSize: 14,
                                  fontWeight: 500,
                                  lineHeight: "24px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {child.title}
                              </Box>
                            </ButtonBase>
                          </li>
                        );
                      })}
                    </Stack>
                  )}
                </li>
              );
            })}
          </Stack>
        );
      })}
    </Box>
  );
};
