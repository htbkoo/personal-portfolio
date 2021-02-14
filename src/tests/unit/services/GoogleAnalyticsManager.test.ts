import { overrideGoogleAnalyticsRelatedProcessEnv } from "../../utils/utils";

jest.mock('react-ga');

import GoogleAnalyticsManager from "../../../services/GoogleAnalyticsManager";
import ReactGA from 'react-ga';

describe("GoogleAnalyticsManager", function () {
    const ENABLED = "true";
    let processEnv;

    beforeEach(function () {
        backupProcessEnv();
        resetMocks();
    });

    afterEach(function () {
        restoreProcessEnv();
    });

    describe("initialize", function () {
        it("should init if tracking is enabled and tracking id is provided", function () {
            // given
            overrideGoogleAnalyticsRelatedProcessEnv({ trackingEnabled: ENABLED, trackingId: "someId", testMode: "true" });
            const manager = new GoogleAnalyticsManager();

            // when
            manager.init();

            // then
            expect(manager.isInitialized()).toEqual(true);
            expect(ReactGA.initialize).toBeCalled();
        });

        it("should not init if tracking is disabled", function () {
            // given
            overrideGoogleAnalyticsRelatedProcessEnv({ trackingEnabled: "false", trackingId: "someId", testMode: "true"  });
            const manager = new GoogleAnalyticsManager();

            // when
            manager.init();

            // then
            expect(manager.isInitialized()).toEqual(false);
            expect(ReactGA.initialize).not.toBeCalled();
        });

        it("should not init if tracking id is not provided", function () {
            // given
            overrideGoogleAnalyticsRelatedProcessEnv({ trackingEnabled: ENABLED, testMode: "true" });
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
            setIsInitialized(manager, true);

            const path = "path";

            // when
            manager.pageview(path);

            // then
            expect(ReactGA.pageview).toBeCalledWith(path);
        });

        it("should not fire pageview if not initialized", function () {
            // given
            const manager = new GoogleAnalyticsManager();
            setIsInitialized(manager, false);

            // when
            manager.pageview("anything");

            // then
            expect(ReactGA.pageview).not.toBeCalled();
        });
    });

    function backupProcessEnv() {
        processEnv = { ...process.env };
    }

    function restoreProcessEnv() {
        process.env = processEnv;
    }

    function resetMocks() {
        (ReactGA.initialize as any).mockReset();
        (ReactGA.pageview as any).mockReset();
    }

    function setIsInitialized(manager, isInitialized) {
        manager.isInitialized = () => isInitialized;
    }
});
