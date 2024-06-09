import SectionMetadata from "@/src/model/SectionMetadata";
import { useEffect, useState } from "react";

import { WithLoading } from "@/src/utils/types";

type GetSubPagesReturnType = Awaited<ReturnType<NonNullable<SectionMetadata["getSubPages"]>>>;

/**
 * This hook loads the SubPages metadata from the give async function
 *
 * @param getSubPages The async function to load the SubPages metadata
 * @param skip (optional, default to `false`) Skip the loading if this parameter is yes
 */
export const useSubPages = ({
    getSubPages,
    skip = false,
}: {
    getSubPages: SectionMetadata["getSubPages"];
    skip?: boolean;
}) => {
    const [state, setState] = useState<GetSubPagesReturnType & WithLoading>({ loading: !skip });

    useEffect(() => {
        if (!skip && getSubPages) {
            getSubPages()
                .then((res) => {
                    setState({ ...res, loading: false });
                })
                .catch((error) => {
                    setState({ data: null, error, loading: false });
                });
        } else {
            setState({ loading: false });
        }
    }, [getSubPages, skip]);

    return state;
};
