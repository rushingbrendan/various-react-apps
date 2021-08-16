using System;
using System.Collections.Generic;

namespace RushingConsoleScraper
{
    public class FootballSeason
    {
        //public List<FootballWeek> FootballWeeks { get; set; }
        public virtual ICollection<FootballWeek> FootballWeeks { get; set; }

        public int Year { get; set; }

        public FootballSeason()
        {
            //this.FootballEvents
            //FootballWeeks = new List<FootballWeek>();
            this.FootballWeeks = new HashSet<FootballWeek>();

           // for (int i = 1; i < 17; i++)
           // {
              //  FootballWeek currentWeek = new FootballWeek();
              //  currentWeek.WeekNumber = i;
             //   FootballWeeks.Add(currentWeek);
            //}
            
        }

        

    }
}
