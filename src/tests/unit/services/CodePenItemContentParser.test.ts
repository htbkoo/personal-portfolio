import {when} from "jest-when";

import CodePenItemContentParser from "@/src/services/exercises/CodePenItemContentParser";
import * as extractors from "@/src/services/exercises/CodePenItemContentExtractor";

describe("CodePenItemContentParser", function () {
    describe("parseContent", function () {
        [
            {
                extractorName: "credentialsExtractor",
                expected: {
                    user: "htbkoo",
                    hash: "MJWmGz"
                }
            },
            {
                extractorName: "imgExtractor",
                expected: {
                    screenshot: {
                        src: "https://codepen.io/htbkoo/pen/MJWmGz/image/large.png",
                        width: "1024",
                        height: "600"
                    }
                }
            },
            {
                extractorName: "linksExtractor",
                expected: {
                    code: "https://codepen.io/htbkoo/pen/MJWmGz",
                    full: "https://codepen.io/htbkoo/full/MJWmGz",
                    details: "https://codepen.io/htbkoo/details/MJWmGz",
                }
            },
            {
                extractorName: "technologiesExtractor",
                expected: ["HTML", "CSS", "JavaScript"]
            },
        ].forEach(({extractorName, expected,}) =>
            it(`should, with "${extractorName}", parse content retrieved from rss feed`, function () {
                // given
                /*
                <p>
                <a href="https://codepen.io/htbkoo/pen/MJWmGz"><img width="1024" height="600" src="https://codepen.io/htbkoo/pen/MJWmGz/image/large.png"></a>
                </p>
                <p>
                <a href="https://codepen.io/htbkoo/pen/MJWmGz">See the Code</a> -
                <a href="https://codepen.io/htbkoo/full/MJWmGz">See it Full Page</a> -
                <a href="https://codepen.io/htbkoo/details/MJWmGz">See Details</a>
                </p>
                <p>
                </p>
                <p><small>This Pen uses: HTML, CSS, JavaScript, and </small></p>
                * */
                const rawContent = "\n    \n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/MJWmGz\"><img width=\"1024\" height=\"600\" src=\"https://codepen.io/htbkoo/pen/MJWmGz/image/large.png\"></a>\n    </p>\n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/MJWmGz\">See the Code</a> -\n      <a href=\"https://codepen.io/htbkoo/full/MJWmGz\">See it Full Page</a> -\n      <a href=\"https://codepen.io/htbkoo/details/MJWmGz\">See Details</a>\n    </p>\n    <p>\n      \n    </p>\n    <p><small>This Pen uses: HTML, CSS, JavaScript, and </small></p>\n    \n  ";
                const parser = CodePenItemContentParser.newParser(rawContent);

                // when
                const extractor = extractors[extractorName];
                const extracted = parser.parseContent(extractor);

                // then
                expect(extracted).toEqual(expected);
            })
        );
    });
});
