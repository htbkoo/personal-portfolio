import cheerio from "cheerio";
import CodePenItemContentExtractor, {Content} from "./CodePenItemContentExtractor";

export default class CodePenItemContentParser {
    private readonly $: CheerioStatic;

    private constructor($: CheerioStatic) {
        this.$ = $;
    }

    public static newParser(rawContent: string): CodePenItemContentParser {
        const $ = cheerio.load(rawContent);
        return new CodePenItemContentParser($);
    }

    parseContent<T extends keyof Content>(extractor: CodePenItemContentExtractor<T>): Content[T] {
        return extractor.extract(this.$);
    }
}
