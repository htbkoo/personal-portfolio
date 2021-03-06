import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";
import { PaletteType } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { createContext, useContext, useState } from "react";

export const createTheme = (paletteType: PaletteType) =>
    createMuiTheme({
        palette: {
            primary: indigo,
            secondary: { main: "#e6f0fe" },
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

const DarkLightModeContext = createContext<{
    darkLightMode: PaletteType;
    setDarkLightMode: (PaletteType) => void;
}>({
    darkLightMode: "light",
    setDarkLightMode: () => {},
});

export const useDarkLightModeToggler = () => {
    const { darkLightMode, setDarkLightMode } = useContext(DarkLightModeContext);
    return () => setDarkLightMode(darkLightMode === "dark" ? "light" : "dark");
};

export const AppThemeProvider = ({ children }: { children?: React.ReactNode }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [darkLightMode, setDarkLightMode] = useState<PaletteType>(prefersDarkMode ? "dark" : "light");

    const theme = React.useMemo(() => createTheme(darkLightMode), [darkLightMode]);

    return (
        <DarkLightModeContext.Provider value={{ darkLightMode, setDarkLightMode }}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
        </DarkLightModeContext.Provider>
    );
};
