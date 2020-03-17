using System;
using System.Collections.Generic;
using EmpPlatform_API.Models;

namespace EmpPlatform_API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Gender { get; set; }
        public DateTime HireDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastActive { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public ICollection<TimesheetForDetailedListDto> Timesheets { get; set; }
    }
}