import React from "react";
import Script from "next/script";

import { isTrue } from "@/src/utils/IsTrue";

export const GoogleAnalyticsScripts = () => {
    const isGoogleAnalyticsTrackingEnabled = isTrue(
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ENABLED,
    );
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_GA_MEASUREMENT_ID;

    if (isGoogleAnalyticsTrackingEnabled) {
        // reference https://nextjs.org/docs/messages/next-script-for-ga
        return (
            <>
                <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
                <Script id="google-analytics">
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
        return null;
    }
};
