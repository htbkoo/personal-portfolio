import * as React from "react";

import { ExercisesFactory } from "@/src/components/exercises/ExercisesFactory";
import DirectlyDisplayHtmlContentExercise from "@/src/components/exercises/DirectlyDisplayHtmlContentExercise";
import mockCodePenRssFeeds from "./mockCodePenRssFeeds";

export default class MockCodePenExercisesFactory implements ExercisesFactory {
    createExercises() {
        return Promise.resolve(
            mockCodePenRssFeeds.map((feed, i) => <DirectlyDisplayHtmlContentExercise key={i} {...feed} />),
        );
    }
}
