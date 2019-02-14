import cheerio from "cheerio";
import CodePenItemContentExtractor, {Content} from "./CodePenItemContentExtractor";

type Extractors = CodePenItemContentExtractor<keyof Content>[];

export default class CodePenItemContentParser {
    private extractors: Extractors;

    private constructor(extractors: Extractors) {
        this.extractors = extractors;
    }

    public static newParser(extractors: Extractors): CodePenItemContentParser {
        return new CodePenItemContentParser(extractors);
    }

    async parseContent(rawContent: string): Promise<Partial<Content>> {
        const $ = cheerio.load(rawContent);

        return this.extractors.reduce((obj, extractor) => {
            obj[extractor.key] = extractor.extract($);
            return obj;
        }, {});
    }
}
