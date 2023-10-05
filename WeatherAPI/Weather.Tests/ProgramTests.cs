using System;
using System.Net;
using Newtonsoft.Json.Linq;

namespace Weather.Tests
{
	public class ProgramTests
	{
        private readonly HttpClient _client;

        public ProgramTests()
        {
            _client = new HttpClient();
        }

        // GET request to the /weather/stockholm endpoint and ensures the response
        // status code indicates success

        private async Task EnsureWeatherApiCallSucceedsAsync()
        {
            var response = await _client.GetAsync("http://localhost:7260/weather/stockholm");
            response.EnsureSuccessStatusCode();
        }

        // GET request to the /weather endpoint, parses the returned
        // JSON to retrieve the city name, and asserts that the city
        // name matches "Stockholm"

        [Fact]
        public async Task Weather_Returns_StockholmWeatherData()
        {
            var expectedCityName = "Stockholm";
            var response = await _client.GetAsync("http://localhost:7260/weather");
            var content = await response.Content.ReadAsStringAsync();
            var parsedResponse = JObject.Parse(content);
            var locationData = parsedResponse["location"];
            var cityName = locationData?["name"]?.ToString();

            Assert.Equal(expectedCityName, cityName);

        }

        // Checks the /healthcheck endpoint and asserts
        // that it returns the "OK" status

        [Fact]
        public async Task Weather_Healthcheck_Returns_Ok()
        {
            string expectedStatusCode = "OK";
            var response = await _client.GetAsync("http://localhost:7260/healthcheck");
            string actual = await response.Content.ReadAsStringAsync();

            Assert.Equal(expectedStatusCode, actual);
        }

        // Verifies that the /healthcheck endpoint returns
        // a 200 OK HTTP status code

        [Fact]
        public async Task Weather_Healthcheck_Returns_StatusCode200()
        {
            var expectedStatusCode = HttpStatusCode.OK;  
            var response = await _client.GetAsync("http://localhost:7260/healthcheck");  

            Assert.Equal(expectedStatusCode, response.StatusCode);   
        }

        // Sends an async GET request to the /counter endpoint and returns
        // the counter value parsed as a JObject

        private async Task<JObject> CounterApi_RetrievesCounterValue()
        {

            var response = await _client.GetAsync("http://localhost:7260/counter");
            response.EnsureSuccessStatusCode(); 
            var count = await response.Content.ReadAsStringAsync();
            return JObject.Parse(count);
        }
    }
}

