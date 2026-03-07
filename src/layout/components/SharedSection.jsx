import { Divider, useTheme } from "@mui/material";
import { Box, Stack } from "@mui/system";
import StyledTypography from "layout/components/StyledTypography";
import Section from "pages/home/components/Section";
import './SharedSection.css';


const SharedSection = ({
  name = undefined,
  title,
  description,
  background = "linear-gradient(to right, #c096f4,#5d2c71)",
  descriptionSx = {},
}) => {
  const theme = useTheme();
  return (
    <Box
      className={name ?? ""}
      sx={{
        background: background,
        color: "white",
        py: { xs: 2, md: 4 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Section height={{ xs: "auto", md: "30vh" }}>
        <Stack
          sx={{
            height: { xs: "auto", md: "30vh" },
            minHeight: { xs: "200px", md: "30vh" },
          }}
          justifyContent="center"
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 2, md: 5 }}
            padding ="16px"
            divider={
              <Divider
                orientation={{ xs: "horizontal", md: "vertical" }}
                flexItem
                sx={{
                  "@media (max-width: 991px)": {
                    width: "100%",
                    my: 1,
                  },
                }}
              />
            }
          >
            <StyledTypography
              variant={theme.direction === "ltr" ? "h2" : "h2"}
              sx={{
                width: { xs: "100%", md: "700px" },
                fontSize: { xs: "2.25rem", md: "inherit" },
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              {title}
            </StyledTypography>
            <StyledTypography
              variant="body2"
              sx={{
                fontSize: { xs: "1.125rem", md: "inherit" },
                lineHeight: { xs: 1.6, md: "inherit" },
                ...descriptionSx,
              }}
            >
              {description}
            </StyledTypography>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
};

SharedSection.propTypes = {};

export default SharedSection;
