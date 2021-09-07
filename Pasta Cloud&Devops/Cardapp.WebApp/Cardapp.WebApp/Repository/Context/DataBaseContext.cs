
using Cardapp.WebApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Oracle.EntityFrameworkCore;
using System.IO;

namespace Cardapp.WebApp.Repository.Context
{
    public class DataBaseContext
    {
        public class DataBaseContext : DbContext
        {

            public DbSet<ItemCardapio> ItemCardapio { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                if (!optionsBuilder.IsConfigured)
                {
                    var config = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json").Build();
                    optionsBuilder.UseOracle(config.GetConnectionString("FiapSmartCityConnection"));
                }
            }
            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {

            }
        }
    }
}
