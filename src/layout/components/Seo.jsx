import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

export const Seo = (props) => {
  const { title, description } = props;

  const fullTitle = title ? title + " | Dynamics" : "Dynamics";

  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`Dynamics - ${title}`} />
      {description && <meta property="og:description" content={description} />}
      <title>{fullTitle}</title>
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
