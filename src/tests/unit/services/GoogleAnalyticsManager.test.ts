import GoogleAnalyticsManager from "../../../services/GoogleAnalyticsManager";

describe("GoogleAnalyticsManager", function () {
    const ENABLED = "true";
    let processEnv;

    beforeEach(function () {
        processEnv = {...process.env};
    });

    afterEach(function () {
        process.env = processEnv;
    });

    function overrideProcessEnv({trackingEnabled, trackingId}: { trackingEnabled?: string; trackingId?: string }) {
        process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ENABLED = trackingEnabled;
        process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID = trackingId;
    }

    it("should init if tracking is enabled and tracking id is provided", function () {
        // given
        overrideProcessEnv({trackingEnabled: ENABLED, trackingId: "someId"});
        const manager = new GoogleAnalyticsManager();

        // when
        manager.init();

        // then
        expect(manager.isInitialized()).toEqual(true);
    });

    it("should not init if tracking is disabled", function () {
        // given
        overrideProcessEnv({trackingEnabled: "false", trackingId: "someId"});
        const manager = new GoogleAnalyticsManager();

        // when
        manager.init();

        // then
        expect(manager.isInitialized()).toEqual(false);
    });

    it("should not init if tracking id is not provided", function () {
        // given
        overrideProcessEnv({trackingEnabled: ENABLED});
        const manager = new GoogleAnalyticsManager();

        // when
        manager.init();

        // then
        expect(manager.isInitialized()).toEqual(false);
    });
});