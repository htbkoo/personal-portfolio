import React, { createContext, useContext, useState, ReactNode } from "react";
import {
    createTheme as createMuiTheme,
    ThemeProvider,
    StyledEngineProvider,
    adaptV4Theme,
    PaletteOptions,
    Theme,
} from "@mui/material/styles";
import { grey, indigo } from "@mui/material/colors";
import { PaletteType } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


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
    createMuiTheme(adaptV4Theme({
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
    }));

export const DARK_THEME = createTheme(adaptV4Theme("dark"));

const themesCache: Partial<Record<PaletteType, Theme>> = {
    dark: DARK_THEME,
};

const getTheme = (paletteType: PaletteType): Theme => {
    if (!(paletteType in themesCache)) {
        themesCache[paletteType] = createTheme(adaptV4Theme(paletteType));
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
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </StyledEngineProvider>
        </DarkLightModeContext.Provider>
    );
};
