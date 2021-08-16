using System;
using Microsoft.EntityFrameworkCore;
using MySql.Data.EntityFrameworkCore.Extensions;

namespace RushingConsoleScraper
{
    public class LibraryContext : DbContext
    {
        public DbSet<FootballSeason> FootballSeasons { get; set; }

        public DbSet<FootballWeek> FootballWeeks { get;  set; }
        public DbSet<FootballEvent> FootballEvents { get; set; }

        //public DbSet<Publisher> Publisher { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("server=localhost;database=footballtracker;user=root;password=Conestoga1");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.Entity<Publisher>(entity =>
            //{
             //   entity.HasKey(e => e.ID);
              //  entity.Property(e => e.Name).IsRequired();
            //});

           // modelBuilder.Entity<FootballSeason>(entity =>
            //{
             //   entity.HasKey(e => e.Year);
              //  entity.HasMany<FootballWeek>(d => d.FootballWeeks);                
           // });

           // modelBuilder.Entity<FootballEvent>(entity =>
            //{
             //   entity.HasKey(e => e.Index);
            ///});

            //modelBuilder.Entity<FootballWeek>(entity =>
            //{
             //   entity.HasKey(e => e.WeekNumber);
              //  entity.HasMany<FootballEvent>(d => d.FootballGames);
            //});
        }
    }
}
