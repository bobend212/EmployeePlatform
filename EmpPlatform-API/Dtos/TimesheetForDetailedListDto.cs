using System;
using System.Collections.Generic;
using EmpPlatform_API.Models;

namespace EmpPlatform_API.Dtos
{
    public class TimesheetForDetailedListDto
    {
        public int Id { get; set; }
        public int DaysAgoAdded { get; set; }
        public DateTime DatePicker { get; set; }
        public float Time { get; set; }
        public ICollection<User> Users { get; set; }
    }
}