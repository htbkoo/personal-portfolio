import RssFeedsLoader from "./RssFeedsLoader";
import { RssParser } from "./RssParser";

export default class CodePenRssFeedsParser implements RssFeedsLoader {
    private readonly rssParser: RssParser;
    private readonly url: string;

    constructor(rssParser: RssParser, rssFeedUrl: string) {
        this.rssParser = rssParser;
        this.url = rssFeedUrl;
    }

    async load() {
        try {
            const output = await this.rssParser.parseURL(this.url);
            if (output && output.items) {
                return { data: output.items };
            } else {
                return { error: new Error("Missing 'items' from the parsed output") };
            }
        } catch (e) {
            return { error: new Error(`Unable to parse from url: '${this.url}' due to ${e}`) };
        }
    }
}
