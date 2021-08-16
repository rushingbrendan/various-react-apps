using System;
using System.Text;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Linq;
using System.Collections.Generic;
using RushingConsoleScraper;


namespace _2019_mysql
{
    class Program
    {
        static void Main(string[] args)
        {
            InsertData();
            PrintData();
        }

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
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2018-12-30",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-01-05",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-01-12",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-01-20",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-01-27",
            "https://www.covers.com/Sports/NFL/Matchups?selectedDate=2019-02-03"






            });


        public static void StartScrapper()
        {
            WebClient client = new WebClient();
            FootballSeason footballSeason2018 = new FootballSeason();
            FootballSeason footballSeason2019 = new FootballSeason();
            footballSeason2019.Year = 2019;
            footballSeason2018.Year = 2018;



            foreach (string url in yearURL2019)
            {
                FootballWeek footballWeek = new FootballWeek();
                string reply = client.DownloadString(url);
                string[] divs = reply.Split("cmg_game_data cmg_matchup_game_box");
                //string[] events = reply.Split(" >");
                SplitString(divs[1], "data-home-score");



                for (int i = 1; i < divs.Length; i++)
                {
                    Dictionary<string, string> footballEvent = new Dictionary<string, string>();
                    foreach (string name in objectNames)
                    {
                        string item = SplitString(divs[i], name);
                        footballEvent[name] = item;
                    }

                    var game = new FootballEvent();
                    game.AwayTeamName = footballEvent["data-away-team-shortname-search"];
                    game.HomeTeamName = footballEvent["data-home-team-shortname-search"];
                    game.CompetitionType = footballEvent["data-competition-type"];
                    game.EventId = footballEvent["data-event-id"];
                    game.GameDate = footballEvent["data-game-date"];
                    game.GameOdd = footballEvent["data-game-odd"];
                    game.GameTotal = footballEvent["data-game-total"];
                    game.HomeTeamScore = footballEvent["data-home-score"];
                    game.Index = footballEvent["data-index"];
                    game.AwayTeamScore = footballEvent["data-away-score"];

                    footballWeek.Games.Add(game);
                    Week.Add(footballEvent);
                }

                footballSeason2019.footballWeeks.Add(footballWeek);
                //Console.WriteLine(reply);                
            }

            foreach (string url in yearURL2018)
            {
                FootballWeek footballWeek = new FootballWeek();
                string reply = client.DownloadString(url);
                string[] divs = reply.Split("cmg_game_data cmg_matchup_game_box");
                //string[] events = reply.Split(" >");
                SplitString(divs[1], "data-home-score");



                for (int i = 1; i < divs.Length; i++)
                {
                    Dictionary<string, string> footballEvent = new Dictionary<string, string>();
                    foreach (string name in objectNames)
                    {
                        string item = SplitString(divs[i], name);
                        footballEvent[name] = item;
                    }

                    var game = new FootballEvent();
                    game.AwayTeamName = footballEvent["data-away-team-shortname-search"];
                    game.HomeTeamName = footballEvent["data-home-team-shortname-search"];
                    game.CompetitionType = footballEvent["data-competition-type"];
                    game.EventId = footballEvent["data-event-id"];
                    game.GameDate = footballEvent["data-game-date"];
                    game.GameOdd = footballEvent["data-game-odd"];
                    game.GameTotal = footballEvent["data-game-total"];
                    game.HomeTeamScore = footballEvent["data-home-score"];
                    game.Index = footballEvent["data-index"];
                    game.AwayTeamScore = footballEvent["data-away-score"];

                    footballWeek.Games.Add(game);
                    Week.Add(footballEvent);
                }

                footballSeason2018.footballWeeks.Add(footballWeek);
                //Console.WriteLine(reply);                
            }


            int y = 2;


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


        private static void InsertData()
        {
            using (var context = new LibraryContext())
            {
                // Creates the database if not exists
                context.Database.EnsureCreated();

                // Adds a publisher
                var publisher = new Publisher
                {
                    Name = "Mariner Books"
                };
                context.Publisher.Add(publisher);

                // Adds some books
                context.Book.Add(new Book
                {
                    ISBN = "978-0544003415",
                    Title = "The Lord of the Rings",
                    Author = "J.R.R. Tolkien",
                    Language = "English",
                    Pages = 1216,
                    Publisher = publisher
                });
                context.Book.Add(new Book
                {
                    ISBN = "978-0547247762",
                    Title = "The Sealed Letter",
                    Author = "Emma Donoghue",
                    Language = "English",
                    Pages = 416,
                    Publisher = publisher
                });

                // Saves changes
                context.SaveChanges();
            }
        }

        private static void PrintData()
        {
            // Gets and prints all books in database
            using (var context = new LibraryContext())
            {
                var books = context.Book
                  .Include(p => p.Publisher);
                foreach (var book in books)
                {
                    var data = new StringBuilder();
                    data.AppendLine($"ISBN: {book.ISBN}");
                    data.AppendLine($"Title: {book.Title}");
                    data.AppendLine($"Publisher: {book.Publisher.Name}");
                    Console.WriteLine(data.ToString());
                }
            }
        }
    }
}
