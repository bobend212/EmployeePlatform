using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EmpPlatform_API.Models
{
    public class Timesheet
    {
        public int Id { get; set; }
        public string ProjectNumber { get; set; }
        public string ProjectName { get; set; }
        public string WorkType { get; set; }
        public float Time { get; set; }
        public DateTime DatePicked { get; set; }
        public DateTime DateAdded { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}