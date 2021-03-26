# JWT (json-web-token) 

###### References
- [Introduction to JSON Web Tokens](https://jwt.io/introduction)
- [Why JWTs Suck as Session Tokens | Okta Developer](https://developer.okta.com/blog/2017/08/17/why-jwts-suck-as-session-tokens)

## What is JSON Web Token (JWT)
- an **open standard** ([RFC 7519](https://tools.ietf.org/html/rfc7519))
    - defines a **compact and self-contained** way for **securely transmitting information between parties** as a **JSON object**
- can verify and trust information because it is digitally signed
- can be signed using a secret (with the `HMAC` algorithm) or a public/private key pair (using `RSA` or `ECDSA`)

- main usage is **signed tokens**
    - can verify **integrity** of the claims contained within the token
- can be **encrypted** to also provide **secrecy** between parties
    - can hide the claims within token from other parties
    - when signed using public/private key paris, signature can certify only the party holding the private key is the one that signed it

