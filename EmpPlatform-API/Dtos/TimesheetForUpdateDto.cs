using System;

namespace EmpPlatform_API.Dtos
{
    public class TimesheetForUpdateDto
    {
        public int ProjectId { get; set; }
        public int WorkTypeId { get; set; }
        public DateTime DatePicked { get; set; }
        public float Time { get; set; }
    }
}