export function overrideGoogleAnalyticsRelatedProcessEnv({
  trackingEnabled,
  trackingId,
  testMode = false,
}: {
  trackingEnabled?: string;
  trackingId?: string;
  testMode?: boolean;
}) {
  process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ENABLED = trackingEnabled;
  process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID = trackingId;
  process.env.REACT_APP_REACT_GA_TEST_MODE = testMode.toString();
}
