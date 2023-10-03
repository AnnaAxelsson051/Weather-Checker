using System;
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

        private async Task EnsureWeatherApiCallSucceedsAsync()
        {
            var response = await _client.GetAsync("http://localhost:7260/weather/stockholm");
            response.EnsureSuccessStatusCode();
        }


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
    }
}

