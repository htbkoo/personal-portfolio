# HMAC

###### References
1. [HMAC and MAC Explained: How To Build Secure Authentication With JWTs](https://hackernoon.com/hmac-and-mac-explained-how-to-build-secure-authentication-with-jwts-jc8b3ylb
   )
2. [HMAC - Wikipedia](https://en.wikipedia.org/wiki/HMAC)

### HMAC vs MAC

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
