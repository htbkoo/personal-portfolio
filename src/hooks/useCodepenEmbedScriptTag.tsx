// TODO: improve this
// We only want to append the script once globally
import { useEffect } from "react";
import { CodepenEmbedScriptTagBuilder } from "ts-react-codepen-embed";

let isScriptAdded = false;
let isAddingScript = false;

export const useCodepenEmbedScriptTag = () => {

    useEffect(() => {
        if (!isScriptAdded && !isAddingScript) {
            isAddingScript = true;
            new CodepenEmbedScriptTagBuilder()
                .setAsync(true)
                .withOnLoadHandler(() => {
                    isAddingScript = false;
                    isScriptAdded = true;
                })
                .withOnErrorHandler(() => console.error("Failed to load the pen"))
                .appendTo(document.body);
        }
    }, []);

    return { loading: isAddingScript, loaded: isScriptAdded };
};
