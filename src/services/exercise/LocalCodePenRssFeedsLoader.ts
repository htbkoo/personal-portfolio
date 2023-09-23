import RssFeedsLoader from "./RssFeedsLoader";
import { RssParser } from "./RssParser";
import { Items } from "rss-parser";

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
            const output = await this.parseRssFeeds();
            if (output?.items) {
                this.cache = output.items;
            } else {
                throw new Error(`Missing 'items' from the parsed output: '${this.rssFeeds}'`);
            }
        }
        return this.cache;
    }

    private async parseRssFeeds() {
        try {
            return await this.rssParser.parseString(this.rssFeeds);
        } catch (e) {
            throw new Error(`Unable to read or parse rssFeedsString due to: '${e}'`);
        }
    }
}
