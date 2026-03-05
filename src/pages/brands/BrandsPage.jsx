import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { Seo } from "layout/components/Seo";
import BrandsBanner from "pages/home/components/BrandsBanner";
import { BrandsHero } from "./components/BrandsHero";
import OurCollectionBanner from "./components/OurCollectionBanner";
import OurCollectionParagraph from "./components/OurCollectionParagraph";

const BrandsPage = (props) => {
  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <BrandsHero />
        <OurCollectionParagraph />
        <BrandsBanner />
        <OurCollectionBanner />
      </main>
    </>
  );
};

BrandsPage.propTypes = {};

export default BrandsPage;
