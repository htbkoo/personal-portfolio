import { useEffect, useState } from "react";

import SectionMetadata, { SubPagesType } from "@/src/model/SectionMetadata";

export const useSubPages = ({
    getSubPages,
    skip = false,
}: {
    getSubPages: SectionMetadata["getSubPages"];
    skip?: boolean;
}) => {
    const [subPages, setSubPages] = useState<SubPagesType | undefined>(undefined);

    useEffect(() => {
        if (!skip) {
            getSubPages?.()?.then(({ data, error }) => {
                // TODO: handling loading and error
                if (data) {
                    setSubPages(data);
                }
            });
        }
    }, [getSubPages, skip]);

    return subPages;
};
