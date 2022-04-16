import React from "react";
import { createRoot } from "react-dom/client";
import Home from "@/pages/index";
import { overrideGoogleAnalyticsRelatedProcessEnv } from "@/src/tests/utils/utils";

describe("<Home/>", function () {
    it("renders without crashing", () => {
        overrideGoogleAnalyticsRelatedProcessEnv({ trackingEnabled: "false" });

        const div = document.createElement("div");
        // @ts-ignore: TODO: remove this once @types/react and @types/react-dom is upgraded to v18
        const root = createRoot(div!);
        root.render(<Home />);
        root.unmount();
    });

    it("with GA enabled, renders without crashing", () => {
        overrideGoogleAnalyticsRelatedProcessEnv({
            trackingEnabled: "true",
            trackingId: "someId",
            testMode: "true",
        });

        const div = document.createElement("div");

        // @ts-ignore: TODO: remove this once @types/react and @types/react-dom is upgraded to v18
        const root = createRoot(div!);
        root.render(<Home />);
        root.unmount();
    });
});
