import React, { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

import { getGaMeasurementId, isGoogleAnalyticsTrackingEnabled, shouldTrackGoogleAnalytics } from "./utils";

export const GoogleAnalyticsScripts = () => {
    const gaId = getGaMeasurementId();

    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ENABLED)

        if (shouldTrackGoogleAnalytics(gaId)) {
            console.log(
                "Google Analytics tracking is enabled and trackingId is defined, running Google Analytics scripts now",
            );
        } else {
            if (!isGoogleAnalyticsTrackingEnabled()) {
                console.log(
                    "Google Analytics tracking is disabled and trackingId is defined, thus not initializing",
                );
            } else {
                console.log("Google Analytics trackingId is not defined, thus not initializing");
            }
        }
    }, [gaId]);

    if (shouldTrackGoogleAnalytics(gaId)) {
        // References:
        // 1. https://nextjs.org/docs/pages/building-your-application/optimizing/third-party-libraries
        // 2. https://nextjs.org/docs/messages/next-script-for-ga
        return <GoogleAnalytics gaId={gaId} />;
    } else {
        return null;
    }
};
