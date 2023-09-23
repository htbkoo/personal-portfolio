import * as React from "react";
import { createStyles, Link as MuiLink, makeStyles, Typography } from "@material-ui/core";

import Section from "../common/Section";
import { sectionConfigs } from "@/src/metadata/sectionConfigs";
import Link from "next/link";

const useStyles = makeStyles(
    (theme) =>
        createStyles({
            toolsPanel: {
                padding: theme.spacing(3),
            },
            linkText: {
                marginLeft: theme.spacing(2),
            },
        }),
    { name: "MuiMyToolsPanel" },
);

const ToolsPanel = () => {
    const classes = useStyles();

    const URL_PREFIX = `/tools`;

    return (
        <Section id="tools" hasDivider={true} title="Tools" subtitle="Some random tools">
            <div className={classes.toolsPanel}>
                {Object.values(sectionConfigs.tools.subPages).map(({ name, icon, url }) => (
                    <Link key={name} href={URL_PREFIX + url} passHref>
                        <MuiLink component="div" color="inherit" underline="always">
                            <Typography variant="h3" gutterBottom>
                                {name}
                            </Typography>
                        </MuiLink>
                    </Link>
                ))}
            </div>
        </Section>
    );
};
export default ToolsPanel;
