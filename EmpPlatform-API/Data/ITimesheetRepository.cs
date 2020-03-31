using System.Collections.Generic;
using System.Threading.Tasks;
using EmpPlatform_API.Models;

namespace EmpPlatform_API.Data
{
    public interface ITimesheetRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<Timesheet>> GetTimesheet(int id);
        Task<Timesheet> GetTimesheetById(int userId, int timesheetId);

    }
}