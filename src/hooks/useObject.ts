import React from "react";

/**
 * @template T
 * @param {T} initialValue
 */
export default function useObject(initialValue) {
    const [state, setState] = React.useState(initialValue);

    // React.useEffect(() => {
    //     setState(initialValue);
    // }, [initialValue]);

    const updateState = React.useCallback((updater) => {
        setState((prev) => {
            return typeof updater === "function" ? ({
                ...prev,
                ...updater(prev),
            }) : ({
                ...prev,
                ...updater,
            })
        });
    }, [setState]);

    return [state, updateState];
}
