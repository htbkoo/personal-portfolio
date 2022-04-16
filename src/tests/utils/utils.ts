export function overrideGoogleAnalyticsRelatedProcessEnv({
  trackingEnabled,
  trackingId,
  testMode,
}: {
  trackingEnabled?: string;
  trackingId?: string;
  testMode?: string;
}) {
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ENABLED = trackingEnabled;
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID = trackingId;
  process.env.NEXT_PUBLIC_REACT_GA_TEST_MODE = testMode;
}
