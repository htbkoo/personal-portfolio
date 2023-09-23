import RssParser from "rss-parser";

import EmbeddedPenExercisesFactory from "@/src/components/exercise/EmbeddedPenExercisesFactory";
import LocalCodePenRssFeedsParser from "@/src/services/exercise/LocalCodePenRssFeedsParser";

import rssFeedsJson from "./rssFeeds.json";

const NO_URL_FOR_LOCAL_CODE_PARSER = "";

export const factory = new EmbeddedPenExercisesFactory(
    new LocalCodePenRssFeedsParser(new RssParser(), rssFeedsJson.rssFeedsContent),
    NO_URL_FOR_LOCAL_CODE_PARSER,
);
