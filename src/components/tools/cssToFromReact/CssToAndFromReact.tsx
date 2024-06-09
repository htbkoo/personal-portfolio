import * as React from "react";
import { type TextareaHTMLAttributes } from "react";
import Image from "next/image";
import makeStyles from "@mui/styles/makeStyles";
import CircularProgress from "@mui/material/CircularProgress";
import Link, { type LinkProps } from "@mui/material/Link";
import { TextField } from "@mui/material";
import { FilledTextFieldProps } from "@mui/material/TextField/TextField";
import Alert from "@mui/material/Alert";

import Section from "../../common/Section";
import { AsyncStateType } from "@/src/utils/types";
import { withStaticPrefix } from "@/src/utils/assetUtils";

const useStyles = makeStyles(
    (theme) => ({
        container: {},
        header: {
            display: "flex",
            flexDirection: "column",
        },
        logo: {
            maxWidth: "100%",
            height: "auto",
            width: "auto",
        },
        badge: {
            maxWidth: "100%",
            height: "auto",
            width: "auto",
            marginTop: theme.spacing(1),
        },
        bodyContainer: {
            padding: theme.spacing(2),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            minHeight: theme.spacing(45),
            width: "100%",
        },
        textField: {
            margin: theme.spacing(2),
            width: "100%",
            maxWidth: theme.spacing(100),
        },
        errorAlert: {
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

const FilledStyledTextField = (props: Omit<FilledTextFieldProps, "variant">) => {
    const classes = useStyles();

    return (
        <TextField
            className={classes.textField}
            multiline
            minRows={5}
            maxRows={15}
            variant="filled"
            {...props}
        />
    );
};

const CssToAndFromReactConverter = () => {
    const classes = useStyles();

    const [cssText, setCssText] = React.useState("");
    const [transformError, setTransformError] = React.useState<string | null>(null);
    const [reactText, setReactText] = React.useState("");
    const [reverseError, setReverseError] = React.useState<string | null>(null);

    const { loading, data } = useCssToAndFromReact();

    const handleCssChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] = React.useCallback(
        (event) => {
            const newCssText = event.target.value;
            setCssText(newCssText);
            try {
                setReactText(JSON.stringify(data?.transform(newCssText)));
                setTransformError(null);
                setReverseError(null);
            } catch (error) {
                if (typeof error?.toString === "function") {
                    setTransformError(error.toString());
                } else {
                    setTransformError("Unknown error, unable to transform to React in-line style object");
                }
            }
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
                    setTransformError(null);
                    setReverseError(null);
                })
                .catch((error) => {
                    if (typeof error?.toString === "function") {
                        setReverseError(error.toString());
                    } else {
                        setReverseError("Unknown error, unable to transform to CSS");
                    }
                });
        },
        [data],
    );

    if (loading) {
        return <CircularProgress />;
    }

    if (!data) {
        // TODO: log analytics event for error case
        return (
            <Alert variant="filled" severity="error" className={classes.errorAlert}>
                Unable to load the{" "}
                <UnderlinedLink href="https://www.npmjs.com/package/css-to-and-from-react">
                    css-to-and-from-react
                </UnderlinedLink>{" "}
                library, please try again later.
            </Alert>
        );
    }

    return (
        <>
            <FilledStyledTextField
                id="cssTextInput"
                label="CSS"
                onChange={handleCssChange}
                value={cssText}
                error={!!transformError}
                helperText={transformError}
            />
            <FilledStyledTextField
                id="reactTextInput"
                label="React in-line style object"
                onChange={handleReactStyleChange}
                value={reactText}
                error={!!reverseError}
                helperText={reverseError}
            />
        </>
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
                    <Link
                        href={"https://github.com/htbkoo/CssToAndFromReact"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className={classes.logo}
                            src={withStaticPrefix("img/CssToAndFromReact-logo.svg")}
                            alt="CSS to and from React logo"
                            width={444}
                            height={168}
                        />
                    </Link>
                    <Link
                        href={"https://www.npmjs.com/package/css-to-and-from-react"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className={classes.badge}
                            src={"https://img.shields.io/npm/v/css-to-and-from-react.svg"}
                            alt="npm badge of css-to-and-from-react"
                            width={80}
                            height={20}
                        />
                    </Link>
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
                    and published as library to <code>npm</code>:{" "}
                    <UnderlinedLink href="https://www.npmjs.com/package/css-to-and-from-react">
                        css-to-and-from-react
                    </UnderlinedLink>
                    )
                </footer>
            </div>
        </Section>
    );
};
