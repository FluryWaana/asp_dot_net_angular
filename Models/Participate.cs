using System.ComponentModel.DataAnnotations.Schema;

namespace ASP_MVC_ANGULAR.Models
{
    [Table("participate")]
    public class Participate
    {
        [Column("user_id")]
        public int UserId { get; set; }

        public User User { get; set; }

        [Column("event_id")]
        public int EventId { get; set; }

        public Event Event { get; set; }
    }
}
