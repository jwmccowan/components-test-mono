import * as React from "react";
import { Themes } from "./themes.enum";

export interface ThemeProviderProps {
    children: React.ReactNode;
    theme: Themes;
}