import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import ChevronDownIcon from "@untitled-ui/icons-react/build/esm/ChevronDown";
import ChevronRightIcon from "@untitled-ui/icons-react/build/esm/ChevronRight";

import PropTypes from "prop-types";
import { Dropdown, DropdownMenu, DropdownTrigger } from "./dropdown";
import { RouterLink } from "./router-link";
import { useCallback, useState } from "react";
import { alpha, Paper, Portal, Typography } from "@mui/material";

const TOP_NAV_HEIGHT = 120;
const TOP_NAV_SPACE = 0;
const OFFSET = 0;

const renderChildItems = ({ items, depth = 0 }) => {
  return items.map((item) => {
    if (item.items) {
      return (
        <Dropdown key={item.title}>
          <DropdownTrigger>
            <ListItemButton
              disabled={item.disabled}
              sx={{
                borderRadius: 1,
                px: 1.5,
                py: 0.5,
              }}
            >
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  sx: {
                    color: "text.secondary",
                    fontSize: { sm: "14px", md: "14px" },
                    fontWeight: 500,
                  },
                }}
              />
              <SvgIcon fontSize="small" sx={{ color: "neutral.400" }}>
                <ChevronRightIcon />
              </SvgIcon>
            </ListItemButton>
          </DropdownTrigger>

          <DropdownMenu
            anchorOrigin={{
              horizontal: "right",
              vertical: "top",
            }}
            disableScrollLock
            PaperProps={{
              elevation: 8,
              sx: {
                maxWidth: "100%",
                ml: 1,
                p: 1,
                width: 200,
              },
            }}
            transformOrigin={{
              horizontal: "left",
              vertical: "top",
            }}
          >
            {renderChildItems({ items: item.items, depth: depth + 1 })}
          </DropdownMenu>
        </Dropdown>
      );
    }

    const linkProps = item.path
      ? item.external
        ? { component: "a", href: item.path, target: "_blank" }
        : { component: RouterLink, href: item.path }
      : {};

    return (
      <ListItemButton
        disabled={item.disabled}
        key={item.title}
        sx={{ borderRadius: 1, px: 1.5, py: 0.5 }}
        {...linkProps}
      >
        <ListItemText
          primary={item.title}
          primaryTypographyProps={{
            sx: { color: "text.secondary", fontSize: 18, fontWeight: 500 },
          }}
        />
      </ListItemButton>
    );
  });
};

