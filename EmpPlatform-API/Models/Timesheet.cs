using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EmpPlatform_API.Models
{
    public class Timesheet
    {
        public int Id { get; set; }

        public User User { get; set; }
        public int UserId { get; set; }

        public Project Project { get; set; }
        public int ProjectId { get; set; }

        public WorkType WorkType { get; set; }
        public int WorkTypeId { get; set; }

        public DateTime DateAdded { get; set; }
        public DateTime DatePicked { get; set; }
        public float Time { get; set; }

    }
}