import { Items } from "rss-parser";

import { SubPagesType } from "@/src/model/SectionMetadata";
import { codePenTitleAsUrl } from "@/src/services/exercise/codePenTitleAsUrl";
import { convertExerciseItemToSectionMetaData } from "@/src/services/exercise/convertExerciseItemToSectionMetaData";

export const convertExerciseItemsToSubPagesMetaData = (data: Array<Items>): SubPagesType =>
    data.reduce((record, item, index) => {
        const url = codePenTitleAsUrl(item.title ?? "");
        record[url] = convertExerciseItemToSectionMetaData(item, index);
        return record;
    }, {});
