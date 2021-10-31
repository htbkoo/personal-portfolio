import * as React from "react";
import { useEffect, useState } from "react";

import { Items } from "rss-parser";
import { CodepenEmbedScriptTagBuilder } from "ts-react-codepen-embed";

import RssFeedsParser from "../../services/portfolio/RssFeedsParser";
import EmbeddedPenPortfolio from "./EmbeddedPenPortfolio";

interface Props {
    parser: RssFeedsParser;
    rssFeedUrl: string;
}

interface State {
    items: Items[];
    loaded: boolean;
    error?: string;
}

export default ({ parser, rssFeedUrl }: Props) => {
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState<Items[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);

    const scriptTagBuilder = new CodepenEmbedScriptTagBuilder()
        .setAsync(true)
        .withOnLoadHandler(() => setLoaded(true))
        .withOnErrorHandler(() => setError("Failed to load the pen"));

    useEffect(() => {
        parser
            .parseUrl(rssFeedUrl)
            .then((items) => setItems(items))
            .then(() => scriptTagBuilder.appendTo(document.body))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            {items.map(({ content = "", link = "", title = "" }: Items, index: number) => (
                <EmbeddedPenPortfolio
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
