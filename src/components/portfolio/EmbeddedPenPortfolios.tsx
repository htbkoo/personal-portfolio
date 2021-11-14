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

export default ({ parser, rssFeedUrl }: Props) => {
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState<Items[]>([]);

    useEffect(() => {
        const scriptTagBuilder = new CodepenEmbedScriptTagBuilder()
            .setAsync(true)
            .withOnLoadHandler(() => setLoaded(true))
            .withOnErrorHandler(() => console.error("Failed to load the pen"));

        parser
            .parseUrl(rssFeedUrl)
            .then((items) => setItems(items))
            .then(() => scriptTagBuilder.appendTo(document.body))
            .catch((error) => console.error(error));
    }, [parser, rssFeedUrl]);

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
