import * as React from "react";
import { useEffect, useState } from "react";

import { Items } from "rss-parser";
import { CodepenEmbedScriptTagBuilder } from "ts-react-codepen-embed";

import RssFeedsLoader from "@/src/services/exercises/RssFeedsLoader";
import EmbeddedPenExercise from "./EmbeddedPenExercise";

interface Props {
    loader: RssFeedsLoader;
}

const EmbeddedPenExercises = ({ loader }: Props) => {
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState<Items[]>([]);

    useEffect(() => {
        const scriptTagBuilder = new CodepenEmbedScriptTagBuilder()
            .setAsync(true)
            .withOnLoadHandler(() => setLoaded(true))
            .withOnErrorHandler(() => console.error("Failed to load the pen"));

        loader
            .load()
            .then((items) => setItems(items))
            .then(() => scriptTagBuilder.appendTo(document.body))
            .catch((error) => console.error(error));
    }, [loader]);

    return (
        <div>
            {items.map(({ content = "", link = "", title = "" }: Items, index: number) => (
                <EmbeddedPenExercise
                    key={`${index}_${title}`}
                    content={content}
                    link={link}
                    title={title}
                    isScriptLoaded={loaded}
                />
            ))}
        </div>
    );
};
export default EmbeddedPenExercises;
