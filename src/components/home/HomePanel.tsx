import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import Section from "../common/Section";

const styles = (theme: Theme) => createStyles({});

interface HomePanelProps extends WithStyles<typeof styles> {
}

function HomePanel(props: HomePanelProps) {
    return (
        <Section
            id="home"
            hasDivider={false}
            title="Updates"
        >
            <Typography paragraph >

            </Typography>
        </Section>
    );
}

export default withStyles(styles)(HomePanel);