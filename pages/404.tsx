import { useEffect } from "react";
import { useRouter } from "next/router";

import { tracking } from "@/src/services/analytics";

// Reference: https://github.com/vercel/next.js/discussions/16749#discussioncomment-77509
export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        tracking.common.error.pageNotFound({ url: router.asPath });

        router.replace("/");
    });

    return null;
}
