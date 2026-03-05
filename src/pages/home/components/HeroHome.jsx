import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import video from "assets/HeroMove1.mp4";
import { paths } from "paths";
export const HomeHero = (props) => {
  const { t } = useTranslation();

  return (
    <VideoHero
    name='basic-page'

      title={t(tokens.common.discover_brands.title)}
      description={t(tokens.common.discover_brands.summary)}
      videoSrc={video}
      actionPath={paths.ourBrands}
      actionLabel={t(tokens.common.buttons.readMore)}
    />
  );
};

HomeHero.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
