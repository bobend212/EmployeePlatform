using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmpPlatform_API.Models;
using Microsoft.EntityFrameworkCore;

namespace EmpPlatform_API.Data
{
    public class TimesheetRepository : ITimesheetRepository
    {
        private readonly DataContext _context;

        public TimesheetRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<IEnumerable<Timesheet>> GetTimesheet(int id)
        {
            var timesheets = await _context.Timesheets.Where(x => x.UserId == id).ToListAsync();
            return timesheets;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}