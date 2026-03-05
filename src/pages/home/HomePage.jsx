import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { Seo } from "layout/components/Seo";
import AboutUsBanner from "./components/AboutUsBanner";
import BrandsBanner from "./components/BrandsBanner";
import { HomeHero } from "./components/HeroHome";
import NewCommitmentBanner from "./components/NewCommitmentBanner";
import NewsBanner from "./components/NewsBanner";

const HomePage = (props) => {
  usePageView();
  useScrollToTop();
  return (
    <>
      <Seo />
      <main>
        <HomeHero />
        <NewCommitmentBanner />
        <BrandsBanner />
        <NewsBanner />
        <AboutUsBanner />
      </main>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
