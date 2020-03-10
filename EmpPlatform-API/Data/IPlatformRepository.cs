using System.Collections.Generic;
using System.Threading.Tasks;
using EmpPlatform_API.Models;

namespace EmpPlatform_API.Data
{
    public interface IPlatformRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);

    }
}