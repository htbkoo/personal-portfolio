import { type Theme } from "@mui/material";
import { type Breakpoint } from "@mui/material/styles";

function onlyDisplayIfWidthAtLeast(theme: Theme, key: Breakpoint | number) {
    return {
        display: "none",
        [theme.breakpoints.up(key)]: {
            display: "unset",
        },
    };
}

export { onlyDisplayIfWidthAtLeast };
