using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EmpPlatform_API.Models
{
    public class Timesheet
    {
        public int Id { get; set; }
        public DateTime DateAdded { get; set; }
        public DateTime DatePicker { get; set; }
        public float Time { get; set; }

        public User User { get; set; }
        public int UserId { get; set; }
    }
}