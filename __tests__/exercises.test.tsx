import React from "react";
import { createRoot } from "react-dom/client";

import ExercisesPage from "@/pages/exercises";

describe("<ExercisesPage/>", function () {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        // @ts-ignore: TODO: remove this once @types/react and @types/react-dom is upgraded to v18
        const root = createRoot(div!);
        root.render(<ExercisesPage />);
        root.unmount();
    });
});
