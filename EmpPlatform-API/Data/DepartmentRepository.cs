using System.Collections.Generic;
using System.Threading.Tasks;
using EmpPlatform_API.Models;
using Microsoft.EntityFrameworkCore;

namespace EmpPlatform_API.Data
{
    public class DepartmentRepository : IDepartmentRepository
    {

        private readonly DataContext _context;

        public DepartmentRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Department>> GetDepartments()
        {
            var departments = await _context.Departments.ToListAsync();
            return departments;
        }

        // public async Task<IEnumerable<User>> GetUsers()
        //     {
        //         var users = await _context.Users.Include(t => t.Department).ToListAsync();
        //         return users;
        //     }
    }
}