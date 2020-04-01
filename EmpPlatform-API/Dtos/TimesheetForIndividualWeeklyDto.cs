using System;
using System.Collections.Generic;
using EmpPlatform_API.Models;

namespace EmpPlatform_API.Dtos
{
    public class TimesheetForIndividualWeeklyDto
    {
        public int Id { get; set; }
        public int WeekNo { get; set; }
        public DateTime DatePicked { get; set; }
        public int ProjectId { get; set; }
        public string ProjectNumber { get; set; }
        public string ProjectName { get; set; }
        public string SiteName { get; set; }
        public int WorkTypeId { get; set; }
        public string WorkTypeName { get; set; }
        public float Time { get; set; }
        public DateTime DateAdded { get; set; }

    }
}