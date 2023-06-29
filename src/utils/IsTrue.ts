export const isTrue = (optionalString?: string): boolean =>
    typeof optionalString !== "undefined" && "true" === optionalString.toLowerCase();
