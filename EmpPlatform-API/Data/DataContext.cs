using EmpPlatform_API.Models;
using Microsoft.EntityFrameworkCore;

namespace EmpPlatform_API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Value> Values { get; set; }

        public DbSet<User> Users { get; set; }
        public DbSet<Timesheet> Timesheets { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<WorkType> WorkTypes { get; set; }

    }
}