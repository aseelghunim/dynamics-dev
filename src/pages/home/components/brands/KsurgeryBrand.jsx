import { Button, Container } from "@mui/material";
import { Box, Stack } from "@mui/system";
import video from "assets/ksugery.mp4";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { buttonStyle, textStyle, videoStyle } from "./styles";
import "./brands.css";

const KsurgeryBrand = (props) => {
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
            <QuoteTypography variant="h6">Ksurgery</QuoteTypography>
            <StyledTypography variant="body2">
              Our Italian-made hyaluronic acid treatments blend cutting-edge
              technology with natural beauty enhancement. Ksurgery Med, by
              Vidapharma, delivers safe, effective, and scientifically-validated
              products, designed to meet the high standards of medical
              professionals in aesthetic care.
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

KsurgeryBrand.propTypes = {};

export default KsurgeryBrand;
