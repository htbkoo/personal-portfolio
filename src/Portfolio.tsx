import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({});

interface PortfolioProps extends WithStyles<typeof styles> {
    title: string,
    link: string,
    content: string
}

function Portfolio(props: PortfolioProps) {
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

export default withStyles(styles)(Portfolio);