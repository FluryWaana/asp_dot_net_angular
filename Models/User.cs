using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace ASP_MVC_ANGULAR.Models
{
    [Table("user")]
    public class User
    {
        [Column("user_id")]
        public int UserId { get; set; }

        [Column("user_lastname", TypeName = "varchar(60)")]
        [Required]
        public string LastName { get; set; }

        [Column("user_firstname", TypeName = "varchar(60)")]
        [Required]
        public string FirstName { get; set; }

        [Column("user_email", TypeName = "varchar(180)")]
        [Required]
        public string Email { get; set; }

        [Column("user_password")]
        [Required]
        [JsonIgnore]
        public string Password { get; set; }

        [JsonIgnore]
        public ICollection<Participate> Participates { get; set; }

        [Column("role_id")]
        [JsonIgnore]
        public int RoleId { get; set; }
        public Role Role { get; set; }
    }
}
