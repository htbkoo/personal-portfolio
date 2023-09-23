import { Items } from "rss-parser";

export default interface RssFeedsLoader {
    load(): Promise<{
        data?: Items[];
        error?: any;
    }>;
}
