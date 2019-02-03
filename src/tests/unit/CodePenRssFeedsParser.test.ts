import {when} from "jest-when";
import sampleParseOutput from "../resources/services/CodePenRssFeedsParser/sampleParsedOutput.json";

import CodePenRssFeedsParser from "../../services/CodePenRssFeedsParser";

describe("CodePenRssFeedsParser", function () {
    describe("parseUrl", function () {
        it("should parse rss feeds for url and return parsed object accordingly", async function () {
            // given
            const url = "https://codepen.io/collection/neBvQa/feed";
            const mockRssParser = createMockRssParser().whenParseUrl(url).willResolve(sampleParseOutput);

            // when
            const parser = new CodePenRssFeedsParser(mockRssParser);
            const items = await parser.parseUrl(url);

            // then
            expect(items).toBeInstanceOf(Array);
            items.forEach(item => {
                expect(item).toHaveProperty("title");
                expect(item).toHaveProperty("link");
                expect(item).toHaveProperty("content");
            });
        });

        it("should throw error if trying to parse unreachable url", async function () {
            // given
            const url = "some unreachable url";
            const mockRssParser = createMockRssParser().whenParseUrl(url).willReject(new Error("getaddrinfo ENOTFOUND some unreachable url"));

            // when
            const parser = new CodePenRssFeedsParser(mockRssParser);

            // then
            return parser.parseUrl(url)
                .catch(error => expect(error.message).toEqual("Unable to parse from url: 'some unreachable url due to Error: getaddrinfo ENOTFOUND some unreachable url'"));
        });
    });

    function createMockRssParser() {
        const mockRssParser = {
            parseURL: jest.fn()
        };
        return {
            whenParseUrl(url) {
                return {
                    willResolve(value) {
                        when(mockRssParser.parseURL).calledWith(url).mockResolvedValue(value);
                        return mockRssParser;
                    },
                    willReject(error) {
                        when(mockRssParser.parseURL).calledWith(url).mockRejectedValue(error);
                        return mockRssParser;
                    }
                }
            },
        };
    }

});