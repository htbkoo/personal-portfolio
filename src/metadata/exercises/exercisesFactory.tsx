import RssParser from "rss-parser";

import EmbeddedPenExercisesFactory from "@/src/components/exercises/EmbeddedPenExercisesFactory";
import LocalCodePenRssFeedsLoader from "@/src/services/exercises/LocalCodePenRssFeedsLoader";

import rssFeedsJson from "./rssFeeds.json";

export const factory = new EmbeddedPenExercisesFactory(
    new LocalCodePenRssFeedsLoader(new RssParser(), rssFeedsJson.rssFeedsContent),
);
