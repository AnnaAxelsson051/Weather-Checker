# Weather Checker

## Description

This project offers a comprehensive solution focused on retrieving weather data, underpinned by an agile work methodology, Test-Driven Development (TDD), and a seamless CI/CD integration with Azure. The platform hosts an API tailored to fetch real-time weather conditions such as temperature, humidity, and wind for a user selected city. A React client interfaces with the Weather API, allowing end-users to not only extract current weather metrics for Stockholm but also set and recall a favorite city throughout the app's operational session. For system owners, this infrastructure provides the ability to constantly monitor the API's health status and gather analytical data, specifically the count of API calls made since the platform's inception.

---

## Technologies and methodology

- ASP.NET Core
- C#
- React
- CI/CD
- XUnit
- TDD
- Azure

---

## Documentation

During the construction of this application, I followed these steps:

### Workflow for backend and testing

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

### Workflow for frontend

- I initially added a navigation section with responsively for mobile along with styling.
- I then added an intro section with styling, to provide the user with an explanation of what the app does
- I then added carousel component
- I then added arrowbuttons component to navigate the carousel
- I then added a component to display the actual weather
- Added component for adding cities
- Add functionality for API health check and api status