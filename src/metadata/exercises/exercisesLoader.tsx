import RssParser from "rss-parser";

import LocalCodePenRssFeedsLoader from "@/src/services/exercises/LocalCodePenRssFeedsLoader";

import rssFeedsJson from "./rssFeeds.json";

export const exercisesLoader = new LocalCodePenRssFeedsLoader(new RssParser(), rssFeedsJson.rssFeedsContent);
