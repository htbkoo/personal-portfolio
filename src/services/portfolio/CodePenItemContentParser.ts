import cheerio from "cheerio";
import CodePenItemContentExtractor, {Content} from "./CodePenItemContentExtractor";

type Extractor = CodePenItemContentExtractor<keyof Content>;

export default class CodePenItemContentParser {
    private readonly $: CheerioStatic;

    private constructor($: CheerioStatic) {
        this.$ = $;
    }

    public static newParser(rawContent: string): CodePenItemContentParser {
        const $ = cheerio.load(rawContent);
        return new CodePenItemContentParser($);
    }

    async parseContent(extractor: Extractor): Promise<Content[keyof Content]> {
        return extractor.extract(this.$);
    }
}
