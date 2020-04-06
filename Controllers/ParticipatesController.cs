using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ASP_MVC_ANGULAR.Models;
using Microsoft.AspNetCore.Authorization;

namespace ASP_NET_ANGULAR.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ParticipatesController : ControllerBase
    {
        private readonly EventContext _context;

        public ParticipatesController(EventContext context)
        {
            _context = context;
        }

        // GET: api/Participates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Participate>>> GetParticipates()
        {
            return await _context.Participates.ToListAsync();
        }

        // GET: api/Participates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Participate>> GetParticipate(int id)
        {
            var participate = await _context.Participates.FindAsync(id);

            if (participate == null)
            {
                return NotFound();
            }

            return participate;
        }

        // PUT: api/Participates/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutParticipate(int id, Participate participate)
        {
            if (id != participate.UserId)
            {
                return BadRequest();
            }

            _context.Entry(participate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParticipateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Participates
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Participate>> PostParticipate(Participate participate)
        {
            _context.Participates.Add(participate);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ParticipateExists(participate.UserId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetParticipate", new { id = participate.UserId }, participate);
        }

        // DELETE: api/Participates/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Participate>> DeleteParticipate(int id)
        {
            var participate = await _context.Participates.FindAsync(id);
            if (participate == null)
            {
                return NotFound();
            }

            _context.Participates.Remove(participate);
            await _context.SaveChangesAsync();

            return participate;
        }

        private bool ParticipateExists(int id)
        {
            return _context.Participates.Any(e => e.UserId == id);
        }
    }
}
