import {URL} from "url";

enum ImageType {
    screenshot = "screenshot"
}

enum LinkType {
    pen = "code", full = "full", details = "details"
}

export interface Content {
    img: { [type in ImageType]?: Partial<HTMLImageElement> },
    links: { [type in LinkType]?: string },
    technologies: string[],
    credentials: {
        user: string,
        hash: string
    }
}

export default interface CodePenItemContentExtractor<ContentType extends keyof Content> {
    key: string,
    extract: ($) => Content[ContentType]
}

const imgExtractor: CodePenItemContentExtractor<"img"> = {
    key: "img",
    extract: $ => ({[ImageType.screenshot]: $("img")[0].attribs})
};

const linksExtractor: CodePenItemContentExtractor<"links"> = {
    key: "links",
    extract: $ => {
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
};

const REGEX_PATTERN = /This Pen uses: (.+)/;

const technologiesExtractor: CodePenItemContentExtractor<"technologies"> = {
    key: "technologies",
    extract: $ => {
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
};

const credentialsExtractor: CodePenItemContentExtractor<"credentials"> = {
    key: "credentials",
    extract: $ => {
        const elements = $("a");
        const firstLink = elements[0];
        const penUrl = new URL(firstLink.attribs.href);
        const pathname = penUrl.pathname;
        const parts = pathname.split("/");

        return {
            user: parts[1],
            hash: parts[3],
        };
    }
};

export {imgExtractor, linksExtractor, technologiesExtractor, credentialsExtractor};