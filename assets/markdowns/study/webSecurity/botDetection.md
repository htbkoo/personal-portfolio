# Bot Detection

###### Reference
- [Bot detection: how to identify and block bot traffic to your websites, mobile apps, and APIs](https://datadome.co/bot-management-protection/bot-detection-how-to-identify-bot-traffic-to-your-website/)

## Summary

## Generations of Bots
1. `Gen 1 bots`
    1. simple crawlers
    2. perform basic automated tasks (e.g. scraping information from a web page)
    3. do NOT maintain a session cookie
    4. easy to identify as bots
    
2. `Gen 2 bots`
    1. web crawlers, e.g. `Nutch`, `Scrapy`
    2. JavaScript firing is absent
    3. quite easy to detect
    
3. `Gen 3 bots`
    1. look like browsers, e.g. `PhantomJS`, `CasperJS`
    2. low and slow attacks
    3. volume-based thresholding becomes ineffective
    3. requires challenge tests and fingerprinting to detect
    
4. `Gen 4 bots`
