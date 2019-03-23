import RssFeedsParser from "../../services/portfolio/RssFeedsParser";

export default class MockCodePenRssFeedsParser implements RssFeedsParser {
    async parseUrl(url: string) {
        return [
            {
                "creator": "Hey",
                "date": "\n    2017-01-03T15:16:44-07:00\n  ",
                "title": "Pomodoro Clock",
                "link": "https://codepen.io/htbkoo/pen/MJWmGz",
                "dc:creator": "Hey",
                "dc:date": "\n    2017-01-03T15:16:44-07:00\n  ",
                "content": "\n    \n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/MJWmGz\"><img width=\"1024\" height=\"600\" src=\"https://codepen.io/htbkoo/pen/MJWmGz/image/large.png\"></a>\n    </p>\n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/MJWmGz\">See the Code</a> -\n      <a href=\"https://codepen.io/htbkoo/full/MJWmGz\">See it Full Page</a> -\n      <a href=\"https://codepen.io/htbkoo/details/MJWmGz\">See Details</a>\n    </p>\n    <p>\n      \n    </p>\n    <p><small>This Pen uses: HTML, CSS, JavaScript, and </small></p>\n    \n  ",
                "contentSnippet": "See the Code -\n      See it Full Page -\n      See Details\n    \n    \n      \n    \n    This Pen uses: HTML, CSS, JavaScript, and",
                "guid": "https://codepen.io/htbkoo/pen/MJWmGz",
                "isoDate": "2017-01-03T22:16:44.000Z"
            },
            {
                "creator": "Hey",
                "date": "\n    2017-11-20T17:02:24-07:00\n  ",
                "title": "Build a Personal Portfolio Webpage",
                "link": "https://codepen.io/htbkoo/pen/ZyYWNN",
                "dc:creator": "Hey",
                "dc:date": "\n    2017-11-20T17:02:24-07:00\n  ",
                "content": "\n    \n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/ZyYWNN\"><img width=\"1024\" height=\"600\" src=\"https://codepen.io/htbkoo/pen/ZyYWNN/image/large.png\"></a>\n    </p>\n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/ZyYWNN\">See the Code</a> -\n      <a href=\"https://codepen.io/htbkoo/full/ZyYWNN\">See it Full Page</a> -\n      <a href=\"https://codepen.io/htbkoo/details/ZyYWNN\">See Details</a>\n    </p>\n    <p>\n      \n    </p>\n    <p><small>This Pen uses: HTML, CSS, JavaScript, and </small></p>\n    \n  ",
                "contentSnippet": "See the Code -\n      See it Full Page -\n      See Details\n    \n    \n      \n    \n    This Pen uses: HTML, CSS, JavaScript, and",
                "guid": "https://codepen.io/htbkoo/pen/ZyYWNN",
                "isoDate": "2017-11-21T00:02:24.000Z"
            },
            {
                "creator": "Hey",
                "date": "\n    2017-05-30T10:28:27-07:00\n  ",
                "title": "React - Build a Simon Game",
                "link": "https://codepen.io/htbkoo/pen/RVjgxJ",
                "dc:creator": "Hey",
                "dc:date": "\n    2017-05-30T10:28:27-07:00\n  ",
                "content": "\n    \n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/RVjgxJ\"><img width=\"1024\" height=\"600\" src=\"https://codepen.io/htbkoo/pen/RVjgxJ/image/large.png\"></a>\n    </p>\n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/RVjgxJ\">See the Code</a> -\n      <a href=\"https://codepen.io/htbkoo/full/RVjgxJ\">See it Full Page</a> -\n      <a href=\"https://codepen.io/htbkoo/details/RVjgxJ\">See Details</a>\n    </p>\n    <p>\n      \n    </p>\n    <p><small>This Pen uses: HTML, CSS, Babel, and Babel</small></p>\n    \n  ",
                "contentSnippet": "See the Code -\n      See it Full Page -\n      See Details\n    \n    \n      \n    \n    This Pen uses: HTML, CSS, Babel, and Babel",
                "guid": "https://codepen.io/htbkoo/pen/RVjgxJ",
                "isoDate": "2017-05-30T17:28:27.000Z"
            },
            {
                "creator": "Hey",
                "date": "\n    2017-01-10T12:21:46-07:00\n  ",
                "title": "TDD Tic Tac Toe",
                "link": "https://codepen.io/htbkoo/pen/PWZqLo",
                "dc:creator": "Hey",
                "dc:date": "\n    2017-01-10T12:21:46-07:00\n  ",
                "content": "\n    \n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/PWZqLo\"><img width=\"1024\" height=\"600\" src=\"https://codepen.io/htbkoo/pen/PWZqLo/image/large.png\"></a>\n    </p>\n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/PWZqLo\">See the Code</a> -\n      <a href=\"https://codepen.io/htbkoo/full/PWZqLo\">See it Full Page</a> -\n      <a href=\"https://codepen.io/htbkoo/details/PWZqLo\">See Details</a>\n    </p>\n    <p>\n      \n    </p>\n    <p><small>This Pen uses: HTML, CSS, JavaScript, and </small></p>\n    \n  ",
                "contentSnippet": "See the Code -\n      See it Full Page -\n      See Details\n    \n    \n      \n    \n    This Pen uses: HTML, CSS, JavaScript, and",
                "guid": "https://codepen.io/htbkoo/pen/PWZqLo",
                "isoDate": "2017-01-10T19:21:46.000Z"
            },
            {
                "creator": "Hey",
                "date": "\n    2017-06-10T01:31:38-07:00\n  ",
                "title": "Javascript Calculator with Keyboard support",
                "link": "https://codepen.io/htbkoo/pen/jyMbeM",
                "dc:creator": "Hey",
                "dc:date": "\n    2017-06-10T01:31:38-07:00\n  ",
                "content": "\n    \n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/jyMbeM\"><img width=\"1024\" height=\"600\" src=\"https://codepen.io/htbkoo/pen/jyMbeM/image/large.png\"></a>\n    </p>\n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/jyMbeM\">See the Code</a> -\n      <a href=\"https://codepen.io/htbkoo/full/jyMbeM\">See it Full Page</a> -\n      <a href=\"https://codepen.io/htbkoo/details/jyMbeM\">See Details</a>\n    </p>\n    <p>\n      \n    </p>\n    <p><small>This Pen uses: HTML, CSS, JavaScript, and </small></p>\n    \n  ",
                "contentSnippet": "See the Code -\n      See it Full Page -\n      See Details\n    \n    \n      \n    \n    This Pen uses: HTML, CSS, JavaScript, and",
                "guid": "https://codepen.io/htbkoo/pen/jyMbeM",
                "isoDate": "2017-06-10T08:31:38.000Z"
            },
            {
                "creator": "Hey",
                "date": "\n    2017-01-03T15:45:42-07:00\n  ",
                "title": "Random Quote Machine",
                "link": "https://codepen.io/htbkoo/pen/BpBqQZ",
                "dc:creator": "Hey",
                "dc:date": "\n    2017-01-03T15:45:42-07:00\n  ",
                "content": "\n    \n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/BpBqQZ\"><img width=\"1024\" height=\"600\" src=\"https://codepen.io/htbkoo/pen/BpBqQZ/image/large.png\"></a>\n    </p>\n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/BpBqQZ\">See the Code</a> -\n      <a href=\"https://codepen.io/htbkoo/full/BpBqQZ\">See it Full Page</a> -\n      <a href=\"https://codepen.io/htbkoo/details/BpBqQZ\">See Details</a>\n    </p>\n    <p>\n      \n    </p>\n    <p><small>This Pen uses: HTML, CSS, JavaScript, and </small></p>\n    \n  ",
                "contentSnippet": "See the Code -\n      See it Full Page -\n      See Details\n    \n    \n      \n    \n    This Pen uses: HTML, CSS, JavaScript, and",
                "guid": "https://codepen.io/htbkoo/pen/BpBqQZ",
                "isoDate": "2017-01-03T22:45:42.000Z"
            },
            {
                "creator": "Hey",
                "date": "\n    2017-04-24T15:49:28-07:00\n  ",
                "title": "React - Use the Twitchtv JSON API",
                "link": "https://codepen.io/htbkoo/pen/MpxqyX",
                "dc:creator": "Hey",
                "dc:date": "\n    2017-04-24T15:49:28-07:00\n  ",
                "content": "\n    \n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/MpxqyX\"><img width=\"1024\" height=\"600\" src=\"https://codepen.io/htbkoo/pen/MpxqyX/image/large.png\"></a>\n    </p>\n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/MpxqyX\">See the Code</a> -\n      <a href=\"https://codepen.io/htbkoo/full/MpxqyX\">See it Full Page</a> -\n      <a href=\"https://codepen.io/htbkoo/details/MpxqyX\">See Details</a>\n    </p>\n    <p>\n      \n    </p>\n    <p><small>This Pen uses: HTML, CSS, Babel, and Babel</small></p>\n    \n  ",
                "contentSnippet": "See the Code -\n      See it Full Page -\n      See Details\n    \n    \n      \n    \n    This Pen uses: HTML, CSS, Babel, and Babel",
                "guid": "https://codepen.io/htbkoo/pen/MpxqyX",
                "isoDate": "2017-04-24T22:49:28.000Z"
            },
            {
                "creator": "Hey",
                "date": "\n    2017-01-28T13:51:03-07:00\n  ",
                "title": "TDD Wikipedia Viewer",
                "link": "https://codepen.io/htbkoo/pen/NdwYZd",
                "dc:creator": "Hey",
                "dc:date": "\n    2017-01-28T13:51:03-07:00\n  ",
                "content": "\n    \n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/NdwYZd\"><img width=\"1024\" height=\"600\" src=\"https://codepen.io/htbkoo/pen/NdwYZd/image/large.png\"></a>\n    </p>\n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/NdwYZd\">See the Code</a> -\n      <a href=\"https://codepen.io/htbkoo/full/NdwYZd\">See it Full Page</a> -\n      <a href=\"https://codepen.io/htbkoo/details/NdwYZd\">See Details</a>\n    </p>\n    <p>\n      \n    </p>\n    <p><small>This Pen uses: HTML, CSS, JavaScript, and </small></p>\n    \n  ",
                "contentSnippet": "See the Code -\n      See it Full Page -\n      See Details\n    \n    \n      \n    \n    This Pen uses: HTML, CSS, JavaScript, and",
                "guid": "https://codepen.io/htbkoo/pen/NdwYZd",
                "isoDate": "2017-01-28T20:51:03.000Z"
            },
            {
                "creator": "Hey",
                "date": "\n    2017-07-03T16:15:55-07:00\n  ",
                "title": "TDD Show the Local Weather",
                "link": "https://codepen.io/htbkoo/pen/ZeLyqv",
                "dc:creator": "Hey",
                "dc:date": "\n    2017-07-03T16:15:55-07:00\n  ",
                "content": "\n    \n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/ZeLyqv\"><img width=\"1024\" height=\"600\" src=\"https://codepen.io/htbkoo/pen/ZeLyqv/image/large.png\"></a>\n    </p>\n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/ZeLyqv\">See the Code</a> -\n      <a href=\"https://codepen.io/htbkoo/full/ZeLyqv\">See it Full Page</a> -\n      <a href=\"https://codepen.io/htbkoo/details/ZeLyqv\">See Details</a>\n    </p>\n    <p>\n      \n    </p>\n    <p><small>This Pen uses: HTML, CSS, JavaScript, and </small></p>\n    \n  ",
                "contentSnippet": "See the Code -\n      See it Full Page -\n      See Details\n    \n    \n      \n    \n    This Pen uses: HTML, CSS, JavaScript, and",
                "guid": "https://codepen.io/htbkoo/pen/ZeLyqv",
                "isoDate": "2017-07-03T23:15:55.000Z"
            },
            {
                "creator": "Hey",
                "date": "\n    2017-06-03T15:46:10-07:00\n  ",
                "title": "Build a Tribute Page",
                "link": "https://codepen.io/htbkoo/pen/jwOyXb",
                "dc:creator": "Hey",
                "dc:date": "\n    2017-06-03T15:46:10-07:00\n  ",
                "content": "\n    \n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/jwOyXb\"><img width=\"1024\" height=\"600\" src=\"https://codepen.io/htbkoo/pen/jwOyXb/image/large.png\"></a>\n    </p>\n    <p>\n      <a href=\"https://codepen.io/htbkoo/pen/jwOyXb\">See the Code</a> -\n      <a href=\"https://codepen.io/htbkoo/full/jwOyXb\">See it Full Page</a> -\n      <a href=\"https://codepen.io/htbkoo/details/jwOyXb\">See Details</a>\n    </p>\n    <p>\n      \n    </p>\n    <p><small>This Pen uses: HTML, CSS, JavaScript, and </small></p>\n    \n  ",
                "contentSnippet": "See the Code -\n      See it Full Page -\n      See Details\n    \n    \n      \n    \n    This Pen uses: HTML, CSS, JavaScript, and",
                "guid": "https://codepen.io/htbkoo/pen/jwOyXb",
                "isoDate": "2017-06-03T22:46:10.000Z"
            }
        ];
    }
}