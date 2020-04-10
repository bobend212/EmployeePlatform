using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using EmpPlatform_API.Data;
using EmpPlatform_API.Dtos;
using EmpPlatform_API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmpPlatform_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class DepartmentsController : ControllerBase
    {
        private readonly IDepartmentRepository _repo;
        private readonly IMapper _mapper;

        public DepartmentsController(IDepartmentRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetDepartments()
        {
            var depts = await _repo.GetDepartments();
            var deptsToReturn = _mapper.Map<IEnumerable<DepartmentsForListDto>>(depts);
            return Ok(deptsToReturn);
        }


        // [HttpGet]
        // public async Task<IActionResult> GetUsers()
        // {
        //     var users = await _repo.GetUsers();

        //     var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

        //     return Ok(usersToReturn);
        // }

    }
}