using System.Collections.Generic;
using System.Threading.Tasks;
using EmpPlatform_API.Models;

namespace EmpPlatform_API.Data
{
    public interface IDepartmentRepository
    {
        Task<IEnumerable<Department>> GetDepartments();
    }
}