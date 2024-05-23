import React from "react";
import { createRoot } from "react-dom/client";
import Exercises from "@/pages/exercises";

describe("<Exercises/>", function () {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        // @ts-ignore: TODO: remove this once @types/react and @types/react-dom is upgraded to v18
        const root = createRoot(div!);
        root.render(<Exercises />);
        root.unmount();
    });
});
