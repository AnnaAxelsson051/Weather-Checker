using Weather;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

var configuration = new ConfigurationBuilder()
    .SetBasePath(builder.Environment.ContentRootPath)
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables()
    .Build();

// Add services to the container.
builder.Services.AddAuthorization();
builder.Services.AddSingleton<ApiHitTracker>(); 

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("corsapp");

app.UseRouting();

app.UseAuthorization();

var serviceProvider = app.Services;
var counter = app.Services.GetRequiredService<ApiHitTracker>();

// Fetches and returns the current weather data for the specified city from the Weather API,
// while also incrementing the request counter

app.MapGet("/weather/{city}", (string city) =>
{
    var client = new HttpClient();
    var apiKey = configuration["WeatherAPIKey"];
    if (string.IsNullOrEmpty(apiKey))
    {
        apiKey = "fe248f10eb2041e3a47155604230310";
    }
    var baseUrl = "http://api.weatherapi.com/v1/current.json?key=";
    var response = client.GetAsync($"{baseUrl}{apiKey}&q={city}").Result;
    var content = response.Content.ReadAsStringAsync().Result;
    counter.IncrementCount();

    return Results.Content(content, contentType: "application/json");
});

// fetches and returns the current weather data for Stockholm from the Weather API,
// while also incrementing the request counter

app.MapGet("/weather", () =>
        {
            var client = new HttpClient();
       var apiKey = configuration["WeatherAPIKey"];

       if (string.IsNullOrEmpty(apiKey))
       {
           apiKey = "fe248f10eb2041e3a47155604230310";
       }

       var baseUrl = "http://api.weatherapi.com/v1/current.json?key=";

            var response = client.GetAsync($"{baseUrl}{apiKey}&q=stockholm").Result;
            var content = response.Content.ReadAsStringAsync().Result;

            counter.IncrementCount();

            return Results.Content(content, contentType: "application/json");
  
            });

           // Increments the request counter and returns a status of "OK"

           app.MapGet("/healthcheck", () =>
           {
               counter.IncrementCount();
               return "OK";
           });

           // Tetrieves and returns the current request count

           app.MapGet("/counter", () =>
           {
               var count = counter.GetCount();
               var result = new { Count = count };
               return Results.Json(result, contentType: "application/json");
           });

           app.Run();


