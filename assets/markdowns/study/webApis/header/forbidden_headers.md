# HTTP Header - Forbidden header name

### [Forbidden header name](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name)

- name of any HTTP header that cannot be modified programmatically 
    - specifically, HTTP **request** header name
- modification is forbidden because user agent retains full control over them

#### Example
- header names start with `Proxy-`
- header names start with `Sec-` (reserved for creating new headers safe from APIs using Fetch that grant developers control over headers, such as `XMLHttpRequest`)
- are one of the following:
    - Accept-Charset
    - Accept-Encoding
    - Access-Control-Request-Headers
    - Access-Control-Request-Method
    - Connection
    - Content-Length
    - Cookie
    - Cookie2
    - Date
    - DNT
    - Expect
    - Feature-Policy
    - Host
    - Keep-Alive
    - Origin
    - Proxy-
    - Sec-
    - Referer
    - TE
    - Trailer
    - Transfer-Encoding
    - Upgrade
    - Via

### [Forbidden **response** header name](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_response_header_name)

- same as above but for **reponse** header
- either `Set-Cookie` or `Set-Cookie2`

#### [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) vs [`Set-Cookie2`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie2)

1. **TL;DR:** `Set-Cookie2` is deprecated and NOT widely implemented, don't use it
2. [`Set-Cookie2 allowed you to restrict your cookie to a list of ports to which the cookie may be sent`](https://stackoverflow.com/a/59887841)

###### Reference
1. [Difference between set-cookie2 and set-cookie](https://stackoverflow.com/questions/9462180/difference-between-set-cookie2-and-set-cookie)
2. [RFC 6265 - HTTP State Management Mechanism](https://tools.ietf.org/html/rfc6265)
