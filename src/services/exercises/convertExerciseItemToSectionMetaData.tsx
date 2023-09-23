import * as React from "react";
import { Items } from "rss-parser";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import SectionMetadata from "@/src/model/SectionMetadata";
import EmbeddedPenExercise from "@/src/components/exercises/EmbeddedPenExercise";

import { codePenTitleAsUrl } from "./codePenTitleAsUrl";

export const convertExerciseItemToSectionMetaData = (
    { content = "", link = "", title = "" }: Items,
    index: number,
): SectionMetadata => ({
    name: title,
    url: `/${codePenTitleAsUrl(title)}`,
    component: <EmbeddedPenExercise key={`${index}_${title}`} content={content} link={link} title={title} />,
    icon: <ArrowRightIcon />,
});
