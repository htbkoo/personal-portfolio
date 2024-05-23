import * as React from "react";

import RssFeedsParser from "@/src/services/exercises/RssFeedsParser";
import {ExercisesFactory} from "./ExercisesFactory";
import EmbeddedPenExercises from "./EmbeddedPenExercises";

export default class EmbeddedPenExercisesFactory implements ExercisesFactory {
    private readonly parser: RssFeedsParser;
    private readonly rssFeedUrl: string;

    constructor(parser: RssFeedsParser, rssFeedUrl: string) {
        this.parser = parser;
        this.rssFeedUrl = rssFeedUrl;
    }

    async createExercises() {
        return <EmbeddedPenExercises parser={this.parser} rssFeedUrl={this.rssFeedUrl}/>;
    }
}
