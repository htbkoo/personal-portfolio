import RssFeedsParser from "./RssFeedsParser";
import { RssParser } from "./RssParser";
import * as rssFeedsJson from "@/src/metadata/portfolios/rssFeeds.json";

export default class LocalCodePenRssFeedsParser implements RssFeedsParser {
    private readonly rssParser: RssParser;
    private rssFeeds: string;

    constructor(rssParser: RssParser, rssFeeds: string = rssFeedsJson.rssFeedsContent) {
        this.rssParser = rssParser;
        this.rssFeeds = rssFeeds;
    }

    async parseUrl() {
        let output;

        try {
            output = await this.rssParser.parseString(this.rssFeeds);
        } catch (e) {
            throw new Error(`Unable to read or parse rssFeedsString due to: '${e}'`);
        }

        if (output && output.items) {
            return output.items;
        } else {
            throw new Error(`Missing 'items' from the parsed output: '${this.rssFeeds}'`);
        }
    }
}
