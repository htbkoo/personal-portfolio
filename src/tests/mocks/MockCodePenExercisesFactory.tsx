import * as React from "react";

import { ExercisesFactory } from "@/src/components/exercise/ExercisesFactory";
import DirectlyDisplayHtmlContentExercise from "@/src/components/exercise/DirectlyDisplayHtmlContentExercise";
import mockCodePenRssFeeds from "./mockCodePenRssFeeds";

export default class MockCodePenExercisesFactory implements ExercisesFactory {
    createExercises() {
        return Promise.resolve(
            mockCodePenRssFeeds.map((feed, i) => <DirectlyDisplayHtmlContentExercise key={i} {...feed} />),
        );
    }
}
