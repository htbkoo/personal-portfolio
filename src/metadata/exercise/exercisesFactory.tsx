import RssParser from "rss-parser";

import EmbeddedPenExercisesFactory from "@/src/components/exercise/EmbeddedPenExercisesFactory";
import LocalCodePenRssFeedsLoader from "@/src/services/exercise/LocalCodePenRssFeedsLoader";

import rssFeedsJson from "./rssFeeds.json";

export const factory = new EmbeddedPenExercisesFactory(
    new LocalCodePenRssFeedsLoader(new RssParser(), rssFeedsJson.rssFeedsContent),
);
