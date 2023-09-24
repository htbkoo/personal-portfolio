import { useRouter } from "next/router";
import React, { ReactNode, useCallback, useEffect, useState } from "react";

import styles from "@/styles/Layout.module.css";

type transitionStateType = "fadeIn" | "fadeOut";

// reference: https://dev.to/anxiny/page-transition-effect-in-nextjs-9ch
const TransitionLayout = ({ children }: { children: ReactNode }) => {
    const { asPath } = useRouter();
    const [currAsPath, setCurrAsPath] = useState(asPath);
    const [displayChildren, setDisplayChildren] = useState(children);

    const [transitionStage, setTransitionStage] = useState<transitionStateType>("fadeOut");
    useEffect(() => {
        setTransitionStage("fadeIn");
    }, []);

    useEffect(() => {
        if (asPath !== currAsPath) {
            setTransitionStage("fadeOut");
        }
    }, [asPath, currAsPath]);

    // no need to update because `children` always have different identity even if the component is the same
    // this is based on the assumption the component will be the same as long as the `asPath` is the same
    // noinspection com.haulmont.rcb.ExhaustiveDepsInspection
    const handleTransitionEnd = useCallback(() => {
        if (transitionStage === "fadeOut") {
            setCurrAsPath(asPath);
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
        }
    }, [transitionStage, asPath]);

    return (
        <div onTransitionEnd={handleTransitionEnd} className={`${styles.content} ${styles[transitionStage]}`}>
            {displayChildren}
        </div>
    );
};
export default TransitionLayout;
