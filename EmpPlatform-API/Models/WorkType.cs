using System.Collections.Generic;

namespace EmpPlatform_API.Models
{
    public class WorkType
    {
        public int Id { get; set; }
        public string WT_Name { get; set; }
        public string WT_Number { get; set; }

        public Department Department { get; set; }
        public int DepartmentId { get; set; }

        public ICollection<Timesheet> Timesheets { get; set; }
    }
}