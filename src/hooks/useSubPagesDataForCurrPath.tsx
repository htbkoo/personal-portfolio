import { useEffect, useState } from "react";

import { useAppGlobalStateContext } from "@/src/contexts/AppGlobalStateContext";
import SectionMetadata from "@/src/model/SectionMetadata";

export const useSubPagesDataForCurrPath = (configs: SectionMetadata) => {
    const { currDisplayPath } = useAppGlobalStateContext();

    const pagePath = currDisplayPath.split("/").at(-2);

    const [loading, setLoading] = useState(true);
    const [pageData, setPageData] = useState<SectionMetadata | undefined>(undefined);

    useEffect(() => {
        if (!configs.getSubPages) {
            setLoading(false);
        } else {
            configs.getSubPages().then(({ data }) => {
                setLoading(false);

                if (!pagePath || !data || !data[pagePath]) {
                    return;
                }

                setPageData(data[pagePath]);
            });
        }
    }, [pagePath, configs]);

    return { data: pageData, loading };
};
