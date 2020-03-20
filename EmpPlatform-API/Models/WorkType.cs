namespace EmpPlatform_API.Models
{
    public class WorkType
    {
        public int WorkTypeId { get; set; }
        public string WorkTypeName { get; set; }
        public string WorkTypeNumber { get; set; }

        public Department Department { get; set; }
        public int DepartmentId { get; set; }
    }
}