import {when} from "jest-when";

import LocalCodePenRssFeedsParser from "@/src/services/exercises/LocalCodePenRssFeedsParser";


import sampleParseOutput from "../../resources/services/CodePenRssFeedsParser/sampleParsedOutput.json";
import invalidParsedOutput from "../../resources/services/CodePenRssFeedsParser/invalidParsedOutput.json";


describe("LocalCodePenRssFeedsParser", function () {
    describe("parseUrl", function () {
        const mockContent = "someContent";

        it("should parse rss feeds for url and return parsed object accordingly", async function () {
            // given
            const mockRssParser = createMockRssParser().whenParseString(mockContent).willResolve(sampleParseOutput);

            // when
            const parser = new LocalCodePenRssFeedsParser(mockRssParser, mockContent);
            const items = await parser.parseUrl();

            // then
            return expect(items).toEqual(sampleParseOutput.items);
        });

        it("should throw error if parsed rss feeds is invalid (missing 'items')", async function () {
            // given
            const mockRssParser = createMockRssParser().whenParseString(mockContent).willResolve(invalidParsedOutput);

            // when
            const parser = new LocalCodePenRssFeedsParser(mockRssParser, mockContent);

            // then
            return parser.parseUrl()
                .catch(error => expect(error.message).toEqual("Missing 'items' from the parsed output: 'someContent'"));
        });

        it("should throw error if given content is unparsable", async function () {
            // given
            const mockRssParser = createMockRssParser().whenParseString(mockContent).willReject(new Error("unable to parse content"));

            // when
            const parser = new LocalCodePenRssFeedsParser(mockRssParser, mockContent);

            // then
            return parser.parseUrl()
                .catch(error => expect(error.message).toEqual("Unable to read or parse rssFeedsString due to: 'Error: unable to parse content'"));
        });
    });

    function createMockRssParser() {
        const mockRssParser = {
            parseURL: jest.fn(),
            parseString: jest.fn(),
        };
        return {
            whenParseString(content) {
                return {
                    willResolve(value) {
                        return withMockImplementation("mockResolvedValue", value);
                    },
                    willReject(error) {
                        return withMockImplementation("mockRejectedValue", error);
                    }
                };

                function withMockImplementation(method, arg) {
                    when(mockRssParser.parseString).calledWith(content)[method](arg);
                    return mockRssParser;
                }
            },
        };
    }

});
