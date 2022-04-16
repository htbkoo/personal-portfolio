import React, { ReactNode } from "react";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
    (theme: Theme) => ({
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
    }),
    { name: "MuiMyPageMain" },
);

const PageMain = ({ children }: { children: ReactNode }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
        </main>
    );
};
export default PageMain;
