using System.Collections.Generic;

namespace EmpPlatform_API.Models
{
    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }

        public ICollection<User> Users { get; set; }
        public ICollection<WorkType> WorkTypes { get; set; }
        public ICollection<Project> Projects { get; set; }
    }
}