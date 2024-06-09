import * as React from "react";
import { type TextareaHTMLAttributes } from "react";
import makeStyles from "@mui/styles/makeStyles";
import CircularProgress from "@mui/material/CircularProgress";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

import Section from "../../common/Section";
import { AsyncStateType } from "@/src/utils/types";

const useStyles = makeStyles(
    (theme) => ({
        container: {
            marginTop: theme.spacing(4),
        },
        loadingSpinner: {
            marginTop: theme.spacing(2),
        },
        converterContainer: {
            display: "flex",
            flexDirection: "column",
            padding: theme.spacing(2),
        },
    }),
    { name: "MuiMyEmbeddedPenPortfolio" },
);

const useImport = <T,>(modulePath: string) => {
    const [state, setState] = React.useState<AsyncStateType<T>>({
        loading: true,
    });

    React.useEffect(() => {
        console.log(`DEBUGDEBUG -- importing in useEffect in useImport`)

        import(modulePath)
            .then((module) => {
                console.log(`DEBUGDEBUG -- loaded in useEffect in useImport`)

                setState({
                    loading: false,
                    data: module,
                });
            })
            .catch((error) => {
                console.log(`DEBUGDEBUG -- error in useEffect in useImport ${JSON.stringify(error)}`);

                setState({
                    loading: false,
                    error,
                });
            });
    }, [modulePath]);

    return { ...state };
};

type CssToAndFromReactModuleType = typeof import("css-to-and-from-react");

const CssToAndFromReactConverter = () => {
    const classes = useStyles();

    const [cssText, setCssText] = React.useState("");
    const [reactText, setReactText] = React.useState("");

    const { loading, data } = useImport<CssToAndFromReactModuleType>("css-to-and-from-react");
    // const { loading, data } = useImport("../../common/Section");

    import("react").then(() => {
        console.log(`DEBUGDEBUG -- loaded css-to-and-from-react`)
    }).catch(error=>{
        console.warn(`DEBUGDEBUG -- ${error}`)

    })

    const handleCssChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] = React.useCallback(
        (event) => {
            const newCssText = event.target.value;
            setCssText(newCssText);
            // @ts-ignore
            setReactText(data?.transform(newCssText));
        },
        [data],
    );
    const handleReactStyleChange: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"] = React.useCallback(
        (event) => {
            const newReactText = event.target.value;
            setReactText(newReactText);
            // @ts-ignore
            data?.promiseReverse(newReactText).then((result) => {
                setCssText(result.css);
            }); // TODO: handle error
        },
        [data],
    );

    if (loading) {
        return <CircularProgress className={classes.loadingSpinner} />;
    }

    if (!data) {
        // TODO: show error message
        return null;
    }

    return (
        <div className={classes.converterContainer}>
            <TextareaAutosize onChange={handleCssChange} value={reactText} />
            <TextareaAutosize onChange={handleReactStyleChange} value={reactText} />
        </div>
    );
};

export const CssToAndFromReact = () => {
    const classes = useStyles();

    return (
        <Section
            id="cssToAndFromReact"
            hasDivider={true}
            title="A small tool to convert between CSS and React styles">
            <div className={classes.container}>
                {/* TODO: add link to GitHub repo / npm page */}
                <CssToAndFromReactConverter />
            </div>
        </Section>
    );
};
