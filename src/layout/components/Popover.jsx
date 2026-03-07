import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { paths } from "paths";
import { RouterLink } from "./router-link";
import { useTranslation } from "react-i18next";
import { tokens } from "locales/tokens";

export const BrandsPopover = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t(tokens.brands.juvelook.title),
      path: paths.brands.juvelook,
      caption: t(tokens.brands.juvelook.subtitle),
    },
    {
      title: t(tokens.brands.lenisna.title),
      path: paths.brands.lenisna,
      caption: t(tokens.brands.lenisna.subtitle),
    },
    {
      title: t(tokens.brands.renee.title),
      path: paths.brands.renee,
      caption: t(tokens.brands.renee.subtitle),
    },
    {
      title: t(tokens.brands.ksurgery.title),
      path: paths.brands.ksurgery,
      caption: t(tokens.brands.ksurgery.subtitle),
    },
    {
      title: t(tokens.brands.dimono.title),
      path: paths.brands.dimono,
      caption: t(tokens.brands.dimono.subtitle),
    },
    {
      title: t(tokens.brands.drcyj.title),
      path: paths.brands.drcyj,
      caption: t(tokens.brands.drcyj.subtitle),
    },
    {
      title: t(tokens.brands.maili.title),
      path: paths.brands.maili,
      caption: t(tokens.brands.maili.subtitle),
    },
    {
      title: t(tokens.brands.lanluma.title),
      path: paths.brands.lanluma,
      caption: t(tokens.brands.lanluma.subtitle),
    },
    {
      title: t(tokens.brands.ellanse.title),
      path: paths.brands.ellanse,
      caption: t(tokens.brands.ellanse.subtitle),
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gap: 1,
        gridTemplateColumns: "repeat(3, 1fr)",
        p: 5,
        overflow: "hidden",
      }}
    >
      {items.map((item) => {
        const linkProps = item.path
          ? { component: RouterLink, href: item.path }
          : {};

        return (
          <ButtonBase
            key={item.title}
            sx={{
              alignItems: "flex-start",
              borderRadius: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              px: "12px",
              py: "0",
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
                display: "block",
                fontFamily: (theme) => theme.typography.fontFamily,
                fontSize: 14,
                fontWeight: 500,
                lineHeight: "24px",
                whiteSpace: "nowrap",
                color: "text.primary",
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
          </ButtonBase>
        );
      })}
    </Box>
  );
};