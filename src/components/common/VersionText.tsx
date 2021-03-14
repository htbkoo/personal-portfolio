import React from "react";

import { version } from "../../../package.json";

export function VersionText() {
    return (
        <div>
            v{version}-{process.env.REACT_APP_GIT_SHA}
        </div>
    );
}
