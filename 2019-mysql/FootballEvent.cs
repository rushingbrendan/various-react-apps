using System;
using System.Collections.Generic;

namespace RushingConsoleScraper
{
    public class FootballEvent
    {
        public int Index
        {
            get;
            set;

        }
        public int HomeTeamScore
        {
            get;
            set;
        }

        public int AwayTeamScore
        {
            get;
            set;
        }

        public decimal GameOdd
        {
            get;
            set;
        }

        public decimal GameTotal
        {
            get;
            set;
        }

        public DateTime GameDate
        {
            get;
            set;
        }

        public string CompetitionType
        {
            get;
            set;
        }

        public string AwayTeamName
        {
            get;
            set;
        }

        public string HomeTeamName
        {
            get;
            set;
        }

        public double HomeTeamResult
        {
            get;
            set;
        }

        public double AwayTeamResult
        {
            get;
            set;
        }

        public double OverTotalResult
        {
            get;
            set;
        }

        public double UnderTotalResult
        {
            get;
            set;
        }        
    }

    public interface ICollection
    {
    }
}
