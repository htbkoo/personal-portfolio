import { useEffect, useState } from "react";
import { CodepenEmbedScriptTagBuilder } from "ts-react-codepen-embed";

const SCRIPT_TAG_ELEMENT_ID = "HeyPortfolio--Exercise--CodepenEmbedScript";

export const useCodepenEmbedScriptTag = () => {
    const SCRIPT_TAG_PARENT = document.body;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        new CodepenEmbedScriptTagBuilder()
            .setAsync(true)
            .withOnLoadHandler(() => {
                setLoaded(true);
            })
            .withOnErrorHandler(() => console.error("Failed to load the pen"))
            .appendTo(SCRIPT_TAG_PARENT, () => {
                const el = document.createElement("script");
                el.id = SCRIPT_TAG_ELEMENT_ID;
                return el;
            });

        return () => {
            SCRIPT_TAG_PARENT.querySelector(`#${SCRIPT_TAG_ELEMENT_ID}`)?.remove();
        };
    }, [SCRIPT_TAG_PARENT]);

    return { loaded };
};
