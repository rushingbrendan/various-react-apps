using System;
using System.Collections;
using System.Collections.Generic;
namespace RushingConsoleScraper
{
    public class FootballWeek
    {
        //public List<FootballEvent> FootballGames {get;set;}

        public virtual ICollection<FootballEvent> FootballGames { get; set; }
        public int WeekNumber { get; set; }

        public FootballWeek()
        {
            //FootballGames = new List<FootballEvent>();
            this.FootballGames = new HashSet<FootballEvent>();
        }

        
    }
}
