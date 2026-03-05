import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import video from "assets/ContactUsMovie1.mp4";

export const ContactUsHero = (props) => {
  const { t } = useTranslation();

  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      // Get navbar element (header) to calculate its height
      const navbar = document.querySelector("header");
      const navbarHeight = navbar ? navbar.offsetHeight : 120; // Fallback to 120px if not found

      // Calculate the position accounting for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        window.pageYOffset + elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <VideoHero
    name='basic-page'

      title={t(tokens.nav.contact)}
      description={t(tokens.contact.hero.paragraph)}
      videoSrc={video}
      actionLabel={t(tokens.nav.contact)}
      actionOnClick={scrollToForm}
    />
  );
};

ContactUsHero.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
