import fs from "fs";
import path from "path";
import RssParser from 'rss-parser';

import CodePenRssFeedsParser from "../../services/CodePenRssFeedsParser";

// jest.mock('rss-parser');

describe("CodePenRssFeedsParser", function () {
    it("should parse given RSS feeds", async function () {
        // given
        const parser = new CodePenRssFeedsParser();
        // TODO: extract test resource loading to test util
        const rssFeeds = fs.readFileSync(path.normalize(`${__dirname}/../resources/services/CodePenRssFeedsParser/sampleRssFeeds.xml`), {encoding: "UTF8"});

        // when
        const result = await parser.parse(rssFeeds);

        // then
        expect(result).toEqual({});
    });

    describe("parseUrl", function () {

        beforeEach(() => {
            // Clear all instances and calls to constructor and all methods:
            (RssParser as any).mockClear();
        });

        it("should throw error if trying to parse unreachable url", async function () {
            // given
            const url = "some unreachable url";

            // when
            const parser = new CodePenRssFeedsParser();

            // then
            return parser.parseUrl(url)
                .catch(error => expect({
                    error: "Unable to parse from url: 'some unreachable url'"
                }));
        });
    });

});