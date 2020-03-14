using System;
using System.Collections.Generic;
using EmpPlatform_API.Models;

namespace EmpPlatform_API.Dtos
{
    public class TimesheetForDetailedListDto
    {
        public string ProjectNumber { get; set; }
        public string ProjectName { get; set; }
        public string WorkType { get; set; }
        public float Time { get; set; }
        public DateTime DatePicked { get; set; }
        public DateTime DateAdded { get; set; }
        public int WeekNo { get; set; }
    }
}