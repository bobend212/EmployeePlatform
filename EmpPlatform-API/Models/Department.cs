using System.Collections.Generic;

namespace EmpPlatform_API.Models
{
    public class Department
    {
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public ICollection<User> Users { get; set; }
        public ICollection<Project> Projects { get; set; }
        public ICollection<WorkType> WorkTypes { get; set; }
    }
}