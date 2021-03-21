# Different Storage mechanisms in Web

## Client-side storage

###### Reference

1. [What is the difference between localStorage, sessionStorage, session and cookies?](https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies)
2. [Local Storage vs Session Storage vs Cookie](https://krishankantsinghal.medium.com/local-storage-vs-session-storage-vs-cookie-22655ff75a8)
3. [How is localStorage different from indexedDB?](https://softwareengineering.stackexchange.com/questions/219953/how-is-localstorage-different-from-indexeddb)

### [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

1. Local Storage
2. Session Storage

### [Cookies](https://developer.mozilla.org/en-US/docs/Glossary/Cookie)

- Small piece of information left on the visitor's computer by a website via browser
    - i.e. only piece of data; NOT programs
- Used for personalizing user's web experience
    - may contains user's preferences or inputs
    - user can customize browser to accept, reject or delete cookie
- Send along with Request

#### Usage

- Set and modified
    - at server level: use `Set-Cookie` HTTP header
        - syntax:
            ```
            Set-Cookie: <name>=<value>[; <Max-Age>=<age>]
            `[; expires=<date>][; domain=<domain_name>]
            [; path=<some_path>][; secure][; HttpOnly]
            ```
    - with JavaScript: user `document.cookie`

##### Flags

- `HttpOnly`
    - an additional flag included in `Set-Cookie` HTTP response header
    - optional
    - when included, the cookie canNOT be accessed through client side script (if browser supports this flag)
        - thus helps mitigate the risk of client side script accessing the protected cookie
        - the cookie would NOT be revealed to a third party even if cross-site scripting (XSS) flaw exists and the user accidentally accesses a link that exploits the flaw 
    - this flag will be ignored if the browser does not support it

###### Reference:

- [OWASP | HttpOnly - Set-Cookie HTTP response header](https://owasp.org/www-community/HttpOnly)
- [Securing Cookies with HttpOnly and secure Flags [Updated 2020]](https://resources.infosecinstitute.com/topic/securing-cookies-httponly-secure-flags/)

####   
