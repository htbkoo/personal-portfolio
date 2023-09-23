import * as React from "react";
import { Items } from "rss-parser";

import SectionMetadata from "@/src/model/SectionMetadata";
import EmbeddedPenExercise from "@/src/components/exercise/EmbeddedPenExercise";
import { codePenTitleAsUrl } from "@/src/services/exercise/codePenTitleAsUrl";

export const convertExerciseItemToSectionMetaData = (
    { content = "", link = "", title = "" }: Items,
    index: number,
): SectionMetadata => ({
    name: title,
    url: `/${codePenTitleAsUrl(title)}`,
    component: <EmbeddedPenExercise key={`${index}_${title}`} content={content} link={link} title={title} />,
    icon: <div />,
});
