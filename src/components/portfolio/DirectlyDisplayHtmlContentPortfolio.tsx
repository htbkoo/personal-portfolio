import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import {PortfolioProps} from "./PortfolioProps";

const styles = (theme: Theme) => createStyles({});

interface DirectlyDisplayHtmlContentPortfolio extends PortfolioProps, WithStyles<typeof styles> {
}

function DirectlyDisplayHtmlContentPortfolio(props: DirectlyDisplayHtmlContentPortfolio) {
    const {title, link, content} = props;
    return (
        <div>
            <div>
                <a href={link}>{title}</a>
            </div>
            <div dangerouslySetInnerHTML={{__html: content}}>
            </div>
        </div>
    );
}

export default withStyles(styles)(DirectlyDisplayHtmlContentPortfolio);