import * as React from "react";

import RssFeedsLoader from "@/src/services/exercises/RssFeedsLoader";
import {ExercisesFactory} from "./ExercisesFactory";
import EmbeddedPenExercises from "./EmbeddedPenExercises";

export default class EmbeddedPenExercisesFactory implements ExercisesFactory {
    private readonly loader: RssFeedsLoader;

    constructor(loader: RssFeedsLoader) {
        this.loader = loader;
    }

    async createExercises() {
        return <EmbeddedPenExercises loader={this.loader} />;
    }
}
