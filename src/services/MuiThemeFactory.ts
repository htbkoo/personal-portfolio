import { createMuiTheme } from '@material-ui/core/styles';
import {blue, indigo} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: blue,
    },
    typography: {
        useNextVariants: true,
    },
    overrides:{
        MuiTableRow: {
            root: { //for the body
                height: "100%"
            },
            head: { //for the head
                height: "100%"
            }
        }
    }
});

export {theme};