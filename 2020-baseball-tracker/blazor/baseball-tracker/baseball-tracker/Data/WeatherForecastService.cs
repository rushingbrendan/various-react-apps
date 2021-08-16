using System;
using System.Linq;
using System.Threading.Tasks;
//using Microsoft.AspNetCore.Http;

namespace baseball_tracker.Data
{
    public class WeatherForecastService
    {
//        private HttpClient _httpClient;

        //public WeatherForecastService(HttpClient httpClient)
       // {
         //   _httpClient = httpClient;
        //}

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public Task<WeatherForecast[]> GetForecastAsync(DateTime startDate)
        {
            var rng = new Random();
            return Task.FromResult(Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = startDate.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            }).ToArray());
        }

       // public async Task<WeatherForecast[]> GetForecastAPI()
       // {
            //var client = new Microsoft.AspNetCore.Http.;
            

            //          string sUrl = _ApiUrlBase + "api/pizzamenu";
            //            return await _httpClient.GetJsonAsync<Menu>(sUrl);

            //return await client.GetJsonAsync<WeatherForecast[]>("api/TodoItems");
        //}
    }
}
