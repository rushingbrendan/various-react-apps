using System;
namespace baseball_tracker
{
    public class Odds
    {
        /// <summary>
        /// Moneyline odds
        /// </summary>
        public int Moneyline { get; set; }

        /// <summary>
        /// Runline type
        /// Favorite is -1.5
        /// Underdog is +1.5
        /// </summary>
        public RunlineType RunlineType { get; set; }

        /// <summary>
        /// Runline odds
        /// </summary>
        public int Runline { get; set; }
    }
}
