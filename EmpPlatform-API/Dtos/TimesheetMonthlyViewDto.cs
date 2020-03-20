using System;

namespace EmpPlatform_API.Dtos
{
    public class TimesheetMonthlyViewDto
    {
        public int WeekNo { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public float TimeSubmitted { get; set; }
        public string Status { get; set; }
    }
}