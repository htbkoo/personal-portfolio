import type { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";

type ResponseData = {
    message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    console.log(`upload: ${req.method}`);

    if (req.method === "POST") {
        console.log(req.body);

        res.status(StatusCodes.OK).json({ message: "Hello from Next.js!" });
    } else {
        res.status(StatusCodes.METHOD_NOT_ALLOWED).send({ message: "method not allowed" });
    }
}
