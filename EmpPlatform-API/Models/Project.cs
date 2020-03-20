using System;

namespace EmpPlatform_API.Models
{
    public class Project
    {
        public int ProjectId { get; set; }
        public string ProjectNumber { get; set; }
        public string ProjectName { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsFinished { get; set; } = false;
        public string SiteName { get; set; }
        public Department Department { get; set; }
        public int DepartmentId { get; set; }
    }
}