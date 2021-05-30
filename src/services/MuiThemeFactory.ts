import { createMuiTheme } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: { main: "#e6f0fe" },
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

export { theme };
