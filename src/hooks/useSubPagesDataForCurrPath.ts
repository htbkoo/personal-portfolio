import { useAppGlobalStateContext } from "@/src/contexts/AppGlobalStateContext";
import SectionMetadata from "@/src/model/SectionMetadata";
import { useSubPages } from "@/src/hooks/useSubPages";

/**
 * This hook loads the SubPages metadata from the `currDisplayPath` from {@link useAppGlobalStateContext}
 *
 * @param configs
 */
export const useSubPagesDataForCurrPath = (configs: SectionMetadata) => {
    const { currDisplayPath } = useAppGlobalStateContext();

    const {
        data: subPagesData,
        loading: subPagesLoading,
        error,
    } = useSubPages({ getSubPages: configs.getSubPages });

    const pagePath = currDisplayPath.split("/").at(-2);

    if (subPagesLoading) {
        return { data: null, loading: subPagesLoading, error: null };
    }

    if (!pagePath || !subPagesData || !subPagesData[pagePath]) {
        return { data: null, loading: false, error };
    }

    return { data: subPagesData[pagePath], loading: false, error };
};
