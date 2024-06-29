import type { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import formidable from "formidable";

type ResponseData = {
    message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    try {
        console.log(`upload: ${req.method}`);

        if (req.method === "POST") {
            console.log(`header: ${req.headers} ${JSON.stringify(req.headers)}`);

            // reference: https://gist.github.com/agmm/da47a027f3d73870020a5102388dd820
            // const form = new formidable.IncomingForm();
            // form.uploadDir = "./";
            // form.keepExtensions = true;
            const form = formidable({
                uploadDir: "./",
                keepExtensions: true,
            });
            form.parse(req, (err, fields, files) => {
                // console.log(err, fields, files);
                if (err) {
                    res.status(StatusCodes.BAD_REQUEST).json({ message: "Unable to upload files" });
                } else {
                    res.status(StatusCodes.OK).json({ message: `${Object.keys(files).length} Files uploaded` });
                }
            });
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
