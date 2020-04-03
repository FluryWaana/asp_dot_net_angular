using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace ASP_MVC_ANGULAR.Models
{
    [Table("event")]
    public class Event
    {
        [Column("event_id")]
        public int EventId { get; set; }

        [Column("event_title", TypeName = "varchar(180)")]

        public string Title { get; set; }

        [Column("event_description")]
        public string Description { get; set; }

        [Column("event_date")]
        public DateTime EventDate { get; set; }

        [Column("category_id")]
        [JsonIgnore]
        public int CategoryId { get; set; }

        public Category Cagegory { get; set; }

        [JsonIgnore]
        public ICollection<Participate> Participates { get; set; }
    }
}
