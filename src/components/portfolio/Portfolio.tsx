import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import {PortfolioProps} from "./PortfolioProps";
import EmbeddedPenPortfolio from "./EmbeddedPenPortfolio";

const styles = (theme: Theme) => createStyles({});

interface PortfolioPropsWithStyles extends PortfolioProps, WithStyles<typeof styles> {
}

function Portfolio(props: PortfolioPropsWithStyles) {
    return (
        <EmbeddedPenPortfolio {...props}/>
    );
}

export default withStyles(styles)(Portfolio);