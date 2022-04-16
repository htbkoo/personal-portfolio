import { useTheme } from "@material-ui/core/styles";
import React from "react";

import { withAssetPrefix } from "@/src/utils/assetUtils";

export const BackgroundImage = () => {
    const theme = useTheme();

    const backgroundImgFilename = theme.palette.type === "dark" ? "background.jpg" : "background-light.jpg";
    return (
        <div
            className="background"
            style={{
                backgroundImage: `url("${withAssetPrefix(backgroundImgFilename)}")`,
            }}
        />
    );
};
