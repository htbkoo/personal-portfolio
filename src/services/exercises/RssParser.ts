import {Output} from "rss-parser";

export interface RssParser {
    parseString(xml: string, callback?: (err: Error, feed: Output) => void): Promise<Output>;

    parseURL(feedUrl: string, callback?: (err: Error, feed: Output) => void, redirectCount?: number): Promise<Output>;
}