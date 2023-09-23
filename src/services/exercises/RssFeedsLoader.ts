import { Items } from "rss-parser";

export default interface RssFeedsLoader {
    load(): Promise<Items[]>;
}
