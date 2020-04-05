﻿// <auto-generated />
using System;
using ASP_MVC_ANGULAR.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ASP_NET_ANGULAR.Migrations
{
    [DbContext(typeof(EventContext))]
    [Migration("20200404120832_InitialMigration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("ASP_MVC_ANGULAR.Models.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("category_id")
                        .HasColumnType("int");

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasColumnName("category_name")
                        .HasColumnType("varchar(60)");

                    b.HasKey("CategoryId");

                    b.ToTable("category");

                    b.HasData(
                        new
                        {
                            CategoryId = 1,
                            CategoryName = "Catégorie #1"
                        });
                });

            modelBuilder.Entity("ASP_MVC_ANGULAR.Models.Event", b =>
                {
                    b.Property<int>("EventId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("event_id")
                        .HasColumnType("int");

                    b.Property<int>("CategoryId")
                        .HasColumnName("category_id")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnName("event_description")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<DateTime>("EventDate")
                        .HasColumnName("event_date")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnName("event_title")
                        .HasColumnType("varchar(180)");

                    b.HasKey("EventId");

                    b.HasIndex("CategoryId");

                    b.ToTable("event");

                    b.HasData(
                        new
                        {
                            EventId = 1,
                            CategoryId = 1,
                            Description = "Tremplin des jeunes pousses de l'agroalimentaire, le Concours national Agropole, dont Bpifrance Création est partenaire, lance sa 27ème édition ! Porteur de projet ou créateur d'une société de moins de 3 ans, une seule condition pour candidater, le caractère innovant de votre entreprise. Un jury prestigieux se réunira au Sénat fin septembre pour désigner les trois lauréats et attribuer des dotations exceptionnelles.",
                            EventDate = new DateTime(2020, 4, 4, 14, 8, 31, 949, DateTimeKind.Local).AddTicks(6776),
                            Title = "Concours National Agropole 2020"
                        },
                        new
                        {
                            EventId = 2,
                            CategoryId = 1,
                            Description = "Ce concours, organisé par Heineken France, récompense 5 projets de création, de reprise ou de rénovation de cafés, bars ou restaurants en France grâce à une dotation de 10 000 euros par lauréat, un accompagnement Service en tête et une formation au crowdfunding.",
                            EventDate = new DateTime(2020, 4, 4, 14, 8, 31, 952, DateTimeKind.Local).AddTicks(2164),
                            Title = "Lancement du prix Des cafés pour nos régions"
                        });
                });

            modelBuilder.Entity("ASP_MVC_ANGULAR.Models.Participate", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnName("user_id")
                        .HasColumnType("int");

                    b.Property<int>("EventId")
                        .HasColumnName("event_id")
                        .HasColumnType("int");

                    b.HasKey("UserId", "EventId");

                    b.HasIndex("EventId");

                    b.ToTable("participate");
                });

            modelBuilder.Entity("ASP_MVC_ANGULAR.Models.Role", b =>
                {
                    b.Property<int>("RoleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("role_id")
                        .HasColumnType("int");

                    b.Property<string>("RoleName")
                        .IsRequired()
                        .HasColumnName("role_name")
                        .HasColumnType("varchar(60)");

                    b.HasKey("RoleId");

                    b.ToTable("role");

                    b.HasData(
                        new
                        {
                            RoleId = 1,
                            RoleName = "administrateur"
                        },
                        new
                        {
                            RoleId = 2,
                            RoleName = "modédateur"
                        },
                        new
                        {
                            RoleId = 3,
                            RoleName = "utilisateur"
                        });
                });

            modelBuilder.Entity("ASP_MVC_ANGULAR.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("user_id")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnName("user_email")
                        .HasColumnType("varchar(180)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnName("user_firstname")
                        .HasColumnType("varchar(60)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnName("user_lastname")
                        .HasColumnType("varchar(60)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnName("user_password")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("RoleId")
                        .HasColumnName("role_id")
                        .HasColumnType("int");

                    b.HasKey("UserId");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("RoleId");

                    b.ToTable("user");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            Email = "admin@admin.com",
                            FirstName = "jean",
                            LastName = "rigole",
                            Password = "$2b$10$5aLx7j4EgP4F27HGh8kaXu/JxyTIIFUulLn3WDmLnI0qr08cVvAoe",
                            RoleId = 1
                        },
                        new
                        {
                            UserId = 2,
                            Email = "modo@modo.com",
                            FirstName = "patrick",
                            LastName = "sebastien",
                            Password = "$2b$10$5aLx7j4EgP4F27HGh8kaXu/JxyTIIFUulLn3WDmLnI0qr08cVvAoe",
                            RoleId = 2
                        },
                        new
                        {
                            UserId = 3,
                            Email = "user@user.com",
                            FirstName = "jean",
                            LastName = "rigole",
                            Password = "$2b$10$5aLx7j4EgP4F27HGh8kaXu/JxyTIIFUulLn3WDmLnI0qr08cVvAoe",
                            RoleId = 3
                        });
                });

            modelBuilder.Entity("ASP_MVC_ANGULAR.Models.Event", b =>
                {
                    b.HasOne("ASP_MVC_ANGULAR.Models.Category", "Category")
                        .WithMany("Events")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ASP_MVC_ANGULAR.Models.Participate", b =>
                {
                    b.HasOne("ASP_MVC_ANGULAR.Models.Event", "Event")
                        .WithMany("Participates")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ASP_MVC_ANGULAR.Models.User", "User")
                        .WithMany("Participates")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ASP_MVC_ANGULAR.Models.User", b =>
                {
                    b.HasOne("ASP_MVC_ANGULAR.Models.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
