import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";

import Section from "../common/Section";
import AboutInformation from "./AboutInformation";

const styles = (theme: Theme) => createStyles({});

interface AboutPanelProps extends WithStyles<typeof styles> {
}

function AboutPanel(props: AboutPanelProps) {
    return (
        <Section
            id="about"
            hasDivider={false}
            title="About"
            subtitle="Some information about myself"
        >
            <AboutInformation/>
        </Section>
    );
}

export default withStyles(styles)(AboutPanel);