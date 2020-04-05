using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace ASP_MVC_ANGULAR.Models
{
    [Table("role")]
    public class Role
    {
        [Column("role_id")]
        public int RoleId { get; set; }

        [Column("role_name", TypeName = "varchar(60)")]
        [Required]
        public string RoleName { get; set; }

        [JsonIgnore]
        public List<User> Users { get; set; }
    }
}
