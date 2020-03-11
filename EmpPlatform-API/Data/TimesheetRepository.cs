using System.Collections.Generic;
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

        public async Task<Timesheet> GetTimesheet(int id)
        {
            var timesheet = await _context.Timesheets.Include(x => x.User).FirstOrDefaultAsync(x => x.Id == id);
            return timesheet;
        }

        public async Task<IEnumerable<Timesheet>> GetTimesheets()
        {
            var timesheets = await _context.Timesheets.Include(x => x.User).ToListAsync();
            return timesheets;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}