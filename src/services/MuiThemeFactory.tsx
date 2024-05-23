import React, { createContext, ReactNode, useContext, useState } from "react";
import {
    adaptV4Theme,
    createTheme as createMuiTheme,
    PaletteOptions,
    StyledEngineProvider,
    Theme,
    ThemeProvider,
} from "@mui/material/styles";
import { grey, indigo } from "@mui/material/colors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PaletteMode } from "@mui/material";

declare module "@mui/styles/defaultTheme" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}

const PALETTES: { [paletteType in PaletteMode]: PaletteOptions } = {
    light: {
        primary: { main: indigo["500"] },
        secondary: { main: grey["400"] },
    },
    dark: {
        primary: { main: indigo["900"] },
        secondary: { main: grey["600"] },
    },
};

const createTheme = (paletteMode: PaletteMode) =>
    createMuiTheme(
        adaptV4Theme({
            palette: {
                ...PALETTES[paletteMode],
                mode: paletteMode,
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
        }),
    );

export const DARK_THEME = createTheme("dark");

const themesCache: Partial<Record<PaletteMode, Theme>> = {
    dark: DARK_THEME,
};

const getTheme = (paletteMode: PaletteMode): Theme => {
    if (!(paletteMode in themesCache)) {
        themesCache[paletteMode] = createTheme(paletteMode);
    }
    return themesCache[paletteMode]!;
};

const DarkLightModeContext = createContext<{
    darkLightMode: PaletteMode;
    setDarkLightMode: (paletteMode: PaletteMode) => void;
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
    const [darkLightMode, setDarkLightMode] = useState<PaletteMode>(prefersLightMode ? "light" : "dark");

    const theme = getTheme(darkLightMode);

    return (
        <DarkLightModeContext.Provider value={{ darkLightMode, setDarkLightMode }}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </StyledEngineProvider>
        </DarkLightModeContext.Provider>
    );
};
