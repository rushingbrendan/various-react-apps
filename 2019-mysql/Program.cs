using System;
using System.Net;
using System.Linq;
using System.Collections.Generic;
using RushingConsoleScraper;
using MySql.Data.EntityFrameworkCore;
using System.Text;
using Npgsql;
using System.Threading.Tasks;


namespace RushingConsoleScraper
{
    class Program
    {
        static async Task Main(string[] args)
        {
            //await StartScrapper();

            await AddNflTeams();

            //Console.Write("Brendan");


            Console.WriteLine("end");
            Console.ReadLine();
        }

        public static async Task AddNflGame(FootballEvent game)
        {
            if (game == null)
                return;           

            try
            {
                await using var conn = new NpgsqlConnection(herokuConnectionString);
                await conn.OpenAsync();

                // Insert some data
                await using (var cmd = new NpgsqlCommand($"INSERT INTO nfl_games (home_team_name, home_team_score, home_team_result,            away_team_name, away_team_score, away_team_result, game_date, game_spread, game_total ) VALUES (@home_team_name, @home_team_score, @home_team_result, @away_team_name, @away_team_score, @away_team_result, @game_date, @game_spread, @game_total)", conn))
                {
                    cmd.Parameters.AddWithValue("home_team_name", $"{game.HomeTeamName}");
                    cmd.Parameters.AddWithValue("home_team_score", game.HomeTeamScore);
                    cmd.Parameters.AddWithValue("home_team_result", game.HomeTeamResult);

                    cmd.Parameters.AddWithValue("away_team_name", $"{game.AwayTeamName}");
                    cmd.Parameters.AddWithValue("away_team_score", game.AwayTeamScore);
                    cmd.Parameters.AddWithValue("away_team_result", game.AwayTeamResult);

                    cmd.Parameters.AddWithValue("game_spread", game.GameOdd);
                    cmd.Parameters.AddWithValue("game_date", game.GameDate);
                    cmd.Parameters.AddWithValue("game_total", game.GameTotal);

                    await cmd.ExecuteNonQueryAsync();                    
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }




        }

        public const string herokuConnectionString = @"
              Host=ec2-174-129-255-76.compute-1.amazonaws.com;
              Port=5432;
              Username=cvjarrcpvurfzi;
              Password=464bd2f1029bd6f0662282a68043e99773c23ba29407cf09257ef7bb50c9b817;
              Database=ddtdnt77fov6mo;
              Pooling=True;
              SSL Mode=Require;
              TrustServerCertificate=True;
            ";


        public static async Task AddNflTeams()
        {
          
            try
            {
                await using var conn = new NpgsqlConnection(herokuConnectionString);
                await conn.OpenAsync();

                for (int i = 0; i < nflTeamAbbreviations.Count(); i++)
                {
                    // Insert some data
                    await using (var cmd = new NpgsqlCommand($"INSERT INTO nfl_teams (team_name, team_abbreviation) VALUES (@a, @p)", conn))
                    {
                        cmd.Parameters.AddWithValue("a", $"{nflTeamNames[i]}");
                        cmd.Parameters.AddWithValue("p", $"{nflTeamAbbreviations[i]}");
                        //cmd.Prepare();
                        //cmd.CommandType = System.Data.CommandType.Text;
                        await cmd.ExecuteNonQueryAsync();

                        //Console.WriteLine($"Team: {nflTeamNames[i]}  Abbreviation: {nflTeamAbbreviations[i]}");
                    }
                }                
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public static List<string> nflTeamNames = new List<string>(new string[] {
            "Arizona Cardinals",
            "Atlanta Falcons",
            "Baltimore Ravens",
            "Buffalo Bills",
            "Carolina Panthers",
            "Chicago Bears",
            "Cincinnati Bengals",
            "Cleveland Browns",
            "Dallas Cowboys",
            "Denver Broncos",
            "Detroit Lions",
            "Green Bay Packers",
            "Houston Texans",
            "Indianapolis Colts",
            "Jacksonville Jaguars",
            "Kansas City Chiefs",
            "Los Angeles Chargers",
            "Los Angeles Rams",
            "Miami Dolphins",
            "Minnesota Vikings",
            "New England Patriots",
            "New Orleans Saints",
            "New York Giants",
            "New York Jets",
            "Oakland Raiders",
            "Philadelphia Eagles",
            "Pittsburgh Steelers",
            "San Francisco 49ers",
            "Seattle Seahawks",
            "Tampa Bay Buccaneers",
            "Tennessee Titans",
            "Washington Redskins"
        });

        public static List<string> nflTeamAbbreviations = new List<string>(new string[] {
            "ARI",
            "ATL",
            "BAL",
            "BUF",
            "CAR",
            "CHI",
            "CIN",
            "CLE",
            "DAL",
            "DEN",
            "DET",
            "GB",
            "HOU",
            "IND",
            "JAK",
            "KC",
            "LAC",
            "LAR",
            "MIA",
            "MIN",
            "NE",
            "NO",
            "NYG",
            "NYJ",
            "OAK",
            "PHI",
            "PIT",
            "SF",
            "SEA",
            "TB",
            "TEN",
            "WAS"
        });

        //public static Dictionary<string, string> footballEvent = new Dictionary<string, string>();
        public static List<string> objectNames = new List<string>(new string[] {
            "data-home-score",
            "data-away-score",
            "data-event-id",
            "data-index",
            "data-game-odd",
            "data-game-total",
            "data-game-date",            
            "data-competition-type",
            "data-home-team-shortname-search",
            "data-away-team-shortname-search"
            });

        public static List<string> yearURL2019 = new List<string>(new string[] {
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-09-05",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-09-12",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-09-19",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-09-26",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-10-03",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-10-10",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-10-17",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-10-24",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-10-31"

            });

        public static List<string> yearURL2018 = new List<string>(new string[] {
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-09-06",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-09-13",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-09-20",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-09-27",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-10-04",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-10-11",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-10-18",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-10-25",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-11-01",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-11-08",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-11-15",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-11-22",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-11-29",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-12-06",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-12-13",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-12-22",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-12-30"

            });

                    //"https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-01-05",
            //"https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-01-12",
            //"https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-01-20",
            //"https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-01-27",
            //"https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-02-03"

        public static async Task StartScrapper()
        {
            WebClient client = new WebClient();
            FootballSeason footballSeason2018 = new FootballSeason();
            FootballSeason footballSeason2019 = new FootballSeason();
            footballSeason2019.Year = 2019;
            footballSeason2018.Year = 2018;
                                                          
            foreach (string url in yearURL2018)
            {
                int weekCounter = 1;
                //FootballWeek footballWeek = new FootballWeek();
                string reply = client.DownloadString(url);
                string[] divs = reply.Split("cmg_game_data cmg_matchup_game_box");                
                SplitString(divs[1], "data-home-score");

                for (int i = 1; i < divs.Length; i++)
                {
                    Dictionary<string, string> footballEvent = new Dictionary<string, string>();
                    foreach (string name in objectNames)
                    {
                        string item = SplitString(divs[i], name);
                        footballEvent[name] = item;
                    }

                    try
                    {
                        var game = new FootballEvent();
                        game.AwayTeamName = footballEvent["data-away-team-shortname-search"];
                        game.HomeTeamName = footballEvent["data-home-team-shortname-search"];
                        game.CompetitionType = footballEvent["data-competition-type"];                        
                        game.GameDate = Convert.ToDateTime(footballEvent["data-game-date"]);                        
                        game.GameOdd = Convert.ToDecimal(footballEvent["data-game-odd"]);
                        game.GameTotal = Convert.ToDecimal(footballEvent["data-game-total"]);
                        game.HomeTeamScore = Convert.ToInt16(footballEvent["data-home-score"]);                        
                        game.AwayTeamScore = Convert.ToInt16(footballEvent["data-away-score"]);
                        game.Index = Convert.ToInt32(footballEvent["data-event-id"]);                        

                        if ((game.HomeTeamScore + game.GameOdd) > game.AwayTeamScore)
                        {
                            game.HomeTeamResult = 1;
                            game.AwayTeamResult = -1.1;
                        }
                        else if ((game.HomeTeamScore + game.GameOdd) < game.AwayTeamScore)
                        {
                            game.HomeTeamResult = -1.1;
                            game.AwayTeamResult = 1;
                        }
                        else if (game.AwayTeamScore == (game.HomeTeamScore + game.GameOdd))
                        {
                            game.HomeTeamResult = 0;
                            game.AwayTeamResult = 0;
                        }

                        if ((game.AwayTeamScore + game.HomeTeamScore) > game.GameTotal)
                        {
                            game.OverTotalResult = 1;
                            game.UnderTotalResult = -1.1;
                        }
                        else if ((game.AwayTeamScore + game.HomeTeamScore) < game.GameTotal)
                        {
                            game.OverTotalResult = -1.1;
                            game.UnderTotalResult = 1;
                        }
                        else if ((game.AwayTeamScore + game.HomeTeamScore) == game.GameTotal)
                        {
                            game.OverTotalResult = 0;
                            game.UnderTotalResult = 0;
                        }

                        //footballWeek.WeekNumber = i;
                        // footballWeek.FootballGames.Add(game);


                        //var request = footballSeason2018.FootballWeeks.FirstOrDefault(x => x.WeekNumber == i);
                        //request.FootballGames.Add(game);
                        //footballSeason2018.FootballWeeks.Add(new FootballWeek{ WeekNumber = i, FootballGames = game as ICollection<FootballEvent> });
                        int z = 2;

                        await AddNflGame(game);
                        

                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(e);
                    }

                }

                weekCounter++;
                //footballSeason2018.FootballWeeks.Add(footballWeek);
                //int y = 6;
                //Console.WriteLine(reply);                
            }


            //InsertData(footballSeason2018);
            //Console.WriteLine("Done");

            
        }

        public static string SplitString(string inputString, string objectName)
        {
            string returnString = string.Empty;
            
            string[] first = inputString.Split(" ");

            //string[] second = first[1].Split("=");

            string myObject = first.FirstOrDefault(x => x.Contains(objectName));

            if (myObject == null)
                return returnString;

            string[] splitMyObject = myObject.Split("=");

            myObject = splitMyObject[1].Replace("\"", "");

            return myObject;
        }

        private static void InsertData(FootballSeason footballSeason)
        {
            using (var context = new LibraryContext())
            {
                // Creates the database if not exists
                context.Database.EnsureCreated();

                //context.FootballSeason.Add(footballSeason);
               
                // Saves changes
                context.SaveChanges();
            }
        }

        private static void TeamData(string teamName)
        {
            using (var context = new LibraryContext())
            {
                //var season = context.FootballSeason                    
                 //   .FirstOrDefault(x => x.Year == 2018);

                //foreach (var week in season.FootballWeeks)
               // {
                //    if (week == null)
               //         continue;

                 //   Console.WriteLine($"Week: {week.WeekNumber}");
                 //   foreach(var game in week.FootballGames)
                  //  {
                //        if (game == null)
                 //           continue;
                 //
                  //      Console.WriteLine($"Game: {game.GameOdd}");
                  //  }                    
                }


                //var teamGames = season.FootballWeeks.Where(x => x.FootballGames.Any(y => y.AwayTeamName == teamName || y.HomeTeamName == teamName));

                int y = 3;

                
                    
            //}

        }
        
    }
}





