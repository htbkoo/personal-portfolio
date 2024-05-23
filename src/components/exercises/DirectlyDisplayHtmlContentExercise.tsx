import * as React from "react";

import { ExerciseProps } from "./ExerciseProps";

interface DirectlyDisplayHtmlContentExerciseProps extends ExerciseProps {}

const DirectlyDisplayHtmlContentExercise = (props: DirectlyDisplayHtmlContentExerciseProps) => {
    const { title, link, content } = props;
    return (
        <div>
            <div>
                <a href={link}>{title}</a>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};
export default DirectlyDisplayHtmlContentExercise;
