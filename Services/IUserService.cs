using ASP_NET_ANGULAR.Models;
using ASP_NET_ANGULAR.Models.FormRequest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_NET_ANGULAR.Services
{
    public interface IUserService
    {
        AuthenticateToken Authenticate(AuthenticateModel authenticateModel);
    }
}
