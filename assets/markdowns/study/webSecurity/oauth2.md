# OAuth 2.0

###### References
- [The Simplest Guide To OAuth 2.0](https://darutk.medium.com/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb)
- [Diagrams And Movies Of All The OAuth 2.0 Flows](https://darutk.medium.com/diagrams-and-movies-of-all-the-oauth-2-0-flows-194f3c3ade85)
- [An Illustrated Guide to OAuth and OpenID Connect | Okta Developer](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc#jot-this-down-an-id-token-is-a-jwt)

## Steps and why 

## OpenID Connect (OIDC)
- the flow looks the same as `OAuth`
- only differences:
    - in the initial request, a specific scope of `openid` is used
    - in the final exchange the `Client` receives both an `Access Token` and an `ID token`

## OAuth 2.0 Flows
1. Authorization Code Flow 

### Authorization Code Flow
