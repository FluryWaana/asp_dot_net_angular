using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace ASP_MVC_ANGULAR.Models
{
    [Table("category")]
    [DataContract]
    public class Category
    {
        [Column("category_id")]
        [DataMember]
        public int CategoryId { get; set; }

        [Column("category_name", TypeName = "varchar(60)")]
        [DataMember]
        public string CategoryName { get; set; }

        [JsonIgnore]
        public List<Event> Events { get; set; }
    }
}
