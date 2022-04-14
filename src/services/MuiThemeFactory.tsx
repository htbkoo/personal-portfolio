import React, { createContext, useContext, useState, ReactNode } from "react";
import { createTheme as createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { grey, indigo } from "@material-ui/core/colors";
import { PaletteType } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { Theme } from "@material-ui/core/styles/createTheme";

const PALETTES: { [paletteType in PaletteType]: PaletteOptions } = {
    light: {
        primary: indigo,
        secondary: { main: grey["A100"] },
    },
    dark: {
        secondary: grey,
    },
};

const createTheme = (paletteType: PaletteType) =>
    createMuiTheme({
        palette: {
            ...PALETTES[paletteType],
            type: paletteType,
        },
        typography: {},
        overrides: {
            MuiTableRow: {
                root: {
                    //for the body
                    height: "100%",
                },
                head: {
                    //for the head
                    height: "100%",
                },
            },
        },
    });

export const DARK_THEME = createTheme("dark");

const themesCache: Partial<Record<PaletteType, Theme>> = {
    dark: DARK_THEME,
};

const getTheme = (paletteType: PaletteType): Theme => {
    if (!(paletteType in themesCache)) {
        themesCache[paletteType] = createTheme(paletteType);
    }
    return themesCache[paletteType]!;
};

const DarkLightModeContext = createContext<{
    darkLightMode: PaletteType;
    setDarkLightMode: (PaletteType) => void;
}>({
    darkLightMode: "dark",
    setDarkLightMode: () => {},
});

export const useDarkLightModeToggler = () => {
    const { darkLightMode, setDarkLightMode } = useContext(DarkLightModeContext);
    return () => setDarkLightMode(darkLightMode === "dark" ? "light" : "dark");
};

export const AppThemeProvider = ({ children }: { children?: ReactNode }) => {
    const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
    const [darkLightMode, setDarkLightMode] = useState<PaletteType>(prefersLightMode ? "light" : "dark");

    const theme = getTheme(darkLightMode);

    return (
        <DarkLightModeContext.Provider value={{ darkLightMode, setDarkLightMode }}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </DarkLightModeContext.Provider>
    );
};
