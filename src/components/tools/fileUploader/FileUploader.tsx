import * as React from "react";
import { useCallback, useRef } from "react";
import makeStyles from "@mui/styles/makeStyles";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

import Section from "../../common/Section";

const useStyles = makeStyles(
    (theme) => ({
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
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
            marginTop: theme.spacing(4),
            width: "100%",
            maxWidth: theme.spacing(100),
        },
        errorAlert: {
            width: "100%",
            maxWidth: theme.spacing(100),
        },
        textarea: {
            // reference: https://stackoverflow.com/a/64596414
            resize: "vertical",
        },
        formatCheckboxContainer: {
            width: "100%",
            maxWidth: theme.spacing(100),
            alignItems: "end",
        },
    }),
    { name: "MuiMyEmbeddedPenPortfolio" },
);

const SERVER_HOST = "";

type FetchOptions = Parameters<typeof fetch>[1];
type Method = NonNullable<FetchOptions>["method"];

const buildApiUrl = (path: string) => `${SERVER_HOST}${path}`;
const api = async ({ path, method, options }: { path: string; method: Method; options?: FetchOptions }) => {
    return fetch(buildApiUrl(path), { ...options, method });
};

const apiPost = async ({ path, options }: { path: string; options?: Omit<FetchOptions, "method"> }) => {
    return api({ path, options, method: "POST" });
};

export const FileUploader = () => {
    const classes = useStyles();

    const fileRef = useRef<HTMLInputElement>();

    const handleSubmit = useCallback(async () => {
        const fileInputEl = fileRef.current;
        if (fileInputEl && fileInputEl.files) {
            // console.log(`has fileInputEl:`)
            // console.log(fileInputEl)
            // console.log(fileInputEl.files)

            const files = Array.from(fileInputEl.files);

            // reference: https://medium.com/@mohammedaziz_14594/sending-files-to-the-server-using-formdata-in-javascript-c2a4ed8fc85f
            const formData = new FormData();
            files.forEach((file, i) => formData.append(`file ${i}`, file));

            const response = await apiPost({
                path: "/api/upload",
                options: {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    body: formData,
                },
            });
            const j = await response.json();
            console.log(j);

            // [...fileInputEl.files]

            // for (const file of fileInputEl.files) {
            //     console.log(file)
            // }
        }
    }, []);

    return (
        <Section
            id="fileUploader"
            hasDivider={true}
            title="File uploader"
            subtitle="To experiement about the file upload API"
            isBodyOpaque={false}
        >
            <div className={classes.container}>
                <Input type="file" inputRef={fileRef} />
                <Button variant="contained" type="submit" onClick={handleSubmit}>
                    Upload
                </Button>
            </div>
        </Section>
    );
};
