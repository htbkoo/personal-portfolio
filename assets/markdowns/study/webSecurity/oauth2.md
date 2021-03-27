# OAuth 2.0

###### References
- [The Simplest Guide To OAuth 2.0](https://darutk.medium.com/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb)
- [Diagrams And Movies Of All The OAuth 2.0 Flows](https://darutk.medium.com/diagrams-and-movies-of-all-the-oauth-2-0-flows-194f3c3ade85)
- [An Illustrated Guide to OAuth and OpenID Connect | Okta Developer](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc#jot-this-down-an-id-token-is-a-jwt)
- [Auth0 | Docs](https://auth0.com/docs/get-started)

## Steps and why 

## OpenID Connect (OIDC)
- the flow looks the same as `OAuth`
- only differences:
    - in the initial request, a specific scope of `openid` is used
    - in the final exchange the `Client` receives both an `Access Token` and an `ID token`

## [OAuth 2.0 Flows](https://auth0.com/docs/flows)
1. Authorization Code Flow 
2. Authorization Code Flow with Proof Key for Code Exchange (PKCE)
3. Implicit Flow with Form Post
4. Hybrid Flow
5. Client Credentials Flow
6. Device Authorization Flow
7. Resource Owner Password Flow

### [Authorization Code Flow](https://auth0.com/docs/flows/authorization-code-flow)

### [Authorization Code Flow with Proof Key for Code Exchange (PKCE)](https://auth0.com/docs/flows/authorization-code-flow-with-proof-key-for-code-exchange-pkce)

###### More References
- [Implement the OAuth 2.0 Authorization Code with PKCE Flow](https://developer.okta.com/blog/2019/08/22/okta-authjs-pkce)
- [What the heck is PKCE](https://medium.com/identity-beyond-borders/what-the-heck-is-pkce-40662e801a76)
- [OAuth 2.0 | PKCE | RFC 7636: Proof Key for Code Exchange](https://oauth.net/2/pkce/)

#### Introduction
- an enhanced version of `Authorization Code Flow` to make use of a `Proof Key for Code Exchange (PKCE)`
    - defined in [`OAuth 2.0 RFC 7636`](https://tools.ietf.org/html/rfc7636)
- `Code Verifier`
    - a secret created by the calling application
    - to be verified by the authorization server
- `Code Challenge`
    - a transform value of the `Code Verifier` 
    - also created by the calling application
    - sent over HTTPS to receive an `Authorization Code`
    - malicious attacker can only intercept the Authorization Code but canNOT exchnage it for a token without the `Code Verifier`

#### Why  
- when **public clients** (e.g. **native** and **single-page applications**) request Access Tokens, some additional security concerns are posed that are not mitigated by the Authorization Code Flow alone, because:
    - Native apps:
        - cannot securely store Client Secret 
            - decompiling the app will reveal the Client Secret
            - Client Secret is bound to the app and is the same for all users and devices
        - may make use of custom URL scheme to capture redirects (e.g. `MyApp://`)
            - potentially allows malicious applications to receive the Authorization Code from the Authorization Server
    - Single-page apps
        - cannot securely store Client Secret
            - the entire source is available to the browser

#### How it works

(Because PKCE-enhanced Authorization Code Flow builds upon the standard Authorization Code Flow, the steps are very similar)

1. User clicks **Login** within the application
2. SDK creates a cryptographically-random `code_verifier` and from this generates a `code_challenge`
3. SDK redirects user to Authorization Server (`/authorize` endpoint) along with the `code_challenge`
4. Authorization Server redirects user to login and authorization prompt
5. User authenticates using one of the configured login options
    5a. User may see a consent page listing the permissions that would be given to the application
6. Authorization Server stores the `code_challenge` and redirects user back to the application with an authorization `code`
    6a. the `code` is only good for one use
7. SDK sends this `code` and `code_verifier` (created in step 2) to the Authorization Server (`/oauth/token` endpoint)
8. Authorization Server verifies the `code_challenge` and `code_verifier`
9. Authorization Sever responds with `ID Token` and `Access Token` (and optionally a `Refresh Token`).
10. Application can use `Access Token` to call a protected API
11. API responds with requested data
