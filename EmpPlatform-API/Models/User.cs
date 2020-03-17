using System;
using System.Collections.Generic;

namespace EmpPlatform_API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Gender { get; set; }
        public DateTime HireDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastActive { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public Department Department { get; set; }
        public int DepartmentId { get; set; }

        public ICollection<Timesheet> Timesheets { get; set; }

    }
}