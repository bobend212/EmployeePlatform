using System.Collections.Generic;

namespace EmpPlatform_API.Models
{
    public class Department
    {
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public ICollection<User> Users { get; set; }
    }
}