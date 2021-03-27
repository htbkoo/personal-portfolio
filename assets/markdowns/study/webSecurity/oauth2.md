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
- when **public clients** (e.g. **native** and **single-page applications**) request Access Tokens, some additional security concerns are posed that are not mitigated by the Authorization Code Flow alone, because:
    - Native apps:
        - cannot securely store Client Secret 
            - decompiling the app will reveal the Client Secret
            - Client Secret is bound to the app and is the same for all users and devices
        - may make use of custom URL scheme to capture redirects (e.g. `MyApp://`)
            - potentially allows malicious applications to receive the Authorization Code from the Authorization Server
    - 

#### How it works
1. 
