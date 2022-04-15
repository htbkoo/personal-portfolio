import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

import styles from "@/styles/Layout.module.css";

type transitionStateType = "fadeIn" | "fadeOut";

// reference: https://dev.to/anxiny/page-transition-effect-in-nextjs-9ch
const TransitionLayout = ({ children }: { children: ReactNode }) => {
    const { pathname } = useRouter();
    const [currPathname, setCurrPathname] = useState(pathname);
    const [displayChildren, setDisplayChildren] = useState(children);

    const [transitionStage, setTransitionStage] = useState<transitionStateType>("fadeOut");
    useEffect(() => {
        setTransitionStage("fadeIn");
    }, []);

    useEffect(() => {
        if (pathname !== currPathname) {
            setTransitionStage("fadeOut");
        } else {
            setDisplayChildren(children);
        }
    }, [pathname, children]);

    return (
        <div
            onTransitionEnd={() => {
                if (transitionStage === "fadeOut") {
                    setCurrPathname(pathname);
                    setDisplayChildren(children);
                    setTransitionStage("fadeIn");
                }
            }}
            className={`${styles.content} ${styles[transitionStage]}`}>
            {displayChildren}
        </div>
    );
};
export default TransitionLayout;
