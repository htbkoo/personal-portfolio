import RssFeedsParser from "./RssFeedsParser";
import {RssParser} from "./RssParser";

export default class CodePenRssFeedsParser implements RssFeedsParser {
    private readonly rssParser: RssParser;

    constructor(rssParser: RssParser) {
        this.rssParser = rssParser;
    }

    async parseUrl(url: string) {
        return this.rssParser.parseURL(url)
            .then(output => {
                if (output && output.items) {
                    return output.items;
                } else {
                    throw new Error("Missing 'items' from the parsed output");
                }
            })
            .catch(e => {
                throw new Error(`Unable to parse from url: '${url}' due to ${e}`);
            });
    }
}