import React, { ReactNode } from "react";
import { type Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(
    (theme: Theme) => ({
        root: {
            display: "flex",
        },
        content: {
            flexGrow: 1,
            [theme.breakpoints.down('sm')]: {
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
