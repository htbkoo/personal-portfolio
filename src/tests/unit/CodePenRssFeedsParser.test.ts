import {when} from 'jest-when'

import CodePenRssFeedsParser from "../../services/CodePenRssFeedsParser";

describe("CodePenRssFeedsParser", function () {
    describe("parseUrl", function () {
        it("should throw error if trying to parse unreachable url", async function () {
            // given
            const url = "some unreachable url";
            const mockRssParser = {
                parseURL: jest.fn()
            };
            when(mockRssParser.parseURL).calledWith(url).mockRejectedValue(new Error("getaddrinfo ENOTFOUND some unreachable url"));

            // when
            const parser = new CodePenRssFeedsParser(mockRssParser);

            // then
            return parser.parseUrl(url)
                .catch(error => expect(error.message).toEqual("Unable to parse from url: 'some unreachable url due to Error: getaddrinfo ENOTFOUND some unreachable url'"));
        });
    });

});