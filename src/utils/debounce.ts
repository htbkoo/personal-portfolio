// TODO: add return value of func in the form of `promise`
export const debounce = <A extends Array<unknown>, R>(func: (...args: A) => R, timeout: number) => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    return (...args: A) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
            timeoutId = undefined;
        }, timeout);
    };
};
