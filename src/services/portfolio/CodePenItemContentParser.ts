import cheerio from "cheerio";
import CodePenItemContentExtractor, {Content} from "./CodePenItemContentExtractor";

export default class CodePenItemContentParser {
    private extractors: CodePenItemContentExtractor<keyof Content>[];

    constructor(extractors: CodePenItemContentExtractor<keyof Content>[] = []) {
        this.extractors = extractors;
    }

    async parseContent(rawContent: string): Promise<Partial<Content>> {
        const $ = cheerio.load(rawContent);

        return this.extractors.reduce((obj, extractor) => {
            obj[extractor.key] = extractor.extract($);
            return obj;
        }, {});
    }
}
