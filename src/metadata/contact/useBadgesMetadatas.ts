import { useEffect, useState } from "react";

interface BadgeMetadata {
    href: string;
    img: {
        src: string;
        alt: string;
    };
}

interface BadgesMetadatas {
    badgeMetadatas: Array<BadgeMetadata>;
    badgeMicroMetadatas: Array<BadgeMetadata>;
}

interface GetBadgesMetadatasReturnType {
    loading: boolean;
    data?: BadgesMetadatas;
    error?: any;
}

const LEETCODE_DATA_FETCHER_URL =
    "https://us-central1-hey-sandbox.cloudfunctions.net/leetcode-badge-generator";

const getCodewarsBadgeMetadata = (isMicro = false): BadgeMetadata => {
    const src = isMicro
        ? "https://www.codewars.com/users/htbkoo/badges/micro"
        : "https://www.codewars.com/users/htbkoo/badges/large";

    return {
        href: "https://www.codewars.com/users/htbkoo",
        img: {
            src,
            alt: "Codewars",
        },
    };
};

const getLeetCodeBadgeMetadata = ({
    alt,
    label,
    value,
    isMicro = false,
}: {
    alt: string;
    label: string;
    value: string;
    isMicro: boolean;
}): BadgeMetadata => {
    const style = isMicro ? "flat" : "for-the-badge";

    return {
        href: "https://leetcode.com/htbkoo/",
        img: {
            src: `https://img.shields.io/badge/${value}-%23ffa116?style=${style}&logo=leetcode&logoColor=yellow&label=${label}&labelColor=black`,
            alt,
        },
    };
};

const CODEWARS_BADGES_METADATAS = {
    badgeMicroMetadatas: [getCodewarsBadgeMetadata(true)],
    badgeMetadatas: [getCodewarsBadgeMetadata(false)],
};

const mergeBadges = (badgesA: BadgesMetadatas, badgesB: BadgesMetadatas): BadgesMetadatas => {
    return {
        badgeMicroMetadatas: [...badgesA.badgeMicroMetadatas, ...badgesB.badgeMicroMetadatas],
        badgeMetadatas: [...badgesA.badgeMetadatas, ...badgesB.badgeMetadatas],
    };
};

const fetchLeetCodeData = async (): Promise<BadgesMetadatas> => {
    let metadatas: BadgesMetadatas = {
        badgeMetadatas: [],
        badgeMicroMetadatas: [],
    };

    try {
        const res = await fetch(LEETCODE_DATA_FETCHER_URL);
        /*
        {
          "realName": "Hey",
          "avatarUrl": "https://assets.leetcode.com/users/htbkoo/avatar_1533087441.png",
          "ranking": 1514,
          "rating": 2341,
          "solved": 1540,
          "solvedOverTotal": "1540/2797",
          "solvedPercentage": "55.1%",
          "error": null
        }
        * */
        const { solvedOverTotal, rating } = await res.json();

        if (typeof rating?.toString === "function") {
            metadatas = mergeBadges(metadatas, {
                badgeMicroMetadatas: [
                    getLeetCodeBadgeMetadata({
                        alt: "LeetCode Contest Rating",
                        label: "Rating",
                        value: rating.toString(),
                        isMicro: true,
                    }),
                ],
                badgeMetadatas: [
                    getLeetCodeBadgeMetadata({
                        alt: "LeetCode Contest Rating",
                        label: "Rating",
                        value: rating.toString(),
                        isMicro: false,
                    }),
                ],
            });
        }

        if (typeof solvedOverTotal?.toString === "function") {
            metadatas = mergeBadges(metadatas, {
                badgeMicroMetadatas: [
                    getLeetCodeBadgeMetadata({
                        alt: "LeetCode Solved",
                        label: "Solved",
                        value: solvedOverTotal.toString(),
                        isMicro: true,
                    }),
                ],
                badgeMetadatas: [
                    getLeetCodeBadgeMetadata({
                        alt: "LeetCode Solved",
                        label: "Solved",
                        value: solvedOverTotal.toString(),
                        isMicro: false,
                    }),
                ],
            });
        }
    } catch (_) {}

    return metadatas;
};

export const useBadgesMetadatas = (): GetBadgesMetadatasReturnType => {
    const [metadatas, setMetadatas] = useState<BadgesMetadatas | undefined>(undefined);

    useEffect(() => {
        fetchLeetCodeData()
            .then((leetCodeBadgesMetadatas) =>
                mergeBadges(leetCodeBadgesMetadatas, CODEWARS_BADGES_METADATAS),
            )
            .then((combinedMetadatas) => {
                setMetadatas(combinedMetadatas);
            });
    }, []);

    if (typeof metadatas === "undefined") {
        return { loading: true };
    }

    return {
        loading: false,
        data: metadatas,
    };
};
