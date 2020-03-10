using System;
using System.Collections.Generic;

namespace EmpPlatform_API.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Name { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsFinished { get; set; }
        public string SiteName { get; set; }

        public ICollection<Timesheet> Timesheets { get; set; }
    }
}