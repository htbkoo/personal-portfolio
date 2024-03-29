# OAuth 2.0

###### References
1. [The Simplest Guide To OAuth 2.0](https://darutk.medium.com/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb)
2. (https://darutk.medium.com/diagrams-and-movies-of-all-the-oauth-2-0-flows-194f3c3ade85)

## Steps and why 

## Flows

#### MAC = Message Authentication Code 
- a small code to allow receivers of messages to authenticate sender (i.e. know who the sender is)
- calculated using `message` and `secret key`
- can verify the `message` + `code` with the `secret key`
- **can** use hash function to create the `code`

##### Recap: Hash function
- unlikely to collide (i.e. same output for different input)
- same input always gives same output
- unpredictable output (any changes to input results in seemingly random changes to output)

#### HMAC = Hash-Based Message Authentication Code
- one kind of MAC
- use two rounds of hashing instead of one (or none) in MAC
- each round of hashing uses section of secret key

##### Reason for 2 rounds hash
- avoid `length extension attack`
    - with many hash functions, it is easy to change message (without knowing the key) and obtain another valid MAC
- no known `extension attacks` exist for current HMAC spec

### HMAC with JWTs
- can use for authentication in web app
- can keep track who is who
