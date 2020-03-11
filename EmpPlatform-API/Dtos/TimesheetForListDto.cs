using System;

namespace EmpPlatform_API.Dtos
{
    public class TimesheetForListDto
    {
        public int Id { get; set; }
        public int DaysAgoAdded { get; set; }
        public DateTime DatePicker { get; set; }
        public float Time { get; set; }

    }
}