import React from "react";
import Script from "next/script";

import { isTrue } from "@/src/utils/IsTrue";

export const GoogleAnalyticsScripts = () => {
    const isGoogleAnalyticsTrackingEnabled = isTrue(
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ENABLED,
    );
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_GA_MEASUREMENT_ID;

    if (isGoogleAnalyticsTrackingEnabled && GA_MEASUREMENT_ID) {
        console.log(
            "Google Analytics tracking is enabled and trackingId is defined, running Google Analytics scripts now",
        );

        // reference https://nextjs.org/docs/messages/next-script-for-ga
        return (
            <>
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                    strategy="beforeInteractive"
                />
                <Script id="google-analytics" strategy="beforeInteractive">
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
                </Script>
            </>
        );
    } else {
        if (!isGoogleAnalyticsTrackingEnabled) {
            console.log(
                "Google Analytics tracking is disabled and trackingId is defined, thus not initializing",
            );
        } else {
            console.log("Google Analytics trackingId is not defined, thus not initializing");
        }
        return null;
    }
};
