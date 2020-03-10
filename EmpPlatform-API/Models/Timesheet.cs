using System;
using System.Collections.Generic;

namespace EmpPlatform_API.Models
{
    public class Timesheet
    {
        public int Id { get; set; }
        public DateTime DateAdded { get; set; }
        public DateTime Date { get; set; }
        public float Time { get; set; }

        public Project Projects { get; set; }
        public int ProjectId { get; set; }

        public WorkType WorkTypes { get; set; }
        public int WorkTypeId { get; set; }

        public User Users { get; set; }
        public int UserId { get; set; }
    }
}