import { isTrue } from "../../utils/IsTrue";

export const getGaMeasurementId = () => process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_GA_MEASUREMENT_ID;

export const isGoogleAnalyticsTrackingEnabled = () =>
    isTrue(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ENABLED);

export const shouldTrackGoogleAnalytics = (gaId: string | undefined): gaId is string => isGoogleAnalyticsTrackingEnabled() && !!gaId;
