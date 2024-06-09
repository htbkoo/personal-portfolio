import { sendGAEvent } from "@next/third-parties/google";

import { GA_TRACKING_EVENT_NAMES, GA_TRACKING_EVENT_PARAMS_TRANSLATION_ACTIONS } from "./constants";

const safeSendGAEvent = (...args: Parameters<typeof sendGAEvent>) => {
    try {
        sendGAEvent(...args);
    } catch (error) {
        console.debug(`Unable to send event: ${error?.toString?.()}`);
    }
};

export const tracking = {
    cssToAndFromReact: {
        trackTranslation({ fromCss, isError }: { fromCss: boolean; isError: boolean }) {
            sendGAEvent(
                { event: GA_TRACKING_EVENT_NAMES.TOOLS_CSS__TRANSLATION },
                {
                    action: fromCss
                        ? GA_TRACKING_EVENT_PARAMS_TRANSLATION_ACTIONS.FROM_CSS
                        : GA_TRACKING_EVENT_PARAMS_TRANSLATION_ACTIONS.TO_CSS,
                    isError,
                },
            );
        },
        trackFormatSwitch({ format }: { format: boolean }) {
            sendGAEvent({ event: GA_TRACKING_EVENT_NAMES.TOOLS_CSS__FORMAT_SWITCH }, { format });
        },
    },
};
