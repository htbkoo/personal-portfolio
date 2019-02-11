import {when} from "jest-when";

import CodePenPortfolioContentParser from "../../../services/CodePenPortfolioContentParser";

describe("CodePenPortfolioContentParser", function () {
    describe("parseContent", function () {
        it("should parse content retrieved from rss feed", async function () {
            // given
            const parser = new CodePenPortfolioContentParser();
            const rawContent = "\n    \n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/MJWmGz\"><img width=\"1024\" height=\"600\" src=\"https://codepen.io/htbkoo/pen/MJWmGz/image/large.png\"></a>\n    </p>\n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/MJWmGz\">See the Code</a> -\n      <a href=\"https://codepen.io/htbkoo/full/MJWmGz\">See it Full Page</a> -\n      <a href=\"https://codepen.io/htbkoo/details/MJWmGz\">See Details</a>\n    </p>\n    <p>\n      \n    </p>\n    <p><small>This Pen uses: HTML, CSS, JavaScript, and </small></p>\n    \n  ";

            // when
            const content = await parser.parseContent(rawContent);

            // then
            expect(content.img).toEqual({
                screenshot: {
                    src: "https://codepen.io/htbkoo/pen/MJWmGz/image/large.png",
                    width: "1024",
                    height: "600"
                }
            });
            expect(content.links).toEqual({
                code: "https://codepen.io/htbkoo/pen/MJWmGz",
                full: "https://codepen.io/htbkoo/full/MJWmGz",
                details: "https://codepen.io/htbkoo/details/MJWmGz",
            });
            expect(content.technologies).toEqual(["HTML", "CSS", "JavaScript"]);
        });
    });
});