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

## When to use
- **Authorization**
    - the most common scenario for using JWT
    - once user is logged in, each subsequent request will include the JWT
        - allow user to access routes, services and resources permitted with that token
    - Single Sign On (SSO) is a feature that widely uses JWT nowadays
        - because of the small overhead and ability to be easily used across different domains
- **Information Exchange**
    - JWTs are a good way of securely transmitting information between parties
        - because JWT can be signed (e.g. using public/private key pairs) and can confirm senders are what they claimed to be
    - can also verify that content has not been tampered with
        - because signature is calculated using `header` + `payload` 

## Structure
- in the compact form, consist of **3 parts** separated by **dots (`.`)**
    - Header
    - Payload
    - Signature
- typically looks like this: `xxxxx.yyyyy.zzzzz`

### Header
