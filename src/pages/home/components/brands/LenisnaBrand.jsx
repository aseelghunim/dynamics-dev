import { Button, Container } from "@mui/material";
import { Box, Stack } from "@mui/system";
import video from "assets/Lenisna.mp4";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { buttonStyle, textStyle, videoStyle } from "./styles";
import "./brands.css";

const LenisnaBrand = (props) => {
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
            <QuoteTypography variant="h6">Lenisna</QuoteTypography>
            <StyledTypography variant="body2">
              Experience Lenisna: Our innovative spherical particles stimulate
              collagen production, offering natural volume for facial and body
              contouring. Ideal for wrinkle reduction and scar treatment.{" "}
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

LenisnaBrand.propTypes = {};

export default LenisnaBrand;
