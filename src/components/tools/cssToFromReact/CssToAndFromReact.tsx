import * as React from "react";
import { type TextareaHTMLAttributes } from "react";
import Image from "next/image";
import makeStyles from "@mui/styles/makeStyles";
import CircularProgress from "@mui/material/CircularProgress";
import Link, { type LinkProps } from "@mui/material/Link";
import { TextField } from "@mui/material";

import Section from "../../common/Section";
import { AsyncStateType } from "@/src/utils/types";
import { withStaticPrefix } from "@/src/utils/assetUtils";

const useStyles = makeStyles(
    (theme) => ({
        container: {},
        header: {
            textAlign: "center",
        },
        logo: {
            maxWidth: "100%",
            height: "auto",
            width: "auto",
        },
        bodyContainer: {
            padding: theme.spacing(2),
        },
        converterContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        textField: {
            margin: theme.spacing(2),
            width: "100%",
            maxWidth: theme.spacing(100),
        },
        textarea: {
            // reference: https://stackoverflow.com/a/64596414
            resize: "vertical",
        },
    }),
    { name: "MuiMyEmbeddedPenPortfolio" },
);

type CssToAndFromReactModuleType = typeof import("css-to-and-from-react");

const useCssToAndFromReact = () => {
    const [state, setState] = React.useState<AsyncStateType<CssToAndFromReactModuleType>>({
        loading: true,
    });

    React.useEffect(() => {
        import("css-to-and-from-react")
            .then((module) => {
                setState({
                    loading: false,
                    data: module,
                });
            })
            .catch((error) => {
                setState({
                    loading: false,
                    error,
                });
            });
    }, []);

    return { ...state };
};

const CssToAndFromReactConverter = () => {
    const classes = useStyles();

    const [cssText, setCssText] = React.useState("");
    const [reactText, setReactText] = React.useState("");

    const { loading, data } = useCssToAndFromReact();

    const handleCssChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] = React.useCallback(
        (event) => {
            const newCssText = event.target.value;
            setCssText(newCssText);
            try {
                setReactText(JSON.stringify(data?.transform(newCssText)));
            } catch (error) {}
        },
        [data],
    );
    const handleReactStyleChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] = React.useCallback(
        (event) => {
            const newReactText = event.target.value;
            setReactText(newReactText);
            data?.promiseReverse(newReactText)
                .then((result) => {
                    setCssText(result.css);
                })
                .catch((error) => {}); // TODO: handle error
        },
        [data],
    );

    if (loading) {
        return <CircularProgress />;
    }

    if (!data) {
        // TODO: show error message
        return null;
    }

    return (
        <div className={classes.converterContainer}>
            <TextField
                className={classes.textField}
                id="cssTextInput"
                label="CSS"
                multiline
                minRows={5}
                maxRows={15}
                variant="filled"
                onChange={handleCssChange}
                value={cssText}
            />
            <TextField
                className={classes.textField}
                id="reactTextInput"
                label="React in-line style object"
                multiline
                minRows={5}
                maxRows={15}
                variant="filled"
                onChange={handleReactStyleChange}
                value={reactText}
            />
        </div>
    );
};

export const UnderlinedLink = ({
    href,
    children,
}: {
    href: LinkProps["href"];
    children: LinkProps["children"];
}) => {
    return (
        <Link color="inherit" underline="always" href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </Link>
    );
};

export const CssToAndFromReact = () => {
    const classes = useStyles();

    return (
        <Section id="cssToAndFromReact">
            <div className={classes.container}>
                <header className={classes.header}>
                    <Image
                        className={classes.logo}
                        src={withStaticPrefix("img/CssToAndFromReact-logo.svg")}
                        alt="CSS to and from React logo"
                        width={444}
                        height={168}
                    />
                </header>
                <p>
                    This simple little tool is intended to help translate plain <code>CSS</code> into and back
                    from the{" "}
                    <UnderlinedLink href="https://facebook.github.io/react/tips/inline-styles.html">
                        React in-line style
                    </UnderlinedLink>{" "}
                    specific JSON representation.
                    <br />
                    Making it easy to copy and paste into an inline React component or a CSS stylesheet.
                </p>
                <section className={classes.bodyContainer}>
                    {/* TODO: add link to GitHub repo / npm page */}
                    <CssToAndFromReactConverter />
                </section>
                <p>Hint: Just edit one of the textarea and the other would update accordingly.</p>
                <footer>
                    This tool is originally created by{" "}
                    <UnderlinedLink href="http://staxmanade.com">Staxmanade</UnderlinedLink>, and is forked by{" "}
                    <UnderlinedLink href="https://github.com/htbkoo">htbkoo</UnderlinedLink>.
                    <br />
                    (forked to{" "}
                    <UnderlinedLink href="https://github.com/htbkoo/CssToAndFromReact">
                        htbkoo/CssToAndFromReact
                    </UnderlinedLink>{" "}
                    from{" "}
                    <UnderlinedLink href="https://github.com/staxmanade/CssToReact">
                        staxmanade/CssToReact
                    </UnderlinedLink>
                    )
                </footer>
            </div>
        </Section>
    );
};
