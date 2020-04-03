using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace ASP_MVC_ANGULAR.Models
{
    [Table("event")]
    [DataContract]
    public class Event
    {
        [Column("event_id")]
        [DataMember]
        public int EventId { get; set; }

        [Column("event_title", TypeName = "varchar(180)")]
        [DataMember]
        public string Title { get; set; }

        [Column("event_description")]
        [DataMember]
        public string Description { get; set; }

        [Column("event_date")]
        [DataMember]
        public DateTime EventDate { get; set; }

        [Column("category_id")]
        [DataMember]
        [JsonIgnore]
        public int CategoryId { get; set; }

        public Category Cagegory { get; set; }

        [JsonIgnore]
        public ICollection<Participate> Participates { get; set; }
    }
}
