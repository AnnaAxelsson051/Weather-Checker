using System;
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
    }
}

