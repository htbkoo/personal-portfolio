import { Items } from "rss-parser";

import RssFeedsLoader from "./RssFeedsLoader";
import { RssParser } from "./RssParser";

export default class LocalCodePenRssFeedsLoader implements RssFeedsLoader {
    private readonly rssParser: RssParser;
    private readonly rssFeeds: string;

    private cache: Array<Items> | undefined;

    constructor(rssParser: RssParser, rssFeeds: string) {
        this.rssParser = rssParser;
        this.rssFeeds = rssFeeds;
        this.cache = undefined;
    }

    async load() {
        if (typeof this.cache === "undefined") {
            try {
                const output = await this.rssParser.parseString(this.rssFeeds);
                if (output?.items) {
                    this.cache = output.items;
                } else {
                    return { error: new Error(`Missing 'items' from the parsed output: '${this.rssFeeds}'`) };
                }
            } catch (e) {
                return { error: new Error(`Unable to read or parse rssFeedsString due to: '${e}'`) };
            }
        }
        return { data: this.cache };
    }
}
