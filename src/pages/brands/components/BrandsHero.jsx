import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import video from "assets/our_brands.mp4";
import { paths } from "paths";

export const BrandsHero = (props) => {
  const { t } = useTranslation();

  return (
    <VideoHero
    name='basic-page'

      title={t(tokens.brands.our_collection.title1)}
      description={t(tokens.brands.our_collection.paragraph3)}
      videoSrc={video}
      actionPath={paths.aboutUs}
      actionLabel={t(tokens.nav.about)}
    />
  );
};

BrandsHero.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
