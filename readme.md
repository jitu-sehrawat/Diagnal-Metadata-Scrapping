# METADATA SCRAPING FROM A GIVEN WEB PAGE URL

**General Overview**
You’re required to scrape an input URL and parse its metadata. If the page has OG parameters set exclusively, then you must return all the OG parameters. If they are not set, you
must parse the webpage to get relevant details such as title, description, images etc. The script should work similar to the tool provided by Facebook: http://bit.ly/2QDhxRY
Details on OGP ( Open Graph Parameters ) can be found at: http://ogp.me/


## Design Requirements
Your application must be a RESTful service to which the URL to be fetched is given as a POST request. For example,
`POST application/json
{
	"url:" "http://www.amazon.com/Apple-iPhone-16gb-Space-Unlocked/dp/B00NQGP42Y/"
}` 

Above request must return response similar to the following:
`{
	"title": "Apple iPhone 6, 16gb, Space Gray, Unlocked",
	"description": "Built on 64-bit desktop-class architecture, the new A8 chip delivers more power.",
	"images": [
		"http://amazon.com/sample_image1.jpg",
		"http: //amazon.com/sample_image2.jpg"
	]
}`
Implement caching if needed.

## Technical Requirements
- Code must be in Nodejs
- Application should be lightweight.
- Expressjs maybe used as the server application framework.
- You may use 3 rd party libraries for parsing XML.
- Think of caching strategies for improving performance

## Notes

- Push the source code to a GitHub repo
- Write the unit tests for core functions.
- Include Readme/Release notes along with code.
- Think about usability & extensibility(Provider notes if necessary).
- Demonstrate your ability to write maintainable, self explanatory code.
- Extra points for:
	- Readable code
	- Unit tests & 100% coverage
	- Following JS best practices
	- Hosting to Heroku/AWS
	- Modular code


## Server
- Install modules: **npm i**
- Start Server: **npm run dev**
- Run Test Case: **npm run test**

## Endpoint
`curl --location --request POST 'http://localhost:3000/scrapper/ogp' \
--header 'Content-Type: application/json' \
--data-raw '{
    "url": "https://diagnal.com/"
}'`