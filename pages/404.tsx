import { useEffect } from "react";
import { useRouter } from "next/router";

// Reference: https://github.com/vercel/next.js/discussions/16749#discussioncomment-77509
export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/");
    });

    return null;
}
