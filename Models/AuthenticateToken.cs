using ASP_MVC_ANGULAR.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_NET_ANGULAR.Models
{
    public class AuthenticateToken
    {
        public User User { get; set; }
        public string Token { get; set; }
    }
}
