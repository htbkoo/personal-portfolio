export const withAssetPrefix = (assetUrl: string) => `${process.env.NEXT_PUBLIC_BASE_PATH}/${assetUrl}`;

export const withStaticPrefix = (path: string) => withAssetPrefix(`static/${path}`);
