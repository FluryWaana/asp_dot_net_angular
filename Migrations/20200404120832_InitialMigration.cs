using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP_NET_ANGULAR.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "category",
                columns: table => new
                {
                    category_id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    category_name = table.Column<string>(type: "varchar(60)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_category", x => x.category_id);
                });

            migrationBuilder.CreateTable(
                name: "role",
                columns: table => new
                {
                    role_id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    role_name = table.Column<string>(type: "varchar(60)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_role", x => x.role_id);
                });

            migrationBuilder.CreateTable(
                name: "event",
                columns: table => new
                {
                    event_id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    event_title = table.Column<string>(type: "varchar(180)", nullable: false),
                    event_description = table.Column<string>(nullable: false),
                    event_date = table.Column<DateTime>(nullable: false),
                    category_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_event", x => x.event_id);
                    table.ForeignKey(
                        name: "FK_event_category_category_id",
                        column: x => x.category_id,
                        principalTable: "category",
                        principalColumn: "category_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "user",
                columns: table => new
                {
                    user_id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    user_lastname = table.Column<string>(type: "varchar(60)", nullable: false),
                    user_firstname = table.Column<string>(type: "varchar(60)", nullable: false),
                    user_email = table.Column<string>(type: "varchar(180)", nullable: false),
                    user_password = table.Column<string>(nullable: false),
                    role_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user", x => x.user_id);
                    table.ForeignKey(
                        name: "FK_user_role_role_id",
                        column: x => x.role_id,
                        principalTable: "role",
                        principalColumn: "role_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "participate",
                columns: table => new
                {
                    user_id = table.Column<int>(nullable: false),
                    event_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_participate", x => new { x.user_id, x.event_id });
                    table.ForeignKey(
                        name: "FK_participate_event_event_id",
                        column: x => x.event_id,
                        principalTable: "event",
                        principalColumn: "event_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_participate_user_user_id",
                        column: x => x.user_id,
                        principalTable: "user",
                        principalColumn: "user_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "category",
                columns: new[] { "category_id", "category_name" },
                values: new object[] { 1, "Catégorie #1" });

            migrationBuilder.InsertData(
                table: "role",
                columns: new[] { "role_id", "role_name" },
                values: new object[,]
                {
                    { 1, "administrateur" },
                    { 2, "modédateur" },
                    { 3, "utilisateur" }
                });

            migrationBuilder.InsertData(
                table: "event",
                columns: new[] { "event_id", "category_id", "event_description", "event_date", "event_title" },
                values: new object[,]
                {
                    { 1, 1, "Tremplin des jeunes pousses de l'agroalimentaire, le Concours national Agropole, dont Bpifrance Création est partenaire, lance sa 27ème édition ! Porteur de projet ou créateur d'une société de moins de 3 ans, une seule condition pour candidater, le caractère innovant de votre entreprise. Un jury prestigieux se réunira au Sénat fin septembre pour désigner les trois lauréats et attribuer des dotations exceptionnelles.", new DateTime(2020, 4, 4, 14, 8, 31, 949, DateTimeKind.Local).AddTicks(6776), "Concours National Agropole 2020" },
                    { 2, 1, "Ce concours, organisé par Heineken France, récompense 5 projets de création, de reprise ou de rénovation de cafés, bars ou restaurants en France grâce à une dotation de 10 000 euros par lauréat, un accompagnement Service en tête et une formation au crowdfunding.", new DateTime(2020, 4, 4, 14, 8, 31, 952, DateTimeKind.Local).AddTicks(2164), "Lancement du prix Des cafés pour nos régions" }
                });

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "user_id", "user_email", "user_firstname", "user_lastname", "user_password", "role_id" },
                values: new object[,]
                {
                    { 1, "admin@admin.com", "jean", "rigole", "$2b$10$5aLx7j4EgP4F27HGh8kaXu/JxyTIIFUulLn3WDmLnI0qr08cVvAoe", 1 },
                    { 2, "modo@modo.com", "patrick", "sebastien", "$2b$10$5aLx7j4EgP4F27HGh8kaXu/JxyTIIFUulLn3WDmLnI0qr08cVvAoe", 2 },
                    { 3, "user@user.com", "jean", "rigole", "$2b$10$5aLx7j4EgP4F27HGh8kaXu/JxyTIIFUulLn3WDmLnI0qr08cVvAoe", 3 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_event_category_id",
                table: "event",
                column: "category_id");

            migrationBuilder.CreateIndex(
                name: "IX_participate_event_id",
                table: "participate",
                column: "event_id");

            migrationBuilder.CreateIndex(
                name: "IX_user_user_email",
                table: "user",
                column: "user_email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_user_role_id",
                table: "user",
                column: "role_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "participate");

            migrationBuilder.DropTable(
                name: "event");

            migrationBuilder.DropTable(
                name: "user");

            migrationBuilder.DropTable(
                name: "category");

            migrationBuilder.DropTable(
                name: "role");
        }
    }
}
