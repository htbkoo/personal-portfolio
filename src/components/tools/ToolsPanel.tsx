import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";

import Section from "../common/Section";
import { sectionConfigs } from "@/src/metadata/sectionConfigs";
import { SubPagesLinksPanel } from "@/src/components/common/SubPagesLinksPanel";

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
        <Section id="tools" hasDivider={true} title="Tools" subtitle="Some random tools I built">
            <div className={classes.toolsPanel}>
                <SubPagesLinksPanel urlPrefix="tools" getSubPages={sectionConfigs.tools.getSubPages} />
            </div>
        </Section>
    );
};
export default ToolsPanel;
