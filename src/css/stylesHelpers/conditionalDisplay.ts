import {Theme} from "@material-ui/core";
import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";

function onlyDisplayIfWidthAtLeast(theme: Theme, key: Breakpoint | number) {
    return {
        display: "none",
        [theme.breakpoints.up(key)]: {
            display: "unset",
        },
    }
}

export {onlyDisplayIfWidthAtLeast};