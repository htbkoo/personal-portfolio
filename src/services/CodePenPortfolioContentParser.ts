import cheerio from "cheerio";

enum ImageType {
    screenshot = "screenshot"
}

enum LinkType {
    pen = "code", full = "full", details = "details"
}

interface Content {
    img: { [type in ImageType]?: Partial<HTMLImageElement> },
    links: { [type in LinkType]?: string },
    technologies: string[]
}

interface OptionalContent extends Partial<Content> {

}


export default class CodePenPortfolioContentParser {

    constructor() {
    }

    async parseContent(rawContent: string): Promise<OptionalContent> {
        const $ = cheerio.load(rawContent);

        const img = extractImg($);
        const links = extractLinks($);
        const technologies = extractTechnologies($);

        return {img, links, technologies};
    }
}

function extractImg($: any): Content["img"] {
    return {[ImageType.screenshot]: $("img")[0].attribs};
}

function extractLinks($: any): Content["links"] {
    const elements = $("a");
    const distinctLinks: string[] = Array.from(new Set(Array.from(elements).map((element: any) => element.attribs.href)));
    return Object.keys(LinkType).reduce(toLinksObject, {});

    function toLinksObject(obj, part: string) {
        const matchedElement = distinctLinks.find(pathWith(part));
        if (matchedElement) {
            const linkType = LinkType[part];
            obj[linkType] = matchedElement;
        }
        return obj;
    }

    function pathWith(part: string): (path: string) => boolean {
        return path => path.indexOf(`/${part}/`) !== -1;
    }
}

const REGEX_PATTERN = /This Pen uses: (.+)/;

function extractTechnologies($: any): Content["technologies"] {
    const elements = $("small");
    const sentence = elements[0].children[0].data;
    const matchResult = REGEX_PATTERN.exec(sentence);
    if (matchResult && matchResult[1]) {
        return matchResult[1].split(",")
            .map(s => s.trim())
            .filter(s => "and" !== s);
    } else {
        // TODO: add test
        console.debug(`Unable to extract technologies from '${sentence}'`);
        return [];
    }
}
