import {Items} from "rss-parser";

export default interface RssFeedsParser {
    parseUrl(url: string): Promise<Items[]>;
}