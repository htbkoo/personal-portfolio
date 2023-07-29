const functions = require("@google-cloud/functions-framework");

const USER = "htbkoo";
const genericErrorMessage = "error: unable to fetch data from leetcode.com";

const query = (user) =>
    `{
    "variables": { "username" : "${user}" },
    "query": "query getUserProfile($username: String!) { allQuestionsCount { difficulty count } matchedUser(username: $username) { profile { realName userAvatar starRating ranking } submitStats { acSubmissionNum { difficulty count } } } userContestRanking(username: $username)  {rating} }"
}`;

const fetchLeetCodeData = async ({ user }) => {
    const res = await fetch("https://leetcode.com/graphql", {
        headers: {
            "content-type": "application/json",
        },
        body: query(user),
        method: "POST",
    });

    const { data } = await res.json();

    if (!data.matchedUser) {
        throw new Error("User not found");
    }

    const { realName, userAvatar: avatarUrl, ranking } = data.matchedUser.profile;
    const solved = data.matchedUser.submitStats.acSubmissionNum.filter(
        ({ difficulty }) => difficulty === "All",
    )[0].count;
    const total = data.allQuestionsCount.filter(({ difficulty }) => difficulty === "All")[0].count;

    const rating = data.userContestRanking ? Math.round(parseFloat(data.userContestRanking.rating)) : "N/A";

    return {
        realName,
        avatarUrl,
        ranking,
        rating,
        solved,
        solvedOverTotal: `${solved}/${total}`,
        solvedPercentage: `${((solved / total) * 100).toFixed(1)}%`,
        error: null,
    };
};

/**
 * To fetch the leetcode data for user htbkoo.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http("getLeetCodeData", async (req, res) => {
    // reference: https://cloud.google.com/functions/docs/samples/functions-http-cors#functions_http_cors-nodejs
    // To make this HTTP function supports CORS requests
    // Set CORS headers for preflight requests
    // Allows GETs from any origin with the Content-Type header
    // and caches preflight response for 3600s
    res.set("Access-Control-Allow-Origin", "*");

    if (req.method === "OPTIONS") {
        // Send response to OPTIONS requests
        res.set("Access-Control-Allow-Methods", "GET");
        res.set("Access-Control-Allow-Headers", "Content-Type");
        res.set("Access-Control-Max-Age", "3600");
        res.status(204).send("");
    } else {
        // reference: https://github.com/cascandaliato/leetcode-badge/compare/main...li-xin-yi:leetcode-badge:main
        res.setHeader("Content-Type", "application/json");

        fetchLeetCodeData({ user: USER })
            .then((output) => {
                res.status(200).json(output);
            })
            .catch((err) => {
                const error = err?.message ?? genericErrorMessage;
                res.status(200).json({
                    realName: error,
                    avatarUrl: error,
                    ranking: error,
                    rating: error,
                    solved: error,
                    solvedOverTotal: error,
                    solvedPercentage: error,
                    error,
                });
            });
    }
});
