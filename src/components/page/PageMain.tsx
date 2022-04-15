import React from "react";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";

import PageSection from "./PageSection";
import SectionMetadata from "@/src/model/SectionMetadata";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
    },
    content: {
        flexGrow: 1,
        [theme.breakpoints.down("xs")]: {
            padding: "unset",
        },
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(3),
        },
    },
    toolbar: theme.mixins.toolbar,
}));

interface PageMainProps {
    sectionConfigs: SectionMetadata[];
}

const PageMain = (props: PageMainProps) => {
    const classes = useStyles();
    const { sectionConfigs } = props;

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            {sectionConfigs.map((config) => (
                <PageSection key={config.name} config={config} />
            ))}
        </main>
    );
};
export default PageMain;
