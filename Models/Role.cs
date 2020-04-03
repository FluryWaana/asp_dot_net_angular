using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace ASP_MVC_ANGULAR.Models
{
    [Table("role")]
    [DataContract]
    public class Role
    {
        [Column("role_id")]
        [DataMember]
        public int RoleId { get; set; }

        [Column("role_name", TypeName = "varchar(60)")]
        [DataMember]
        public string RoleName { get; set; }

        [JsonIgnore]
        public List<User> Users { get; set; }
    }
}
