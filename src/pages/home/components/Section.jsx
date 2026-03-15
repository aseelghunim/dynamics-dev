import { Box, Container, Stack } from "@mui/system";

const Section = ({ height = "80vh", backGroundImage, children }) => {
  return (
    <Box
      maxWidth="xl"
      sx={
        backGroundImage
          ? {
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${backGroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: height,
          }
          : {
            position: "relative",
            height: height,
            width: "100%",
            overflow: "hidden",
          }
      }
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
          sx={{ flexGrow: 1 }}
        >
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

Section.propTypes = {};

export default Section;
