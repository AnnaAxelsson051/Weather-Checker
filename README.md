# Weather

## Description

This project offers a comprehensive solution focused on retrieving weather data, underpinned by an agile work methodology, Test-Driven Development (TDD), and a seamless CI/CD integration with Azure. The platform hosts an API tailored to fetch real-time weather conditions such as temperature, humidity, and wind for a user selected city. A React client interfaces with the Weather API, allowing end-users to not only extract current weather metrics for Stockholm but also set and recall a favorite city throughout the app's operational session. For system owners, this infrastructure provides the ability to constantly monitor the API's health status and gather analytical data, specifically the count of API calls made since the platform's inception.

## Technologies and methodology

- ASP.NET Core
- C#
- React
- CI/CD
- XUnit
- TDD
- Azure


## Workflow

During the construction of this application, I followed these steps:

- I began by adding a test to ensure the API call functionality was working correctly.
- Next, I initialized the /weather endpoint. When accessed via a GET request, this endpoint creates a new HttpClient instance but initially neither processed nor returned any response.
- (P1), I added a failing test aimed at fetching the weather data for Stockholm.
- I subsequently defined the /weather route to retrieve Stockholm's current weather using the Weather API. This route either utilizes a given API key or defaults to a preset one. After implementation, the weather data is returned as a JSON response, leading the previously failing test to succeed.
- (P3), I added another failing test to ensure the /healthcheck endpoint returned an "OK" status code. At this stage, the /healthcheck GET request was established but provided an empty response.
- I then modified the /healthcheck endpoint to consistently return “OK”, which caused the aforementioned test to pass.
- To enhance the application's robustness, I incorporated a test to guarantee the /healthcheck endpoint returns an HTTP status code of 200 (OK) when accessed.
- (P4), I then added a failing test procedure that, in an asynchronous manner, retrieves the counter's value from the designated URL and expects it as a JSON object. Concurrently, I drafted an unimplemented /counter endpoint.
- Finally, I implemented the counter endpoint and its associated functionalities, resulting in the preceding test's success.

This organized approach, utilizing priorities and a Test-Driven Development methodology, ensured each component was rigorously checked before its respective implementation.

This is the workflow I proceeded with when constructing this application:

- Started with adding a test to check so that the calling the API works
- Then moved on to initializing the /weather endpoint, when accessed via a GET request it initializes a new instance of HttpClient but doesn't do anything with it or return any response
- (P1) Then added a falling test for fetching weather data for Stockholm
- Then defined a route /weather that fetches the current weather for Stockholm using the Weather API, optionally using a provided API key or a default one, and then returns the weather data as a JSON response - which caused the previous test to pass
- (P3) Then added a failing test that checks that accessing the /healthcheck endpoint of the local server returns an "OK" status code, along with an unimplemented /healthcheck GET request to an empty response action
- Then modified the /healthcheck endpoint to return “OK” - which caused the previous test to pass.
- Then added a test that verifies that accessing the /healthcheck endpoint of the specified URL returns an HTTP status code of 200 (OK)
- (P4) Then added a failing test method that asynchronously fetches the counter value from the specified URL and returns it as a JSON object along with an un implemented /counter endpoint
- Then implement the counter endpoint and functionality - which causedprevious test to pass