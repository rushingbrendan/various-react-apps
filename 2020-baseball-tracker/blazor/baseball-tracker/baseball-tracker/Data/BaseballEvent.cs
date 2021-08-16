using System;
using System.Collections.Generic;

namespace baseball_tracker
{
    public class BaseballEvent
    {
        public string HomeTeam { get; set; }
        public string AwayTeam { get; set; }

        public Odds HomeTeamOdds { get; set; }
        public Odds AwayTeamOdds { get; set; }

        public int HomeTeamScore { get; set; }
        public int AwayTeamScore { get; set; }

        public List<int> HomeTeamInnings { get; set; }
        public List<int> AwayTeamInnings { get; set; }

        public DateTime GameTime { get; set; }

        public BaseballEvent()
        {
            HomeTeamInnings = new List<int>();
            AwayTeamInnings = new List<int>();
        }

    }
}
