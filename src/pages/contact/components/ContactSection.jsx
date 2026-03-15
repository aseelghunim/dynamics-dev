import { Box, Container, Stack } from "@mui/system";
import Form from "./ContactForm";

const ContactSection = (props) => {
  return (
    <Box  id="contact-form">
      <Container maxWidth="xl">
        <Stack justifyContent="center" direction="row" sx={{ width: "100%" }}>
          <Form />
        </Stack>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {};

export default ContactSection;
