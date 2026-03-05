import { Box, ButtonBase, Drawer, Stack } from "@mui/material";
// import { useTheme } from "@mui/styles";
// import ShortDarkQualifiedCrewLogo from "assets/logo-short-dark.svg";
// import ShortLightQualifiedCrewLogo from "assets/logo-short-light.svg";
import { usePathname } from "hooks/use-pathname";
import { paths } from "paths";
import { RouterLink } from "./router-link";
import { SideNavItem } from "./side-nav-item";
import { useTranslation } from "react-i18next";
import { tokens } from "locales/tokens";

const renderItems = ({ depth = 0, items, pathname, t }) =>
  items.reduce(
    (acc, item) =>
      reduceChildRoutes({
        acc,
        depth,
        item,
        pathname,
        t,
      }),
    []
  );

const reduceChildRoutes = ({ acc, depth, item, pathname, t }) => {
  const checkPath = !!(item.path && pathname);
  const partialMatch = checkPath ? pathname.includes(item.path) : false;
  const exactMatch = checkPath ? pathname === item.path : false;

  // Convert popover to children for mobile navigation
  if (item.popover && !item.children && t) {
    // If item has popover (like Brands), convert it to children structure
    // This will make it expandable in mobile navigation
    item.children = [
      {
        items: [
          {
            title: t(tokens.brands.juvelook.title),
            path: paths.brands.juvelook,
          },
          {
            title: t(tokens.brands.lenisna.title),
            path: paths.brands.lenisna,
          },
          {
            title: t(tokens.brands.renee.title),
            path: paths.brands.renee,
          },
          {
            title: t(tokens.brands.ksurgery.title),
            path: paths.brands.ksurgery,
          },
        ],
      },
    ];
  }

  if (item.children) {
    acc.push(
      <SideNavItem
        active={partialMatch}
        depth={depth}
        disabled={item.disabled}
        key={item.title}
        open={partialMatch}
        title={item.title}
      >
        <Stack spacing={2}>
          {item.children.map((child, index) => (
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
              {child.subheader && (
                <Box
                  component="li"
                  sx={{
                    color: "text.secondary",
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 1.66,
                    mb: 1,
                    pl: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  {child.subheader}
                </Box>
              )}
              {child.items.map((item) => {
                const checkPath = !!(item.path && pathname);
                const active = checkPath ? pathname === item.path : false;

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
                        pl: "24px",
                        pr: "16px",
                        py: "8px",
                        textAlign: "left",
                        "&:hover": {
                          backgroundColor: "action.hover",
                        },
                        ...(active && {
                          color: "primary.main",
                        }),
                      }}
                      {...linkProps}
                    >
                      <Box
                        component="span"
                        sx={{
                          height: 6,
                          mr: 2,
                          width: 6,
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "neutral.400",
                            borderRadius: "50%",
                            height: 4,
                            opacity: 0,
                            width: 4,
                            ...(active && {
                              backgroundColor: "primary.main",
                              height: 6,
                              opacity: 1,
                              width: 6,
                            }),
                          }}
                        />
                      </Box>
                      <Box
                        component="span"
                        sx={{
                          flexGrow: 1,
                          fontFamily: (theme) => theme.typography.fontFamily,
                          fontSize: 13,
                          fontWeight: 500,
                          lineHeight: "24px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.title}
                      </Box>
                    </ButtonBase>
                  </li>
                );
              })}
            </Stack>
          ))}
        </Stack>
      </SideNavItem>
    );
  } else {
    acc.push(
      <SideNavItem
        active={exactMatch}
        depth={depth}
        disabled={item.disabled}
        external={item.external}
        key={item.title}
        path={item.path}
        title={item.title}
      />
    );
  }

  return acc;
};

export const GuestSideNav = (props) => {
  const { onClose, open = false, items } = props;
  const pathname = usePathname();
  const { t } = useTranslation();
  // const theme = useTheme();

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          maxWidth: "100%",
          width: 300,
        },
      }}
      variant="temporary"
    >
      <Box
        sx={{
          pt: 2,
          px: 2,
        }}
      >
        <Stack
          alignItems="center"
          component={RouterLink}
          direction="row"
          display="inline-flex"
          href={paths.index}
          spacing={1}
          sx={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              display: "inline-flex",
              height: 24,
              width: 24,
            }}
          >
            {/* <img
              style={{ height: "100%" }}
              src={
                theme.palette.mode === "dark"
                  ? ShortLightQualifiedCrewLogo
                  : ShortDarkQualifiedCrewLogo
              }
              alt={"Qualified Crew"}
            /> */}
          </Box>
          <Box
            sx={{
              color: "text.primary",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.3px",
              lineHeight: 2.5,
              "& span": {
                color: "primary.main",
              },
            }}
          >
            Dynamics
          </Box>
        </Stack>
      </Box>
      <Box component="nav" sx={{ p: 2 }}>
        <Stack
          component="ul"
          spacing={1}
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
          }}
        >
          {renderItems({ items, pathname, t })}
        </Stack>
      </Box>
    </Drawer>
  );
};
GuestSideNav.propTypes = {};

export default GuestSideNav;
