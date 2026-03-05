import { gtm } from "libs/gtm";
import { useEffect } from "react";

export const usePageView = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);
};
