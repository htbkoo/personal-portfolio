import * as React from "react";

export interface ExercisesFactory {
    createExercises: () => Promise<(React.ReactNode)>,
}
