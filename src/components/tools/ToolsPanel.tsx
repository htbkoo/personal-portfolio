import * as React from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import Section from "../common/Section";

const useStyles = makeStyles(
    (theme) =>
        createStyles({
            toolsPanel: {
                padding: theme.spacing(3),
            },
        }),
    { name: "MuiMyToolsPanel" },
);

const ToolsPanel = () => {
    const classes = useStyles();

    return (
        <Section id="tools" hasDivider={true} title="Tools" subtitle="Some random tools">
            <div className={classes.toolsPanel}>Tools</div>
        </Section>
    );
};
export default ToolsPanel;
