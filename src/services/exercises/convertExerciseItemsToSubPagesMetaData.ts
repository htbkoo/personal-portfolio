import { Items } from "rss-parser";

import { SubPagesType } from "@/src/model/SectionMetadata";

import { codePenTitleAsUrl } from "./codePenTitleAsUrl";
import { convertExerciseItemToSectionMetaData } from "./convertExerciseItemToSectionMetaData";

export const convertExerciseItemsToSubPagesMetaData = (data: Array<Items>): SubPagesType =>
    data.reduce((record, item, index) => {
        const url = codePenTitleAsUrl(item.title ?? "");
        record[url] = convertExerciseItemToSectionMetaData(item, index);
        return record;
    }, {});
