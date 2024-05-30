// reference: https://stackoverflow.com/a/2970667
const camelize = (str: string) =>
    str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
        /\s+/.test(match) ? "" : index === 0 ? match.toLowerCase() : match.toUpperCase(),
    );

const memo = new Map<string, string>();

export const codePenTitleAsUrl = (title: string): string => {
    if (!memo.has(title)) {
        memo.set(title, camelize(title));
    }
    return memo.get(title)!;
};