export const TopNavItem = (props) => {
  const { active, disabled, external, items, icon, label, path, title, popover } =
    props;

  const [open, setOpen] = useState(false);

  const handleMouseEnter = useCallback(() => setOpen(true), []);
  const handleMouseLeave = useCallback(() => setOpen(false), []);

  const linkProps = path
    ? external
      ? { component: "a", href: path, target: "_blank" }
      : { component: RouterLink, href: path }
    : {};

  if (items) {
    return (
      <Dropdown>
        <DropdownTrigger>
          <li>
            <ButtonBase
              disabled={disabled}
              sx={{
                alignItems: "center",
                borderRadius: 1,
                display: "flex",
                justifyContent: "flex-start",
                px: "16px",
                py: "6px",
                textAlign: "left",
                width: "100%",
                ...(active && { backgroundColor: "var(--nav-item-active-bg)" }),
                "&:hover": { backgroundColor: "var(--nav-item-hover-bg)" },
              }}
            >
              <Box
                component="span"
                sx={{
                  alignItems: "center",
                  color: "var(--nav-item-icon-color)",
                  display: "inline-flex",
                  justifyContent: "center",
                  mr: 2,
                  ...(active && { color: "var(--nav-item-icon-active-color)" }),
                }}
              >
                {icon}
              </Box>

              <Box
                component="span"
                sx={{
                  color: "var(--nav-item-color)",
                  flexGrow: 1,
                  fontFamily: (theme) => theme.typography.fontFamily,
                  fontSize: 18,
                  fontWeight: 600,
                  lineHeight: "24px",
                  whiteSpace: "nowrap",
                  ...(active && { color: "var(--nav-item-active-color)" }),
                  ...(disabled && { color: "var(--nav-item-disabled-color)" }),
                }}
              >
                {title}
              </Box>

              <SvgIcon
                sx={{ color: "var(--nav-item-chevron-color)", fontSize: 16, ml: 1 }}
              >
                <ChevronDownIcon />
              </SvgIcon>
            </ButtonBase>
          </li>
        </DropdownTrigger>

        <DropdownMenu
          disableScrollLock
          PaperProps={{
            elevation: 8,
            sx: { maxWidth: "100%", p: 1, width: 200 },
          }}
        >
          {renderChildItems({ items, depth: 0 })}
        </DropdownMenu>
      </Dropdown>
    );
  }

  if (popover) {
    return (
      <>
        <Box
          component="li"
          sx={{ display: "flex", alignItems: "center", height: "100%" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ButtonBase
            disableRipple
            sx={{
              alignItems: "center",
              borderRadius: 1,
              display: "flex",
              justifyContent: "flex-start",
              px: "16px",
              py: "8px",
              textAlign: "left",
              "&:hover": { backgroundColor: "action.hover" },
              ...(active && { backgroundColor: "action.hover" }),
            }}
            {...linkProps}
          >
            <Typography
              component="span"
              variant="subtitle2"
              sx={{ fontSize: 18, fontWeight: 600 }}
            >
              {title}
            </Typography>

            <SvgIcon sx={{ fontSize: 16, ml: 1 }}>
              <ChevronDownIcon />
            </SvgIcon>
          </ButtonBase>
        </Box>

        {open && (
          <Portal>
            <Box
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{
                width: "575px",
                left: { sm: "20%", md: "35%" },
                position: "fixed",
                pt: "0px",
                right: 0,
                top: "65px",
                zIndex: (theme) => theme.zIndex.appBar + 100,
                borderRadius: "0!important",
              }}
            >
              <Paper
                elevation={16}
                sx={{
                  backgroundColor: (theme) =>
                    alpha(theme.palette.background.paper, 0.9),
                  backdropFilter: "blur(6px)",
                  mx: "auto",
                  width: "580px",
                  borderRadius: "1pximportant",
                }}
              >
                {popover}
              </Paper>
            </Box>
          </Portal>
        )}
      </>
    );
  }

  return (
    <li>
      <ButtonBase
        disabled={disabled}
        sx={{
          alignItems: "center",
          borderRadius: 1,
          display: "flex",
          justifyContent: "flex-start",
          px: "16px",
          py: "8px",
          textAlign: "left",
          "&:hover": { backgroundColor: "action.hover" },
          ...(active && { backgroundColor: "action.hover" }),
        }}
        {...linkProps}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: "center",
              color: "var(--nav-item-icon-color)",
              display: "inline-flex",
              justifyContent: "center",
              mr: 2,
              ...(active && { color: "var(--nav-item-icon-active-color)" }),
            }}
          >
            {icon}
          </Box>
        )}

        <Box
          component="span"
          sx={{
            color: "var(--nav-item-color)",
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 18,
            fontWeight: 600,
            lineHeight: "24px",
            whiteSpace: "nowrap",
            ...(active && { color: "var(--nav-item-active-color)" }),
            ...(disabled && { color: "var(--nav-item-disabled-color)" }),
          }}
        >
          <Typography
            component="span"
            variant="subtitle2"
            sx={{ fontSize: {sm:14,md:18}, fontWeight: 600 }}
          >
            {title}
          </Typography>
        </Box>

        {label && <Box component="span" sx={{ ml: 1 }}>{label}</Box>}
      </ButtonBase>
    </li>
  );
};

TopNavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,
  items: PropTypes.array,
  label: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};