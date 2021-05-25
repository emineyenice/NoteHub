using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NoteHub.API.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace NoteHub.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly NoteHubDbContext _db;
        public string UserId => User.FindFirstValue(ClaimTypes.NameIdentifier);
        public NotesController(NoteHubDbContext noteHubDbContext)
        {
            _db = noteHubDbContext;
        }

        [HttpGet]
        public async Task<IEnumerable<Note>> GetNotes()
        {
            return await _db.Notes.Where(x => x.ApplicationUserId == UserId).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<Note> GetNote(int id)
        {
            return await _db.Notes.FirstOrDefaultAsync(x => x.ApplicationUserId == UserId && x.Id == id);
        }

        [HttpPost]
        public async Task<ActionResult<Note>> PostNote(NewNoteModel model)
        {
            if (ModelState.IsValid)
            {
                var note = new Note()
                {
                    ApplicationUserId = UserId,
                    Title = model.Title,
                    Content = model.Content
                };
                _db.Notes.Add(note);
                await _db.SaveChangesAsync();
                return CreatedAtAction("GetNote", new { Id = note.Id }, note);
            }
            return BadRequest(ModelState);
        }
    }
}
