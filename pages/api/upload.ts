import type { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import formidable, { Fields, Files } from "formidable";

type ResponseData = {
    message: string;
};

const form = formidable({
    uploadDir: "./",
    keepExtensions: true,
});

const parseForm = async <FieldKey extends string, FileKey extends string>(req: NextApiRequest) =>
    new Promise<{ fields: Fields<FieldKey>; files: Files<FileKey> }>((resolve, reject) => {
        // reference: https://gist.github.com/agmm/da47a027f3d73870020a5102388dd820
        form.parse<FieldKey, FileKey>(req, (err, fields, files) => {
            if (err) {
                return reject(err);
            } else {
                return resolve({ fields, files });
            }
        });
    });

// TODO: extract this to env var
const APP_SERVER_HOST_NAME = "http://localhost:8000";

const buildAppServerApiUrl = (path: string) => `${APP_SERVER_HOST_NAME}${path}`;
// const api = async ({ path, method, options }: { path: string; method: Method; options?: FetchOptions }) => {
//     return fetch(buildAppServerApiUrl(path), { ...options, method });
// };
//
// const apiPost = async ({ path, options }: { path: string; options?: Omit<FetchOptions, "method"> }) => {
//     return api({ path, options, method: "POST" });
// };

const forwardRequestToAppServer = async ({ path, req }: { path: string; req: NextApiRequest }) => {
    const url = buildAppServerApiUrl(path);

    console.log(`url: ${url}`);

    return fetch(url, {
        body: req.body,
        headers: req.headers as any,
        method: "POST",
    });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    try {
        console.log(`upload: ${req.method}`);

        if (req.method === "POST") {
            console.log(`header: ${req.headers} ${JSON.stringify(req.headers)}`);

            try {
                // const { fields, files } = await parseForm(req);

                console.log(`parse successful`);

                // TODO: refactor this :(
                try {
                    const appServerResponse = await forwardRequestToAppServer({
                        req,
                        path: "/api/upload/file/",
                    });
                    const backendMessage = JSON.stringify(await appServerResponse.json());

                    console.log(`message from appServer: ${backendMessage}`);

                    // const numFiles = Object.keys(files).length;
                    // const resMessage = `${numFiles} Files uploaded - response from AppServer: ${backendMessage}`;
                    const resMessage = `Files uploaded - response from AppServer: ${backendMessage}`;
                    res.status(StatusCodes.OK).json({
                        message: resMessage,
                    });
                } catch (appServerError) {
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                        message: `Unable to upload files: ${appServerError}}`,
                    });
                }
            } catch (parseError) {
                res.status(StatusCodes.BAD_REQUEST).json({ message: "Unable to upload files" });
            }
        } else {
            res.status(StatusCodes.METHOD_NOT_ALLOWED).send({ message: "method not allowed" });
        }
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Internal Server Error` });
    }
}

// reference: https://github.com/vercel/next.js/discussions/20071#discussioncomment-188579
export const config = {
    api: {
        bodyParser: true,
    },
};
