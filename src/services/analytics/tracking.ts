import { sendGAEvent } from "@next/third-parties/google";

import { GA_TRACKING_EVENT_NAMES, GA_TRACKING_EVENT_PARAMS_TRANSLATION_ACTIONS } from "./constants";

const safeSendGAEvent = (eventName: string, ...eventParams: Parameters<typeof sendGAEvent>) => {
    try {
        // TODO: Fix this, somehow `sendGAEvent` does not work
        // sendGAEvent(
        //     new Array(...eventParams).reduce(
        //         (obj, param) => {
        //             for (const [key, value] of Object.entries(param)) {
        //                 obj[key] = value;
        //             }
        //             return obj;
        //         },
        //         { event: eventName },
        //     ),
        // );
        // sendGAEvent({ event: eventName }, ...eventParams);

        // prettier-ignore
        const trackDescription = `event '${eventName}'${eventParams ? `, with args: ${JSON.stringify(eventParams)}` : ""}`;
        const isInitialized = typeof window["gtag"] === "function";
        if (isInitialized) {
            console.log(trackDescription);
            window["gtag"]("event", eventName, ...eventParams);
        } else {
            console.warn(`Not initialized - not going to send ${trackDescription}`);
        }
    } catch (error) {
        // console.debug(`Unable to send event: ${error?.toString?.()}`);
    }
};

export const tracking = {
    cssToAndFromReact: {
        trackTranslation({ fromCss, isError }: { fromCss: boolean; isError: boolean }) {
            safeSendGAEvent(GA_TRACKING_EVENT_NAMES.TOOLS_CSS__TRANSLATION, {
                action: fromCss
                    ? GA_TRACKING_EVENT_PARAMS_TRANSLATION_ACTIONS.FROM_CSS
                    : GA_TRACKING_EVENT_PARAMS_TRANSLATION_ACTIONS.TO_CSS,
                isError,
            });
        },
        trackFormatSwitch({ format }: { format: boolean }) {
            safeSendGAEvent(GA_TRACKING_EVENT_NAMES.TOOLS_CSS__FORMAT_SWITCH, { format });
        },
    },
};
