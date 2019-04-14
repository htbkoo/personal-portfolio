import RssFeedsParser from "./RssFeedsParser";
import {RssParser} from "./RssParser";

import fs from "fs";
import path from "path";

function tryReadLocalRssFeedFile(): string {
    try {
        const filePath = path.normalize("../../metadata/portfolios/feed.xml");
        return fs.readFileSync(filePath, 'utf8');
    } catch (e) {
        console.warn("Unable to read from the local rssFeeds file, portfolio section will be rendered as empty");
        return "";
    }
}

const rssFeedsFile = tryReadLocalRssFeedFile();

export default class CodePenRssFeedsParser implements RssFeedsParser {
    private readonly rssParser: RssParser;
    private readonly asyncReadFeeds: () => Promise<string>;

    constructor(rssParser: RssParser, readFeeds: () => Promise<string> = readLocalRssFeeds) {
        this.rssParser = rssParser;
        this.asyncReadFeeds = readFeeds;
    }

    async parseUrl() {
        let output;

        try {
            const rssFeedsString = await this.asyncReadFeeds();
            console.log(`read rssFeeds as string: ${rssFeedsString}`);

            output = await this.rssParser.parseString(rssFeedsString);
        } catch (e) {
            throw new Error(`Unable to read or parse rssFeedsString due to ${e}`);
        }

        if (output && output.items) {
            return output.items;
        } else {
            throw new Error(`Missing 'items' from the parsed output: ${output}`);
        }
    }
}

async function readLocalRssFeeds(): Promise<string> {
    return rssFeedsFile;
}
