export function overrideGoogleAnalyticsRelatedProcessEnv({
    trackingEnabled,
    trackingId,
    gaMeasurementId,
    testMode,
}: {
    trackingEnabled?: string;
    trackingId?: string;
    gaMeasurementId?: string;
    testMode?: string;
}) {
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ENABLED = trackingEnabled;
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID = trackingId;
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_GA_MEASUREMENT_ID = gaMeasurementId;
    process.env.NEXT_PUBLIC_REACT_GA_TEST_MODE = testMode;
}
