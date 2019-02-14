import cheerio from "cheerio";
import CodePenItemContentExtractor, {Content} from "./CodePenItemContentExtractor";

type Extractors = CodePenItemContentExtractor<keyof Content>[];

export default class CodePenItemContentParser {
    private readonly $: CheerioStatic;

    private constructor($: CheerioStatic) {
        this.$ = $;
    }

    public static newParser(rawContent: string): CodePenItemContentParser {
        const $ = cheerio.load(rawContent);
        return new CodePenItemContentParser($);
    }

    async parseContent(extractors: Extractors): Promise<Partial<Content>> {
        return extractors.reduce((obj, extractor) => {
            obj[extractor.key] = extractor.extract(this.$);
            return obj;
        }, {});
    }
}
