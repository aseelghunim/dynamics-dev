import { Button, Container } from "@mui/material";
import { Box, Stack } from "@mui/system";
import video from "assets/juvelook.mp4";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { buttonStyle, textStyle, videoStyle } from "./styles";
import "./brands.css";

const JuvelookBrand = (props) => {
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
            <QuoteTypography variant="h6">Juvelook</QuoteTypography>
            <StyledTypography variant="body2">
              Experience Juvelook: Our unique PLA filler enhances your
              appearance with precision. Small PDLLA particles are injected into
              the dermis, evenly volumizing skin by boosting collagen
              production.
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

JuvelookBrand.propTypes = {};

export default JuvelookBrand;
