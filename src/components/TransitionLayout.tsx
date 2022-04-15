import styles from "@/styles/Layout.module.css";

import React, { ReactNode, useEffect, useState } from "react";

type transitionStateType = "fadeIn" | "fadeOut";

// reference: https://dev.to/anxiny/page-transition-effect-in-nextjs-9ch
const TransitionLayout = ({ children }: { children: ReactNode }) => {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState<transitionStateType>("fadeOut");
    useEffect(() => {
        setTransitionStage("fadeIn");
    }, []);

    useEffect(() => {
        if (children !== displayChildren) setTransitionStage("fadeOut");
    }, [children, setDisplayChildren, displayChildren]);

    return (
        <div
            onTransitionEnd={() => {
                if (transitionStage === "fadeOut") {
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
