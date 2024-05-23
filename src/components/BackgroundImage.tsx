import { useTheme } from "@mui/material/styles";
import React from "react";

import { withAssetPrefix } from "@/src/utils/assetUtils";

export const BackgroundImage = () => {
    const theme = useTheme();

    const backgroundImgFilename = theme.palette.mode === "dark" ? "background.jpg" : "background-light.jpg";
    return (
        <div
            className="background"
            style={{
                backgroundImage: `url("${withAssetPrefix(backgroundImgFilename)}")`,
            }}
        />
    );
};
