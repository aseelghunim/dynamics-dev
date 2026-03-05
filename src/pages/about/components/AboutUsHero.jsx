import video from "assets/about.mov";
import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const AboutUsHero = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <VideoHero
      name='basic-page'
        title={t(tokens.about.title)}
        description={t(tokens.about.page.paragraph)}
        videoSrc={video}
      />
    </>
  );
};

AboutUsHero.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
