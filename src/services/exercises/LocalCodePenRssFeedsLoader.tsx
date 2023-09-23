import RssFeedsLoader from "./RssFeedsLoader";
import { RssParser } from "./RssParser";
import { Items } from "rss-parser";
import SectionMetadata from "@/src/model/SectionMetadata";
import EmbeddedPenExercise from "@/src/components/exercises/EmbeddedPenExercise";
import * as React from "react";

export default class LocalCodePenRssFeedsLoader implements RssFeedsLoader {
    private readonly rssParser: RssParser;
    private readonly rssFeeds: string;

    private cache: Array<Items> | undefined;

    constructor(rssParser: RssParser, rssFeeds: string) {
        this.rssParser = rssParser;
        this.rssFeeds = rssFeeds;
        this.cache = undefined;
    }

    async load() {
        if (typeof this.cache === "undefined") {
            try {
                const output = await this.rssParser.parseString(this.rssFeeds);
                if (output?.items) {
                    this.cache = output.items;
                } else {
                    return { error: new Error(`Missing 'items' from the parsed output: '${this.rssFeeds}'`) };
                }
            } catch (e) {
                return { error: new Error(`Unable to read or parse rssFeedsString due to: '${e}'`) };
            }
        }
        return { data: this.cache };
    }

    async loadAsSubPageMetaData(): Promise<ReturnType<NonNullable<SectionMetadata["getSubPages"]>>> {
        const { data, error } = await this.load();
        if (error) {
            return { error };
        }

        // reference: https://stackoverflow.com/a/2970667
        const camelize = (str: string) =>
            str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
                /\s+/.test(match) ? "" : index === 0 ? match.toLowerCase() : match.toUpperCase(),
            );

        const codePenTitleAsUrl = (title: string): string => camelize(title);

        return {
            data: data.reduce((record, { content = "", link = "", title = "" }, index) => {
                const url = codePenTitleAsUrl(title);
                record[url] = {
                    name: title,
                    url: `/${codePenTitleAsUrl(title)}`,
                    component: (
                        <EmbeddedPenExercise
                            key={`${index}_${title}`}
                            content={content}
                            link={link}
                            title={title}
                        />
                    ),
                    icon: <div />,
                };
                return record;
            }, {}),
        };
    }
}
