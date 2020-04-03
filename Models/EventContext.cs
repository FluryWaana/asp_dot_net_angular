using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_MVC_ANGULAR.Models
{
    public class EventContext : DbContext
    {
        public DbSet<Event> Events { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Participate> Participates { get; set; }

        public EventContext()
        {

        }

        public EventContext(DbContextOptions<EventContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Participate>().HasKey(p => new { p.UserId, p.EventId });
            modelBuilder.Entity<User>().HasOne(p => p.Role).WithMany(b => b.Users);
            modelBuilder.Entity<User>().HasIndex(p => p.Email).IsUnique(true);
            modelBuilder.Entity<Event>().HasOne(e => e.Cagegory).WithMany(ce => ce.Events);

            modelBuilder.Entity<Role>().HasData(
                new Role()
                {
                    RoleId = 1,
                    RoleName = "administrateur"
                },
                new Role()
                {
                    RoleId = 2,
                    RoleName = "modédateur"
                },
                new Role()
                {
                    RoleId = 3,
                    RoleName = "utilisateur"
                }
            );

            modelBuilder.Entity<User>().HasData(
                new User()
                {
                    UserId = 1,
                    Email = "admin@admin.com",
                    FirstName = "jean",
                    LastName = "rigole",
                    Password = "123456",
                    RoleId = 1
                },
                new User()
                {
                    UserId = 2,
                    Email = "modo@modo.com",
                    FirstName = "patrick",
                    LastName = "sebastien",
                    Password = "123456",
                    RoleId = 2
                },
                new User()
                {
                    UserId = 3,
                    Email = "user@user.com",
                    FirstName = "jean",
                    LastName = "rigole",
                    Password = "123456",
                    RoleId = 3
                }
            );

            modelBuilder.Entity<Category>().HasData(
                new Category
                {
                    CategoryId = 1,
                    CategoryName = "Catégorie #1"
                }
                );

            modelBuilder.Entity<Event>().HasData(
                new Event
                {
                    EventId = 1,
                    Title = "Concours National Agropole 2020",
                    Description = "Tremplin des jeunes pousses de l'agroalimentaire, le Concours national Agropole, dont Bpifrance Création est partenaire, lance sa 27ème édition ! Porteur de projet ou créateur d'une société de moins de 3 ans, une seule condition pour candidater, le caractère innovant de votre entreprise. Un jury prestigieux se réunira au Sénat fin septembre pour désigner les trois lauréats et attribuer des dotations exceptionnelles.",
                    EventDate = new DateTime(),
                    CategoryId = 1
                },
                new Event
                {
                    EventId = 2,
                    Title = "Lancement du prix Des cafés pour nos régions",
                    Description = "Ce concours, organisé par Heineken France, récompense 5 projets de création, de reprise ou de rénovation de cafés, bars ou restaurants en France grâce à une dotation de 10 000 euros par lauréat, un accompagnement Service en tête et une formation au crowdfunding.",
                    EventDate = new DateTime(),
                    CategoryId = 1
                }
            );
        }
    }
}
