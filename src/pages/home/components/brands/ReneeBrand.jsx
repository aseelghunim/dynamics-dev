import { Button, Container } from "@mui/material";
import { Box, Stack } from "@mui/system";
import video from "assets/renee.mp4";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { buttonStyle, textStyle, videoStyle } from "./styles";
import "./brands.css";

const ReneeBrand = (props) => {
  return (
    <>
      <video autoPlay loop muted playsInline style={videoStyle}>
        <source src={video} type="video/mp4" />
      </video>
      <Container maxWidth="xl" sx={textStyle}>
        <Stack
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
          sx={{ height: "100%", flexDirection: "row" }}
        >
          <Stack spacing={3} sx={{ width: "50%" }} className="slide-up">
            <QuoteTypography variant="h6">Renee</QuoteTypography>
            <StyledTypography variant="body2">
              Experience Renée: Our injectable hyaluronic acid gels are
              meticulously crafted to hydrate and rejuvenate the skin, providing
              a refreshed and youthful appearance.{" "}
            </StyledTypography>
            <Box>
              <Button sx={buttonStyle} size="large" variant="outlined">
                DISCOVER BRAND
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

ReneeBrand.propTypes = {};

export default ReneeBrand;
