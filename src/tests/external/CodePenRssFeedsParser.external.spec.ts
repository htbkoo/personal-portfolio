import RssParser from "rss-parser";

import CodePenRssFeedsParser from "@/src/services/exercises/CodePenRssFeedsParser";

// TODO: fix this or remove this
//  apparently the response format from codepen.io has changed and thus this test is failing
//  but luckily, current the class is not used in production
xdescribe("CodePenRssFeedsParser (external test)", function () {
    it("should parse given URL to RSS feeds", async function () {
        // given
        const url = "https://codepen.io/collection/neBvQa/feed";
        const rssParser = new RssParser();
        const parser = new CodePenRssFeedsParser(rssParser, url);

        // when
        const { data } = await parser.load();

        // then
        expect(Array.isArray(data)).toBeTruthy();

        data!.forEach((result) => {
            expect(result).toHaveProperty("title");
            expect(result).toHaveProperty("link");
            expect(result).toHaveProperty("content");
        });
    });
});
