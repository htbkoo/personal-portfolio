import CodePenRssFeedsParser from "../../services/CodePenRssFeedsParser";

describe("CodePenRssFeedsParser (external test)", function () {
    it("should parse given URL to RSS feeds", async function () {
        // given
        const url = "https://codepen.io/collection/neBvQa/feed";
        const parser = new CodePenRssFeedsParser();

        // when
        const results = await parser.parseUrl(url);

        // then
        expect(results).toBeInstanceOf(Array);

        results.forEach(result => {
            expect(result).toHaveProperty("title");
            expect(result).toHaveProperty("link");
            expect(result).toHaveProperty("content");
        })
    });
});