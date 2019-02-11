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
});

export {theme};