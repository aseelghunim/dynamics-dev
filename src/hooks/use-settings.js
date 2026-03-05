import { SettingsContext } from "layout/settings";
import { useContext } from "react";

export const useSettings = () => useContext(SettingsContext);
