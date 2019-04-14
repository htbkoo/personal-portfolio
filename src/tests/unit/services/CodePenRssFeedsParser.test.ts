import {when} from "jest-when";

import CodePenRssFeedsParser from "../../../services/portfolio/CodePenRssFeedsParser";

import sampleParseOutput from "../../resources/services/CodePenRssFeedsParser/sampleParsedOutput.json";
import invalidParsedOutput from "../../resources/services/CodePenRssFeedsParser/invalidParsedOutput.json";

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
            return expect(items).toEqual(sampleParseOutput.items);
        });

        it("should throw error if parsed rss feeds is invalid (missing 'items')", async function () {
            // given
            const url = "https://codepen.io/collection/invalid/feed";
            const mockRssParser = createMockRssParser().whenParseUrl(url).willResolve(invalidParsedOutput);

            // when
            const parser = new CodePenRssFeedsParser(mockRssParser);

            // then
            return parser.parseUrl(url)
                .catch(error => expect(error.message).toEqual("Unable to parse from url: 'https://codepen.io/collection/invalid/feed' due to Error: Missing 'items' from the parsed output"));
        });

        it("should throw error if trying to parse unreachable url", async function () {
            // given
            const url = "some unreachable url";
            const mockRssParser = createMockRssParser().whenParseUrl(url).willReject(new Error("getaddrinfo ENOTFOUND some unreachable url"));

            // when
            const parser = new CodePenRssFeedsParser(mockRssParser);

            // then
            return parser.parseUrl(url)
                .catch(error => expect(error.message).toEqual("Unable to parse from url: 'some unreachable url' due to Error: getaddrinfo ENOTFOUND some unreachable url"));
        });
    });

    function createMockRssParser() {
        const mockRssParser = {
            parseURL: jest.fn(),
            parseString: jest.fn(),
        };
        return {
            whenParseUrl(url) {
                return {
                    willResolve(value) {
                        return withMockImplementation("mockResolvedValue", value);
                    },
                    willReject(error) {
                        return withMockImplementation("mockRejectedValue", error);
                    }
                };

                function withMockImplementation(method, arg) {
                    when(mockRssParser.parseURL).calledWith(url)[method](arg);
                    return mockRssParser;
                }
            },
        };
    }

});