import * as React from "react";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { default as MuiLink } from "@mui/material/Link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { useSubPages } from "@/src/hooks/useSubPages";
import SectionMetadata from "@/src/model/SectionMetadata";

const useStyles = makeStyles(
    (theme) =>
        createStyles({
            loadingSpinner: {
                marginTop: theme.spacing(2),
            },
            link: {
                paddingTop: theme.spacing(2),
                paddingBottom: theme.spacing(2),
            },
            linkText: {},
        }),
    { name: "MuiMySubPagesLinksPanel" },
);

const LINK_TEXT_STYLE = {
    align: "center",
    fontSize: "1.5rem",
} as const;


export const SubPagesLinksPanel = ({
    urlPrefix,
    getSubPages,
}: {
    urlPrefix: string;
    getSubPages: SectionMetadata["getSubPages"];
}) => {
    const classes = useStyles();

    const { loading, data, error } = useSubPages({ getSubPages });

    if (loading) {
        return <CircularProgress className={classes.loadingSpinner} />;
    }

    if (!data) {
        // TODO: improve this / handle error
        return null;
    }

    return (
        <>
            {Object.values(data).map(({ name, url, icon }, i) => (
                <React.Fragment key={url}>
                    {i > 0 && <Divider />}
                    <div className={classes.link}>
                        <Link key={name} href={`${urlPrefix}${url}`} passHref>
                            <MuiLink component="div" color="inherit" underline="always">
                                <ListItemButton tabIndex={-1}>
                                    <ListItemText
                                        primary={name}
                                        primaryTypographyProps={LINK_TEXT_STYLE}
                                        className={classes.linkText}
                                    />
                                </ListItemButton>
                            </MuiLink>
                        </Link>
                    </div>
                </React.Fragment>
            ))}
        </>
    );
};
