using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace EmpPlatform_API.Models
{
    public class User : IdentityUser<int>
    {
        public string Gender { get; set; }
        public DateTime HireDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastActive { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public Department Department { get; set; }
        public int DepartmentId { get; set; }

        public virtual ICollection<Timesheet> Timesheets { get; set; }
        public virtual ICollection<UserRole> UserRoles { get; set; }

    }
}