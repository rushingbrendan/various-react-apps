using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace baseball_tracker.Data
{
    public class BaseballEventService
    {
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

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Task<BaseballEvent[]> GetBaseballEvents()
        {
            List<BaseballEvent> baseballEvents = new List<BaseballEvent>();
            BaseballEvent baseballEvent = new BaseballEvent();

            Odds odds = new Odds();
            odds.Moneyline = -135;
            odds.Runline = +125;
            odds.RunlineType = RunlineType.Favorite;

            baseballEvent.AwayTeam = "Away Team";
            baseballEvent.HomeTeam = "Home Team";
            baseballEvent.GameTime = DateTime.Now;

            baseballEvent.AwayTeamOdds = odds;
            baseballEvent.HomeTeamOdds = odds;

            baseballEvent.HomeTeamInnings = new List<int> { 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 };
            baseballEvent.AwayTeamInnings = new List<int> { 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 };

            baseballEvent.AwayTeamScore = 8;
            baseballEvent.HomeTeamScore = 10;

            for (int i = 0; i < 5; i++)
            {
                baseballEvents.Add(baseballEvent);
            }

            return Task.FromResult(baseballEvents.ToArray());

        }
    }
}
