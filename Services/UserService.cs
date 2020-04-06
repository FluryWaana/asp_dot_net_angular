using ASP_MVC_ANGULAR.Models;
using ASP_NET_ANGULAR.Helpers;
using ASP_NET_ANGULAR.Models;
using ASP_NET_ANGULAR.Models.FormRequest;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_ANGULAR.Services
{
    public class UserService : IUserService
    {
        private readonly AppSettings _appSettings;
        private readonly EventContext _context;

        public UserService(IOptions<AppSettings> appSettings, EventContext context)
        {
            _appSettings = appSettings.Value;
            _context = context;
        }

        public AuthenticateToken Authenticate(AuthenticateModel authenticateModel)
        {
            User user = _context.Users.Include(u => u.Role).SingleOrDefault(u => u.Email == authenticateModel.Username);

            if (user == null) return null;

            if (BCrypt.Net.BCrypt.Verify(authenticateModel.Password, user.Password))
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[] {
                    new Claim(ClaimTypes.Name, user.UserId.ToString())
                }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);

                return new AuthenticateToken {
                    User = user,
                    Token = tokenHandler.WriteToken(token) 
                };
            }

            return null;
        }
    }
}
