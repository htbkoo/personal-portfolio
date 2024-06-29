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

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    try {
        console.log(`upload: ${req.method}`);

        if (req.method === "POST") {
            console.log(`header: ${req.headers} ${JSON.stringify(req.headers)}`);

            try {
                const { fields, files } = await parseForm(req);
                res.status(StatusCodes.OK).json({ message: `${Object.keys(files).length} Files uploaded` });
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
        bodyParser: false,
    },
};
