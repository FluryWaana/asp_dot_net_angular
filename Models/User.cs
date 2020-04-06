using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace ASP_MVC_ANGULAR.Models
{
    [Table("user")]
    [JsonObject(MemberSerialization.OptIn)]
    public class User
    {
        [JsonProperty]
        [Column("user_id")]
        public int UserId { get; set; }

        [JsonProperty]
        [Column("user_lastname", TypeName = "varchar(60)")]
        [Required]
        public string LastName { get; set; }

        [JsonProperty]
        [Column("user_firstname", TypeName = "varchar(60)")]
        [Required]
        public string FirstName { get; set; }

        [JsonProperty]
        [Column("user_email", TypeName = "varchar(180)")]
        [Required]
        public string Email { get; set; }

        [Column("user_password")]
        [Required]
        public string Password { get; set; }

        [NotMapped]
        public string PlainPassword { get; set; }

        public ICollection<Participate> Participates { get; set; }

        [Column("role_id")]
        public int RoleId { get; set; }

        [JsonProperty]
        public Role Role { get; set; }
    }
}
