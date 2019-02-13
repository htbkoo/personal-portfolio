import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import {PortfolioProps} from "./PortfolioProps";
import CodePen from "react-codepen-embed";

const styles = (theme: Theme) => createStyles({});

interface EmbeddedPenPortfolioProps extends PortfolioProps, WithStyles<typeof styles> {
}

function EmbeddedPenPortfolio(props: EmbeddedPenPortfolioProps) {
    const {title, link, content} = props;
    return (
        <div>
            <CodePen
                hash="MJWmGz"
                user="koob"
                loader={() => <div>Loading...</div>}
            />
        </div>
    );
}

export default withStyles(styles)(EmbeddedPenPortfolio);