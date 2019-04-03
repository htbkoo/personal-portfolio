import GoogleAnalyticsManager from "../../../services/GoogleAnalyticsManager";
import ReactGA from 'react-ga';

describe("GoogleAnalyticsManager", function () {
    const ENABLED = "true";
    let processEnv;

    beforeEach(function () {
        processEnv = {...process.env};
        (ReactGA.initialize as any).mockReset();
        (ReactGA.pageview as any).mockReset();
    });

    afterEach(function () {
        process.env = processEnv;
    });

    describe("initialize", function () {
        it("should init if tracking is enabled and tracking id is provided", function () {
            // given
            overrideProcessEnv({trackingEnabled: ENABLED, trackingId: "someId"});
            const manager = new GoogleAnalyticsManager();

            // when
            manager.init();

            // then
            expect(manager.isInitialized()).toEqual(true);
            expect(ReactGA.initialize).toBeCalled();
        });

        it("should not init if tracking is disabled", function () {
            // given
            overrideProcessEnv({trackingEnabled: "false", trackingId: "someId"});
            const manager = new GoogleAnalyticsManager();

            // when
            manager.init();

            // then
            expect(manager.isInitialized()).toEqual(false);
            expect(ReactGA.initialize).not.toBeCalled();
        });

        it("should not init if tracking id is not provided", function () {
            // given
            overrideProcessEnv({trackingEnabled: ENABLED});
            const manager = new GoogleAnalyticsManager();

            // when
            manager.init();

            // then
            expect(manager.isInitialized()).toEqual(false);
            expect(ReactGA.initialize).not.toBeCalled();
        });
    });

    describe("pageview", function () {
        it("should fire pageview if initialized", function () {
            // given
            const manager = new GoogleAnalyticsManager();
            manager.isInitialized = function(){
                return true;
            };

            const path = "path";

            // when
            manager.pageview(path);

            // then
            expect(ReactGA.pageview).toBeCalledWith(path);
        });

        it("should not fire pageview if not initialized", function () {
            // given
            const manager = new GoogleAnalyticsManager();
            manager.isInitialized = function () {
                return false;
            };

            const path = "path";

            // when
            manager.pageview(path);

            // then
            expect(ReactGA.pageview).not.toBeCalled();
        });
    });

    function overrideProcessEnv({trackingEnabled, trackingId}: { trackingEnabled?: string; trackingId?: string }) {
        process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ENABLED = trackingEnabled;
        process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID = trackingId;
    }
});