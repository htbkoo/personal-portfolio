import RssParser from "rss-parser";

const rssParser = new RssParser();

export default class CodePenRssFeedsParser {

    async parse(rssFeeds: string) {
        const output = await rssParser.parseString(rssFeeds);
        return output;
    }

    async parseUrl(url: string){
        const output = await rssParser.parseURL(url);
        if (output.items){
            return output.items ;
        }else{
            throw new Error(`Unable t`)
        }
    }
}