# Weather

## Description

This project offers a comprehensive solution focused on retrieving weather data, underpinned by an agile work methodology, Test-Driven Development (TDD), and a seamless CI/CD integration with Azure. The platform hosts an API tailored to fetch real-time weather conditions such as temperature, humidity, and wind for a user selected city. A React client interfaces with the Weather API, allowing end-users to not only extract current weather metrics for Stockholm but also set and recall a favorite city throughout the app's operational session. For system owners, this infrastructure provides the ability to constantly monitor the API's health status and gather analytical data, specifically the count of API calls made since the platform's inception.

## Technologies used

## Workflow

- Started with adding a test to check so that the calling the API works
- Then moved on to initializing the /weather endpoint, when accessed via a GET request it initializes a new instance of HttpClient but doesn't do anything with it or return any response
- (P1) Then added a falling test for fetching weather data for Stockholm
- Then defined a route /weather that fetches the current weather for Stockholm using the Weather API, optionally using a provided API key or a default one, and then returns the weather data as a JSON response - which caused the previous test to pass
- (P3) Then added a failing test that checks that accessing the /healthcheck endpoint of the local server returns an "OK" status code, along with an unimplemented /healthcheck GET request to an empty response action
- Then modified the /healthckech endpoint to return “OK” - which caused the previous test to pass.
- Then added a test that verifies that accessing the /healthcheck endpoint of the specified URL returns an HTTP status code of 200 (OK)
- (P4) Then added a failing test method that asynchronously fetches the counter value from the specified URL and returns it as a JSON object along with an un implemented /counter endpoint
- Then implement the counter endpoint and functionality - which causedprevious test to pass